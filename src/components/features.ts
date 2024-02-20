import { createElement } from "../functions/dom";

const navSearchInput = createElement('input', { type: 'search', placeholder: 'Rechercher quelque chose' }) as HTMLInputElement
const inputSeachIcon = createElement('i', { class: 'fa-solid fa-magnifying-glass' }) as HTMLElement
const searchInputDiv = createElement('div')
const heartIcon = createElement('i', {class: 'fa-regular fa-heart'})
const iconBag = createElement('i', { class: 'fa-solid fa-bag-shopping'})
searchInputDiv.append(navSearchInput, inputSeachIcon)

export const navUtilities = {
    searchInputDiv,
    heartIcon,
    iconBag,
}