import React from "react";

const Notices = () => {
  return (
    <div className="w-full bg-neutral-950 text-neutral-200 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Notices</h2>
        <p className="text-neutral-400 text-lg italic mb-6">Soon to be updated...</p>
        <p className="text-neutral-500 text-sm">
          Important updates and announcements will be available here soon.
        </p>
      </div>
    </div>
  );
};

export default Notices;
