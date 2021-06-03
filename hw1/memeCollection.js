import Meme from "./meme.js";

class MemeCollection {
    id;
    name;
    owner;
    memes = [];

    constructor(id,name,owner) {
        this.id = id;
        this.name = name;
        this.owner = owner;
    }

    add(meme) {
        if (meme instanceof Meme) {
            this.memes.push(meme);
        } else {
            console.log("Wrong data")
        }
    }
    update(id,data) {
        for (let i = 0; i < this.memes.length; ++i) {
            if (this.memes[i].id == id) {
                this.memes[i].name = data.name;
                this.memes[i].image = data.image;
            }
        }
    }
    delete(id) {
        for (let i = 0; i < this.memes.length; ++i) {
            if (this.memes[i].id == id) {
                this.memes.splice(i,1);
            }
        }
    }
    show() {
        for (let i = 0; i < this.memes.length; ++i) {
            console.log(this.memes[i])
        }
    }
}

let meme1 = new Meme(2708,'LMAO','./lmao-dak-buh.jpg','21/06/02');
let meme2 = new Meme(2908,'Cat Meme','./catmeme.jpg','21/06/02');
meme1.update({name: 'Nà Ní', image: './nani.jpg'})

meme1.show();

let newCollection = new MemeCollection('1234','New Collection','August');
newCollection.add(meme1);
newCollection.add(meme2);

newCollection.update('2908',{name: 'Nobody cares',image: './nobodycares.jpg'})
newCollection.delete('2908');
newCollection.show();