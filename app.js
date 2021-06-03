class Person {
    name;
    age;
    favorite;

    constructor(name,age,favorite){
        this.name = name;
        this.age = age;
        this.favorite = favorite;
    }

    eat(food) {
        console.log(`Wanna eat ${food}`)
    }

    sleep(hour) {
        console.log(`Sleep for ${hour}`)
    }
}

class Boy extends Person {
    handsome;
    girlFriends;
    
    constructor(name,age,favorite,handsome) {
        super(name,age,favorite,handsome);
        this.handsome = handsome;
    }

    cook(food) {
        console.log(`Can cook ${food}`)
    };
    work(job) {
        console.log(`Working as a ${job}`)
    };
}

class GoodBoy extends Boy {
    good;

    constructor(name,age,favorite,handsome,good) {
        super(name,age,favorite,handsome,good);
        this.good = good;
    }

    readBooks(book) {
        console(`Like to read ${book}`)
    }
}

class BadBoy extends Boy {
    bad;

    constructor(name,age,favorite,handsome,bad) {
        super(name,age,favorite,handsome,bad);
        this.bad = bad;
    }

    racing(speed) {
        console(`Like to race at ${speed}km/h`)
    }
}

class Girl extends Person {
    beauty;
    boyFriends;
    
    constructor(name,age,favorite,beauty) {
        super(name,age,favorite,beauty);
        this.beauty = beauty;
    }

    cook(food) {
        console.log(`Can cook ${food}`)
    };
    shopping(obj) {
        console.log(`${obj}'s shoppaholic`)
    };
}

class GoodGirl extends Girl {
    timeAtHome;
    constructor(name,age,favorite,beauty,timeAtHome) {
        super(name,age,favorite,beauty,timeAtHome);
        this.timeAtHome = timeAtHome;
    }
}

class BadGirl extends Girl {
    playBillard;
    constructor(name,age,favorite,beauty,playBillard) {
        super(name,age,favorite,beauty,playBillard);
        this.playBillard = playBillard;
    }
}

let goodBoi = new GoodBoy("Trai Ngoan",20,"Reading Books","7/10","good 10/10");
goodBoi.readBooks("novels");

let badBoi = new BadBoy("Trai Deu",20,"Smoking","10/10","bad 10/10");
badBoi.racing(100);
