import React from 'react'

const SubHero = () => {
  return (
    <div className="w-full bg-neutral-950 text-neutral-200 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="p-8 bg-neutral-900 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-white mb-4">
            About Assam University Research Scholars&apos; Forum
          </h2>
          <p className="text-neutral-300 leading-relaxed text-justify">
          The Assam University Research Scholars&apos; Forum (AUSRF), a vanguard for research scholars at Assam University, is privileged to organize the &lsquo;International Young Researchers&apos; Conclave and Rural Science Congress (IYRCRCS-2025)&rsquo;. <br />
          Established in 2009, AUSRF has been at the forefront of championing the rights and interests of research scholars, addressing critical issues such as timely fellowship disbursement, facilitating smooth PhD completion, and fostering a supportive research environment.  <br />
          By providing a platform for dialogue, collaboration, and knowledge sharing, AUSRF empowers research scholars to voice their concerns, exchange ideas, and collectively work towards a more conducive research ecosystem. The organization&apos;s commitment to nurturing young talent and advancing research excellence is evident in its various initiatives. <br />
          AURSF through this prestigious event and aims to ignite a spark of innovation, catalyze interdisciplinary collaboration, and contribute to the global discourse on pressing issues. By bringing together brilliant young minds from diverse fields, the conclave seeks to foster a vibrant intellectual community and inspire the next generation of researchers to make significant contributions to society.
          </p>
        </div>

        {/* Right Column */}
        <div className="p-8 bg-neutral-900 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-white mb-4">
            About Prof. H. S. Srivastva Foundation for Science & Society
          </h2>
          <p className="text-neutral-300 leading-relaxed text-justify">
          The foundation has its office at eldeco xpress plaza, shaheed path, Lucknow and its R&D centre in sushant golf city and dular mau, Lucknow. In addition, the foundation has an office in new Delhi dedicated to its research journal PMBP. He major objectives of foundation are to facilitate people in need with capacity building, novel research, innovations and technology transfer etc. The translation of research findings to the benefit of target audience requires consideration of socioeconomic, cultural and environmental determinants of the region and communities and the robustness as well as maintenance systems and support for the implemented technologies. The key focus of our R&D centre is to understand the insights of sustainable development and ecological restoration by involving stake holders, communities and volunteers. <br />
          The foundation works through its secretariate to execute the decisions taken by its executive committee based on its rules and regulations and the advice of various expert committees and scientific communities. The execution is done by the volunteers, part-time experts and full-time employees associated with the foundation. The foundation has support of youth, academicians, scientists, researchers and field workers. The major share of the conceptualization, planning and execution of the programs are motivated by the voluntarism and commitments of the participating members.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SubHero