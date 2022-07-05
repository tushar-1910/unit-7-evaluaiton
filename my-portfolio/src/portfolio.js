import aboutpic from "./components/Access/mePhoto.jpg"
import project1pic from "./licious.png"
import html from "./images/skills/html.png"
import nodejs from "./images/skills/nodejs.png"
import react from "./images/skills/react.png"
import redux from "./images/skills/redux.png"
import git from "./images/skills/git.png"
import js from "./images/skills/js.png"
import css from "./images/skills/css.png"
import koo from "./images/skills/koo.png"


const header = {
  homepage: 'TA.',
  title: 'TA.',
}

const about = {
  photo: aboutpic,
  name: 'TUSHAR AGARWAL',
  role: 'A Full Stack Developer.',
  description:
    "During High school, I had computer science as one of my subjects, where I got to learn Programming with C++ and how to give instructions to a computer by writing code. So from there, I got an interest in coding and problem-solving. I joined Masai School in Nov 2021 which has the best intense and immersive curriculum when it comes to web development. Now, I proudly state that I am a Full Stack Web Developer pursuing MERN stack who is enthusiastic, aspiring, analytical and detail-oriented. I'm capable of working with interdisciplinary teams and executing goal-oriented projects and having the required technical skills to write codes using HTML, CSS, React and JavaScript from the front-end stack applications also NodeJS, ExpressJS and MongoDB from the back-end stack applications. I am passionate about coding and strongly interested in obtaining a Software Developer position to work on enhancing the product experience.",
  resume: 'https://drive.google.com/file/d/1YmvQk8tt8B39NTb5e1f_uz98Klj1S5jv/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/tushar19/',
    github: 'https://github.com/tushar-1910',
  },
}

const projects = [
  {
    name: 'Licious',
    image: project1pic,
    description:
      'Licious is your one-stop fresh meat delivery shop. Here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep.',
    stack: ['localstorage', 'HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/tushar-1910/licious-clone',
    livePreview: 'https://bright-tapioca-98b677.netlify.app/',
  },
  {
    name: 'Koo App',
    image: koo,
    description:
      'Koo is a micro-blog in Indian languages.We are here to help Indians express themselves in the easiest way possible with the objective of democratizing their voice.Share your thoughts in text,audio or video.',
    stack: ['JSON-server', 'npm', 'HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/tushar-1910/koo-clone',
    livePreview: 'https://koo-clone.vercel.app/',
  },
]

const skills = [
{

      title: "Languages & Databases",
      items: [

        {
          icon: html,
          title: "HTML"
        },
        {
          icon: css,
          title: "CSS"
        },
        {
          icon: js,
          title: "JavaScript"
        }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        {
          icon: react,
          title: "React"
        },
        {
          icon: nodejs,
          title: "Nodejs"
        },
        {
          icon: redux,
          title: "Redux"
        }
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        {
          icon: git,
          title: "Git"
        }
      ]
    }
  // { name: 'HTML', icon: 'https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white&?logoWidth=60' },
  // { name: 'CSS', icon: 'https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white' },
  // { name: 'JavaScript', icon: 'https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
  // { name: 'React', icon: 'https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB' },
  // { name: 'Redux', icon: 'https://img.shields.io/badge/-Redux-%237046b2?&style=for-the-badge&logo=redux&logoColor=white' },
  // { name: 'Material UI', icon: 'https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white' },
  // { name: 'Git', icon: 'https://img.shields.io/badge/-Git-white?&style=for-the-badge&logo=git&logoColor=red&logoWidth=40' },

  // {name: 'MERN', icon: 'html'},
]

const contact = {
  email: 'tusharagg19@gmail.com',
}

export { header, about, projects, skills, contact }
