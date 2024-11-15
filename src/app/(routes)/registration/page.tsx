"use client";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-neutral-950 text-neutral-200 py-8 px-6 md:px-12 lg:px-24">
      {/* Registration Fees Section */}
      <div className="max-w-7xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Registration Fees</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-neutral-200 border-collapse border border-neutral-700">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="px-4 py-2 border border-neutral-700">Particular</th>
                <th className="px-4 py-2 border border-neutral-700" colSpan={2}>
                  Early Bird
                </th>
                <th className="px-4 py-2 border border-neutral-700" colSpan={2}>
                  Late Registration
                </th>
              </tr>
              <tr>
                <th className="px-4 py-2 border border-neutral-700"></th>
                <th className="px-4 py-2 border border-neutral-700">Indian Participants</th>
                <th className="px-4 py-2 border border-neutral-700">Non-Indian Participants</th>
                <th className="px-4 py-2 border border-neutral-700">Indian Participants</th>
                <th className="px-4 py-2 border border-neutral-700">Non-Indian Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-neutral-700">
                  PG Student/Research Scholar from Other Institutes
                </td>
                <td className="px-4 py-2 border border-neutral-700">3000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">60 USD</td>
                <td className="px-4 py-2 border border-neutral-700">4000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">100 USD</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-neutral-700">
                  PG Student/Research Scholar from Assam University
                </td>
                <td className="px-4 py-2 border border-neutral-700">2000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">-</td>
                <td className="px-4 py-2 border border-neutral-700">3000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">-</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-neutral-700">Faculty/Scientist</td>
                <td className="px-4 py-2 border border-neutral-700">5000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">100 USD</td>
                <td className="px-4 py-2 border border-neutral-700">6000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">150 USD</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-neutral-700">
                  Industrial Corporate/NGOs (at max 2 participants)
                </td>
                <td className="px-4 py-2 border border-neutral-700">9000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">150 USD</td>
                <td className="px-4 py-2 border border-neutral-700">11000 INR</td>
                <td className="px-4 py-2 border border-neutral-700">200 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Account Details, Form of Registration, Contact Us */}
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Additional Information</h2>
        {/* Account Details */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Account Details</h3>
          <p className="text-neutral-300 leading-relaxed text-left">
            <strong>Account Name:</strong> [] <br />
            <strong>Bank:</strong> [] <br />
            <strong>Branch:</strong> [] <br />
            <strong>A/C No.:</strong> [] <br />
            <strong>IFSC:</strong> []
          </p>
        </div>

        {/* Form of Registration */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Form of Registration</h3>
          <p className="text-neutral-300 leading-relaxed text-left">
            Please fill out the registration form using the following link: <br />
            <a
              href="[]"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Form Link
            </a>
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p className="text-neutral-300 leading-relaxed text-left">
            <strong>Email:</strong>{" "}
            <a href="mailto:yrs.aursf@gmail.com" className="text-blue-400 hover:underline">
              yrs.aursf@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
