"use client";

import { useParams } from "next/navigation";
import Job1 from "@/components/post-a-job-pages/job1";
import Job2 from "@/components/post-a-job-pages/job2";
import Job3 from "@/components/post-a-job-pages/job3";
import Job4 from "@/components/post-a-job-pages/job4";
import Job5 from "@/components/post-a-job-pages/job5";

export default function JobSlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug : [];
  const Job = slug.length;

  let content;
  switch (Job) {
    case 1:
      content = <Job1 />;
      break;
    case 2:
      content = <Job2 />;
      break;
    case 3:
      content = <Job3 />;
      break;
    case 4:
      content = <Job4 />;
      break;
    case 5:
      content = <Job5 />;
      break;
    default:
      content = <p>All steps completed ✅</p>;
  }

  return (
    <div>
      {content}
      {Job < 5 && <div></div>}
    </div>
  );
}
