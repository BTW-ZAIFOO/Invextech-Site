import React from "react";

const Company = () => {
  const team = [
    {
      name: "Mr. Abu-Bakar Waqas",
      role: "CEO",
      image: "https://media-hosting.imagekit.io//c7f673ad3f6c4e16/Ceo_img.jpeg?Expires=1735212448&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nmRQM-svi2ta52EiTqj7Gl4hCsoYYkbiVZesCqQg~GEGsaCg2njGecvZJnEC2~L77YTPWsWkY26JiMweug9dd6xaAhJee3yEBQfS-YQhWpCmcMc~obp8EMARnnitHLqPp6GymR~FU5nBY4x5hSOLWWTN4JsXk~vpMDKhT8jAHRbfdrhidtQiTqfI~nU1KA9rAh3L~0E76H6HtDVhdgMrgxz1pRJocsFaCw87rAy40UL2gIvKWWpF~OKV2IqF-8IhU4LW1WVE11s5UmDpdZG58FlkhKYbHknCnOVnB2BXXp63764jlHtsRk~P1pq~ixVhWGCnJ2HwrRPVjZnAlas~Sg__",
      bio: "A visionary leader driving innovation and growth at our company.",
      socials: {
        linkedin: "https://www.linkedin.com/in/abubakar-waqas-a25182199",
      },
    },
    {
      name: "Mr. Muhsan Sattar",
      role: "COO",
      image: "https://media-hosting.imagekit.io//c52bcaf32c7e485a/Coo_img.jpeg?Expires=1735212448&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GKgvm3sqndBy3xK0kkFHqXV6ckViDuY0uPOgoYKYfRtOEaGpuamspgrwOskOGY~NPvs7Em4aHqi1BADmnoVAG-Cy07tLe7FxhoUNDhBOCSpnGmTqAUreFlBLq1quUSCaWmdaJkF88T9sO1y98nf1UgnUT56cst4Er2PrJwXe4QEoZNFe4qWRLSpR~lAyYW80-yhSEE-NRXR-gcwufLWDsjl4dAkjS7L-zPigSmFBlScoyrMByUgvRgHW11-MGfEVJqiymNAfXKeBf3JmLuZx5tzCo~sM87NYfzg~iCA~H0V9ByIF8nsr-6oHBm3Odf5QnVHXrNH14HJikwGZYojIvQ__",
      bio: "An operational expert ensuring seamless execution of our strategies.",
      socials: {
        linkedin: "https://www.linkedin.com/in/muhsan-sattar-b7b0801a4",
      },
    },
    {
      name: "Rimsha Maryam",
      role: "HR",
      image: "",
      bio: "Passionate about building a positive and productive workplace culture.",
      socials: {
        linkedin: "https://www.linkedin.com/in/rimsha-maryam-0193b5208",
      },
    },
  ];

  return (
    <div className="max-w-[1120px] mx-auto mt-16 py-10">
      <div>
        <h2 className="text-center text-2xl md:text-4xl font-extralight text-gray-800 mb-6">
          <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
            MANAGEMENT
          </span>
        </h2>
        <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 md:text-xl">
          Know Our Management
        </h3>
        <p className="text-center text-base md:text-xl font-normal text-gray-800 pb-7">
          Meet Our Best And Honoured Management.
        </p>
        <p className="text-center text-base md:text-xl font-normal text-gray-800 pb-7">
          We're a custom software development firm that works with startups,
          SMBs & enterprises to craft disruptive digital products & strategies
          that solve business problems & drive measurable results.
        </p>
        <p className="text-center text-base md:text-xl font-normal text-gray-800 pb-7">
          We nurture entrepreneurial spirit with corporate expertise &
          experience, best in class tools & frameworks, Agile methods & talent
          to create an ecosystem that enables both startups & established
          companies to innovate efficiently with us. We continue to provide
          strategic value in the days, weeks & years after the products launch.
          By offering insight & candid counsel at every stage of the engagement,
          we consider ourselves to be a partner and not just a vendor.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-6"
              />
            ) : (
              <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-500 text-xl">
                No Image
              </div>
            )}
            <h3 className="text-2xl font-bold text-center text-gray-800">
              {member.name}
            </h3>
            <p className="text-center font-semibold text-gray-500 text-lg mb-2">
              {member.role}
            </p>
            <p className="text-center text-gray-600 text-base mb-4">
              {member.bio}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={member.socials.linkedin}
                className="text-blue-500 hover:text-blue-700 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
