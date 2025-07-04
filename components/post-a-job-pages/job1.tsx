import React from "react";
import PageLayout from "../layout/PageLayout";
import { layoutConfig } from "@/layoutConfig";

const config = layoutConfig.admin;

const job1Page = () => {
  return (
    <PageLayout headerType={config.header} footerType={config.footer}>
      <h1>a</h1>
    </PageLayout>
  );
};

export default job1Page;
