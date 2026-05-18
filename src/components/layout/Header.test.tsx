import "@/lib/i18n";
import i18n from "@/lib/i18n";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("links the primary partnership navigation to the lojista page", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const lojistaLinks = screen.getAllByRole("link", { name: /seja um lojista/i });

    expect(lojistaLinks.length).toBeGreaterThan(0);
    expect(lojistaLinks.some((link) => link.getAttribute("href") === "/seja-parceiro")).toBe(true);
    expect(screen.queryByRole("link", { name: /^parceiro$/i })).not.toBeInTheDocument();
  });
});
