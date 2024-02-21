import { createElement, render } from "../functions/dom";

class Navbar {
    private links: string[];
    private logo: HTMLImageElement
    private aside: HTMLDivElement

    constructor(links: string[], logo: HTMLImageElement, aside: HTMLDivElement) {
        this.links = links;
        this.logo = logo;
        this.aside = aside;
    }

    render(): void {
        const nav = createElement('nav', { class: 'flex w-full p-6 justify-between' });
        const ul = createElement('ul', { class: 'flex fredoka-400 text-xl w-20 ' });
        this.links.forEach((link) => {
            const li = createElement('li', { class: 'mx-6 hover:text-teal-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110'});
            const a = createElement('a', { href: `./${link}.html`, class:'font-bold' });
            a.textContent = link;
            li.append(a);
            ul.append(li);
        });
        nav.append(this.logo, ul, this.aside);
        render(nav, document.querySelector<HTMLDivElement>('#app')!);
    }
}

export default Navbar;