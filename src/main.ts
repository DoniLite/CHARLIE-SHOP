import './style.css'
import Navbar from './components/Navbar.ts'
import { createElement } from './functions/dom.ts'
import { logo, navUtilities } from './components/features.ts'
import { HomeView } from './components/HomeView.ts'

const links = ['home', 'about', 'contact']
const navAside = createElement('div', {class: 'navSide'}) as HTMLDivElement
const navbar = new Navbar(links, logo, navAside)
const homeView = new HomeView()

navAside.append(navUtilities.searchInputDiv, navUtilities.heartIconDiv, navUtilities.iconBagDiv)
navbar.render()