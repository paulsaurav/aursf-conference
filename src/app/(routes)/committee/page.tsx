"use client";
import React from "react";
import data from "@/data/data.json";

interface Member {
  name: string;
  department: string;
  email?: string;
  position?: string; 
}

const Page = () => {
  const { 
    organizingCommittee, 
    scholarSecretaries, 
    scholarCoordinators, 
    specialChairs, 
    technicalChairs 
  } = data;

  const renderTwoColumnCardView = (list: Member[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {list.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-neutral-800 rounded-lg shadow border border-neutral-700"
        >
          {item.position && (
            <p className="text-sm text-neutral-400">{item.position}</p>
          )}
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-neutral-300">{item.department}</p>
          {item.email && (
            <a
              href={`mailto:${item.email}`}
              className="text-sm text-blue-400 underline"
            >
              {item.email}
            </a>
          )}
        </div>
      ))}
    </div>
  );

  const renderThreeColumnCardView = (list: Member[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-neutral-800 rounded-lg shadow border border-neutral-700"
        >
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-neutral-300">{item.department}</p>
          {item.email && (
            <a
              href={`mailto:${item.email}`}
              className="text-sm text-blue-400 underline"
            >
              {item.email}
            </a>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-neutral-950 text-neutral-200 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Organizing and Advisory Committee
        </h2>
        {renderTwoColumnCardView(organizingCommittee)}

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 text-center">
          Scholar Organizing Secretaries
        </h2>
        {renderThreeColumnCardView(scholarSecretaries)}

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 text-center">
          Scholar Organizing Coordinators
        </h2>
        {renderThreeColumnCardView(scholarCoordinators)}

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 text-center">
          Special Chairs
        </h2>
        {renderTwoColumnCardView(specialChairs)}

        <h2 className="text-2xl font-bold text-white mt-12 mb-6 text-center">
          Technical Chairs
        </h2>
        {renderThreeColumnCardView(technicalChairs)}
      </div>
    </div>
  );
};

export default Page;
