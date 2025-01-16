"use client"
import ImportantDatesStrip from "@/_components/ImportantDatesStrip";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-4">
          Important Dates
        </h2>
        <div className="overflow-x-auto">
          <h3>Submission Start Date: 20th Dec 2024</h3>
          <h3>Last Date of Submission: 31st Jan 2025</h3>
          <h3>Declaration of Acceptance of Abstract: 10th Feb 2025</h3>
          <h3>Late Registration Date: 1st Feb 2025 to 20th Feb 2025</h3>
          <h3>Conference Dates: 6th - 8th March 2025</h3>
        </div>
      </div>
      <br />
      <ImportantDatesStrip />
      {/* <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-4">
          Submission of Paper
        </h2>
        <div className="overflow-x-auto">
          <h3>Full length article submission: 31st January 2025</h3>
        </div>
      </div> */}
      <br />
      <div className="max-w-5xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-4">
          Programme Schedule(To be updated soon)
        </h2>

        {/* Day 1 */}
        {/* <h3 className="text-2xl font-bold mt-6 mb-4">DAY 1, 25-02-2025</h3>
        <table className="table-auto border-collapse w-full text-left mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">9:00 AM – 11:00 AM</td>
              <td className="border px-4 py-2">
                Registration of the Participants
              </td>
              <td className="border px-4 py-2">
                Bipin Chandra Pal Seminar Hall
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">10:00 AM – 11:15 AM</td>
              <td className="border px-4 py-2">Inauguration of IYRCRSC</td>
              <td className="border px-4 py-2">
                Bipin Chandra Pal Seminar Hall
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">11:15 AM – 11:45 AM</td>
              <td className="border px-4 py-2">High Tea</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">11:45 AM – 12:45 PM</td>
              <td className="border px-4 py-2">Plenary Talk</td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
        <p className="font-semibold mb-4">Lunch (12:45 PM – 2:00 PM)</p>

        <table className="table-auto border-collapse w-full text-left mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Technical Session 1</th>
              <th className="border px-4 py-2">Technical Session 2</th>
              <th className="border px-4 py-2">Technical Session 3</th>
              <th className="border px-4 py-2">Technical Session 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">2:30 PM–3:00 PM</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3:00 PM–4:30 PM</td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4:30 PM–6:00 PM</td>
              <td colSpan={4} className="border px-4 py-2">
                Tea and Poster Presentation
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">6:00 PM–8:00 PM</td>
              <td colSpan={4} className="border px-4 py-2">
                Cultural Programme
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">8:00 PM–9:30 PM</td>
              <td colSpan={4} className="border px-4 py-2">
                Dinner
              </td>
            </tr>
          </tbody>
        </table>

        {/* Day 2 */}
        {/* <h3 className="text-2xl font-bold mt-6 mb-4">DAY 2, 26-02-2025</h3>
        <table className="table-auto border-collapse w-full text-left mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Technical Session 1</th>
              <th className="border px-4 py-2">Technical Session 2</th>
              <th className="border px-4 py-2">Technical Session 3</th>
              <th className="border px-4 py-2">Technical Session 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">9:30 AM–10:00 AM</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">10:00 AM–11:30 AM</td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">11:30 AM–12:00 PM</td>
              <td colSpan={4} className="border px-4 py-2">
                Tea and Poster Presentation
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">12:00 PM–1:30 PM</td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
            </tr>
          </tbody>
        </table>
        <p className="font-semibold mb-4">Lunch (1:30 PM – 2:30 PM)</p>
        <table className="table-auto border-collapse w-full text-left mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Technical Session 9</th>
              <th className="border px-4 py-2">Technical Session 10</th>
              <th className="border px-4 py-2">Technical Session 11</th>
              <th className="border px-4 py-2">Technical Session 12</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">2:30 PM–3:00 PM</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3:00 PM-4:30 PM</td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4:30 PM-6:00 PM</td>
              <td colSpan={4} className="border px-4 py-2">
                Tea and Poster Presentation
              </td>
            </tr>
            <tr>
            <td className="border px-4 py-2">6:00 PM-8:00 PM</td>
              <td colSpan={4} className="border px-4 py-2">
              Cultural Programme
              </td>
            </tr>
            <tr>
            <td className="border px-4 py-2">8:00 PM-9:30 PM</td>
              <td colSpan={4} className="border px-4 py-2">
              Dinner
              </td>
            </tr>
          </tbody>
        </table> */}

        {/* Day 3 */}
        {/* <h3 className="text-2xl font-bold mt-6 mb-4">DAY 3, 27-02-2025</h3>
        <table className="table-auto border-collapse w-full text-left mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Technical Session 1</th>
              <th className="border px-4 py-2">Technical Session 2</th>
              <th className="border px-4 py-2">Technical Session 3</th>
              <th className="border px-4 py-2">Technical Session 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">9:30 AM–10:00 AM</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
              <td className="border px-4 py-2">Keynote Address</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">10:00 AM–11:30 AM</td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
              <td className="border px-4 py-2">
                Talk by Registered participants (9 Nos.)
              </td>
            </tr>
            <tr>
            <td className="border px-4 py-2">11:30 AM-12:00 PM</td>
              <td colSpan={4} className="border px-4 py-2">
              Tea and Poster presentation
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Technical Session 5</td>
              <td className="border px-4 py-2">Technical Session 6</td>
              <td className="border px-4 py-2">Technical Session 7</td>
              <td className="border px-4 py-2">Technical Session 8</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">12:00 PM-1:30 PM</td>
              <td className="border px-4 py-2">Talk by Registered participants (9 Nos.)</td>
              <td className="border px-4 py-2">Talk by Registered participants (9 Nos.)</td>
              <td className="border px-4 py-2">Talk by Registered participants (9 Nos.)</td>
              <td className="border px-4 py-2">Talk by Registered participants (9 Nos.)</td>
            </tr>
          </tbody>
        </table>
        <p className="font-semibold">
          Lunch (1:30 PM – 2:30 PM) <br />
          Valedictory Session (2:30 PM onwards)
        </p> */} 
      </div>
    </div>
  );
};

export default page;
