import "@/lib/i18n";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SejaParceiro from "./SejaParceiro";

describe("SejaParceiro", () => {
  it("presents the approved lojista page content in one flow", () => {
    render(
      <MemoryRouter>
        <SejaParceiro />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /seja um lojista/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/diferença de icms/i)).toBeInTheDocument();
    expect(screen.getByText(/sem pagamento de royalties/i)).toBeInTheDocument();
    expect(screen.getByText(/treinamento completo/i)).toBeInTheDocument();
    expect(screen.getByText(/tour na indústria/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /matriz em pernambuco/i })
    ).toBeInTheDocument();
    expect(screen.getByTitle(/mapa da mbarros/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /falar no whatsapp/i })
    ).toBeInTheDocument();
  });
});
