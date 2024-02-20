import { createElement } from "../functions/dom";
import { addFavorite, openShoppingBag } from "../functions/eventListener";

const navSearchInput = createElement('input', { type: 'search', placeholder: 'Rechercher quelque chose' }) as HTMLInputElement
const inputSeachIcon = createElement('i', { class: 'fa-solid fa-magnifying-glass' }) as HTMLElement
const searchInputDiv = createElement('div')
const heartIcon = createElement('i', {class: 'fa-regular fa-heart'})
const heartIconDiv = createElement('div', {class: 'heartIconDiv'})
const iconBagDiv = createElement('div', {class: 'iconBagDiv'})
const iconBag = createElement('i', { class: 'fa-solid fa-bag-shopping'})
let h1 = createElement('h1')
h1.textContent = 'Charlie\'s SHOP'
let img = createElement('img', { src: './vite.svg', alt: 'logo' }) as HTMLImageElement
export const logo = createElement('div', { class: 'flex jua-regular' }) as HTMLImageElement
logo.append(img, h1)

heartIconDiv.append(heartIcon)
iconBagDiv.append(iconBag)
heartIconDiv.addEventListener('click', addFavorite)
iconBagDiv.addEventListener('click', openShoppingBag)
searchInputDiv.append(navSearchInput, inputSeachIcon)

export const navUtilities = {
    searchInputDiv,
    heartIconDiv,
    iconBagDiv,
}