import React from 'react'
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'
import './index.css'
import ButtonProjects from '../ButtonProject'

export default function CardProject ({ data, themes }) {
  const { deploy, description, github, image, newProject, technologies, title } = data

  return (
    <div className='rounded-md flex relative sm:w-[330px] w-[300px] flex-col justify-between m-5 card-projects'>
      <a className='card-projects' href={deploy}>
        {
        newProject
          ? <div className='px-5 py-1 bg-sky-500 shadow-xl text-white rounded-tl-2xl font-semibold rounded-bl-sm rounded-tr-sm rounded-br-2xl absolute right-[10px] top-[-10px]'>
            <span>Nuevo</span>
          </div>
          : null
      }
        <div className='flex flex-col justify-between overflow-hidden'>
          <div>
            <div className='w-full rounded-t-md h-[200px] overflow-hidden'>
              <img src={image} alt='images projects' loading='lazy' className='w-full h-full object-cover object-top hover:object-bottom image-projects' />
            </div>
            <div className='px-5 py-3'>
              <div>
                <h4 className='text-lg font-semibold' style={{ color: themes.text }}>{title}</h4>
                <p className='text-base font-base' style={{ color: themes.description }}>{description}</p>
              </div>
            </div>
          </div>
          <div>
            <div className='text-lg flex px-5 gap-1' style={{ color: themes.text }}>
              {
                technologies.map((res, inx) => <span key={inx}>{res}</span>)
            }
            </div>
          </div>
        </div>
      </a>
      <div className='grid grid-cols-2 mt-5'>
        <ButtonProjects deploy={deploy} icon={<AiFillGithub />} themes={themes} title='Git Hub' />
        <ButtonProjects deploy={deploy} icon={<AiOutlineLink />} themes={themes} title='Deploy' />
      </div>
    </div>
  )
}
