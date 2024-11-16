import React from 'react';

const SubHero = () => {
  return (
    <div className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-black mb-4">
            About Assam University Research Scholars&apos; Forum
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            The Assam University Research Scholars&apos; Forum (AUSRF), a vanguard for research scholars at Assam University, is privileged to organize the &lsquo;International Young Researchers&apos; Conclave and Rural Science Congress (IYRCRCS-2025)&rsquo;. <br />
            Established in 2009, AUSRF has been at the forefront of championing the rights and interests of research scholars, addressing critical issues such as timely fellowship disbursement, facilitating smooth PhD completion, and fostering a supportive research environment. <br />
            By providing a platform for dialogue, collaboration, and knowledge sharing, AUSRF empowers research scholars to voice their concerns, exchange ideas, and collectively work towards a more conducive research ecosystem. The organization&apos;s commitment to nurturing young talent and advancing research excellence is evident in its various initiatives. <br />
            AURSF through this prestigious event aims to ignite a spark of innovation, catalyze interdisciplinary collaboration, and contribute to the global discourse on pressing issues. By bringing together brilliant young minds from diverse fields, the conclave seeks to foster a vibrant intellectual community and inspire the next generation of researchers to make significant contributions to society.
          </p>
        </div>

        {/* Right Column */}
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-black mb-4">
            About Prof. H. S. Srivastva Foundation for Science & Society
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            The foundation has its office at Eldeco Xpress Plaza, Shaheed Path, Lucknow, and its R&D centre in Sushant Golf City and Dular Mau, Lucknow. In addition, the foundation has an office in New Delhi dedicated to its research journal PMBP. The major objectives of the foundation are to facilitate people in need with capacity building, novel research, innovations, and technology transfer. The translation of research findings to the benefit of the target audience requires consideration of socioeconomic, cultural, and environmental determinants of the region and communities, as well as the robustness and maintenance systems and support for the implemented technologies. The key focus of our R&D centre is to understand the insights of sustainable development and ecological restoration by involving stakeholders, communities, and volunteers. <br />
            The foundation works through its secretariat to execute the decisions taken by its executive committee based on its rules and regulations and the advice of various expert committees and scientific communities. The execution is done by the volunteers, part-time experts, and full-time employees associated with the foundation. The foundation has the support of youth, academicians, scientists, researchers, and field workers. The major share of the conceptualization, planning, and execution of the programs is motivated by the voluntarism and commitments of the participating members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
