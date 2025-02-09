import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string; // Add this line
}

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="mb-8 flex flex-col lg:flex-row gap-4">
    <div className="w-full lg:w-1/3">
      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4">
        {experience.logo && (
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-12 h-12 object-contain"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-foreground">
            {experience.title}
          </h3>
          <p className="text-foreground-mid">{experience.company}</p>
          <p className="text-sm text-foreground-mid">{experience.duration}</p>
          <p className="text-sm text-foreground-mid">{experience.location}</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-2/3">
      <ul className="list-disc list-inside space-y-2">
        {experience.description.map((item, index) => (
          <li key={index} className="text-foreground-mid">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-3">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-200 text-foreground shadow rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Graduate Research Assistant",
      company: "Old Dominion University",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQG5Y7rGx9ZScQ/company-logo_200_200/company-logo_200_200/0/1631369250977/old_dominion_university_logo?e=2147483647&v=beta&t=bfwOC1L4TFHFLyNGO1o2iMDKoNzfTnI8Y7KceO90a5A",
      duration: "Jan 2025 - Present",
      location: "Norfolk, VA",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: [
        "OpenAI",
        "Arduino",
        "Python",
        "React.js",
        "Spring",
        "PHP",
        "Artificial Intelligence",
      ],
    },
    {
      title: "Software Engineer",
      company: "Citrus Oncology",
      logo: "https://www.citrusoncology.com/android-chrome-384x384.png",
      duration: "January 2024 - December 2024",
      location: "Raleigh-Durham, NC",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: [
        "React.js",
        "Express.js",
        "Flask",
        "Amazon Web Services",
        "Python",
        "Figma",
        "Node.js",
      ],
    },
    {
      title: "Software Engineer",
      company: "Andie Technologies",
      logo: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/1032783/Screen_20Shot_202020-09-12_20at_202.56.15_20PM.png",
      duration: "May 2023 - January 2024",
      location: "Toronto, ON",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: [
        "React.js",
        "Django",
        "Stripe Connect",
        "Google Cloud Platform",
        "SendGrid",
        "SQL",
        "Docker",
        "Microsoft Azure",
      ],
    },
    {
      title: "Cloud/DevOps Engineer Intern",
      company: "TD Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/1200px-Toronto-Dominion_Bank_logo.svg.png",
      duration: "May 2022 - September 2022",
      location: "Toronto, ON",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: [
        "Datadog",
        "Microsoft Azure",
        "Jenkins",
        "Scrum",
        "Linux",
        "Sonarqube",
        "Javascript",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Andie Technologies",
      logo: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/1032783/Screen_20Shot_202020-09-12_20at_202.56.15_20PM.png",
      duration: "September 2022 - May 2022",
      location: "Toronto, ON",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: [
        "React Native",
        "Django",
        "React.js",
        "Google Cloud Platform",
        "SQL",
        "Python",
        "Microsoft Azure",
      ],
    },
    {
      title: "Research Assistant",
      company: "Ryerson University",
      logo: "https://i1.sndcdn.com/avatars-000269384409-prbndh-original.jpg",
      duration: "September 2020 - February 2022",
      location: "Toronto, ON",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: [
        "ESP32 Microcontrollers",
        "PyTorch",
        "BLE",
        "Flask",
        "Python",
        "IoT Devices",
        "Raspberry Pi",
      ],
    },
    {
      title: "Developer Co-op",
      company: "TD Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/1200px-Toronto-Dominion_Bank_logo.svg.png",
      duration: "May 2021 - September 2021",
      location: "Toronto, ON",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: ["ASP.NET", "SQL", "React.js", "C#", "Jenkins"],
    },
    {
      title: "Engineering Intern",
      company: "L3Harris Technologies",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGcibHi9Wfu5w/company-logo_200_200/company-logo_200_200/0/1630481325020/l3harriscommercialaviation_logo?e=2147483647&v=beta&t=JL2vVqCpSAbjrrqfi2STk-FgZw84jxsX8zMJzVkcG1U",
      duration: "May 2019 - September 2019",
      location: "Toronto, ON",
      description: [
        "Led development of key features resulting in 30% user growth",
        "Implemented responsive design patterns using React and TypeScript",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      technologies: [
        "Docker",
        "TensorFlow",
        "Flask",
        "OpenCV",
        "PyTorch",
        "Python",
        "Linux",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <span id="experience" className="block h-0 w-0 absolute -mt-40"></span>

      <h2 className="text-3xl font-bold mb-8 text-foreground">Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
