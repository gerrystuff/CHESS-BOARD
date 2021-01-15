export default class Board {
    constructor( selector, dimensions) {
        this.element = document.querySelector(selector);
        this.element.classList.add('board');

        if(dimensions){
            this.element.style.width= `${dimensions.width}px`;
            this.element.style.height = `${dimensions.height}px`;
        } else {
            this.element.style.width= '100%';
            this.element.style.height = '100%';
        }
        
    }
}


