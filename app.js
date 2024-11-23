// document.getElementById("appForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;

//     const outputDiv = document.getElementById("output");
//     outputDiv.style.display = "block";
//     outputDiv.textContent = `Hello, ${name}! Your email address is ${email}.`;

//     // Clear the form fields
//     document.getElementById("appForm").reset();
// });


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBivt4KtexB5Aftnr1AbfouG1oXychoCs0",
    authDomain: "first-assigment-c352a.firebaseapp.com",
    projectId: "first-assigment-c352a",
    storageBucket: "first-assigment-c352a.firebasestorage.app",
    messagingSenderId: "810247920184",
    appId: "1:810247920184:web:cb8f40cf76456832eea4cd",
    measurementId: "G-1ZN51JJ1CN"
  };




  const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2, // Index of the correct answer
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: 1,
    },
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "JavaScript", "C#", "Ruby"],
        answer: 1, // JavaScript
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        answer: 2, // Mitochondria
    },
    {
        question: "Which year did World War II end?",
        options: ["1945", "1939", "1942", "1948"],
        answer: 0, // 1945
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
        answer: 1, // Leonardo da Vinci
    },
    {
        question: "Which planet is the hottest in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: 1, // Venus
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: 0, // Amazon
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "400,000 km/s"],
        answer: 0, // 300,000 km/s
    },
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "J.K. Rowling"],
        answer: 0, // George Orwell
    },
    {
        question: "Which country hosted the 2020 Olympics (held in 2021)?",
        options: ["China", "Brazil", "Japan", "USA"],
        answer: 2, // Japan
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Au", "Ag", "Go"],
        answer: 1, // Au
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: 2, // Mount Everest
    },
    {
        question: "Which element does 'H' represent on the periodic table?",
        options: ["Helium", "Hydrogen", "Hafnium", "Holmium"],
        answer: 1, // Hydrogen
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: 1, // Albert Einstein
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
        answer: 0, // Tokyo
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: 2, // Pacific Ocean
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: 2, // 8
    },
    {
        question: "Which artist is famous for the Starry Night painting?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        answer: 1, // Vincent van Gogh
    },
    {
        question: "Which country has the largest population?",
        options: ["India", "USA", "China", "Russia"],
        answer: 2, // China
    },
    
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const scoreEl = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

// Load a question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    optionsContainer.innerHTML = ""; // Clear previous options
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option-btn");
        optionButton.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionButton);
    });

    nextButton.disabled = true; // Disable "Next" until an answer is selected
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];

    // Highlight correct and incorrect answers
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach((button, index) => {
        if (index === currentQuestion.answer) {
            button.style.backgroundColor = "lightgreen"; // Correct answer
        } else if (index === selectedIndex) {
            button.style.backgroundColor = "lightcoral"; // Selected wrong answer
        }
        button.disabled = true; // Disable all buttons after selection
    });

    // Update score if the answer is correct
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }

    nextButton.disabled = false; // Enable "Next" button
}

// Show results
function showResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreEl.textContent = `${score} / ${quizData.length}`;
}

// Reset and restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    loadQuestion();
}

// Handle "Next" button click
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Handle "Restart" button click
restartButton.addEventListener("click", restartQuiz);

// Initial load
loadQuestion();
