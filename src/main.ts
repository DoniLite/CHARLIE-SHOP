import './style.css'
import Navbar from './components/Navbar.ts'
import { createElement } from './functions/dom.ts'
import { navUtilities } from './components/features.ts'

const links = ['home', 'about', 'contact']
const navAside = createElement('div', {class: 'navSide'}) as HTMLDivElement
const logo = createElement('img', { src: './vite.svg', alt: 'logo' }) as HTMLImageElement
const navbar = new Navbar(links, logo, navAside)

navAside.append(navUtilities.searchInputDiv, navUtilities.heartIcon, navUtilities.iconBag)
navbar.render()