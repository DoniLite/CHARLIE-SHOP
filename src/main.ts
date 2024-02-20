import './style.css'
import Navbar from './components/Navbar.ts'
import { createElement } from './functions/dom.ts'

const links = ['home', 'about', 'contact']
const navAside = createElement('div') as HTMLDivElement
const logo = createElement('img', { src: './vite.svg', alt: 'logo' }) as HTMLImageElement
const navbar = new Navbar(links, logo, navAside)





navbar.render()