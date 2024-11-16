"use client";
import React from "react";

export const VenueAndLocation = () => {
  return (
    <div className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-10 gap-12">

        {/* Venue Section - 3 columns out of 10 */}
        <div className="md:col-span-3 p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6">Venue</h2>
          
          {/* Venue Address */}
          <div className="text-gray-800 leading-relaxed mb-6">
            <p>Assam University, Silchar</p>
            <p>Dorgakona, Silchar, Cachar, Assam, India</p>
            <p>Pin: 788011</p>
          </div>
          
          {/* Embedded Google Map */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14420.969627601813!2d92.75233763984035!3d24.69045246126513!3m2!1i1024!2i768!4f13.1!5e0!4m2!3m1!1s0x0:0x0!7e1!8m2!3d24.69045246126513!4d92.75233763984035!5m1!1e3"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border-0"
            ></iframe>
          </div>
        </div>

        {/* Location Info Section - 7 columns out of 10 */}
        <div className="md:col-span-7 p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6">Location</h2>

          <p className="text-gray-800 leading-relaxed mb-4">
            To reach Assam University, the following directions can help you depending upon your starting location:
          </p>

          {/* By Air */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black mb-2">By Air</h3>
            <p className="text-gray-800 leading-relaxed">
              The nearest airport is <strong>Silchar Airport</strong> (also known as Kumbhirgram Airport), which connects major cities like Guwahati, Kolkata, and Imphal. It is approximately 35 kilometers from the university campus. Depending on the traffic conditions, it may take 45-60 minutes to reach the university.
            </p>
          </div>

          {/* By Train */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black mb-2">By Train</h3>
            <p className="text-gray-800 leading-relaxed">
              Silchar is well-connected by railways to major cities like Guwahati, Agartala, and Lumding. The nearest railway station is <strong>Silchar Railway Station</strong>, located approximately 20 kilometers away from the Assam University campus. After arriving at the station, you have the option of taking a taxi or an autorickshaw for a comfortable ride to the campus. The journey typically takes around 30 to 40 minutes, although the exact travel time may vary depending on traffic conditions.
            </p>
          </div>

          {/* By Road */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black mb-2">By Road</h3>
            <p className="text-gray-800 leading-relaxed">
              Silchar is easily accessible from Assam and neighboring states via National Highway 37, with buses and private vehicles being common modes of transport. The Assam University campus is located in Dargakona, about 20 kilometers from the Silchar city center. Local transport options include autorickshaws, cabs, and buses, while university buses also operate for convenience.
            </p>
          </div>

          {/* Additional Information */}
          <div>
            <p className="text-gray-800 leading-relaxed">
              You can plan your journey to Assam University, Silchar, based on your preferred mode of travel. Before starting your trip, it is advisable to verify any updates or changes in transportation schedules, such as flight or train timings.
            </p>
            <p className="text-gray-800 leading-relaxed mt-4">
              For added convenience, the university may provide bus services for attendees if they inform the authorities of their arrival date and time in advance. It is recommended to plan your trip accordingly and allow some extra time in case of any delays.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
