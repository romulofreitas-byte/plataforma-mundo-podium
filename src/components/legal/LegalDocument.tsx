import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Footer } from "@/components/layout/Footer";

export type LegalSection = {
  title: string;
  content: React.ReactNode;
};

type LegalDocumentProps = {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalDocument({ title, updatedAt, sections }: LegalDocumentProps) {
  return (
    <>
      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <article className="legal-prose mx-auto max-w-3xl">
          <header className="mb-10 border-b border-line pb-8">
            <h1>{title}</h1>
            <p className="text-sm text-muted">Última atualização: {updatedAt}</p>
          </header>

          <nav aria-label="Índice do documento" className="mb-10 rounded-[14px] border border-line bg-card p-6">
            <p className="mb-3 text-sm font-semibold text-white">Índice</p>
            <ol className="space-y-1 text-sm">
              {sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#secao-${index + 1}`} className="text-muted transition hover:text-gold">
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.title} id={`secao-${index + 1}`}>
                <h2>
                  {index + 1}. {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>

          <footer className="mt-12 border-t border-line pt-8 text-sm text-muted">
            <p>
              Dúvidas? Entre em contato pelo e-mail{" "}
              <Link href="mailto:contato@mundopodium.com.br" className="text-gold hover:underline">
                contato@mundopodium.com.br
              </Link>
              .
            </p>
          </footer>
        </article>
      </SectionWrapper>
      <Footer />
    </>
  );
}
