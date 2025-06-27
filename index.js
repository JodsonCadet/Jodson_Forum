/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const arrFreelancers = [];
let avgRate; 
const $app = document.querySelector("#app");

const createFreelancer = () => {
    const person = {
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
        rate: Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min),
    };
    return person;
};
console.log(createFreelancer());

for (let i = 0; i < NUM_FREELANCERS; i++) {
    arrFreelancers.push(createFreelancer());
}
console.log(arrFreelancers)

const GetAvgRate = (people) => {
    let sumOfRates = 0;
    people.forEach((person, index) => {
    sumOfRates = sumOfRates + person.rate;
    }) 
    return sumOfRates/NUM_FREELANCERS;
};
avgRate = GetAvgRate(arrFreelancers);
// console.log(avgRate);
const $heading = document.createElement("H1");
const $avg = document.createElement("h2");
const $table = document.createElement("table");
$app.append($table);

$table.innerHTML = `
        <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Rate</th>
        </tr>
    `;

    const CreateRow = (person) => {
        const $tr = document.createElement("tr");
        const $name = document.createElement("td");
        const $occupation = document.createElement("td");
        const $rate = document.createElement("td");

        $name.textContent = person.name; 
        $occupation.textContent = person.occupation;
        $rate.textContent = person.rate;

        $tr.append($name);
        $tr.append($occupation);
        $tr.append($rate);
        $table.append($tr);
    } 
    for (let i = 0; i < NUM_FREELANCERS; i++) {
    CreateRow(arrFreelancers[i]);
    };