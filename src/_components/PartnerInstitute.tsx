import React from 'react'
import Image from "next/image";

const PartnerInstitute = () => {
  return (
    <div className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Partnership institute</h2>
            <div className="flex justify-center space-x-8">
              <Image src="/nits.png" alt="sponsor1" width={400} height={200} />
            </div>
          </div>
        </div>
  )
}

export default PartnerInstitute