import React, { Suspense, useContext, useState, useRef } from 'react'
import { projectsData } from '../../data/projectsData'
import Context from '../../Context/Themes'
import Button from '../ButtonHero/index'
import BlobBlur from '../BlobBlur/BlobBlur'
import Titles from '../Title'
import './index.css'
const CardProject = React.lazy(() => import('../CardProject'))

const typeProject = [
  {
    type: 'frontend'
  }, {
    type: 'backend'
  }, {
    type: 'fullStack'
  }
]

export default function Projects () {
  const { Themes } = useContext(Context)
  const [typeSelected, setTypeSelected] = useState('frontend')
  const refElementProjectSelected = useRef()

  const handleChangeSelected = (e, type) => {
    e.preventDefault()
    setTypeSelected(type)
  }

  const projectSelected = projectsData.filter(project => project.type === typeSelected)

  const handleMouseEnter = (e) => {
    refElementProjectSelected.current.style = `left: ${e.target.offsetLeft}px; width: ${e.target.offsetWidth}px; opacity: 1;`
  }
  const handleMouseLeave = (e) => {
    refElementProjectSelected.current.style = 'opacity: 0;'
  }
  return (
    <div className='w-full min-h-[400px] relative mb-36' id='projects'>
      <div className='content-project relative z-[1]'>
        <Titles Themes={Themes} title='Proyectos' />
        <div className='relative'>
          <div className='flex items-center'>
            {
              typeProject.map(({ type }) => (
                <a
                  href='#' key={type} className={`capitalize sm:text-base text-sm ${typeSelected === type ? 'border-b-2 border-b-[#f5d2b3]' : null} font-medium typesRamas`} style={{ color: Themes.text }} onMouseEnter={(e) => handleMouseEnter(e)}
                  onMouseLeave={handleMouseLeave} onClick={(e) => handleChangeSelected(e, type)}
                >{type}
                </a>
              ))
            }
          </div>
          <div className='borderProject' ref={refElementProjectSelected} style={{ backgroundColor: Themes.cardSkill }} />
        </div>
        <div className='flex flex-wrap lg:justify-start justify-center'>
          {
    projectSelected.length > 0
      ? projectSelected.map(data => (
        <Suspense key={data.id} fallback={<h3>Cargandooo</h3>}>
          <CardProject data={data} themes={Themes} />
        </Suspense>
      ))
      : <h4 className='text-sm font-normal mt-2' style={{ color: Themes.text }}>No se han creado proyectos para esta sección aun. Es posible que el creador está estudiando las tecnologias para la creación de los mismos.</h4>
  }
        </div>
        <div className='w-full text-center mt-10'>
          <a href='https://github.com/MichaellDev1' className='bg-[#0284C7] py-[10px] text-white font-medium hover:bg-[#33bbff] transition-[background-color] px-10 rounded-3xl text-[15px]'>
            Ver mas
          </a>
        </div>
      </div>
      <BlobBlur positionStyles={{ top: '0', left: '0', height: '600px', width: '45%', opacity: '0.6' }} />
    </div>
  )
}
