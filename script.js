const first = new Unit('Sniper', 50, 100);
const second = new Unit('Infantryman', 100, 30);
const third = new Unit('Sapper', 70, 80);


first.showUnit();
second.showUnit();
third.showUnit();

const units = [first, second, third];

const team = new Squad(units);

team.showSquad();

console.log(team);


// team.showSquad();