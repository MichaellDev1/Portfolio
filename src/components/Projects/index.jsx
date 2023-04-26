import React, { Suspense, useContext } from 'react'
import { projectsData } from '../../data/projectsData'
import Context from '../../Context/Themes'
import Button from '../ButtonHero/index'
import BlobBlur from '../BlobBlur/BlobBlur'
import Titles from '../Title'
const CardProject = React.lazy(() => import('../CardProject'))

export default function Projects () {
  const { Themes } = useContext(Context)
  return (
    <div className='w-full min-h-[400px] relative mb-36' id='projects'>
      <div className='content-project relative z-[1]'>
        <Titles Themes={Themes} title='Proyectos' />

        <div className='flex flex-wrap justify-center'>
          {
    projectsData.map(data => (
      <Suspense key={data.id} fallback={<h3>Cargandooo</h3>}>
        <CardProject data={data} themes={Themes} />
      </Suspense>
    ))
  }
        </div>
        <div className='w-full text-center mt-10'>
          <Button href='https://github.com/MichaellDev1' style={{ background: '#0284C7', padding: '8px 20px', fontSize: '18px' }}>
            Ver mas
          </Button>
        </div>
      </div>
      <BlobBlur positionStyles={{ top: '0', left: '0', height: '600px', width: '45%', opacity: '0.6' }} />
    </div>
  )
}
