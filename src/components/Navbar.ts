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
        const nav = createElement('nav');
        const ul = createElement('ul');
        this.links.forEach((link) => {
            const li = createElement('li');
            const a = createElement('a', { href: `./${link}.html` });
            a.textContent = link;
            li.append(a);
            ul.append(li);
        });
        nav.append(this.logo, ul, this.aside);
        render(nav, document.querySelector<HTMLDivElement>('#app')!);
    }
}

export default Navbar;