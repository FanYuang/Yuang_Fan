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
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';


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
  Hero: 'Introduction',
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
        I am a student in the Master of information science program of <strong className="text-stone-100">University of Wisconsin-Madison</strong>. I am actively seeking a full-time position in the field of software engineering, with a particular interest in frontend or backend development.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I have practical experience in frontend development, backend development, data scraping and analysis, as well as machine learning. I believe my skills and dedication make me a strong candidate for a full-time position in software engineering. I am eager to contribute to a dynamic team and continue expanding my knowledge and expertise.
      </p>
  
    </>
  ),
  actions: [
    {
      href: './Jeremy Yuang Fan Resume.pdf',
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
  description: "My name is Yuang Fan, and you can call me Jeremy. I am currently majoring in Information Science and will be graduating in December 2023. My studies have focused on computer science, data science, and user experience design. Additionally, I have gained practical experience in various technical skills, such as web development and data scraping, with proficiency in technologies like React.js, Node.js, Vue.js, and Express.js. I am now actively seeking a full-time position in the field of full-stack development or software development. With my strong foundation in both front-end and back-end technologies, I am confident in my ability to contribute to a dynamic software development team. I am eager to apply my knowledge and skills to create innovative and efficient solutions. If you have any opportunities or recommendations, I would greatly appreciate your assistance in finding a suitable position.",
  aboutItems: [
    {label: 'Location', text: 'Madison, WI', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
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
    location: 'Master of Information Science  GPA:3.92/4.0   ',
    content: <p></p>,
  },
  {
    date: 'Sept 2018 – Jul 2022',
    title: 'The Chinese University of Hong Kong(CUHK)',
    location: 'Bachelor of Engineering: Financial Technology  Second upper class honor    ',
    content: <div></div>,
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

];
export const work: TimelineItem[] = [
  {
    date: 'Apr 2023 – Present',
    location: 'Research Assistant',
    title: 'The Chinese University of Hong Kong Shenzhen Research Institute',
    content: (
    <div>
    <p>Tech stack: Next.js, Tailwind CSS, Node.js (Express framework), Mongodb Atlas (mongoose framework)</p>
    <p>• Developed a visualization website for stock prediction recommendations using the specified tech stack.(Website Link: <a href="https://alfa-cuhk.vercel.app/">https://alfa-cuhk.vercel.app/</a>.)Main Responsibilities:</p>

    <ul>
    <li>•  Created a user-friendly frontend with Next.js, Tailwind CSS, and global state management through Context API.
Backend work involved Node.js, Express, and MongoDB Atlas for APIs, user authentication and data storage.
   </li>
    <li>• Implemented a DatePicker component to enable users to easily choose specific date ranges for querying and analyzing stock data.</li>
    <li>• Utilized Chart.js and Echarts libraries to create various stock-related charts.</li>
    <li>• Deployed the frontend project on Vercel and the backend project on Render, establishing a CI/CD workflow.</li>
    </ul>
    </div>
    ),
    },
{
  date: 'Nov 2022 – Apr 2023',
  location: 'Software engineer intern',
  title: 'IpserLab',
  content: (
  <div>
  <p>Tech stack: React.js, Node.js</p>
  <p>• Crawl university-related information and university-related start-up information from diverse online sources.
</p>
  <p>• Design the wireframe of the dashboard and develop the dashboard with React.</p>
  </div>
  ),
},
  {
    date: 'Jun 2022 – Jul 2022',
    location: 'Developer',
    title: 'International Business Machines Corporation(IBM) ',
    content: (
      <div> 
    <p>Tech stack: Java & MDX(similar to SQL)</p>
    <p>• Employed MDX queries within the easyBI platform to dissect and visualize Jira data pertinent to project management.
Demonstrated the team's historical contributions and our adeptness in fulfilling development requisites.</p>
<p>• Formulated MDX queries to produce a diverse range of graphs, including trend analyses and bar charts. These visuals
effectively conveyed project insights and trends to the team.</p>
    <p>• Assumed responsibility for comprehending and upholding system documentation and code, thereby ensuring its
longevity and continuous evolution.</p>
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
      <p>• Transformed an H5 project into an Android app by making modifications within the node modules. </p>
      <p>• Collaborated with the backend team to coordinate and implement calls to backend interfaces.</p>
      <p>• Executed customized modifications on the company's official website developed by WIX.</p>
     </div>
    ),
  },
  {
    date: 'Jul 2021 – Nov 2021',
    location: 'Research Assistant',
    title: 'Zhejiang University & York University',
    content: (
      <div> 
    <p>Tech stack: Node.js, Express</p>
    <p>• Crawl and extract data and game-related information from gamespot.com and metacritic.com.</p>
    <p>• Filtered out less related review information and designed the database structure to store the data</p>
    <p>• Conducted comprehensive data analysis to gain insights into user behaviors concerning review postings.
</p></div>
    )
  },
  {
    date: 'Apr 2021 – Jul 2021',
    location: 'Full-stack Engineer Intern',
    title: 'Burtaka Technology(Shenzhen) Co, Ltd. ',
    content: (
      <div> 
      <p>Tech stack: Taro(React native)+Node.js(Express framework)+MongoDB(Mongoose framework) </p>
      <p>• Used Taro framework to develop a WeChat mini program for word memorizing.
</p>
      <p>• Utilizing the SuperAgent library, conducted web scraping of Youdao Dictionary, followed by parsing the retrieved
HTML using the Cheerio library and save the audio pronunciations files</p>
      <p>• Employed CSS @keyframes to craft many animation effects, while utilizing functional components and hooks.</p>
      <p>• Developed a range of backend API using Node.js and the Express framework, facilitating interaction with the frontend</p>
      <p>• Integrated Baidu's image recognition API to identify vocabulary from images uploaded by users.</p>
      <p>• Wrote various routers and developed restful API in the backend with Node.js(Express framework)</p>
      <p>• Incorporated the node-schedule module to ensure user words were periodically pushed to their word bank</p>
      <p>• Employed the aaPanel for backend maintenance and deployment, ensuring the application's stability and availability.</p>
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
  {label: 'Linkedin', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jeremy-fan-6b5453251/'},

  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ricerice_666'},
  
];
