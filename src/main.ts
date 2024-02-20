import './style.css'
import Navbar from './components/Navbar.ts'
import { createElement } from './functions/dom.ts'
import { navUtilities } from './components/features.ts'

const links = ['home', 'about', 'contact']
const navAside = createElement('div', {class: 'navSide'}) as HTMLDivElement
let h1 = createElement('h1')
h1.textContent = 'Charlie\'s SHOP'
let img = createElement('img', { src: './vite.svg', alt: 'logo' }) as HTMLImageElement
const logo = createElement('div', { class: 'flex jua-regular' }) as HTMLImageElement
logo.append(img, h1)
const navbar = new Navbar(links, logo, navAside)

navAside.append(navUtilities.searchInputDiv, navUtilities.heartIconDiv, navUtilities.iconBagDiv)
navbar.render()