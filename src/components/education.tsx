import React from "react";

interface EducationItem {
  degree: string;
  major: string;
  school: string;
  duration: string;
  location: string;
  description?: string[];
  courses: string[];
  logo?: string; // Add this line
}

const EducationCard: React.FC<{ education: EducationItem }> = ({
  education,
}) => (
  <div className="mb-8 flex flex-col md:flex-row gap-4">
    <div className="w-full md:w-1/3">
      <div className="flex items-center gap-4 mb-2">
        {education.logo && (
          <img
            src={education.logo}
            alt={`${education.school} logo`}
            className="w-12 h-12 object-contain"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-foreground">
            {education.degree}
          </h3>
          <h4 className="text-lg text-foreground-mid">{education.major}</h4>
          <p className="text-foreground-mid">{education.school}</p>
          <p className="text-sm text-foreground-mid">{education.duration}</p>
          <p className="text-sm text-foreground-mid">{education.location}</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-2/3">
      {education.description && (
        <ul className="list-disc list-inside space-y-2 mb-4">
          {education.description.map((item, index) => (
            <li key={index} className="text-foreground-mid">
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {education.courses.map((course, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-200 text-foreground shadow rounded-full"
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Education: React.FC = () => {
  const educations: EducationItem[] = [
    {
      degree: "Masters of Science",
      major: "Computer Science",
      school: "Old Dominion University",
      duration: "Jan 2025 - Present",
      location: "Norfolk, VA",
      courses: [
        "Database Management Systems",
        "Deep Learning and Computer Vision",
        "Advanced Algorithms",
        "Web Development",
      ],
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQG5Y7rGx9ZScQ/company-logo_200_200/company-logo_200_200/0/1631369250977/old_dominion_university_logo?e=2147483647&v=beta&t=bfwOC1L4TFHFLyNGO1o2iMDKoNzfTnI8Y7KceO90a5A", // Add logos to your items
    },
    {
      degree: "Bachelor of Engineering",
      major: "Computer Engineering",
      school: "Toronto Metropolitan University",
      duration: "January 2018 - May 2023",
      location: "Toronto, ON",
      logo: "https://www.torontomu.ca/content/dam/brand/global/images/visual-guide/tmu-logo-social-media.jpg",
      courses: [
        "Digital Systems",
        "Computer Architecture",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    // Add more education items as needed
  ];

  return (
    <section  className="py-16 px-4 max-w-6xl mx-auto">
      <span id="education" className="block h-0 w-0 absolute -mt-40"></span>
      <h2 className="text-3xl font-bold mb-8 text-foreground">Education</h2>
      <div className="space-y-8">
        {educations.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
