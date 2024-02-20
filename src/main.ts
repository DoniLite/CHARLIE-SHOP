import './style.css'
import Navbar from './components/Navbar.ts'
import { createElement } from './functions/dom.ts'
import { homeViewElements, logo, navUtilities } from './components/features.ts'
import { HomeView } from './components/HomeView.ts'

const links = ['home', 'about', 'contact']
const navAside = createElement('div', {class: 'navSide'}) as HTMLDivElement
const navbar = new Navbar(links, logo, navAside)
const homeView = new HomeView()
homeView.addToGroup1(...homeViewElements.flexDiv)
homeView.addToGroup2(...homeViewElements.carPresentaion)

navAside.append(navUtilities.searchInputDiv, navUtilities.heartIconDiv, navUtilities.iconBagDiv)
navbar.render()
homeView.render()