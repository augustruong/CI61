import Person from "./person.js";
import City from "./city.js";

let Hanoi = new City;
let inputForm = document.getElementById("inputForm");

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = inputForm.name.value;
    let sdt = inputForm.sdt.value;
    let posX = inputForm.posX.value;
    let posY = inputForm.posY.value;

    let person = new Person(name,sdt,posX,posY);
    console.log(person);

    Hanoi.add(person);

    inputForm.name.value = "";
    inputForm.sdt.value = "";
    inputForm.posX.value = "";
    inputForm.posY.value = "";
})

let a = new Person("A",123,1,1);
let b = new Person("B",234,2,1);
let c = new Person("C",345,5,3);
let d = new Person("D",456,2,5);
let e = new Person("E",567,1,2);

Hanoi.add(a);
Hanoi.add(b);
Hanoi.add(c);
Hanoi.add(d);
Hanoi.add(e);

let scan = document.getElementById("scan");

scan.addEventListener('click', (event) => {
    event.preventDefault();
    let sdt_infected = prompt("Nhap sdt nguoi bi nhiem:");
    Hanoi.scan(sdt_infected);
})