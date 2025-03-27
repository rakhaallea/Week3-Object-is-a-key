function highestScore(students) {
    // Code disini

    if (students.length <= 0) {
        return {};
    }
    const result = {};

    let maxFoxes = [];
    let maxWolves = [];
    let maxTigers = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].class === 'foxes') {
            maxFoxes.push(students[i].score);
        }
        if (students[i].class === 'wolves') {
            maxWolves.push(students[i].score);
        }
        if (students[i].class === 'tigers') {
            maxTigers.push(students[i].score);
        }
    }

    for (let i = 0; i < students.length; i++) {
        if (students[i].class === 'foxes') {
            let highest = Math.max(...maxFoxes);

            if (students[i].score === highest) {
                result.foxes = {
                    name: students[i].name,
                    score: students[i].score,
                }
            }
        }
        if (students[i].class === 'wolves') {
            let highest = Math.max(...maxWolves);

            if (students[i].score === highest) {
                result.wolves = {
                    name: students[i].name,
                    score: students[i].score,
                }
            }
        }
        if (students[i].class === 'tigers') {
            let highest = Math.max(...maxTigers);

            if (students[i].score === highest) {
                result.tigers = {
                    name: students[i].name,
                    score: students[i].score,
                }
            }
        }
    }

    return result;
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}