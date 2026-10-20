import Term from '@/components/Term';
import { findTerms } from '@/lib/glossary';

// Text from data (a project's description or features) with its jargon marked: the terms in [allowed], each only
// the first time it appears among the texts sharing [seen].
export default function TermText({
  text,
  allowed,
  seen,
  dark = false,
}: {
  text: string;
  allowed: readonly string[];
  seen: Set<string>;
  dark?: boolean;
}) {
  return (
    <>
      {findTerms(text, allowed, seen).map((piece, i) =>
        typeof piece === 'string' ? (
          piece
        ) : (
          <Term key={i} id={piece.id} dark={dark}>
            {piece.text}
          </Term>
        ),
      )}
    </>
  );
}
