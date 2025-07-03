import PageLayout from "@/components/layout/PageLayout";
import { layoutConfig } from "@/layoutConfig";

const config = layoutConfig.admin;

export default function HomePage() {
  return (
    <PageLayout headerType={config.header} footerType={config.footer}>
      <div className="flex justify-between items-center text-6xl bg-amber-500">
        HI
      </div>
    </PageLayout>
  );
}
