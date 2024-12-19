import React from 'react'

const page = () => {
  return (
    <div className="w-full bg-white text-black py-8 px-6 md:px-12 lg:px-24">
      {/* Registration Fees Section */}
      <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <p>We are excited to offer tailored sponsorship packages for organizations looking to showcase their brand and products at our event. Each package
        comes with exclusive benefits designed to maximize your visibility and engagement.</p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-black border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Package</th>
                <th className="px-4 py-2 border border-gray-300" >
                  Amout(INR)
                </th>
                <th className="px-4 py-2 border border-gray-300" >
                Exhibition Space
                </th>
                <th className="px-4 py-2 border border-gray-300">Logo visibility</th>
                <th className="px-4 py-2 border border-gray-300">Social Media &amp; Website Spotlight</th>
                <th className="px-4 py-2 border border-gray-300">Acknowledgement</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Silver
                </td>
                <td className="px-4 py-2 border border-gray-300">25,000</td>
                <td className="px-4 py-2 border border-gray-300">Standard(10 feet x 10 feet)</td>
                <td className="px-4 py-2 border border-gray-300">Event materials &amp; digital platforms</td>
                <td className="px-4 py-2 border border-gray-300">-</td>
                <td className="px-4 py-2 border border-gray-300">Mention during the event&apos;s opening and closing sessions</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Gold
                </td>
                <td className="px-4 py-2 border border-gray-300">50,000</td>
                <td className="px-4 py-2 border border-gray-300">Standard(15 feet x 15 feet)</td>
                <td className="px-4 py-2 border border-gray-300">event banners, brochures, &amp; digital content</td>
                <td className="px-4 py-2 border border-gray-300">Featured in our social media promotions</td>
                <td className="px-4 py-2 border border-gray-300">Acknowledgment during key sessions</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Platinum
                </td>
                <td className="px-4 py-2 border border-gray-300">1,00,000</td>
                <td className="px-4 py-2 border border-gray-300">Standard(20 feet x 20 feet)</td>
                <td className="px-4 py-2 border border-gray-300">All event materials, including stage backdrops &amp; event souvenirs</td>
                <td className="px-4 py-2 border border-gray-300">Dedicated posts and logo placement on the event website</td>
                <td className="px-4 py-2 border border-gray-300">Invitations to exclusive networking sessions with key attendees</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p className='text-center'>Extra stalls at a resonable cost for food, product display and innovations.</p>
          <table className="table-auto w-full text-left text-black border-collapse border border-gray-300">
            <thead>
            <tr>
                <th className="px-4 py-2 border border-gray-300">Sl. No</th>
                <th className="px-4 py-2 border border-gray-300" >
                  Stall Size
                </th>
                <th className="px-4 py-2 border border-gray-300" >
                Amount
                </th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td className="px-4 py-2 border border-gray-300">1.</td>
                <td className="px-4 py-2 border border-gray-300">Standard (10 feet X 10 feet)</td>
                <td className="px-4 py-2 border border-gray-300">3000.00/-</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">1.</td>
                <td className="px-4 py-2 border border-gray-300">Standard(15 feet x 15 feet)</td>
                <td className="px-4 py-2 border border-gray-300">6000.00/-</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">1.</td>
                <td className="px-4 py-2 border border-gray-300">Standard(20 feet x 20 feet)</td>
                <td className="px-4 py-2 border border-gray-300">10000.00/-</td>
              </tr>
            </tbody>
          </table>
          <p>Assam University Scholars/students will be provided space/stall free of cost for innovative display and art exhibition for sale</p>
        </div>
      </div>
      </div>
  )
}

export default page