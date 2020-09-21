class Unit {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
        this.el;
        // this.registerListeners();

    }
    
    showUnit() {
        let div = document.createElement('div');
        div.className = 'unit';
        let divHealth = document.createElement('div');
        divHealth.className = 'health';
        divHealth.style.width = `${this.health}%`;
        let divStamina = document.createElement('div');
        divStamina.className = 'stamina';
        divStamina.style.width = `${this.distance}%`;
        let p = document.createElement('p');
        let divImg = document.createElement('div');
        divImg.className = 'img';
        let img = document.createElement('img');
        img.className = 'img';
        const pictures = {
            Infantryman:  'pictures/infantryman.jpg',
            Sniper: 'pictures/sniper.jpg',
            Sapper: 'pictures/sapper.jpg',
        }
        img.src = `${pictures[this.type]}`;
        

        document.body.append(div);
        div.appendChild(divHealth);
        // this.registerListeners();

        divHealth.addEventListener('click', () => {
            divHealth.style.width = `${this.health - 5}%`;
        });
        div.appendChild(divStamina);
        div.appendChild(p);
        p.innerHTML = `${this.type}`;
        div.appendChild(divImg);
        divImg.appendChild(img);

    }

    // registerListeners() {
    //     divHealth = document.getElementsByClassName('health');
    //     divHealth.addEventListener('click', () => {
    //         divHealth.style.width = `${this.health - 5}%`;
    //     });
    // }

    isReadyToMove() {
        return this.distance > 0;
    }

    isReadyToFight() {
        return this.health > 0;
    }
    
    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
    }

    clone() {
        return new Unit(this.type, this.maxHealth, this.maxDistance);
    }

};


