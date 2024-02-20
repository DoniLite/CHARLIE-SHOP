import { createElement } from "../functions/dom";
import { addFavorite, openShoppingBag } from "../functions/eventListener";

const navSearchInput = createElement('input', { type: 'search', placeholder: 'Rechercher quelque chose' }) as HTMLInputElement
const inputSeachIcon = createElement('i', { class: 'fa-solid fa-magnifying-glass' }) as HTMLElement
const searchInputDiv = createElement('div')
const heartIcon = createElement('i', {class: 'fa-regular fa-heart'})
const heartIconDiv = createElement('div', {class: 'heartIconDiv'})
const iconBagDiv = createElement('div', {class: 'iconBagDiv'})
const iconBag = createElement('i', { class: 'fa-solid fa-bag-shopping'})

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