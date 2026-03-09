export type CookieConsentPreferences = {
  version: 1;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "mbarros_cookie_consent";
const COOKIE_KEY = "mbarros_cc";
const OPEN_EVENT = "cookie-consent-open";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 year

function isValid(value: unknown): value is CookieConsentPreferences {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<CookieConsentPreferences>;
  return (
    v.version === 1 &&
    v.essential === true &&
    typeof v.analytics === "boolean" &&
    typeof v.marketing === "boolean" &&
    typeof v.updatedAt === "string"
  );
}

function parseCookie(): CookieConsentPreferences | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_KEY}=`));

  if (!raw) return null;
  const value = decodeURIComponent(raw.slice(COOKIE_KEY.length + 1));

  // format: v1|a0|m1
  const parts = value.split("|");
  if (parts.length < 3) return null;
  if (parts[0] !== "v1") return null;

  const analytics = parts.find((p) => p.startsWith("a"));
  const marketing = parts.find((p) => p.startsWith("m"));
  if (!analytics || !marketing) return null;

  const a = analytics === "a1";
  const m = marketing === "m1";

  return {
    version: 1,
    essential: true,
    analytics: a,
    marketing: m,
    updatedAt: new Date().toISOString(),
  };
}

function writeCookie(prefs: CookieConsentPreferences) {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(`v1|a${prefs.analytics ? 1 : 0}|m${prefs.marketing ? 1 : 0}`);
  document.cookie = `${COOKIE_KEY}=${value}; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
}

function deleteCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_KEY}=; Max-Age=0; Path=/; SameSite=Lax`;
}

export function getCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as unknown;
      if (isValid(parsed)) return parsed;
    }
  } catch {
    // ignore
  }

  const fromCookie = parseCookie();
  if (fromCookie) {
    setCookieConsent(fromCookie);
    return fromCookie;
  }

  return null;
}

export function setCookieConsent(prefs: CookieConsentPreferences) {
  if (typeof window === "undefined") return;

  const normalized: CookieConsentPreferences = {
    version: 1,
    essential: true,
    analytics: Boolean(prefs.analytics),
    marketing: Boolean(prefs.marketing),
    updatedAt: prefs.updatedAt || new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  } catch {
    // ignore
  }

  writeCookie(normalized);
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: normalized }));
}

export function clearCookieConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  deleteCookie();
  window.dispatchEvent(new CustomEvent("cookie-consent-cleared"));
}

export function requestCookieConsentReview() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export function onCookieConsentOpen(listener: () => void) {
  const handler = () => listener();
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

export function acceptAllCookies() {
  setCookieConsent({
    version: 1,
    essential: true,
    analytics: true,
    marketing: true,
    updatedAt: new Date().toISOString(),
  });
}

export function rejectOptionalCookies() {
  setCookieConsent({
    version: 1,
    essential: true,
    analytics: false,
    marketing: false,
    updatedAt: new Date().toISOString(),
  });
}

export function onCookieConsentChange(listener: (prefs: CookieConsentPreferences) => void) {
  const handler = (e: Event) => {
    const ce = e as CustomEvent;
    if (isValid(ce.detail)) listener(ce.detail);
  };

  window.addEventListener("cookie-consent-updated", handler);
  return () => window.removeEventListener("cookie-consent-updated", handler);
}
