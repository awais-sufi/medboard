import PageLayout from '@/components/layout/PageLayout';
import { layoutConfig } from '@/layoutConfig';

const config = layoutConfig.home;

export default function HomePage() {
  return (
    <PageLayout headerType={config.header} footerType={config.footer}>
      <div>
      </div>
    </PageLayout>
  );
}
