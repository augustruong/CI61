import Person from "./person.js"

export default class City {
    persons = [];
    circlePeople = [];

    add(person) {
        if (person instanceof Person) {
            this.persons.push(person);
        }
    }

    show() {
        for (let i = 0; i<this.persons.length; ++i) {
            console.log(this.persons[i]);
        }
    }

    scan(sdt) {
        //tim index cua nguoi co sdt 
        let index = this.persons.findIndex((person)=>{
            return person.sdt == sdt;
        })

        if (index >= 0) {
            let infectedPerson = this.persons[index];
            
            for (let i = 0; i<this.persons.length; ++i) {
                if (i !== index) {
                    //check distance
                    let a = Math.abs(infectedPerson.posX - this.persons[i].posX); 
                    let b = Math.abs(infectedPerson.posY - this.persons[i].posY); 
                    let distance = Math.sqrt(a*a + b*b);
                    if (distance < 2) {
                        this.circlePeople.push(this.persons[i]);
                    }
                }
            }
            let list = "";
            for (let i = 0; i<this.circlePeople.length; ++i) {list += `${this.circlePeople[i].name} `}
            alert(`Nhung nguoi co tiep xuc gan voi ${infectedPerson.name}: ${list}`)
        }        
    }
}