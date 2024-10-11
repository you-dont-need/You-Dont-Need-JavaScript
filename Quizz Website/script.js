// script.js

// Quiz questions array
const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Saturn", "Venus", "Jupiter"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
      answer: "William Shakespeare",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
      answer: "Oxygen",
    },
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
      answer: "Nitrogen",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Atom", "Molecule", "Cell", "Organ"],
      answer: "Cell",
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["China", "Brazil", "UK", "Russia"],
      answer: "Brazil",
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
      answer: "Charles Babbage",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      answer: "Mitochondria",
    },
    {
      question: "Which language is the most spoken worldwide?",
      options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
      answer: "Mandarin Chinese",
    },
    {
      question: "What is H2O commonly known as?",
      options: ["Hydrogen Peroxide", "Water", "Salt", "Oxygen"],
      answer: "Water",
    },
    {
      question: "Who discovered penicillin?",
      options: ["Marie Curie", "Alexander Fleming", "Isaac Newton", "Albert Einstein"],
      answer: "Alexander Fleming",
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      answer: "Nile River",
    },
    {
      question: "What does DNA stand for?",
      options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Dinucleic Acid", "None of the above"],
      answer: "Deoxyribonucleic Acid",
    },
    {
      question: "Which planet is known for its rings?",
      options: ["Mars", "Venus", "Saturn", "Jupiter"],
      answer: "Saturn",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"],
      answer: "Albert Einstein",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Silver"],
      answer: "Diamond",
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      options: ["Asia", "Africa", "South America", "Europe"],
      answer: "Africa",
    },
  ];
  
  // Shuffle function using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Shuffle questions and options
  shuffleArray(questions);
  questions.forEach((question) => shuffleArray(question.options));
  
  // Initialize variables
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 120;
  let timerInterval;
  
  // DOM elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const timerEl = document.getElementById("time");
  const progressEl = document.getElementById("progress");
  const progressFill = document.getElementById("progress-fill");
  
  // Start the quiz
  function startQuiz() {
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion(questions[currentQuestionIndex]);
  }
  
  // Update timer
  function updateTimer() {
    timerEl.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      showResults();
    }
  }
  
  // Display the current question and options
  function showQuestion(question) {
    // Update progress
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    updateProgressBar();
  
    questionEl.textContent = question.question;
    optionsEl.innerHTML = "";
  
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", selectOption);
      optionsEl.appendChild(button);
  
      // Add fade-in animation
      button.style.opacity = 0;
      setTimeout(() => {
        button.style.opacity = 1;
      }, 100);
    });
  
    nextBtn.disabled = true;
  }
  
  // Update progress bar
  function updateProgressBar() {
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
  }
  
  // Handle option selection
  function selectOption(e) {
    const selectedOption = e.target.textContent;
    const correctOption = questions[currentQuestionIndex].answer;
    const optionsButtons = optionsEl.querySelectorAll(".option");
  
    if (selectedOption === correctOption) {
      score++;
      e.target.style.backgroundColor = "#27ae60"; // Green
    } else {
      e.target.style.backgroundColor = "#c0392b"; // Red
      optionsButtons.forEach((button) => {
        if (button.textContent === correctOption) {
          button.style.backgroundColor = "#27ae60"; // Green
        }
      });
    }
  
    optionsButtons.forEach((button) => {
      button.disabled = true;
    });
  
    nextBtn.disabled = false;
  }
  
  // Move to the next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      showResults();
    }
  }
  
  // Display quiz results
  function showResults() {
    clearInterval(timerInterval);
    questionEl.textContent = `Quiz Completed! You scored ${score} out of ${questions.length}.`;
    optionsEl.innerHTML = "";
  
    // Display a message based on the score
    const message = document.createElement("div");
    message.classList.add("result-message");
    const scorePercent = (score / questions.length) * 100;
  
    if (scorePercent >= 80) {
      message.textContent = "Excellent job!";
    } else if (scorePercent >= 50) {
      message.textContent = "Good effort!";
    } else {
      message.textContent = "Better luck next time!";
    }
    optionsEl.appendChild(message);
  
    nextBtn.textContent = "Restart Quiz";
    nextBtn.removeEventListener("click", nextQuestion);
    nextBtn.addEventListener("click", restartQuiz);
    nextBtn.disabled = false;
  
    // Reset progress bar
    progressFill.style.width = `100%`;
  }
  
  // Restart the quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 120;
    shuffleArray(questions);
    questions.forEach((question) => shuffleArray(question.options));
    nextBtn.textContent = "Next Question";
    nextBtn.removeEventListener("click", restartQuiz);
    nextBtn.addEventListener("click", nextQuestion);
    nextBtn.disabled = true;
    startQuiz();
  }
  
  // Event listeners
  nextBtn.addEventListener("click", nextQuestion);
  nextBtn.disabled = true;
  
  // Start the quiz when the page loads
  startQuiz();