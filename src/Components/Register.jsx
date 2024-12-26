import React, { useState } from "react";

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

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileError, setFileError] = useState(""); // State for file error
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
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Vue.js",
    "SASS",
    "Webpack",
    "Babel",
    "JQuery",
    "AJAX",
    "Responsive Design",
    "Cross-browser Compatibility",
    "Mobile-first Design",
    "CSS Grid",
    "Flexbox",
    "SVG",
    "Canvas",
    "Progressive Web Apps",
    "Service Workers",
    "SEO for Frontend",
    "Figma",
    "Sketch",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "PHP",
    "Java",
    "Ruby on Rails",
    "Python",
    "Go",
    "C#",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "REST APIs",
    "GraphQL",
    "OAuth",
    "JWT Authentication",
    "Microservices Architecture",
    "WebSocket",
    "Docker",
    "Kubernetes",
    "AWS Lambda",
    "Azure Functions",
    "Serverless",
    "CI/CD",
    "Jenkins",
    "Node.js",
    "React.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "AWS",
    "Git",
    "Docker",
    "CI/CD",
    "GraphQL",
    "TypeScript",
    "Jest",
    "Redux",
    "Web APIs",
    "Algorithms & Data Structures",
    "Design Patterns",
    "System Design",
    "Testing (Unit, Integration)",
    "Continuous Integration",
    "Version Control (Git)",
    "Agile Methodologies",
    "DevOps",
    "Cloud Platforms (AWS, GCP, Azure)",
    "Docker",
    "Kubernetes",
    "Linux",
    "Networking Protocols",
    "Microservices",
    "Concurrency",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "JWT Authentication",
    "GraphQL",
    "Redux",
    "REST APIs",
    "Docker",
    "Git",
    "Postman",
    "Jest",
    "Sales Strategy",
    "Client Relations",
    "Market Research",
    "Lead Generation",
    "Negotiation",
    "CRM Tools",
    "Salesforce",
    "Business Analysis",
    "Revenue Forecasting",
    "B2B Sales",
    "Partnership Development",
    "Presentation Skills",
    "Project Management",
    "Networking",
    "Communication Skills",
    "PHP",
    "WordPress",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "REST API",
    "WooCommerce",
    "SEO",
    "Elementor",
    "Theme Development",
    "Plugin Development",
    "WP-CLI",
    "Git",
    "Bootstrap",
    "Tailwind CSS",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "CorelDRAW",
    "Sketch",
    "Figma",
    "Typography",
    "UI/UX Design",
    "Logo Design",
    "Branding",
    "Print Design",
    "Packaging Design",
    "Color Theory",
    "Wireframing",
    "Prototyping",
    "Motion Graphics",
    "After Effects",
    "Lead Generation",
    "B2B Lead Generation",
    "CRM Software",
    "LinkedIn Marketing",
    "Cold Calling",
    "Email Marketing",
    "SEO",
    "Google Ads",
    "Market Research",
    "Conversion Rate Optimization",
    "Lead Scoring",
    "Sales Funnel Optimization",
    "Salesforce",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Figma",
    "Sketch",
    "InVision",
    "Adobe XD",
    "UX/UI Design",
    "Usability Testing",
    "Interaction Design",
    "Responsive Design",
    "User Flows",
    "Persona Development",
    "Agile",
    "Design Systems",
    "Information Architecture",
    "Project Management",
    "Agile",
    "Scrum",
    "Kanban",
    "Jira",
    "Trello",
    "Asana",
    "Risk Management",
    "Budget Management",
    "Time Management",
    "Stakeholder Management",
    "Team Collaboration",
    "Communication Skills",
    "Leadership",
    "Resource Allocation",
    "Process Improvement",
    "Android",
    "iOS",
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Xcode",
    "Android Studio",
    "Firebase",
    "App Store Optimization",
    "API Integration",
    "UX/UI Design",
    "MVVM",
    "Object-Oriented Programming",
    "JUnit",
    "Test-Driven Development",
    "Material Design",
    "Figma",
    "SEO Strategy",
    "Google Analytics",
    "Keyword Research",
    "Backlink Building",
    "Technical SEO",
    "On-page SEO",
    "Off-page SEO",
    "Local SEO",
    "SEO Tools (SEMrush, Ahrefs, Moz)",
    "Google Search Console",
    "Content Marketing",
    "Link Building",
    "SEO Audits",
    "Meta Tags",
    "Conversion Optimization",
  ];

  const qualificationOptions = [
    "Matriculation",
    "Intermediate/FSc/A-Levels",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
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
    const file = files[0];
    
    // Check if a file is selected
    if (file) {
      const fileType = file.type;
      
      // Valid file types for PDF, DOC, and DOCX
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

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
      // Form submission logic here
      setShowModal(true);
      setModalMessage("Registration with Invextech is Successful!");
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
    
      // Set a timeout to close the modal and refresh the page
      setTimeout(() => {
        setShowModal(false); // Close the modal
        window.location.reload(); // Refresh the page
      }, 4000); // 4000ms = 4 seconds
    } else {
      setErrors(validationErrors);
    }    
  }

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
