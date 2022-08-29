let quizBox = [
    {
        question: '问题一',
        a: '答案1a',
        b: '答案1b',
        c: '答案1c',
        d: '答案1d',
        correct: 'a'
    },
    {
        question: '问题二',
        a: '答案2a',
        b: '答案2b',
        c: '答案2c',
        d: '答案2d',
        correct: 'a'
    },
    {
        question: '问题三',
        a: '答案3a',
        b: '答案3b',
        c: '答案3c',
        d: '答案3d',
        correct: 'c'
    },
    {
        question: '问题四',
        a: '答案4a',
        b: '答案4b',
        c: '答案4c',
        d: '答案4d',
        correct: 'd'
    },
]

let choices = document.querySelectorAll('.choiceBox label');
let btn = document.querySelector('.submit');
let question = document.querySelector('h2');
let inputs = document.querySelectorAll('input');
let counter = 0;
let quizBox_num = 0;
let correct;
let score = 0;
iterlization();

btn.addEventListener('click', function () {
    if (quizBox_num < 3) {
        quizBox_num++;
        choiseAnswerAndScroce();
        iterlization();
        console.log(score);
        inputs.forEach(item => item.checked = false);
    } else {
        choiseAnswerAndScroce();
        console.log(score);
        this.parentElement.innerHTML = `
            <h2>你一共答对了${score}/${quizBox.length}道题</h2>
        `
    }
})

function iterlization() {
    for (let i = 0; i <= quizBox.length + 1; i++) {
        if (i == 0) {
            question.innerHTML = Object.values(quizBox[quizBox_num])[i]
        } else if (i == 5) {
            correct = Object.values(quizBox[quizBox_num])[i]
        } else {
            choices[i - 1].innerHTML = Object.values(quizBox[quizBox_num])[i]
        }
    }
}

function choiseAnswerAndScroce() {
    let answer;
    for (let input of inputs) {
        if (input.checked == true) {
            answer = input.id;
            if (answer === correct) {
                score++;
            }
        }
    }
}