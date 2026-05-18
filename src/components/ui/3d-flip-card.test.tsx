import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardStack3D, type CardImage } from "./3d-flip-card";

const images: CardImage[] = [
  {
    src: "/portrait.webp",
    alt: "Banheiro vertical",
    width: 900,
    height: 1600,
  },
];

describe("CardStack3D", () => {
  it("preserves the full visible image when a gallery card is frontmost", () => {
    render(
      <CardStack3D
        images={images}
        frontIndex={0}
        allowDeselect={false}
        cardWidth={700}
        cardHeight={430}
      />
    );

    expect(screen.getByAltText("Banheiro vertical")).toHaveClass("object-contain");
  });
});
