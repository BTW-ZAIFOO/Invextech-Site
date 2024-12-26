import React, { useState } from "react";

function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null,
    picture: null,
    cnic: null,
    position: "",
    gender: "",
    skills: [],
    highestQualification: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [skillsSuggestions, setSkillsSuggestions] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const positionOptions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Business Development Officer (BDO)",
    "WordPress Developer",
    "Graphic Designer",
    "Lead Generation Specialist",
    "UI/UX Designer",
    "Project Manager",
    "Mobile App Developer",
    "SEO (Search Engine Optimization)",
  ];

  const skillsOptions = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "TypeScript",
    "Angular",
    "Vue.js",
    "PHP",
    "Ruby on Rails",
    "Swift",
    "Kotlin",
    "Golang",
    "Django",
    "Flask",
    "Ruby",
    "Scala",
    "Perl",
    "Rust",
    "Laravel",
    "Express.js",
    "Next.js",
    "Sass",
    "Bootstrap",
    "Tailwind CSS",
    "GraphQL",
    "Apollo",
    "Jest",
    "Redux",
    "Vuex",
    "Web3.js",
    "Blockchain",
    "Firebase",
    "Cloud Computing",
    "MATLAB",
    "Android",
    "iOS",
    "WordPress",
    "Shopify",
    "SEO",
    "SEM",
    "Google Analytics",
    "Digital Marketing",
    "Content Marketing",
    "Agile",
    "Scrum",
    "Project Management",
    "UX/UI Design",
    "Wireframing",
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Zeplin",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "3D Modeling",
    "Maya",
    "Blender",
    "Cinema 4D",
    "UI Prototyping",
    "Video Editing",
    "VFX",
    "Game Development",
    "AR/VR Development",
    "Chatbots",
    "DevOps",
    "Automation",
    "Penetration Testing",
    "Ethical Hacking",
    "Cybersecurity",
    "Network Security",
    "ITIL",
    "VMware",
    "Azure",
    "Google Cloud Platform",
    "Salesforce",
    "SAP",
    "Oracle",
    "Big Data",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Natural Language Processing",
    "Robotic Process Automation",
    "Quantum Computing",
    "IoT",
    "Edge Computing",
    "5G",
  ];  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      setSkillInput(value);
      const filteredSuggestions = skillsOptions.filter((skill) =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setSkillsSuggestions(filteredSuggestions);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSkillClick = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });
    }
    setSkillInput("");
    setSkillsSuggestions([]);
  };

  const handleSkillDelete = (skillToDelete) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToDelete),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.fullName) {
      validationErrors.fullName = "Full Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      validationErrors.fullName = "Name should contain only letters.";
    } else if (formData.fullName[0] !== formData.fullName[0].toUpperCase()) {
      validationErrors.fullName = "First letter of name should be capital.";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      validationErrors.email = "Email should contain @ symbol.";
    }

    if (!formData.phone) {
      validationErrors.phone = "Phone Number is required.";
    } else if (!/^[\d+\-]+$/.test(formData.phone)) {
      validationErrors.phone = "Phone number should only contain numbers, + and - symbols.";
    }

    if (!formData.position) {
      validationErrors.position = "Position is required.";
    }

    if (formData.skills.length === 0) {
      validationErrors.skills = "Skills/Technologies are required.";
    }

    if (!formData.highestQualification) {
      validationErrors.highestQualification = "Highest Qualification is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      linkedin: formData.linkedin,
      resume: formData.resume,
      picture: formData.picture,
      cnic: formData.cnic,
      position: formData.position,
      gender: formData.gender,
      skills: formData.skills,
      highestQualification: formData.highestQualification,
    };

    try {
      const response = await fetch(
        "https://674ed4cabb559617b26ce69c.mockapi.io/Invextech-Data"
      );
      const data = await response.json();
      const existingUser = data.find(
        (user) => user.email === formData.email || user.phone === formData.phone
      );

      if (existingUser) {
        setModalMessage("You are already registered with Invextech.");
      } else {
        const registerResponse = await fetch(
          "https://674ed4cabb559617b26ce69c.mockapi.io/Invextech-Data",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (registerResponse.ok) {
          setModalMessage(
            "Congratulations, you are registered with Invextech."
          );
        } else {
          setModalMessage("Something went wrong. Please try again.");
        }
      }

      setShowModal(true);
      setIsSubmitted(true);

      setTimeout(() => {
        setShowModal(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("Something went wrong. Please try again.");
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 4000);
    }
  };

  return (
    <>
      {/* Notification Modal */}
      {showModal && (
        <div className="fixed top-4 right-4 z-50 p-4 max-w-sm w-full bg-sky-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform scale-100 opacity-100">
          <div className="flex justify-between items-center">
            <p className="text-gray-800 font-medium text-lg">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1120px] mx-auto mt-6 py-10 pb-32">
        <div className="p-6 my-8">
          <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-6">
            <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
              REGISTRATION FORM
            </span>
          </h2>
          <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 md:text-3xl">
            Work With Us
          </h3>
          <p className="text-center text-base md:text-xl font-normal text-gray-800">
            To apply for a job at Invextech, please fill out the form below. We
            will review your application and get back to you as soon as
            possible.
          </p>
        </div>
        <div>
          <div className="max-w-[900px] mx-auto mt-10 pb-10 bg-white p-8 rounded-md shadow-lg">
            <div className="max-w-[560px] mx-auto mt-10 pb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Job Application Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitted}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                      placeholder="Enter your email address"
                      required
                      disabled={isSubmitted}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                      placeholder="Enter your phone number"
                      required
                      disabled={isSubmitted}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                      placeholder="Enter LinkedIn profile URL"
                      required
                      disabled={isSubmitted}
                    />
                    {errors.linkedin && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.linkedin}
                      </p>
                    )}
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Position Applying For
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                      required
                      disabled={isSubmitted}
                    >
                      <option value="" disabled>
                        Select Position
                      </option>
                      {positionOptions.map((position) => (
                        <option key={position} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.position}
                      </p>
                    )}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                      required
                      disabled={isSubmitted}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.gender}
                      </p>
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Skills/Technologies
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={skillInput}
                    onChange={handleChange}
                    className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                    placeholder="List your skills and technologies"
                    disabled={isSubmitted}
                  />
                  {skillsSuggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 rounded-md shadow-md mt-2 max-h-40 overflow-y-auto z-10">
                      {skillsSuggestions.map((skill) => (
                        <li
                          key={skill}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                          onClick={() => handleSkillClick(skill)}
                        >
                          {skill}
                          <button
                            className="ml-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSkillDelete(skill);
                            }}
                          >
                            &times;
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap mt-2">
                    {formData.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center mr-2 mb-2"
                      >
                        {skill}
                        <button
                          className="ml-2 text-red-500 hover:text-red-700"
                          onClick={() => handleSkillDelete(skill)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                  {errors.skills && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.skills}
                    </p>
                  )}
                </div>

                {/* Highest Qualification */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Highest Qualification
                  </label>
                  <input
                    type="text"
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                    placeholder="Enter your highest qualification"
                    required
                    disabled={isSubmitted}
                  />
                  {errors.highestQualification && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.highestQualification}
                    </p>
                  )}
                </div>

                {/* File Upload Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Upload CV/Resume
                    </label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      className="w-full text-gray-600"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      disabled={isSubmitted}
                    />
                    {formData.resume && (
                      <span className="text-gray-500 text-sm mt-2 block">
                        {formData.resume.name}
                      </span>
                    )}
                    {errors.resume && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.resume}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-6 py-3 mt-6 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? "Submitting..." : "Submit Your Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerForm;