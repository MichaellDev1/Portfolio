import React, { Suspense, useContext, useState, useRef, useEffect } from 'react'
import { projectsData } from '../../data/projectsData'
import Context from '../../Context/Themes'
import BlobBlur from '../BlobBlur/BlobBlur'
import Titles from '../Title'
import './index.css'
import ButtonAnimation from '../ButtonAnimation'
const CardProject = React.lazy(() => import('../CardProject'))

const typeProject = [
  {
    type: 'frontend',
    roundedColor: '#C9B55F'
  }, {
    type: 'backend',
    roundedColor: '#6CC7F8'
  }, {
    type: 'fullStack',
    roundedColor: '#6238DB'
  }
]

export default function Projects () {
  const { Themes } = useContext(Context)
  const [typeSelected, setTypeSelected] = useState('frontend')
  const [projectSelected, setProjectSelected] = useState([])

  const handleChangeSelected = (e, type) => {
    e.preventDefault()
    setTypeSelected(type)
  }

  useEffect(() => {
    const projectsFilter = projectsData.filter(project => project.type === typeSelected)
    setProjectSelected(projectsFilter)
  }, [typeSelected])

  return (
    <div className='w-full min-h-[400px] relative mb-36' id='projects'>
      <div className='content-project relative z-[1]'>
        <Titles Themes={Themes} title='Proyectos' />
        <div className='relative'>
          <div className='flex items-center'>
            {
              typeProject.map(({ type, roundedColor }) => (
                <a
                  href='#' key={type} className='capitalize sm:text-base text-sm font-medium typesRamas' style={{ color: Themes.text }} onClick={(e) => handleChangeSelected(e, type)}
                >
                  <div className='flex items-center'>
                    <div className='w-[5px] h-[5px] rounded-full mr-1' style={{ background: roundedColor }} />
                    {type}
                  </div>
                  {typeSelected === type ? <span className='spanBottom' style={{ background: `linear-gradient(to right, #e700dc00, ${roundedColor} 50%, #ffffff00 100%)` }} /> : null}
                </a>
              ))
            }
          </div>
        </div>
        <div className='min-h-[400px] flex flex-wrap justify-center w-full'>
          {
    projectSelected.length > 0
      ? projectSelected.map(data => (
        <Suspense key={data.id} fallback={<h3>Cargandoo...</h3>}>
          <CardProject data={data} themes={Themes} />
        </Suspense>
      ))
      : <div className='min-h-[300px] items-center justify-start w-full flex'><h4 className='text-sm font-normal' style={{ color: Themes.text }}>No se han creado proyectos para esta sección aun. Es posible que el creador está estudiando las tecnologías para la creación de los mismos.</h4></div>
  }
        </div>
        <div className='w-full text-center mt-10'>
          <ButtonAnimation text='Ver mas' href='https://github.com/MichaellDev1' />
        </div>
      </div>
      <BlobBlur positionStyles={{ top: '0', left: '0', height: '600px', width: '45%', opacity: '0.6' }} />
    </div>
  )
}
