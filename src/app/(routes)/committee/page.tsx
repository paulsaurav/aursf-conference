import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen bg-neutral-950 text-neutral-200 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Tracks Details</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Track</th>
                <th>Theme</th>
                <th>Sub-theme</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Arts</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Humanities</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Science & Technology</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Paper Submission Details</h2>
        <div className="overflow-x-auto">
          
        </div>
      </div>
      <br />
      <div className="max-w-3xl mx-auto p-8 bg-neutral-900 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Review Criteria</h2>
        <div className="overflow-x-auto">
          
        </div>
      </div>
    </div>
  );
};

export default page;
