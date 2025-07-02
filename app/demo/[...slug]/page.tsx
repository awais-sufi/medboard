"use client";

import { useParams } from "next/navigation";
import Demo1 from "@/components/demopages/demo1";
import Demo2 from "@/components/demopages/demo2";

export default function AccountSlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug : [];
  const Demo = slug.length;

  let content;
  switch (Demo) {
    case 1:
      content = <Demo1 />;
      break;
    case 2:
      content = <Demo2 />;
      break;
    default:
      content = <p>All steps completed ✅</p>;
  }

  return <div className="p-6">{content}</div>;
}
