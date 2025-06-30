import HeaderA from "@/components/layout/headers/HeaderA"
import HeaderB from "@/components/layout/headers/HeaderB"
import HeaderC from "@/components/layout/headers/HeaderC"
import FooterA from "./footers/footerA";
import FooterB from "./footers/footerB";
import FooterC from "./footers/footerC";

const headers = {
  A: <HeaderA />,
  B: <HeaderB />,
  C: <HeaderC />,
  none: null,
};

const footers = {
  A: <FooterA />,
  B: <FooterB />,
  C: <FooterC />,
  none: null,
};

export default function PageLayout({
  headerType = 'A',
  footerType = 'A',
  children,
}: {
  headerType?: keyof typeof headers;
  footerType?: keyof typeof footers;
  children: React.ReactNode;
}) {
  return (
    <>
      {headers[headerType]}
      <main>{children}</main>
      {footers[footerType]}
    </>
  );
}
