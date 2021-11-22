const mike = { name: 'Mike' };
const odd = [1];
const morning = function () {
    return 'Greetings!';
}
morning.info = 'Morning Greeting function';


const evening = morning;
const john = mike;
const even = odd;

// reassign to new variable and modify value
let kate = mike;
kate = { name: 'Kate' };

evening.info = 'Evening Greeting function';
john.name = 'John';
even[0] = 3;



console.log('First', morning.info, mike, odd);
console.log('Second', evening.info, john, even);

