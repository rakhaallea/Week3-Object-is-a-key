let studentDatas = [['John', 'Doe'], ['Joe', 'Anna']]
let newStudentDatas = [];

for (let i = 0; i < studentDatas.length; i++) {
    let data = {
        firstName: studentDatas[i][0],
        lastName: studentDatas[i][1],
    }
    newStudentDatas.push(data)

}

console.log(newStudentDatas);