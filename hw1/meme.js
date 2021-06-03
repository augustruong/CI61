export default class Meme {
    id;
    name;
    image;
    dateModified;

    constructor(id,name,image,dateModified) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    } 

    show() {
        let container = document.getElementById("container");
        container.innerHTML = `
        <div>${this.name}</div>
        <div>${this.dateModified}</div>
        <img src="./${this.image}" alt="">
        `
    }

    update(data) {
        this.name = data.name;
        this.image = data.image;
    }
}

