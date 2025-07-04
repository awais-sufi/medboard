import PageLayout from "@/components/layout/PageLayout";
import { layoutConfig } from "@/layoutConfig";
import Image from "next/image";
import Link from "next/link";

const config = layoutConfig.admin;

export default function HomePage() {
  return (
    <PageLayout headerType={config.header} footerType={config.footer}>
      <div className="min-h-screen bg-white p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-3 space-y-4">
            <div className=" bg-white p-6 py-6 shadow text-gray text-sm">
              <div className="text-center mb-4">
                <div className="inline-block text-left">
                  <Image
                    src="/images/admin/profile.svg"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </div>

                <h2 className="font-bold text-black text-lg">
                  Apollo Hospital
                </h2>

                <p className="text-xs text-gray">Bangalore, IN</p>
              </div>

              <span className="font-semibold text-lg text-black">
                Rakesh Mathew
              </span>
              <p>HR</p>
              <p className="mb-3">Admin assigned</p>
              <hr className="py-2" />
              <p className="mb-3">Email: connect@medbord.com</p>
              <p>Phone: +91 829-987-8715</p>
              <button className="mt-3 bg-black text-base text-white w-full py-2">
                Edit my profile
              </button>
            </div>

            <div className="bg-white p-6 py-6 shadow text-gray text-sm">
              <h3 className="text-xl text-black font-bold mb-2">Contact Us</h3>
              <p className="font-ubuntu mb-4">
                Any questions or concerns, please don’t hesitate to reach out.
                Our availability is <br /> from 9 AM to 6 PM, Monday through{" "}
                <br /> Friday Feel free to contact us.
              </p>
              <p className="mb-3">Email: connect@medbord.com</p>
              <p>Phone: +91 829-987-8715</p>
              <button className="mt-3 bg-gareen text-xl text-white w-full py-2">
                Support Chat
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 shadow ">
                <p className="text-sm text-black font-semibold">
                  Hired Applicant
                </p>
                <p className="text-gareen font-bold text-xl">
                  29{" "}
                  <span className="text-gareen text-xs underline cursor-pointer">
                    Update
                  </span>
                </p>
              </div>
              <div className="bg-white p-6 shadow ">
                <p className="text-sm text-black font-semibold">
                  Interviewed Applicant
                </p>
                <p className="text-gareen font-bold text-xl">
                  29{" "}
                  <span className="text-gareen text-xs underline cursor-pointer">
                    Update
                  </span>
                </p>
              </div>
              <div className="bg-white p-6 shadow ">
                <p className="text-sm text-black font-semibold">
                  Interviewed Applicant
                </p>
                <p className="text-gareen font-bold text-xl">
                  29{" "}
                  <span className="text-gareen text-xs underline cursor-pointer">
                    Update
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 pb-12 shadow font-ubuntu">
              <h3 className="text-xl font-bold mb-2">Create a new job</h3>
              <hr className="my-6" />
              <p className="text-md font-ubuntu text-gray mb-4">
                Maximize the potential of your healthcare job listing by posting
                it on the most extensive professional network. With our
                user-friendly tools, you can quickly and effectively shift
                through the candidates and find the perfect fit for your team.
              </p>
              <Link href="/admin/post-a-job">
                <button className="bg-gareen text-xl text-white px-10 py-2 inline-block text-center cursor-pointer">
                  Post a Job
                </button>
              </Link>
            </div>

            <div className="bg-white p-6 pb-12 shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold mb-2">New Applicants</h3>
                <span className="text-sm font-bold">0</span>
              </div>
              <hr className="my-4" />
              <p className="text-md font-ubuntu text-gray mb-4">
                All new applicants will be displayed here for your convenience,
                post your requirements and make the best of Medbord
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 text-gray font-medium space-y-4">
            <div className="bg-black text-white p-4 shadow text-lg space-y-2">
              <p>Insights</p>
            </div>
            <div className="px-4">
              <div className="flex text-base  mb-4 justify-between items-center">
                <p>Active Premium Jobs</p>
                <span className="font-bold text-black text-lg">0</span>
              </div>
              <hr className="mt-2 border-t border-gray-300" />
            </div>

            <div className="px-4">
              <div className="flex justify-between text-base  mb-4 items-center">
                <p>Total Posted Job</p>
                <span className="font-bold text-black text-lg">0</span>
              </div>
              <hr className="mt-2 border-t border-gray-300" />
            </div>
            <div className="px-4">
              <div className="flex justify-between text-base  mb-4 items-center">
                <p>Total Active Jobs</p>
                <span className="font-bold text-black text-lg">0</span>
              </div>
              <hr className="mt-2 border-t border-gray-300" />
            </div>
            <div className="px-4">
              <div className="flex justify-between text-base  mb-4 items-center">
                <p>Total Application Received</p>
                <span className="font-bold text-black text-lg">0</span>
              </div>
            </div>

            <div className="bg-white p-6 py-10 pb-20 shadow text-sm">
              <h3 className="font-semibold font-ubuntu text-2xl mb-2">
                <span className="text-gareen ">Medbord</span> Mobile App
              </h3>
              <p className="text-gray">
                You can log in to the Medbord Mobile app using your registered
                phone number to manage and post feed
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

//  <div className="flex gap-4 my-4">
//         {/* First Card */}
//         <div className="bg-white w-full max-w-[15rem]-2xl shadow-md p-6">
//           <div className="flex justify-center mb-4">
//             <Image
//               src="/images/admin/profile.svg"
//               alt="logo"
//               width={50}
//               height={50}
//             />
//           </div>
//           <h2 className="text-xl font-semibold">Apollo Hospital</h2>
//           <p className="text-gray-600">Bangalore, IN</p>

//           <div className="mt-4 space-y-1 text-sm">
//             <p className="font-medium">Rakesh Mathew</p>
//             <p className="text-gray-500">HR</p>
//             <p className="text-gray-400">Admin as assigned</p>
//           </div>

//           <hr className="my-4" />

//           <div className="text-left text-sm text-gray-700 space-y-1">
//             <p>
//               <strong>Email:</strong> Rakeshmathew@Apollo.org
//             </p>
//             <p>
//               <strong>Phone:</strong> 879-989-8278
//             </p>
//           </div>

//           <button className="mt-6 bg-black text-white px-6 py-2-md hover:bg-gray-800 transition">
//             Edit my profile
//           </button>
//         </div>

//         {/* Second Card */}
//         <div className="bg-white max-w-[15rem] w-full-2xl shadow-md p-6">
//           <p className="text-lg font-medium text-gray-700">Hired Applicant</p>
//           <p className="text-3xl font-bold text-black my-2">29</p>
//           <Link
//             href="/"
//             className="text-sm text-blue-600 hover:underline font-medium mt-4 inline-block"
//           >
//             Update
//           </Link>
//         </div>
//       </div>

//       <div className="bg-white w-full max-w-[15rem]-2xl shadow-md p-6 flex flex-col justify-between">
//         <div>
//           <p className="text-lg font-medium text-gray-700">Hired Applicant</p>
//           <p className="text-3xl font-bold text-black my-2">29</p>
//         </div>
//         <Link
//           href="/"
//           className="text-sm text-blue-600 hover:underline font-medium mt-4"
//         >
//           Update
//         </Link>
//       </div>
