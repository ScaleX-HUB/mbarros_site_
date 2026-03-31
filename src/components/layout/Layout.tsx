import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { ScrollRulerProgress } from "@/components/ui/scroll-ruler-progress";
import CookieConsentBanner from "@/components/layout/CookieConsentBanner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRulerProgress />
      <CookieConsentBanner />
    </div>
  );
};

export default Layout;
