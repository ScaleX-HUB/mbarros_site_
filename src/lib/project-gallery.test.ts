import { describe, expect, it } from "vitest";
import { PROJECT_GALLERY_ITEMS } from "./project-gallery";

describe("project gallery", () => {
  it("segments corporate work into the approved subcategories", () => {
    const corporateTitles = PROJECT_GALLERY_ITEMS.filter(
      (project) => project.category === "corporativos"
    ).map((project) => project.title);

    expect(corporateTitles).toEqual(
      expect.arrayContaining([
        "Corporativo - Sala de Reunião",
        "Corporativo - Auditório",
        "Corporativo - Recepção",
        "Corporativo - Escritório",
        "Corporativo - Buril Tavares",
      ])
    );
  });

  it("publishes Buril Tavares as its own corporate project", () => {
    const burilProject = PROJECT_GALLERY_ITEMS.find(
      (project) => project.id === "corporativos-buril-tavares"
    );
    const officeProject = PROJECT_GALLERY_ITEMS.find(
      (project) => project.id === "corporativos-escritorio"
    );

    expect(burilProject?.title).toBe("Corporativo - Buril Tavares");
    expect(burilProject?.relatedImages).toHaveLength(4);
    expect(JSON.stringify(burilProject)).toContain("buril-tavares-escritorio-4.jpg");
    expect(JSON.stringify(officeProject)).not.toContain("buril-tavares");
  });

  it("does not publish corporate images marked for removal", () => {
    const serialized = JSON.stringify(PROJECT_GALLERY_ITEMS);

    expect(serialized).not.toContain("casa-design-home-office");
    expect(serialized).not.toContain("casa-design-office");
    expect(serialized).not.toContain("casa-design-moveis-sala-reuniao");
    expect(serialized).not.toContain("casa-design-sala-reuniao");
    expect(serialized).not.toContain("PHOTO-2017-01-30-17-42-15");
    expect(serialized).not.toContain("PHOTO-2017-01-30-17-38-45");
  });
});
