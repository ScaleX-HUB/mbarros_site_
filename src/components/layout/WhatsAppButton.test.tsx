import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WhatsAppButton from "./WhatsAppButton";

describe("WhatsAppButton", () => {
  it("uses a generic MBarros message without legacy White Label copy", () => {
    render(<WhatsAppButton />);

    const link = screen.getByRole("link", {
      name: /fale conosco pelo whatsapp/i,
    });

    const href = link.getAttribute("href") ?? "";

    expect(decodeURIComponent(href)).toContain("Gostaria de saber mais sobre a MBarros");
    expect(decodeURIComponent(href)).not.toContain("White Label");
  });
});
