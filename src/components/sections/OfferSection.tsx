import { site } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { IconLine } from "@/components/icons/IconLine";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const pagamentos = ["Pix", "Cartão", "Boleto"];

export function OfferSection() {
  return (
    <SectionWrapper warm id="oferta">
      <RevealOnScroll className="text-center">
        <HighlightHeadline
          text="A casa tá aberta."
          highlight="aberta"
          className="text-3xl sm:text-4xl"
        />
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto mt-10 max-w-lg">
        <Card accent className="text-center">
          <p className="text-4xl font-extrabold text-gold">
            {site.precoMensal}
            <span className="text-lg font-medium text-muted">/mês</span>
          </p>
          {site.precoAncora && (
            <p className="mt-1 text-sm text-muted-2">{site.precoAncora}</p>
          )}

          <ul className="mt-8 space-y-3 text-left">
            {site.ofertaInclusos.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconLine name="check" size={18} className="mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CtaButton size="lg" className="w-full">
              Entrar na Plataforma
            </CtaButton>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            {pagamentos.map((p) => (
              <span
                key={p}
                className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted"
              >
                {p}
              </span>
            ))}
          </div>

          {site.cancelamentoLivre && (
            <p className="mt-4 text-xs text-muted-2">Cancele quando quiser.</p>
          )}
        </Card>
      </RevealOnScroll>

      {site.escassez.ativo && site.escassez.texto && (
        <RevealOnScroll className="mt-6 text-center">
          <p className="text-sm font-semibold text-gold">{site.escassez.texto}</p>
        </RevealOnScroll>
      )}
    </SectionWrapper>
  );
}
