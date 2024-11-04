import React from "react";

const page = () => {
  return (
    <div className="w-full bg-neutral-950 text-neutral-200 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Submission of Abstract
        </h2>
        <div className="overflow-x-auto">
          <h3>Submission Start Date: 20th Nov 2024</h3>
          <h3>Last Date of Submission: 20th Dec 2024</h3>
          <h3>Declaration of Acceptance of Abstract: 31st Dec 2024</h3>
        </div>
      </div>
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Submission of Paper
        </h2>
        <div className="overflow-x-auto">
          <h3>Full length article submission: 31st January 2025</h3>
        </div>
      </div>
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Program Schedule{" "}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Particular</th>
                <th>Early Bird</th>
                <th>Registration after 20th Nov 2024</th>
                <th>Spot Registration</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>PG Student / Research Scholar</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>From Other Institutes</td>
                <td>2500.00/-</td>
                <td>3000.00/-</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>From AU</td>
                <td>1500.00/-</td>
                <td>2000.00/-</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>4</th>
                <td>Faculty/ Scientist</td>
                <td>2500.00/-</td>
                <td>3000.00/-</td>
              </tr>
              {/* row 5 */}
              <tr>
                <th>5</th>
                <td>Industrial/ Corporate</td>
                <td>3500.00/-</td>
                <td>4000.00/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Account Details</h2>
        <div className="overflow-x-auto">
          <h3>Account Name: </h3>
          <h3>Bank: </h3>
          <h3>Branch: </h3>
          <h3>A/C No.: </h3>
          <h3>IFSC: </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
