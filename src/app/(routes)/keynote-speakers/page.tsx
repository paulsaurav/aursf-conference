"use client";
import React from "react";
import speakersData from "@/data/speakers.json";

// Define the structure of the JSON data
interface Speaker {
  name: string;
  title?: string;
  affiliation?: string;
  email?: string;
  picture: string;
}

interface SpeakersData {
  "Keynote Speakers": Speaker[];
  "Plenary Speakers": Speaker[];
  "Invited Speakers": Speaker[];
}

const speakersDataTyped: SpeakersData = speakersData as SpeakersData;

// Helper function to render speaker cards
const renderSpeakerCards = (list: Speaker[], columns: string) => (
  <div className={`grid ${columns} gap-8`}>
    {list.map((speaker, index) => (
      <div
        key={index}
        className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center"
      >
        <img
          src={speaker.picture}
          alt={speaker.name}
          className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
        />
        <h3 className="text-xl font-bold text-gray-800">{speaker.name}</h3>
        {speaker.title && (
          <p className="text-sm text-gray-500 mt-2">{speaker.title}</p>
        )}
        {speaker.affiliation && (
          <p className="text-sm text-gray-700 mt-1">{speaker.affiliation}</p>
        )}
        {speaker.email && (
          <a
            href={`mailto:${speaker.email}`}
            className="text-sm text-blue-600 underline mt-2 block"
          >
            {speaker.email}
          </a>
        )}
      </div>
    ))}
  </div>
);

// Helper function to render a section with colored headings
const renderSpeakerSection = (
  title: string,
  list: Speaker[],
  columns: string,
  color: string
) => (
  <section className="mb-12">
    <h2
      className={`text-3xl font-semibold text-white mb-6 text-center py-3 rounded-lg ${color}`}
    >
      {title}
    </h2>
    {renderSpeakerCards(list, columns)}
  </section>
);

const Page = () => {
  return (
    <div className="w-full bg-gray-50 text-black py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg text-white mb-12 text-center">
          <h1 className="text-5xl font-bold">Meet Our Esteemed Speakers</h1>
          <p className="mt-4 text-lg">
            Get to know the distinguished professionals gracing our event.
          </p>
        </div>

        {/* Speakers Sections */}
        {renderSpeakerSection(
          "Keynote Speakers",
          speakersDataTyped["Keynote Speakers"],
          "grid-cols-1 md:grid-cols-2",
          "bg-gradient-to-r from-blue-500 to-teal-500"
        )}

        {renderSpeakerSection(
          "Plenary Speakers",
          speakersDataTyped["Plenary Speakers"],
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          "bg-gradient-to-r from-purple-500 to-pink-500"
        )}

        {renderSpeakerSection(
          "Invited Speakers",
          speakersDataTyped["Invited Speakers"],
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          "bg-gradient-to-r from-green-500 to-emerald-500"
        )}
      </div>
    </div>
  );
};

export default Page;
