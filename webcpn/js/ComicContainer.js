const $template = document.createElement('template');
$template.innerHTML = `
    <div class="comic-container">
    <div class="comic-info">
        <img src="" alt="">
        <div>
            <div class="comic-name">lol</div>
            <div class="comic-description">lolol</div>
        </div>
    </div>
    <div class="comic-detail">
        <div class="comic-author">lol</div>
        <div class="comic-latest-release">21/06/04</div>
        <div class="comic-chapters">10</div>
        <div class="comic-comments">50</div>
        <div class="comic-category">lol</div>
    </div>
    </div>
`;

export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('comic-container', ComicContainer);