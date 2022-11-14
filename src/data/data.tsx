import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yuang Fan Website',
  description: "Personal website of Yuang Fan",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
 
 
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
 
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm (Jeremy)Yuang Fan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a first year student in the Master of information science program of <strong className="text-stone-100">University of Wisconsin-Madison</strong>, and I really want to
        find an internship which is about frontend development or backend development.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In the past, I have gain some work experience about frontend development, backend development, data scraping and analyze, and machine learning.Therefore, I think I am qualified
        for an intern opportunity about software engineering.
      </p>
    </>
  ),
  actions: [
    {
      href: './Yuang Fan Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    }
   
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My name is Yuang Fan, and you can call me Jeremy. Now I major in information science where I will take courses about computer
  science, data science and user experience design, and I will graduate in December 2023. My past experience has equipped with a lot of technique skills like web development and data scraping, like React.js, 
  Node.js, Vue.js and Express.js. And I want to find an internship and continue to work in the software development field after I graduate.`,
  aboutItems: [
    {label: 'Location', text: 'Madison, WI', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Phone', text: '3097036757', Icon: SparklesIcon},
    {label: 'Email', text: 'yfan233@wisc.edu', Icon: OfficeBuildingIcon},
    {label: 'Study', text: 'University of Wisconsin-Madison', Icon: AcademicCapIcon},
    
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Cantonese',
        level: 7,
      },
      {
        name: 'Mandarin',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Vue',
        level: 7,
      },
      {
        name: 'Jquery',
        level: 3,
      },
      {
        name: 'HTML',
        level: 7,
      },
      {
        name: 'CSS',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Java',
        level: 3,
      },
      {
        name: 'PHP',
        level: 3,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'MongoDB',
        level: 9,
      },
      {
        name: 'MySQL',
        level: 4,
      },
      {
        name: 'Flask',
        level: 4,
      },
      {
        name: 'Express',
        level: 9,
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sept 2022 – Dec 2023',
    title: 'University of Wisconsin-Madison',
    location: 'Master of Information Science',
    content: <p></p>,
  },
  {
    date: 'Sept 2018 – Jul 2022',
    title: 'The Chinese University of Hong Kong(CUHK)',
    location: 'Bachelor of Engineering: Financial Technology',
    content: <div><p>Relevant Courses: System Simulation, Advanced Database Technologies, Problem Solving by Programming, Optimization
    Methods, Computer Network, Fundamentals in Information Systems, Data Structures, Cyber Security</p><br /> 
    <p>Award: Outstanding Students Award (2019)
    </p></div>,
  },
];
export const research: TimelineItem[] = [
  {
    date: 'Sept 2021 – Dec 2021',
    location: 'A Machine Learning Approach to Building Index Structures',
    title: 'Department of System Engineering and Engineering Management, CUHK',
    content: (
      <div><p>Supervisor: Professor Cheng Hong, Chairman of the Department of System Engineering and Engineering Management of The Chinese University of Hong Kong</p><br /> 
    <p>Tech stack: Python, Flask, Pytorch</p>
    <p>• Built index structures, such as learned index, hash table and AVL tree etc.</p>
    <p>• Compared memory space, query time, and other indicators of established indexes and found out that learned index
      couldsave memory space and its query time had the potential to be short.</p>
    <p>• Conducted research on how indexes can enhance database search efficiency and applied a neural network to
constructa learned index.</p></div>
    ),
  },
  {
    date: 'Jul 2021 – Nov 2021',
    location: 'Business School Research Assistant (remote)',
    title: 'Zhejiang University & York University',
    content: (
      <div> 
    <p>Tech stack: Node.js, Express</p>
    <p>• Crawled data and game-related information on gamespot.com and metacritic.com</p>
    <p>• Filtered out less related review information and designed the database structure to store the data</p>
    <p>• Performed data analysis to study the user background and user behavior on posting reviews
</p></div>
    )
  },
];
export const work: TimelineItem[] = [
  {
    date: 'Jun 2022 – Jul 2022',
    location: 'Developer',
    title: 'International Business Machines Corporation(IBM) ',
    content: (
      <div> 
    <p>Tech stack: Java & MDX(similar to SQL)</p>
    <p>• Wrote MDX to analyze and draw tables of project management-related data in Jira to help demonstrate what the team
did and how efficient we were about completing development requirements in the past few years</p>
    <p>• Modified some API in the system based on the requirements of the leader</p>
   </div>
    ),
  },
  {
    date: 'Nov 2021 – Jan 2022',
    location: 'Software Programming Intern',
    title: 'Solacetree Counselling Limited',
    content: (
      <div> 
      <p>Tech stack: Expo(React Native)</p>
      <p>• Communicated with users to get their feedback and did the corresponding improvement in the mobile application</p>
      <p>• Developed H5 mobile website and app in both IOS and Android systems using expo(react native)</p>
      <p>• Collaborated closely with the back-end development team and used the API developed by the back-end team</p>
     </div>
    ),
  },
  {
    date: 'Apr 2021 – Jul 2021',
    location: 'Full-stack Engineer Intern',
    title: 'Burtaka Technology(Shenzhen) Co, Ltd. ',
    content: (
      <div> 
      <p>Tech stack: Taro(React native)+Node.js(Express framework)+MongoDB(Mongoose framework) </p>
      <p>• Conducted user research on the possible improvement on the existing word memorizing applications and communicated
with the team about how to write the application
</p>
      <p>• Developed the prototype of the “my vocabulary” feature with Axure</p>
      <p>• Used Taro(React) framework to develop a WeChat mini program for word memorizing</p>
      <p>• Crawled Youdao Dictionary by SuperAgent and parsed the HTML in the text field of response by Cheerio</p>
      <p>• Applied css@keyframe proficiently to realize various animation effects and page functions in the front end</p>
      <p>• Wrote various routers and developed restful API in the backend with Node.js(Express framework)</p>
      <p>• Designed algorithms of vocabulary measurement based on word frequency analysis</p>
      <p>• Used aaPanel to operate and maintain backend servers</p>
     </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/FanYuang'},

  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ricerice_666'},
  
];
