import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
/* export const aboutData = {
  img: '',
  paragraphOne: "I work in the IT department at Ohel Children's ",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
}; */

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'workbook.png',
    title: 'Ohel Covid Workbook for Children',
    info: '',
    info2: '',
    url: 'https://www.ohelfamily.org/workbook/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ohel.png',
    title: 'Payment page for Ohel',
    info: 'I created a payment page for individuals that need to pay bills at Ohel',
    info2: '',
    url: 'https://www.ohelfamily.org/themes/donate/tikvah.php',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chaya-silberman-bb18a2104/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/a515sib',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
