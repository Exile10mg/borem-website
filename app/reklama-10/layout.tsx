import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bezpłatna Konsultacja - Borem.pl',
  description: 'Profesjonalna strona WWW od 2999 zł. Bezpłatna konsultacja.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Reklama10Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
