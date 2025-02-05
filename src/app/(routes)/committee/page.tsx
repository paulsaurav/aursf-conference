"use client";
import React from "react";
import committeeData from "@/data/committee.json";

// Define the structure of the JSON data
interface CommitteeMember {
  Name: string;
  Position?: string;
  Department?: string;
  Email?: string;
  Image?: string; 
}

interface CommitteeData {
  ChiefPatron: CommitteeMember;
  Patron: CommitteeMember;
  OrganisingChairperson: CommitteeMember;
  CoPatrons: CommitteeMember[];
  Chairpersons: CommitteeMember[];
  ViceChairpersons: CommitteeMember[];
  OrganizingCommittee: CommitteeMember[];
  ScholarOrganizingCommittee: CommitteeMember[];
  SpecialChairs: CommitteeMember[];
  NationalAdvisoryCommittee: CommitteeMember[];
  InternationalAdvisoryCommittee: CommitteeMember[];
}

// Define Member interface for transformed data
interface Member {
  name: string;
  position?: string;
  department?: string;
  email?: string;
}

const committeeDataTyped: CommitteeData = committeeData as CommitteeData;

const Page = () => {
  const {
    ChiefPatron,
    Patron,
    OrganisingChairperson,
    CoPatrons,
    Chairpersons,
    ViceChairpersons,
    OrganizingCommittee,
    ScholarOrganizingCommittee,
    SpecialChairs,
    NationalAdvisoryCommittee,
    InternationalAdvisoryCommittee,
  } = committeeDataTyped;

  // Transform function to map JSON keys to Member interface
  const transformKeys = (list: CommitteeMember[]): Member[] =>
    list.map((item) => ({
      name: item.Name || "",
      position: item.Position || "",
      department: item.Department || "",
      email: item.Email || "",
    }));

  // Transformed data for each section
  const organizingCommittee = transformKeys(OrganizingCommittee);
  const scholarOrganizingCommittee = transformKeys(ScholarOrganizingCommittee);
  const specialChairs = transformKeys(SpecialChairs);
  const nationalAdvisoryCommittee = transformKeys(NationalAdvisoryCommittee);
  const internationalAdvisoryCommittee = transformKeys(
    InternationalAdvisoryCommittee
  );

  // Helper function to render list cards
  const renderListCards = (list: Member[], columns: string) => (
    <div className={`grid ${columns} gap-8`}>
      {list.map((item, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
          {item.position && (
            <p className="text-sm text-gray-500 mt-2">{item.position}</p>
          )}
          {item.department && (
            <p className="text-sm text-gray-700 mt-1">{item.department}</p>
          )}
          {item.email && (
            <a
              href={`mailto:${item.email}`}
              className="text-sm text-blue-600 underline mt-2 block"
            >
              {item.email}
            </a>
          )}
        </div>
      ))}
    </div>
  );

  // Helper function to render highlighted cards
  const renderHighlightedCard = (
    member: CommitteeMember,
    title: string,
    bgColor: string
  ) => (
    <div
      className={`p-6 rounded-xl shadow-lg text-white flex flex-col items-center ${bgColor}`}
    >
      {member.Image && (
        <img
          src={member.Image}
          alt={member.Name}
          className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
        />
      )}
      <h4 className="text-lg font-semibold uppercase tracking-wide text-gray-100">
        {title}
      </h4>
      <h3 className="text-xl font-bold">{member.Name}</h3>
      <p className="text-sm mt-2">{member.Position}</p>
    </div>
  );

  // Main page layout
  return (
    <div className="w-full bg-gray-50 text-black py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg text-white mb-12 text-center">
          <h1 className="text-5xl font-bold">Organizing and Advisory Committees</h1>
          <p className="mt-4 text-lg">
            Meet the visionary leaders and dedicated teams behind our success!
          </p>
        </div>

        {/* Highlighted Section for Chief Patron, Patron, Organising Chairperson */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {renderHighlightedCard(
            ChiefPatron,
            "Chief Patron",
            "bg-gradient-to-br from-blue-500 to-teal-500"
          )}
          {renderHighlightedCard(
            Patron,
            "Patron",
            "bg-gradient-to-br from-purple-500 to-pink-500"
          )}
          {renderHighlightedCard(
            OrganisingChairperson,
            "Organising Chairperson",
            "bg-gradient-to-br from-green-500 to-emerald-500"
          )}
        </section>

        {/* Co-Patrons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Co-Patrons
          </h2>
          {renderListCards(transformKeys(CoPatrons), "grid-cols-1 md:grid-cols-2")}
        </section>

        {/* Chairpersons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Chairpersons
          </h2>
          {renderListCards(transformKeys(Chairpersons), "grid-cols-1 md:grid-cols-2")}
        </section>

        {/* Vice Chairpersons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Vice Chairpersons
          </h2>
          {renderListCards(transformKeys(ViceChairpersons), "grid-cols-1 md:grid-cols-3")}
        </section>

        {/* Organizing Committee Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Organizing Committee
          </h2>
          {renderListCards(organizingCommittee, "grid-cols-1 md:grid-cols-2")}
        </section>

        {/* Scholar Organizing Committee Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Scholar Organizing Committee
          </h2>
          {renderListCards(scholarOrganizingCommittee, "grid-cols-1 md:grid-cols-3")}
        </section>

        {/* Special Chairs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Special Chairs
          </h2>
          {renderListCards(specialChairs, "grid-cols-1 md:grid-cols-2")}
        </section>

        {/* National Advisory Committee Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            National Advisory Committee
          </h2>
          {renderListCards(nationalAdvisoryCommittee, "grid-cols-1 md:grid-cols-2")}
        </section>

        {/* International Advisory Committee Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            International Advisory Committee
          </h2>
          {renderListCards(
            internationalAdvisoryCommittee,
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        </section>
      </div>
    </div>
  );
};

export default Page;
