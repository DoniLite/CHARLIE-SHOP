import { createCard, createElement } from "../functions/dom";
import { addFavorite, openShoppingBag } from "../functions/eventListener";

const navSearchInput = createElement('input', { type: 'search', placeholder: 'Rechercher quelque chose' }) as HTMLInputElement
const inputSeachIcon = createElement('i', { class: 'fa-solid fa-magnifying-glass' }) as HTMLElement
const searchInputDiv = createElement('div', { class: 'searchInputDiv' })
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


const firstTitle = createElement('h2')
firstTitle.textContent = 'Boutique de confection de coliers & Bracelets'
const l = [
    { 
        name: 'bracelets', 
        ext: '.jpg' 
    },
    {
        name: 'coliers',
        ext: '.png'
    },
    {
        name: 'bagues',
        ext: '.jpg'
    },
    {
        name: 'boucles d\'oreilles',
        ext: '.jpeg'
    }
]
let ul = createElement('ul')
l.forEach((e) => {
    let li = createElement('li', {class: 'listItemPresentation'})
    let a = createElement('a', {href: `./${e.name}.html`})
    a.textContent = e.name
    li.append(a)
    ul.append(li)
    li.addEventListener('click', (e) => {
        e.preventDefault()
        const allItems = document.querySelectorAll('.listItemPresentation')
        allItems.forEach((e) => {
            e.classList.remove('active')
        })
        console.log(e.currentTarget)
        const el = e.currentTarget as HTMLLIElement
        el.classList.add('active')
        const href = el.textContent?.toLowerCase()
        console.log(href)
        const img = document.querySelector<HTMLImageElement>('.imageSide')!
        const ext = l.find((e) => e.name === href)?.ext
        console.log(ext)
        img.src = `./${href}${ext}`
    })
})

const imageSide = createElement('img', { class: 'imageSide' })

const callToAction = createElement('div', {class: 'callToAction'})
const callToActionTitle = createElement('p')
const callToActionBtn = createElement('button')
callToActionTitle.textContent = 'Venez découvrir nos produits'
callToActionBtn.textContent = 'Découvrir'
callToAction.append(callToActionTitle, callToActionBtn)
const flexDiv = [] as HTMLElement[]
const firstDivChild = createElement('div')
const secondDivChild = createElement('div')
firstDivChild.append(firstTitle, ul, callToAction)
secondDivChild.append(imageSide)
flexDiv.push(firstDivChild, secondDivChild)
const cardElements = [
    {
        text: 'Bracelets',
        imgSrc: 'bracelets.jpg',
        link: 'Parcourir la collection'
    },
    {
        text: 'Coliers',
        imgSrc: 'coliers.jpg',
        link: 'Dénicher un colier'
    },
    {
        text: 'Boucles d\'oreilles',
        imgSrc: 'boucles.jpg',
        link: 'Des perles rares'
    },
    {
        text: 'Bagues',
        imgSrc: 'bagues.jpg',
        link: 'Voir'
    }
]

const carPresentaion = [] as HTMLElement[]
cardElements.forEach((card) => {
    const cardElement = createCard(card.text, card.imgSrc, card.link)
    carPresentaion.push(cardElement)
})

export const homeViewElements = {
    flexDiv,
    carPresentaion,
}
