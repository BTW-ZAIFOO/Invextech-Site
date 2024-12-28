import React, { useState } from "react";
import Popup from "./Popup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null,
    position: "",
    gender: "",
    skills: [],
    highestQualification: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileError, setFileError] = useState(""); // State for file error
  const [errors, setErrors] = useState({});
  const [skillsSuggestions, setSkillsSuggestions] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [phone] = useState("");

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
    "Git",
    "TypeScript",
    "Angular",
    "Vue.js",
    "PHP",
    "Swift",
    "Kotlin",
    "Golang",
    "Express.js",
    "Next.js",
    "Sass",
    "Bootstrap",
    "Tailwind CSS",
    "GraphQL",
    "Redux",
    "Web3.js",
    "Blockchain",
    "Firebase",
    "Cloud Computing",
    "Android",
    "iOS",
    "WordPress",
    "Shopify",
    "SEO",
    "SEM",
    "Google Analytics",
    "Digital Marketing",
    "Project Management",
    "UX/UI Design",
    "Wireframing",
    "Figma",
    "Adobe XD",
    "Photoshop",
    "3D Modeling",
    "UI Prototyping",
    "DevOps",
    "Automation",
    "Google Cloud Platform",
    "Big Data",
    "Machine Learning",
    "Artificial Intelligence",
    "Responsive Design",
    "Cross-browser Compatibility",
    "Mobile-first Design",
    "CSS Grid",
    "Flexbox",
    "SVG",
    "Progressive Web Apps",
    "OAuth",
    "JWT Authentication",
    "REST APIs",
    "Lead Generation",
    "B2B Sales",
    "PostgreSQL",
    "MySQL",
    "Testing (Unit, Integration)",
    "Version Control (Git)",
    "Material Design",
    "Flutter",
    "React Native",
    "App Store Optimization",
    "API Integration",
    "Technical SEO",
    "On-page SEO",
    "Off-page SEO",
    "Local SEO",
    "Team Collaboration",
    "Prototyping",
    "User Research",
  ];

  const qualificationOptions = [
    "Matriculation",
    "Intermediate/FSc/A-Levels",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
  ];
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };
  
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
    const file = files[0];

    // Check if a file is selected
    if (file) {
      const fileType = file.type;

      // Valid file types for PDF, DOC, and DOCX
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!validTypes.includes(fileType)) {
        setFileError("Please upload a PDF, DOC, or DOCX file.");
        e.target.value = ""; // Reset the file input
      } else {
        setFileError(""); // Clear error message if file is valid
        setFormData({
          ...formData,
          [name]: file,
        });
      }
    }
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

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData({
          ...formData,
          skills: [...formData.skills, skillInput.trim()],
        });
      }
      setSkillInput("");
      setSkillsSuggestions([]);
      e.preventDefault();
    }
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
      validationErrors.phone =
        "Phone number should only contain numbers, + and - symbols.";
    }

    if (!formData.position) {
      validationErrors.position = "Position is required.";
    }

    if (!formData.skills.length) {
      validationErrors.skills = "Skills are required.";
    }

    if (!formData.highestQualification) {
      validationErrors.highestQualification = "Qualification is required.";
    }

    if (formData.resume && fileError) {
      validationErrors.resume = fileError;
    }

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          "https://hooks.zapier.com/hooks/catch/21068256/28zanvj/",
          {
            method: "POST",
            body: JSON.stringify({
              fullName: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              linkedin: formData.linkedin,
              position: formData.position,
              gender: formData.gender,
              skills: formData.skills.join(", "),
              highestQualification: formData.highestQualification,
              resume: formData.resume ? formData.resume.name : "",
            }),
          }
        );

        if (response.ok) {
          setShowPopup(true);
          setPopupMessage(
            "Congratulations Your Registration with Invextech is Successful! You will get an email shortly. Thank You For Applying.😊🤩"
          );
          setIsSubmitted(true);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            linkedin: "",
            resume: null,
            position: "",
            gender: "",
            skills: [],
            highestQualification: "",
          });
        } else {
          setShowPopup(true);
          setPopupMessage("Something went wrong, please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        setShowPopup(true);
        setPopupMessage("An error occurred, please try again later.");
      }
    } else {
      setErrors(validationErrors);
    }
    
  };

  return (
    <>
      {/* Popup */}
      {showPopup && (
        <Popup message={popupMessage} onClose={() => setShowPopup(false)} />
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
                    {/* Wrapper for border and focus effect */}
                    <div className="w-full rounded-md shadow-md border-2 border-black focus-within:ring-2 focus-within:ring-blue-500">
                      <PhoneInput
                        country={"pk"}
                        value={formData.phone}
                        onChange={handlePhoneChange} // This now references the defined function
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                          disabled: isSubmitted,
                        }}
                        containerClass="flex items-center w-full bg-white"
                        inputClass="w-full border-none outline-none focus:ring-0 text-black"
                        buttonClass="border-none bg-transparent focus:outline-none"
                      />
                    </div>
                    {/* Error message */}
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
                      placeholder="Enter your LinkedIn profile link"
                      disabled={isSubmitted}
                    />
                  </div>
                </div>
                {/* Position */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Position
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                    required
                    disabled={isSubmitted}
                  >
                    <option value="">Select Position</option>
                    {positionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
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
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* Qualification */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Highest Qualification
                  </label>
                  <select
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                    required
                    disabled={isSubmitted}
                  >
                    <option value="">Select Qualification</option>
                    {qualificationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.highestQualification && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.highestQualification}
                    </p>
                  )}
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
                    onKeyDown={handleSkillKeyDown}
                    className="w-full border-gray-950 border-2 rounded-md shadow-md p-2"
                    placeholder="Enter skill or technology"
                    disabled={isSubmitted}
                  />
                  {errors.skills && (
                    <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
                  )}
                  <div>
                    {skillsSuggestions.slice(0, 4).map(
                      (
                        skill // Limit the number of suggestions displayed
                      ) => (
                        <div
                          key={skill}
                          onClick={() => handleSkillClick(skill)}
                          className="cursor-pointer p-2 hover:bg-gray-200"
                        >
                          {skill}
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-3">
                    {formData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-sky-200 text-slate-950 p-2 rounded-full text-sm inline-block mr-2 mb-2 font-medium"
                      >
                        {skill}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => handleSkillDelete(skill)}
                        >
                          &#10005;
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                {/* Resume */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full p-2"
                    disabled={isSubmitted}
                    accept=".pdf, .doc, .docx"
                  />
                </div>
                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-4 p-4 bg-sky-500 text-white font-bold py-3 rounded-md shadow-md hover:bg-sky-600 focus:outline-none"
                    disabled={isSubmitted}
                  >
                    Submit Application
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
