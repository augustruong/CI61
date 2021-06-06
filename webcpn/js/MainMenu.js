const $template = document.createElement('template');
$template.innerHTML = `
    <div class="main-menu">
        <div class="menu-item"><a href="./index.html">Home</a></div>
        <div class="menu-item"><a href="./about.html">About</a></div>
        <div class="menu-item"><a href="./contact.html">Contact</a></div>
    </div>
`

export default class MainMenu extends HTMLElement{
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true))

        this.$menuItems = this.getElementsByClassName('menu-item')
    }

    //khai bao thuoc tinh cho the
    static get observedAttributes() {
        return ['active']
    }

    //chay khi gia tri thuoc tinh thay doi 
    attributeChangedCallback(attrName, oldValue, newValue) {
        //console.log(`Thuoc tinh ${attrName} co gtri la ${newValue}`);
        if (attrName=='active') {
            //Delete all highlight
            for (let $menuItems of this.$menuItems) {
                $menuItems.classList.remove('highlight');
            }

            //Add highlight
            this.$menuItems[newValue]?.classList.add('highlight');

            //null safe operator ?

        }
    }
}

window.customElements.define('main-menu', MainMenu);