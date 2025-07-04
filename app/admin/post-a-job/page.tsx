import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { layoutConfig } from "@/layoutConfig";
import Link from "next/link";

const config = layoutConfig.admin;

const PostJobPage = () => {
  return (
    <PageLayout headerType={config.header} footerType={config.footer}>
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1px_1fr] gap-6">
          {/* Left: Job Post Form */}
          <div className="w-full space-y-4 pr-0 lg:pr-6">
            <div className="mb-12">
              <h1 className="text-3xl mb-2 font-bold">
                Creating a <span className="text-gareen font-bold">Job</span>{" "}
                post
              </h1>
              <p className="text-gray text-sm">
                Post a free job on Medbord to easily connect with skilled
                professionals and fill your vacancies efficiently.
              </p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Choose a Job Title *
                    <p className="text-xs text-gray-400 m-0">
                      Maximum 5 words allowed
                    </p>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Cardiac tele RN"
                    className="w-full border border-gray-300 text-base rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Choose a profession *
                  </label>
                  <input
                    type="text"
                    placeholder="Choose a profession"
                    className="w-full border border-gray-300 text-base rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Type of position *
                  </label>
                  <select className="w-full text-gray border border-gray-300 rounded px-3 py-2">
                    <option>Choose type of position</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Experience Level *
                  </label>
                  <select className="w-full text-gray border border-gray-300 rounded px-3 py-2">
                    <option>Choose Experience Level</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Shift timing *
                  </label>
                  <select className="w-full text-gray border border-gray-300 rounded px-3 py-2">
                    <option>Choose Shift timing</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Choose a job location *
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="same-address"
                        className="accent-green-600"
                      />
                      <label htmlFor="same-address" className="text-sm">
                        Same as company address
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Choose work location"
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Workplace Type
                  </label>
                  <select className="w-full text-gray border border-gray-300 rounded px-3 py-2">
                    <option>Choose Workplace Type</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Pay for this position
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="pay-undisclosed"
                        className="accent-gray-600"
                      />
                      <label
                        htmlFor="pay-undisclosed"
                        className="text-sm text-gray"
                      >
                        Pay Not disclosed
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Example- $2,300 - $ 3,000 Weekly"
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Sign on Bonus <span className="text-gray">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex - $15,000"
                    className="w-full border border-gray-300 text-base rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center mb-2 gap-2">
                    Start date <span className="text-gray">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    className="w-full border border-gray-300 text-base rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:mt-15 space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="UrgentlyHiring"
                  className="accent-gray-600"
                />
                <label htmlFor="UrgentlyHiring" className="text-sm text-gray">
                  Urgently Hiring
                </label>
              </div>
              <Link
                href="/admin/post-a-job/1"
                className="text-gareen font-bold"
              >
                Continue
              </Link>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block bg-gray-300 w-px mx-auto" />

          {/* Right: Info Panel */}
          <div className="w-full text-sm text-gray-700 space-y-4 pl-0 lg:pl-2">
            <h2 className="text-3xl font-bold leading-snug">
              One <span className="text-gareen">network.</span>
              <br />
              One healthcare
            </h2>
            <p>
              Unlock the Power of the World’s First Healthcare Professional
              Network
            </p>

            <div className="space-y-2 text-gray">
              <span className="text-black font-bold">
                1. Qualified Candidates, Faster
              </span>
              <p>
                Our platform connects you directly with healthcare professionals
                whose skills and experience matches your needs perfectly.
              </p>

              <span className="text-black font-bold">2. Targeted Reach</span>
              <p>
                Focused on the healthcare sector, our network ensures your job
                posting reaches the right audience - doctors, nurses, medical
                researchers, and health administrators.
              </p>

              <span className="text-black font-bold">
                3. Enhanced Credibility
              </span>
              <p>
                Joining our healthcare community boosts your organization’s
                credibility and makes candidates take your job listings more
                seriously.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-black font-bold text-sm">
                Total Healthcare professionals
              </p>
              <p className="text-4xl font-bold text-gareen">763,728</p>
              <p className="text-gray-500">And growing daily</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PostJobPage;
