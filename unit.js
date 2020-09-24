class Unit {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
        this.el;

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

        divHealth.addEventListener('click', (e) => {      
                divHealth.style.width = `${this.health = this.health - 5}%`;
                if(this.health < 5) {
                div.style.backgroundColor = 'grey';
                div.style.pointerEvents = 'none';
            };

        });
        div.appendChild(divStamina);

        divStamina.addEventListener('click', (e) => {      
            divStamina.style.width = `${this.distance = this.distance - 5}%`;
            if(this.distance < 5) {
            divStamina.style.width = '100%';
            divStamina.style.backgroundColor = 'grey';
            divStamina.style.pointerEvents = 'none';
        };

    });
        div.appendChild(p);
        p.innerHTML = `${this.type}`;
        div.appendChild(divImg);
        divImg.appendChild(img);

    }

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


