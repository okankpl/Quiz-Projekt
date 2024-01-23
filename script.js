let questions = [
    {
        "question" : "Wer hat HTML erfunden?",
        "answer_1" : "Robbie Williams",
        "answer_2" : "Lady Gaga",
        "answer_3" : "Tim Berners-Lee",
        "answer_4" : "Justin Bieber",
        "right_answer" : 3
    },
    {
        "question" : "Welches Tag wird verwendet, um einen Absatz in HTML zu erstellen?",
        "answer_1" : "&lt;p&gt",
        "answer_2" : "&lt;paragraph&gt",
        "answer_3" : "&lt;par&gt",
        "answer_4" : "&lt;text&gt",
        "right_answer" : 1
    },
    {
        "question" : "Welches HTML-Element wird verwendet, um eine Liste mit nummerierten Elementen zu erstellen?",
        "answer_1" : "&lt;ul&gt",
        "answer_2" : "&lt;li&gt",
        "answer_3" : "&lt;ol&gt",
        "answer_4" : "&lt;dl&gt",
        "right_answer" : 3
    },
    {
        "question" : "Welches Attribut wird verwendet, um einen Hyperlink in HTML zu setzen?",
        "answer_1" : "link",
        "answer_2" : "href",
        "answer_3" : "src",
        "answer_4" : "target",
        "right_answer" : 2 
    },
    {
        "question" : "Welches Tag wird verwendet, um eine Tabelle in HTML zu erstellen?",
        "answer_1" : "&lt;table&gt",
        "answer_2" : "&lt;tab&gt",
        "answer_3" : "&lt;tr&gt",
        "answer_4" : "&lt;tb&gt",
        "right_answer" : 1
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("currentQuestion").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); // mit .ParentNode wird auf das übergeordnete Element zugegriffen
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
    document.getElementById("answer_1").parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById("answer_2").parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById("answer_3").parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById("answer_4").parentNode.classList.remove('bg-success', 'bg-danger');

    currentQuestion++;
    showQuestion();
}
