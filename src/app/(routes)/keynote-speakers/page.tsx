"use client";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-950 text-neutral-200">
      <div className="text-center max-w-lg p-8 bg-neutral-900 rounded-lg shadow-lg">
       
        <p className="text-neutral-300 text-lg mb-6">
          This page is currently being updated. Please check back soon for more information!
        </p>
        <div className="flex justify-center">
          <span className="animate-pulse text-neutral-500 text-sm">Updating...</span>
        </div>
      </div>
    </div>
  );
};

export default page;
