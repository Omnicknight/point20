const first = new Unit('Sniper', 50, 100);
const second = new Unit('Infantryman', 100, 30);
const third = new Unit('Sapper', 70, 80);

// console.log(first);
// first.showUnit();
// second.showUnit();
// third.showUnit();

// console.log(first.clone());
// second.clone();

const units = [first, second, third, four = second.clone()];

const team = new Squad(units);

team.showSquad();

console.log(team);


// team.showSquad();