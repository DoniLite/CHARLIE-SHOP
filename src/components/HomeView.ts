import { createElement, render } from "../functions/dom";

export class HomeView {
    private group1: HTMLElement[];
    private group2: HTMLElement[];
    private group3: HTMLElement[];

    constructor() {
        this.group1 = [];
        this.group2 = [];
        this.group3 = [];
    }

    addToGroup1(...elements: HTMLElement[]) {
        this.group1.push(...elements);
    }

    addToGroup2(...elements: HTMLElement[]) {
        this.group2.push(...elements);
    }

    addToGroup3(...elements: HTMLElement[]) {
        this.group3.push(...elements);
    }

    render() {
        const container = createElement('div', {class: 'container'}) as HTMLDivElement;

        const group1Container = createElement('div', {class: 'group1'});
        this.group1.forEach(element => group1Container.appendChild(element));
        container.appendChild(group1Container);

        const carouselContainer = createElement('div', {class: 'group2'});
        this.group2.forEach(element => carouselContainer.appendChild(element));
        container.appendChild(carouselContainer);

        const group3Container = createElement('div', {class: 'group3'});
        this.group3.forEach(element => group3Container.appendChild(element));
        container.appendChild(group3Container);

        render(container, document.querySelector<HTMLDivElement>('#app')!);
    }
}