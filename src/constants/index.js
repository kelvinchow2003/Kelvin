import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  green,
  bothwell,
  markham,
  starbucks,
  tesla,
  shopify,
  stock,
  website,
  shopping,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "IT analysis ",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },  
  // {
  //   name: "git",
  //   icon: git,
  // },
 
];

const experiences = [
  {
    title: "Junior Developer/IT Intern",
    company_name: "Green and Spiegel LLP",
    icon: green,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Sept 2024",
    points: [
      "Designed and developed a secure client intake web portal to streamline data management and communication.",
      "Created SQL stored procedures for dynamic PDF generation, integrating with Java and Python systems.",
      "Delivered in an agile development environment, contributing to sprint planning and iterative improvements.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "Bothwell Accurate",
    icon: bothwell,
    iconBg: "#E6DEDD",
    date: "May 2023 - Sept 2023",
    points: [
      "Delivered technical support to a diverse workforce, resolving hundreds of hardware and software issues efficiently.",
      "Automated onboarding processes for new employees by developing robust shell scripts.",
      "Enhanced IT infrastructure by identifying and implementing process improvements.",
      "Collaborated with cross-functional teams to ensure seamless technology integration.",
    ],
  },
  {
    title: "Aquatic Supervisor",
    company_name: "City Of Markham",
    icon: markham,
    iconBg: "#E6DEDD",
    date: "Sept 2019 - Present",
    points: [
      "Supervised the safety of over 100 guests daily, ensuring strict adherence to health and safety standards.",
      "Provided leadership to lifeguards and swim instructors, maintaining operational excellence and compliance.",
      "Conducted safety audits and emergency response drills, achieving a high standard of readiness.",
      "Delivered exceptional customer service, fostering a safe and welcoming community environment.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  
];

const projects = [
  {
    name: "Personal Website",
    description:
      "Web-based platform that allows users to view my persoal portfolio. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTMLCSSJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/kelvinchow2003/Personal-Website-2025",
  },
  {
    name: "Stock Market System",
    description:
      "A stock market simulator utilizing an API that allows purchasing and selling stocks, viewing stock price history charts, and balancing accounts.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Jira",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "",
  },
  {
    name: "Item shopping and shipping program",
    description:
      "A shopping application where users can view a catalog of products, purchase and order items.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    
    ],
    image: shopping,
    source_code_link: "https://github.com/kelvinchow2003/CPS209",
  },
];

export { services, technologies, experiences, testimonials, projects };
