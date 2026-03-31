import { SiteSearch } from "@/components/search/SiteSearch";

export function SearchBar() {
  return (
    <div className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <SiteSearch />
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Tente:{" "}
            {["Residencial", "MDF", "Corporativo", "Blog"].map((s, i) => (
              <span key={s}>
                <span className="font-medium">{s}</span>
                {i < 3 && " · "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
