const first = new Unit('Sniper', 50, 100);
const second = new Unit('Infantryman', 100, 30);
const third = new Unit('Sapper', 70, 80);


const units = [first, second, third, four = second.clone()];

const team = new Squad(units);

team.showSquad();

console.log(team);