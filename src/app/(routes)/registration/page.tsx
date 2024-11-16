"use client";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-white text-black py-8 px-6 md:px-12 lg:px-24">
      {/* Registration Fees Section */}
      <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Registration Fees
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-black border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Particular</th>
                <th className="px-4 py-2 border border-gray-300" colSpan={2}>
                  Early Bird
                </th>
                <th className="px-4 py-2 border border-gray-300" colSpan={2}>
                  Late Registration
                </th>
              </tr>
              <tr>
                <th className="px-4 py-2 border border-gray-300"></th>
                <th className="px-4 py-2 border border-gray-300">Indian Participants</th>
                <th className="px-4 py-2 border border-gray-300">Non-Indian Participants</th>
                <th className="px-4 py-2 border border-gray-300">Indian Participants</th>
                <th className="px-4 py-2 border border-gray-300">Non-Indian Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  PG Student/Research Scholar from Other Institutes
                </td>
                <td className="px-4 py-2 border border-gray-300">3000 INR</td>
                <td className="px-4 py-2 border border-gray-300">60 USD</td>
                <td className="px-4 py-2 border border-gray-300">4000 INR</td>
                <td className="px-4 py-2 border border-gray-300">100 USD</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  PG Student/Research Scholar from Assam University
                </td>
                <td className="px-4 py-2 border border-gray-300">2000 INR</td>
                <td className="px-4 py-2 border border-gray-300">-</td>
                <td className="px-4 py-2 border border-gray-300">3000 INR</td>
                <td className="px-4 py-2 border border-gray-300">-</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Faculty/Scientist</td>
                <td className="px-4 py-2 border border-gray-300">5000 INR</td>
                <td className="px-4 py-2 border border-gray-300">100 USD</td>
                <td className="px-4 py-2 border border-gray-300">6000 INR</td>
                <td className="px-4 py-2 border border-gray-300">150 USD</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Industrial Corporate/NGOs (at max 2 participants)
                </td>
                <td className="px-4 py-2 border border-gray-300">9000 INR</td>
                <td className="px-4 py-2 border border-gray-300">150 USD</td>
                <td className="px-4 py-2 border border-gray-300">11000 INR</td>
                <td className="px-4 py-2 border border-gray-300">200 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Account Details, Form of Registration, Contact Us */}
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Additional Information
        </h2>
        {/* Account Details */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-black mb-4">Account Details</h3>
          <p className="text-gray-800 leading-relaxed text-left">
            <strong>Account Name:</strong> [] <br />
            <strong>Bank:</strong> [] <br />
            <strong>Branch:</strong> [] <br />
            <strong>A/C No.:</strong> [] <br />
            <strong>IFSC:</strong> []
          </p>
        </div>

        {/* Form of Registration */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-black mb-4">Form of Registration</h3>
          <p className="text-gray-800 leading-relaxed text-left">
            Please fill out the registration form using the following link: <br />
            <a
              href="[]"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Form Link
            </a>
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold text-black mb-4">Contact Us</h3>
          <p className="text-gray-800 leading-relaxed text-left">
            <strong>Email:</strong>{" "}
            <a href="mailto:yrs.aursf@gmail.com" className="text-blue-600 hover:underline">
              yrs.aursf@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
