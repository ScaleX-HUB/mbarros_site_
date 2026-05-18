import { describe, expect, it } from "vitest";
import { getSearchSuggestions, resolveSearchDestination } from "./search";

describe("search", () => {
  it("surfaces the lojista page instead of the old parceiro route", () => {
    const [suggestion] = getSearchSuggestions("lojista", 1);

    expect(suggestion).toMatchObject({
      title: "Seja um Lojista",
      path: "/seja-parceiro",
    });
    expect(resolveSearchDestination("lojista")).toBe("/seja-parceiro");
  });
});
