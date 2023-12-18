// Summan av siffror (3p)
// Skriv klart funktionen som tar en array av siffror som input
// och returnerar summan av alla siffror.

function sum(numbers) {
  // Din kod här:
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

console.log(sum([1, 2, 3])); // ska logga 6
