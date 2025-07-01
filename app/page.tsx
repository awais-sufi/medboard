import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/section/Hero";
import Hero2 from "@/components/section/Hero2";
import Hire from "@/components/section/Hire";
import Testimoneals from "@/components/section/Testimoneals";
import { layoutConfig } from "@/layoutConfig";

const config = layoutConfig.home;

export default function HomePage() {
  return (
    <PageLayout headerType={config.header} footerType={config.footer}>
      <Hero />
      <Hero2 />
      <Hire />
      <Testimoneals />
    </PageLayout>
  );
}
