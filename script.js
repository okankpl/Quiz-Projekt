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
        "answer_1" : "<p>",
        "answer_2" : "<paragraph>",
        "answer_3" : "<par>",
        "answer_4" : "<text>",
        "right_answer" : 1
    },
    {
        "question" : "Welches HTML-Element wird verwendet, um eine Liste mit nummerierten Elementen zu erstellen?",
        "answer_1" : "<ul>",
        "answer_2" : "<li>",
        "answer_3" : "<ol>",
        "answer_4" : "<dl>",
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
        "answer_1" : "<table>",
        "answer_2" : "<tab>",
        "answer_3" : "<tr>",
        "answer_4" : "<tb>",
        "right_answer" : 1
    }
];

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    let actualQuestion = document.getElementById('actualQuestion');
}

let currentQuestion = 0;
let idOfRightAnswer = `answer_${questions[currentQuestion]["right_answer"]}`

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
    console.log("selected answer is: ", selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log("selectedQuestionNumber is: ", selectedQuestionNumber);
    console.log("Right  answer is: ", question["right_answer"]);

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); // mit .ParentNode wird auf das übergeordnete Element zugegriffen
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById("nextBtn").disabled = false;
}
