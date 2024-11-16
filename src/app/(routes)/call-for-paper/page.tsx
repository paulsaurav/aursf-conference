"use client";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-white text-black py-8 px-6 md:px-12 lg:px-24">
      {/* Tracks Details Section */}
      <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Tracks Details</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-black border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Track</th>
                <th className="px-4 py-2 border border-gray-300">Theme</th>
                <th className="px-4 py-2 border border-gray-300">Sub-theme</th>
              </tr>
            </thead>
            <tbody>
              {/* ARTS */}
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={4}>
                  Arts
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Language, Identity, and Global Perspectives
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Globalization, Language Evolution, and Cultural Identity <br />
                  - The Role of Language in Bridging Cultural Perspectives
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Multilingualism and Cross-Cultural Communication
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Cross-Language Translation: Challenges and Opportunities <br />
                  - Bridging Cultures Through Language and Translation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Arts and Society in the Digital Age
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Artistic Expressions of Society and Identity <br />
                  - Digital Innovation and Its Impact on Visual and Performing Arts
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Tradition, Modernity, and Artistic Expression
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Intersections of Tradition and Modernity in Artistic Practice <br />
                  - The Role of Arts in Reflecting and Shaping Public Discourse
                </td>
              </tr>

              {/* HUMANITIES */}
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={4}>
                  Humanities and Social Sciences
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Social Systems, Policy, Law, and Inclusive Governance
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Transforming Social Systems: The Role of Policy and Law <br />
                  - Societal Challenges and Community-Led Initiatives <br />
                  - Power Dynamics, Justice, and Governance in Modern Societies <br />
                  - Engaging Communities for Inclusive Growth <br />
                  - Gender Equity in Governance and Policy-Making <br />
                  - Addressing Gender-Based Violence and Societal Transformation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Heritage, History, and Education in a Global Context
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Historical Narratives and Their Impact on Contemporary Society <br />
                  - Educational Innovations for a Changing World <br />
                  - Heritage and Identity in a Globalized Context <br />
                  - Integrating Indigenous Knowledge and Educational Systems
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Economic and Business Trends in Global Markets
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Emerging Business Trends in a Global Market <br />
                  - Hospitality and Tourism: Balancing Growth with Cultural Sensitivity <br />
                  - Evolving Market Dynamics and Consumer Behavior <br />
                  - Entrepreneurship and Innovation in Developing Economies
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Community, Culture, and Innovation in Social Sciences
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Engaging Communities for Inclusive Growth <br />
                  - Heritage and Identity in a Globalized Context <br />
                  - Societal Challenges and Community-Led Initiatives <br />
                  - Entrepreneurship and Innovation in Developing Economies
                </td>
              </tr>

              {/* SCIENCE AND TECHNOLOGY */}
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={4}>
                  Science and Technology
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Frontiers of Life Sciences – Innovations for Health, Agriculture, and Biodiversity
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Precision Medicine Revolution: Genomics and Proteomics on the Cutting Edge <br />
                  - Disease Modelling and Drug Discovery: Bioinformatics as the New Frontier <br />
                  - Harnessing Microbial Power: Innovation for Health and Industrial Transformation
                  <br />
                  - Engineering Life: Biotechnological Breakthroughs in Bio-production <br />
                  - Biodiversity at Risk: Strategies for Conservation and Ecosystem Health <br />
                  - Adapting to Change: Climate Resilience in Natural Systems <br />
                  - Smart Agriculture for Food Security: The Role of Precision Farming <br />
                  - Next-Gen Pharmaceuticals: Innovations in Drug Development and Delivery
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  The Language of the Universe: From Mathematical Models to Signals and Smart Systems
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Mathematics and Physics at the Frontier: Modelling the Mysteries of Nature <br />
                  - From Big Data to Big Ideas: Analytics and Problem Solving in Science <br />
                  - Bridging Distances: Innovation in Communication Technologies <br />
                  - Stargazing to Solutions: Observational Astronomy’s Newest Insights <br />
                  - Astrophysical Wonders: Deciphering Phenomena from Dust to Supernovae <br />
                  - Life in Motion: Biophysics from Molecular Structures to Medical Insights <br />
                  - Nano Horizons: Transforming Energy and Medicine with Nanotechnology <br />
                  - Energy Unbound: Pioneering Battery Science for a Greener Future
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Chemistry and Earth Science – Building a Sustainable World from Molecules to
                  Mountains
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - Chemistry in Action: Innovations Driving Practical Solutions <br />
                  - Earth’s Secrets Revealed: Understanding Processes that Shape Our Planet <br />
                  - Materials of Tomorrow: Advances Transforming Industry and Technology <br />
                  - Environmental Chemistry: Analyzing and Protecting Our Ecosystem
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Intelligent Systems and Future Cities – AI, Smart Tech, and Digital Resilience
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  - AI for Good: Machine Learning Transforming Industry and Society <br />
                  - Data Science at Work: Insights Shaping Modern Business and Economy <br />
                  - Securing the Digital Realm: Cybersecurity and Privacy in a Connected World <br />
                  - Smart Cities and Beyond: Intelligent Technologies for Urban Transformation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Publication Details */}
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Publication Details</h2>
        <p className="text-gray-800 leading-relaxed">
          Papers selected from the Oral / Poster presentations will be published in Scopus / Web of
          Science / ABDC / UGC-care listed journals.
        </p>
      </div>

      {/* Paper Submission Details */}
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Paper Submission Details</h2>
        <p className="text-gray-800 leading-relaxed text-left">
          1. Only original and unpublished work is eligible for publication. <br />
          2. The full-length articles must be in .docx, .doc, or in latex format as per respective
          journals requirements. <br />
          3. The reference must be as per respective journals format.
        </p>
      </div>

      {/* Review Criteria */}
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Review Criteria</h2>
        <p className="text-gray-800 leading-relaxed text-left">
          After sending the manuscript to the respective journals, the review process will be
          done as per respective journals review criteria.
        </p>
      </div>
    </div>
  );
};

export default page;
