type Attributes =  {
    [key: string]: string | number | boolean
}
/**
 * - Fonction permettant la création d'un élément HTML à partir d'un tagName et d'attributs
 * @param tagName - nom de la balise que l'on souhaite créer
 * @param attributes - Objet contenant les attributs de l'élément
 * @returns HTMLElement
 */
export function createElement (tagName: string, attributes : Attributes = {}): HTMLElement{
    const element = document.createElement(tagName)
    for (const [key, value ] of Object.entries(attributes)) {
        element.setAttribute(key, value as string)
    }
    return element
}

/**
 * - Fonction permettant de rendre un élément enfant d'un élément parent
 * @param children - l'élément que l'on souhaite rendre enfant
 * @param parent - l'élément parent
 */
export function render(children: HTMLElement, parent: HTMLDivElement ): void{
    parent.append(children)
}

export function createCard(text: string, imgSrc: string, btn: string): HTMLElement {
    const div = createElement('div', {class: 'card'})
    div.style.backgroundImage = `url('./${imgSrc}')`
    const texNode = createElement('div')
    let p = createElement('p')
    let link = createElement('a', {href: '#'}) as HTMLAnchorElement
    p.textContent = text
    link.textContent = btn
    texNode.append(p, link)
    div.append(texNode)
    return div
}