import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { glossaryTerms } from '../content/glossary';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryPage() {
  const presentLetters = new Set(glossaryTerms.map((t) => t.letter));

  return (
    <>
      <section className="bg-black py-24" aria-labelledby="glossary-headline">
        <Container>
          <div className="text-center">
            <span className="label-tag text-muted mb-4 block">Glossary</span>
            <h1 id="glossary-headline" className="section-headline text-neige mb-4">
              Dental AI terminology explained
            </h1>
            <p className="text-neige/60 max-w-lg mx-auto">
              A plain-language reference for dental professionals navigating the AI landscape.
            </p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          {/* A-Z nav */}
          <div className="flex flex-wrap gap-1 mb-12 justify-center">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-colors ${
                  presentLetters.has(letter)
                    ? 'bg-black text-neige hover:bg-black-soft'
                    : 'bg-border text-muted cursor-not-allowed'
                }`}
                aria-disabled={!presentLetters.has(letter)}
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Terms grouped by letter */}
          {alphabet.filter((l) => presentLetters.has(l)).map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-10">
              <h2 className="text-3xl font-black text-black mb-4 border-b border-border pb-2">
                {letter}
              </h2>
              <div className="space-y-4">
                {glossaryTerms
                  .filter((t) => t.letter === letter)
                  .map((term) => (
                    <AnimatedSection key={term.term}>
                      <div className="card-white">
                        <h3 className="text-base font-bold text-black mb-1">{term.term}</h3>
                        <p className="text-sm text-body leading-relaxed">{term.definition}</p>
                      </div>
                    </AnimatedSection>
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
