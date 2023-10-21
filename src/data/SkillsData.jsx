import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  DiSass,
  DiNodejsSmall,
  DiMongodb
} from 'react-icons/di'
import { SiTailwindcss, SiBootstrap, SiFirebase, SiRedux, SiTypescript } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { FiGitlab } from 'react-icons/fi'
import { GrMysql } from 'react-icons/gr'
import { RxVercelLogo } from 'react-icons/rx'
import { CSharp } from './Icons'

const skills = [
  {
    skill: 'HTML',
    color: '#ff6a00',
    icon: <DiHtml5 />,
    inProcess: false
  },
  {
    skill: 'CSS',
    color: '#0072ff',
    icon: <DiCss3 />,
    inProcess: false
  },
  {
    skill: 'JavaScript',
    color: '#d8ff00',
    icon: <DiJavascript />,
    inProcess: false
  },
  {
    skill: 'TypeScript',
    color: '#3178C6',
    icon: <SiTypescript />,
    inProcess: false
  },
  {
    skill: 'Sass',
    color: '#d900ff',
    icon: <DiSass />,
    inProcess: false
  },
  {
    skill: 'Boostrap',
    color: '#9100ff',
    icon: <SiBootstrap />,
    inProcess: false
  },
  {
    skill: 'Tailwind',
    color: '#25bdf7',
    icon: <SiTailwindcss />,
    inProcess: false
  },
  {
    skill: 'React',
    color: '#3ec8fd',
    icon: <DiReact />,
    inProcess: false
  },
  {
    skill: 'Next.js',
    color: '#fff',
    icon: <RxVercelLogo />,
    inProcess: false
  },
  {
    skill: 'Redux',
    color: '#573C83',
    icon: <SiRedux />,
    inProcess: false
  },
  {
    skill: 'Git',
    color: '#ff3b00',
    icon: <BsGit />,
    inProcess: false
  },
  {
    skill: 'GitLab',
    color: '#ff3b00',
    icon: <FiGitlab />,
    inProcess: false
  },
  {
    skill: 'GitHub',
    color: '#ffebeb',
    icon: <AiFillGithub />,
    inProcess: false
  },
  {
    skill: 'Firebase',
    color: '#FFCC30',
    icon: <SiFirebase />,
    inProcess: false
  },
  {
    skill: 'Node js',
    color: '#019722',
    icon: <DiNodejsSmall />,
    inProcess: false
  },
  {
    skill: 'Mongo Db',
    color: '#04ff00',
    icon: <DiMongodb />,
    inProcess: false
  },
  {
    skill: 'SQL',
    color: '#005c83',
    icon: <GrMysql />,
    inProcess: false
  },
  {
    skill: 'C#',
    color: '#9E559A',
    icon: <CSharp />,
    inProcess: true
  }
]

export {
  skills,
  DiJavascript,
  DiCss3,
  SiRedux,
  DiHtml5,
  DiReact,
  SiTailwindcss
}
