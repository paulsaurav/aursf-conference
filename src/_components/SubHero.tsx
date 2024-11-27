"use client";
import React, { useState } from "react";

const SubHero = () => {
  const [isAboutAUExpanded, setAboutAUExpanded] = useState(false);

  return (
    <div className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-3xl font-bold text-black mb-4">About Assam University</h2>
          <div className="overflow-y-auto max-h-[60vh]">
            <p
              className={`text-black leading-relaxed ${
                isAboutAUExpanded ? "mb-4" : "line-clamp-10"
              } text-justify`}
            >
              Assam University, a leading institution of higher education in Northeast India, is
              located in Silchar, Assam. Surrounded by hillocks, tea gardens, and the peaceful,
              lush environment of the Barak Valley region, Assam University provides an ideal
              setting for academic pursuits. Established in 1994 under the Assam (Central)
              University Act of 1989, the institution has met the region&apos;s higher education
              needs. The main campus, situated at Dargakona, approximately 20 kilometers from
              Silchar, Cachar, covers over 600 acres and is known for its picturesque landscape.
              Assam University also has a second campus in Diphu, located in the Karbi Anglong
              district of Assam, covering an area of 90 acres, which was established in 2007. Both
              campuses work collectively to expand the university&apos;s research and educational
              influence throughout the region. Assam University has achieved its core value,
              &ldquo;Pratyayabodhakritirupapattaye&rdquo;, meaning &ldquo;Conviction, Confidence,
              and Creativity,&rdquo; by fostering an environment of knowledge, research, and
              socio-cultural exchange in the state and the country.
            </p>
            {isAboutAUExpanded && (
              <>
                <p className="text-neutral-600 leading-relaxed text-justify mb-4">
                  The academic schools of Assam University are composed of various departments that
                  offer undergraduate, postgraduate, and doctorate programs. The university&apos;s
                  academic structure comprises 16 schools of study, including the School of Social
                  Sciences, School of Humanities, School of Languages, School of Life Sciences,
                  School of Physical Sciences, and School of Environmental Sciences, among others.
                  These schools house over 40 departments, offering courses in subjects ranging from
                  the arts, sciences, technology, and management. The schools emphasize both
                  theoretical and practical learning, encouraging creativity, critical thinking, and
                  a research-oriented mindset. Renowned for its research focus, particularly in the
                  fields of life sciences, environmental sciences, and social sciences, Assam
                  University boasts a distinguished faculty, modern infrastructure, and a commitment
                  to academic excellence. The university&apos;s active participation in community
                  outreach programs contributes to the social and economic development of the
                  region, solidifying its position as a leading institution in Northeast India.
                </p>
                <p className="text-neutral-600 leading-relaxed text-justify">
                  In addition to being a center for study, Assam University serves as a hub for
                  different cultures in this region. Cultural assimilation was seen when the
                  institution organized several festivals, events, and activities. The knowledge hub
                  of the university, the central library, known as Rabindra Library, serves as a
                  rich repository of academic resources and digital services that meet the needs of
                  students and researchers. <br />
                  Diverse programs have been organized to engage students in curricular and
                  extracurricular activities. Activities conducted by the NCC cell, NSS cell, and
                  Gandhi cell are some of them. Apart from these, university have different hobby
                  clubs (Astronomy, Drama, Photography, Film, Green, Nature, App Innovation, Campus
                  Gallery, Quiz &amp; Debate and so on) that conduct different programs within and
                  outside the university to foster knowledge not only in the students&apos; community
                  but also in the general public. The university also conducts different community
                  service programs such as health awareness, women empowerment, and environmental
                  conservation in the nearby areas.
                </p>
              </>
            )}
          </div>
          <button
            onClick={() => setAboutAUExpanded(!isAboutAUExpanded)}
            className="text-blue-500 mt-4"
          >
            {isAboutAUExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Right Column */}
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-3xl font-bold text-black mb-4">
            About Prof. H. S. Srivastva Foundation for Science & Society
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            The foundation has its office at Eldeco Xpress Plaza, Shaheed Path, Lucknow, and its
            R&D centre in Sushant Golf City and Dular Mau, Lucknow. In addition, the foundation has
            an office in New Delhi dedicated to its research journal PMBP. The major objectives of
            the foundation are to facilitate people in need with capacity building, novel research,
            innovations, and technology transfer. The translation of research findings to the
            benefit of the target audience requires consideration of socioeconomic, cultural, and
            environmental determinants of the region and communities, as well as the robustness and
            maintenance systems and support for the implemented technologies. The key focus of our
            R&D centre is to understand the insights of sustainable development and ecological
            restoration by involving stakeholders, communities, and volunteers. <br />
            The foundation works through its secretariat to execute the decisions taken by its
            executive committee based on its rules and regulations and the advice of various expert
            committees and scientific communities. The execution is done by the volunteers,
            part-time experts, and full-time employees associated with the foundation. The
            foundation has the support of youth, academicians, scientists, researchers, and field
            workers. The major share of the conceptualization, planning, and execution of the
            programs is motivated by the voluntarism and commitments of the participating members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
