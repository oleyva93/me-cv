import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import AvatarProfile from "../images/logos/avatar.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import ClevertechLogo from "../images/logos/clevertech.png";
import ConsultlyLogo from "../images/logos/consultly.svg";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import Minimal from "../images/logos/minimal.svg";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";

export const RESUME_DATA = {
  name: "Oscar Leyva",
  initials: "OL",
  location: "Mérida, Yucatán, México",
  locationLink: "https://www.google.com/maps/place/M%C3%A9rida,+Yuc",
  about:
    "Experienced Full Stack Engineer specializing in the development of robust products, characterized by a keen emphasis on precision and detail.",
  summary:
    "As an experienced Full Stack Engineer, I've played a pivotal role in bringing various projects to life, subtly influencing teams for efficient collaboration. My technical focus encompasses React, TypeScript, Node.js, and Next.js. Over 5 years of remote work have honed my skills, allowing me to contribute effectively to global projects and establish a track record of successful outcomes.",
  avatarUrl: AvatarProfile.src,
  personalWebsiteUrl: "https://ols-portfolio.vercel.app/",
  contact: {
    email: "oleyva930424@gmail.com",
    tel: "+52 9381857447",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/oleyva93",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oleyva93/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ozki_dev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Tecnológica de la Habana - CUJAE",
      degree: "Bachelor's Degree in Systems Engineering",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Lighthouse Technologies",
      link: "https://lighthousetech.odoo.com/",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description:
        "Engaged in the development of various projects with a focus on surveillance camera processes, actively contributing to their advancement. Provide essential support for the maintenance and repair of transportation equipment, leveraging diverse technologies. Currently enhancing skills in full-stack development, particularly emphasizing AWS Amplify.",
    },
    {
      company: "Rezglo",
      link: "https://www.rezglob2b.com/",
      badges: ["Remote"],
      title: "Lead Front-End Developer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2021",
      description:
        "Led front-end development for a transportation management software company, akin to Uber, and played a key role in the substantial contributions to a SaaS application's development.",
    },
    {
      company: "Cujae University",
      link: "https://cujae.edu.cu/",
      badges: [""],
      title: "Full Stack Developer",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2021",
      description:
        "Played a key role in developing the university's intranet system and actively contributed to digitizing internal and external projects, showcasing a dedicated commitment to enhancing the institute's technological capabilities.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Nest.js",
    "GraphQL",
    "Amplify",
  ],
  projects: [
    {
      title: "Astech",
      techStack: ["Side Project", "TypeScript", "React", "Vite", "Java/Spring"],
      description: "A platform to manage repair vehicles",
      logo: ConsultlyLogo,
      link: {
        label: "astech.com/es/",
        href: "https://astech.com/",
      },
    },
    {
      title: "Bongo",
      techStack: [
        "Lead Frontend Developer",
        "Side Project",
        "TypeScript",
        "Next.js",
      ],
      description: "A site for monitoring house sales in USA.",
      logo: MonitoLogo,
      link: {
        label: "agent.gobongo.co/",
        href: "https://agent.gobongo.co/",
      },
    },
    {
      title: "react-terminal-history",
      techStack: ["Side Project", "TypeScript", "React/Vite", "Vite"],
      description: "React component for read logs in a terminal",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/oleyva93/react-terminal-history",
        href: "https://react-terminal-history-ac7k.vercel.app/",
      },
    },
    {
      title: "onePhysio",
      techStack: ["Lead Frontend Developer", "Side Project", "React", "Vite"],
      description:
        "A platform to manage physiotherapy sessions and appointments",
      logo: JarockiMeLogo,
      link: {
        label: "onephysio.it",
        href: "https://onephysio.it",
      },
    },
    {
      title: "Healthspan",
      techStack: [
        "Lead Frontend Developer",
        "Side Project",
        "Next.js",
        "Node.js",
        "Directus",
      ],
      description:
        "A site to manage medical services provided by licensed physicians and clinicians practicing within independently owned and operated professional practices named Healthspan Medical NJ.",
      logo: Minimal,
      link: {
        label: "app.dev.hslongevity.com/",
        href: "https://app.dev.hslongevity.com/",
      },
    },
    {
      title: "Fusus",
      techStack: [
        "Side Project",
        "Next.js",
        "React/Vite",
        "Node.js",
        "Express",
      ],
      description:
        "A Real-Time Intelligence Ecosystem to public safety and security",
      logo: BarepapersLogo,
      link: {
        label: "fusus.com",
        href: "https://www.fusus.com/",
      },
    },
    {
      title: "Fusus Support",
      techStack: [
        "Lead Frontend Developer",
        "Side Project",
        "Private Site",
        "React/Vite",
        "Amplify",
        "Node.js",
        "Express",
      ],
      description: "A site to manage support tickets for Fusus",
      logo: YearProgressLogo,
      link: {
        label: "fusussupport.com",
        href: "https://www.fusussupport.com/login/",
      },
    },
    {
      title: "Assembly Fusus",
      techStack: [
        "Lead Frontend Developer",
        "Internal Site",
        "TypeScript",
        "Next.js",
        "Node.js",
      ],
      description: "A site to manage camera devices and their configurations.",
      logo: ParabolLogo,
      link: {
        label: "assembly-fusus",
        href: undefined,
      },
    },
    {
      title: "Fusus-Camera",
      techStack: [
        "Lead Frontend Developer",
        "Internal Site",
        "TypeScript",
        "React/Vite",
      ],
      description:
        "A site for managing internal fusus camera logs and their configurations..",
      logo: EvercastLogo,
      link: {
        label: "fusus-camera",
        href: undefined,
      },
    },
    {
      title: "Rezglo",
      techStack: [
        "Lead Frontend Developer",
        "React",
        "Kohana",
        "PHP",
        "GraphQL",
      ],
      description:
        "A site to Manage transportation services for companies and their employees.",
      logo: MobileVikingsLogo,
      link: {
        label: "rezglob2b.com",
        href: "https://rezglob2b.com/",
      },
    },
    {
      title: "Rezglo Driver",
      techStack: ["Lead Frontend Developer", "React/Vite", "GraphQL"],
      description:
        "Web application for managing driver transportation services for companies",
      logo: Howdy,
      link: {
        label: "driver.app",
        href: "https://drivertracking.rezglo.com/login/",
      },
    },
    {
      title: "Rezglo Onboarding",
      techStack: ["Lead Frontend Developer", "React", "GraphQL"],
      description: "Onboardingfor managing company transportation services",
      logo: TastyCloudLogo,
      link: {
        label: "onboarding.rezglo",
        href: "https://rezglob2b.com/onboarding?step=1",
      },
    },
  ],
} as const;
