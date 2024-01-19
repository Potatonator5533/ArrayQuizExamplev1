let A1 = document.getElementById("A1");
let A2 = document.getElementById("A2");
let A3 = document.getElementById("A3");
let A4 = document.getElementById("A4");
let A5 = document.getElementById("A5");
let A6 = document.getElementById("A6");
let A7 = document.getElementById("A7");
let A8 = document.getElementById("A8");

function getStudent() {
    fetch('../data/quizdata.json')
        .then(
            promise => promise.json

        ).then(
            data => {
                students = data.studentList;
                console.log(students);
                return students;
            }
        )
}

async function getStudent() {
    const promise = await fetch('../data/quizdata.json');
    const data = await promise.json();

    students = data.studentList;

    return students;
}

function Answer1() {
    let studentInput = userInput.value.toLowerCase();

    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];

        if (currentStudent.firstName.toLowerCase() === studentInput) {
            matchingStudent = currentStudent
        }
    }

    // console.log(matchingStudent);

    if (matchingStudent) {
        // studentName.innerText = `${matchingStudent.firstName} ${matchingStudent.lastName}`;
        // studentNumber.innerText = matchingStudent.phoneNumber;
        // studentEmail.innerText = matchingStudent.email;
    }
}

getStudent();
Answer1();