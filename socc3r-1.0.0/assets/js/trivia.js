//quizP de world cup

const quizPremier = [   // Add more questions here...
    {
        questionP: "¿Cuántos clubes compitieron en la temporada inaugural de la Premier League?",
        optionsP: ["22.", "20.", "26.", "Ninguna de las anteriores."],
        answerP: "22."
    },
    {

        questionP: "¿Qué equipo ganó el primer título de la Premier League?",
        optionsP: ["Manchester City.", "Manchester United.", "Liverpool.", "Ninguna de las anteriores."],
        answerP: "Manchester United."
    },
    {

        questionP: "¿Cuándo fue la temporada inaugural de la Premier League?",
        optionsP: ["1992-93.", "1993.", "1993-94.", "Ninguna de las anteriores."],
        answerP: "1992-93."
    },

];

const quizWorld = [   // Add more questions here...
    {
        questionW: "¿Qué país ganó la primera Copa Mundial en 1930?",
        optionsW: ["España", "Argentina.", "Uruguay.", "Ninguna de las anteriores."],
        answerW: "Uruguay."
    },
    {
        questionW: "¿Qué país ha ganado más Copas Mundiales?",
        optionsW: ["Argentina.", "Brazil.", "Alemania.", "Ninguna de las anteriores."],
        answerW: "Brazil."
    },
    {
        questionW: "¿El récord de goles en la Copa Mundial es de 16, ¿quién lo marcó?",
        optionsW: ["Miroslav Klose.", "Cristiano Ronaldo.", "Kylian Mbappé.", "Ninguna de las anteriores."],
        answerW: "Miroslav Klose."
    },

];

const quizChampions = [   // Add more questions here...
    {
        questionC: "¿Qué club ha ganado más títulos de la Champions League?",
        optionsC: ["Barcelona.", "Real Madrid.", "Chelsea.", "Ninguna de las anteriores."],
        answerC: "Real Madrid."
    },
    {
        questionC: "¿En qué temporada se renombró la Copa de Europa como Champions League?",
        optionsC: ["1993.", "1991-92.", "1992-93.", "Ninguna de las anteriores."],
        answerC: "1992-93."
    },
    {
        questionC: "¿Qué jugador de campo participó en la final de la Champions League en tres décadas diferentes?",
        optionsC: ["Ryan Giggs.", "Lamine Yamal.", "Kylian Mbappé.", "Ninguna de las anteriores."],
        answerC: "Ryan Giggs."
    },

];

//PREMIER
const questionElementP = document.getElementById("questionP");
const optionsElementP = document.getElementById("optionsP");
const submitButtonP = document.getElementById("submitP");
let currentQuestionP = 0;
let scoreP = 0;

//WORLD
const questionElementW = document.getElementById("questionW");
const optionsElementW = document.getElementById("optionsW");
const submitButtonW = document.getElementById("submitW");
let currentQuestionW = 0;
let scoreW = 0;

//CHAMPIONS
const questionElementC = document.getElementById("questionC");
const optionsElementC = document.getElementById("optionsC");
const submitButtonC = document.getElementById("submitC");
let currentQuestionC = 0;
let scoreC = 0;


//premier
function showQuestionPremier() {
    const questionP = quizPremier[currentQuestionP]; questionElementP.innerText = questionP.questionP;
    optionsElementP.innerHTML = ""; questionP.optionsP.forEach(optionP => {
        const buttonP = document.createElement("button"); buttonP.innerText = optionP;
        optionsElementP.appendChild(buttonP);
        buttonP.addEventListener("click", selectAnswerP);
    });
}

function selectAnswerP(e) {
    const selectedButton = e.target;
    const answerP = quizPremier[currentQuestionP].answerP;

    if (selectedButton.innerText === answerP) {
        scoreP++;
    }

    currentQuestionP++;

    if (currentQuestionP < quizPremier.length) {
        showQuestionPremier();
    } else {
        showResultPremier();
    }
}

function showResultPremier() {
    quizP.innerHTML = `
        <h1> Quiz terminado!</h1 >
            <p>Tus puntos: ${scoreP}/${quizPremier.length}</p>
    `;
}
showQuestionPremier();


//world cup
function showQuestionWorld() {
    const questionW = quizWorld[currentQuestionW]; questionElementW.innerText = questionW.questionW;
    optionsElementW.innerHTML = ""; questionW.optionsW.forEach(optionW => {
        const buttonW = document.createElement("button"); buttonW.innerText = optionW;
        optionsElementW.appendChild(buttonW);
        buttonW.addEventListener("click", selectAnswerW);
    });
}

function selectAnswerW(e) {
    const selectedButton = e.target;
    const answerW = quizWorld[currentQuestionW].answerW;

    if (selectedButton.innerText === answerW) {
        scoreW++;
    }

    currentQuestionW++;

    if (currentQuestionW < quizWorld.length) {
        showQuestionWorld();
    } else {
        showResultWorld();
    }
}

function showResultWorld() {
    quizW.innerHTML = `
        <h1> Quiz terminado!</h1 >
            <p>Tus puntos: ${scoreW}/${quizWorld.length}</p>
    `;
}
showQuestionWorld();


//champions
function showQuestionChampions() {
    const questionC = quizChampions[currentQuestionC]; questionElementC.innerText = questionC.questionC;
    optionsElementC.innerHTML = ""; questionC.optionsC.forEach(optionC => {
        const buttonC = document.createElement("button"); buttonC.innerText = optionC;
        optionsElementC.appendChild(buttonC);
        buttonC.addEventListener("click", selectAnswerC);
    });
}

function selectAnswerC(e) {
    const selectedButton = e.target;
    const answerC = quizChampions[currentQuestionC].answerC;

    if (selectedButton.innerText === answerC) {
        scoreC++;
    }

    currentQuestionC++;

    if (currentQuestionC < quizChampions.length) {
        showQuestionChampions();
    } else {
        showResultChampions();
    }
}

function showResultChampions() {
    quizC.innerHTML = `
        <h1> Quiz terminado!</h1 >
            <p>Tus puntos: ${scoreC}/${quizChampions.length}</p>
    `;
}
showQuestionChampions();
