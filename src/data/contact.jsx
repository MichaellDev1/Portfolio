import { IoLogoInstagram } from 'react-icons/io'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const redes = [{
  red: 'Instagram',
  link: 'https://www.instagram.com/michael718s/',
  icon: <IoLogoInstagram />
}, {
  red: 'Linkedin',
  link: 'https://www.linkedin.com/in/michael-santucho-0a8876256',
  icon: <AiFillLinkedin />
}, {
  red: 'Git Hub',
  link: 'https://github.com/MichaellDev1',
  icon: <AiFillGithub />
}]

const methodContact = [
  {
    method: 'email',
    href: 'mailto:michaelsantuchodev@gmail.com',
    title: 'michaelsantuchodev@gmail.com'
  }
]

export { methodContact, redes }
