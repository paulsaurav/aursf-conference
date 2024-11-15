import React from "react";

const page = () => {
  return (
    <div className="w-full   bg-neutral-950 text-neutral-200 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Submission of Abstract
        </h2>
        <div className="overflow-x-auto">
          <h3>Submission Start Date: 20th Nov 2024</h3>
          <h3>Last Date of Submission: 20th Dec 2024</h3>
          <h3>Declaration of Acceptance of Abstract: 31st Dec 2024</h3>
        </div>
      </div>
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Submission of Paper
        </h2>
        <div className="overflow-x-auto">
          <h3>Full length article submission: 31st January 2025</h3>
        </div>
      </div>
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Program Schedule{" "}
        </h2>
      </div>
    </div>
  );
};

export default page;
