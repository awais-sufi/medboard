"use client";

import { useParams } from "next/navigation";
import Account1 from "@/components/accountpages/account1";
import Account2 from "@/components/accountpages/account2";
import Account3 from "@/components/accountpages/account3";
import Account4 from "@/components/accountpages/account4";
import Account5 from "@/components/accountpages/account5";

export default function AccountSlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug : [];
  const Account = slug.length;

  let content;
  switch (Account) {
    case 1:
      content = <Account1 />;
      break;
    case 2:
      content = <Account2 />;
      break;
    case 3:
      content = <Account3 />;
      break;
    case 4:
      content = <Account4 />;
      break;
    case 5:
      content = <Account5 />;
      break;
    // case 5:
    //   content = <Step6 />;
    //   break;
    // case 6:
    //   content = <Step7 />;
    //   break;
    default:
      content = <p>All steps completed ✅</p>;
  }

  return (
    <div className="p-6">
      {content}
      {Account < 5 && <div className="mt-6"></div>}
    </div>
  );
}
