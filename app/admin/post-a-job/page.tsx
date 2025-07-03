import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { layoutConfig } from "@/layoutConfig";

const config = layoutConfig.admin;

const PostJobPage = () => {
  return (
    <PageLayout headerType={config.header} footerType={config.footer}>
      <div className="flex justify-between items-center text-6xl bg-amber-500">
        THis is post page
      </div>
    </PageLayout>
  );
};

export default PostJobPage;
