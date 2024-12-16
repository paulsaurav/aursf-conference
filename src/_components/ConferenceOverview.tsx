"use client";
import React, { useState } from "react";

export function ConferenceOverview() {
  const [isAboutAUExpanded, setAboutAUExpanded] = useState(false);
  const [isAboutConfExpanded, setAboutConfExpanded] = useState(false);

  return (
    <div className="w-full bg-neutral-950 text-neutral-200 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid gap-12 max-w-7xl mx-auto">
        {/* Section 1: About Assam University */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="w-full">
            <img
              src="/aus-gate.jpg"
              alt="Assam University"
              className="rounded-lg shadow-lg w-full h-auto max-h-[400px] object-cover"
            />
          </div>
          <div className="p-8 bg-neutral-900 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">About Assam University Research Scholars&apos; Forum</h2>
              <p
                className={`text-neutral-300 leading-relaxed ${
                  isAboutAUExpanded ? "mb-4" : "line-clamp-4"
                } text-justify`}
              >
                he Assam University Research Scholars&apos; Forum (AUSRF), a vanguard for research scholars at Assam University, is privileged to organize the &lsquo;International Young Researchers&apos; Conclave and Rural Science Congress (IYRCRCS-2025)&rsquo;. <br />
                Established in 2009, AUSRF has been at the forefront of championing the rights and interests of research scholars, addressing critical issues such as timely fellowship disbursement, facilitating smooth PhD completion, and fostering a supportive research environment. <br />
              </p>
              <p
                className={`text-neutral-300 leading-relaxed ${
                  isAboutAUExpanded ? "mb-4" : "hidden"
                } text-justify`}
              >
                By providing a platform for dialogue, collaboration, and knowledge sharing, AUSRF empowers research scholars to voice their concerns, exchange ideas, and collectively work towards a more conducive research ecosystem. The organization&apos;s commitment to nurturing young talent and advancing research excellence is evident in its various initiatives. <br />
                AURSF through this prestigious event aims to ignite a spark of innovation, catalyze interdisciplinary collaboration, and contribute to the global discourse on pressing issues. By bringing together brilliant young minds from diverse fields, the conclave seeks to foster a vibrant intellectual community and inspire the next generation of researchers to make significant contributions to society.
              </p>
            </div>
            <button
              className="text-blue-400 hover:underline mt-4"
              onClick={() => setAboutAUExpanded(!isAboutAUExpanded)}
            >
              {isAboutAUExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Section 2: About Conference */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="p-8 bg-neutral-900 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">About Conference</h2>
              <p
                className={`text-neutral-300 leading-relaxed ${
                  isAboutConfExpanded ? "mb-4" : "line-clamp-4"
                } text-justify`}
              >
                The Assam University Research Scholars&apos; Forum (AURSF) in collaboration with
                Internal Quality Assessment Cell (IQAC), Assam University and Prof. H. S. Srivastva
                foundation for science &amp; society is delighted to present the &ldquo;International
                Young Researchers&apos; Conclave and Rural Science Congress (IYRCRCS-2025)&rdquo;
                under the theme &ldquo;Integrating Science Society and Culture for a Sustainable
                Future&rdquo;, hosted by Assam University, Silchar, Assam, India. This prestigious
                international, multidisciplinary conference invites a vibrant community of
                researchers, scholars, students, and faculty members from various fields&mdash;arts,
                humanities, social science, science and technology. The event offers a platform to
                exchange groundbreaking ideas and foster collaboration across disciplines, with a
                focus on how research and innovation can shape a sustainable future.
              </p>
              <p
                className={`text-neutral-300 leading-relaxed ${
                  isAboutConfExpanded ? "mb-4" : "hidden"
                } text-justify`}
              >
                As we look ahead to the next decade, the world faces a series of complex challenges:
                climate change, public health crises, social and economic inequality, and the need
                for technological advancement. These challenges demand holistic solutions, and the
                &lsquo;IYRCRCS-2025&rsquo; is designed to encourage the development of such
                solutions. The conference will highlight the intersection of different fields of
                knowledge to promote interdisciplinary collaboration and innovative problem-solving.
                By bringing together experts and young researchers, the event aims to generate
                forward-thinking ideas that address global concerns in a practical, impactful way.{" "}
                <br />
                Key areas of focus include sustainable resource management, technological
                innovations for environmental conservation, advancements in healthcare and
                biotechnology, legal and regulatory frameworks for sustainability, and the role of
                arts, culture, and humanities in shaping societal attitudes toward sustainable
                living. With sustainability at the core of the discussions, participants will
                explore diverse approaches to critical global issues, examining how humanities and
                science can work together to create a more equitable world. <br />
                A key feature of the conclave is its emphasis on inclusivity and accessibility.
                Young researchers, students, and emerging scholars will be given a platform to share
                their fresh perspectives and cost-effective, scalable solutions. By prioritizing
                affordability and practicality, the event aims to identify real-world solutions that
                can be implemented across different sectors and communities, both locally and
                globally. <br />
                This cross-disciplinary dialogue is not just about academic discourse&mdash;it&apos;s
                about inspiring tangible change. Through collaborative workshops, panel discussions,
                and presentations, participants will form partnerships that transcend traditional
                academic boundaries. The &lsquo;Young Researchers&apos; Conclave&rsquo; is not only
                a celebration of academic achievement and research excellence but also a significant
                step toward achieving sustainable development goals that benefit humanity as a
                whole. <br />
                Join us at Assam University, Silchar, for an opportunity to engage with innovative
                ideas, build meaningful collaborations, and contribute to shaping a future where the
                convergence of knowledge from diverse disciplines leads to a more sustainable and
                just world.
              </p>
            </div>
            <button
              className="text-blue-400 hover:underline mt-4"
              onClick={() => setAboutConfExpanded(!isAboutConfExpanded)}
            >
              {isAboutConfExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="w-full">
            <img
              src="/about-conf.jpeg"
              alt="Conference"
              className="rounded-lg shadow-lg w-full h-auto max-h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
