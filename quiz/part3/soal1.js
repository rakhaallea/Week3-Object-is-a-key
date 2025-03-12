function changeMe(arr) {
    const person = arr;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const newObject = {};
    // you can only write your code here!
    if (person.length > 0) {
        for (let i = 0; i < person.length; i++) {
            const fullName = `${person[i][0]} ${person[i][1]}`;
            newObject[fullName] = {
                firstName: person[i][0],
                lastName: person[i][1],
                gender: person[i][2],
                age: currentYear - person[i][3] || 'Invalid Birth Year',
            }
        }
    }

    console.log(newObject);
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); // ""