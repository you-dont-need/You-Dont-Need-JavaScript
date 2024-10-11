// Randomizer function
function selectRandomElements(array, n) {
  if (n > array.length) {
    console.log("Error: n is greater than the length of the array.");
    return;
  }

  const randomElements = [];
  const arrayCopy = array.slice();

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    const randomElement = arrayCopy.splice(randomIndex, 1)[0];
    randomElements.push(randomElement);
  }

  return randomElements;
}

// Generate quiz
function generateQuiz(questions) {
  const questionContainer = document.getElementById("question-container");

  for (let i = 0; i < questions.length; i++) {
    const [question, option1, option2, option3, option4, answer] = questions[i];

    CorrectAnswers.push(`que${i + 1}_option${answer + 1}`);

    const questionHTML = `
      <li class = "oneque">

          <h3>${question}</h3>
          <div class="optcont">
            <input type="radio" name="que${i + 1}" id="que${
      i + 1
    }_option1" class="que${i + 1}_option_1" value="0" />
            <label class="quiz-label" for="que${
              i + 1
            }_option1">${option1}</label>
            
            <input type="radio" name="que${i + 1}" id="que${
      i + 1
    }_option2" class="que${i + 1}_option_2" value="1" />
            <label class="quiz-label" for="que${
              i + 1
            }_option2">${option2}</label>
            
            <input type="radio" name="que${i + 1}" id="que${
      i + 1
    }_option3" class="que${i + 1}_option_3" value="2" />
            <label class="quiz-label" for="que${
              i + 1
            }_option3">${option3}</label>
            
            <input type="radio" name="que${i + 1}" id="que${
      i + 1
    }_option4" class="que${i + 1}_option_4" value="3" />
            <label class="quiz-label" for="que${
              i + 1
            }_option4">${option4}</label>
          </div>
      </li>
    `;

    questionContainer.insertAdjacentHTML("beforeend", questionHTML);
  }
}

// Generate Results
function generateResults(questions) {
  const questionContainer = document.getElementById("answersct");

  for (let i = 0; i < questions.length; i++) {
    const [question, option1, option2, option3, option4, answer] = questions[i];
    const questionHTML = `
      <li>
        <div class="questiondisplay">
          <h3>${question}</h3>
          <div class="optcont">
            <div class="que${i + 1}_option1 optionr"  >${option1}</div>
            <div class="que${i + 1}_option2 optionr"  >${option2}</div>
            <div class="que${i + 1}_option3 optionr"  >${option3}</div>
            <div class="que${i + 1}_option4 optionr"  >${option4}</div>
          </div>
        </div>
      </li>
    `;

    questionContainer.insertAdjacentHTML("beforeend", questionHTML);
  }
}
let masterArray = [];
let userData = {};
let randomQuestions = [];
let CorrectAnswers = [];
let selectedWrongAnswers = [];
let selectedCorrectAnswers = [];
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("home-container").style.display = "block";
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "none";

  const typeSelect = document.getElementById("type");
  const catagorybox = document.querySelector(".catagory");

  typeSelect.addEventListener("change", function () {
    if (typeSelect.value === "mixed") {
      // Hide elements
      catagorybox.style.display = "none";
    } else if (typeSelect.value === "categories") {
      // Show elements
      catagorybox.style.display = "flex";
    }
  });
  // Ensure "Mixed" is selected by default
  // typeSelect.value = "mixed";
  // typeSelect.dispatchEvent(new Event("change"));

  document.getElementById("setup").addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve user input
    const nameInput = document.querySelector('input[type="text"]');
    const questionSelect = document.getElementById("questions");
    const questionType = document.getElementById("type");
    const selectedCategories = Array.from(
      document.querySelectorAll('input[name="select"]:checked')
    ).map((checkbox) => checkbox.nextElementSibling.textContent);

    // Store user data
    userData = {
      name: nameInput.value,
      numQuestions: parseInt(questionSelect.value),
      questionType: questionType.value,
      categories: selectedCategories,
    };

    // Generate quiz based on user selections
    if (userData.questionType === "mixed") {
      masterArray = masterArray.concat(
        generalKnowledgeQuestions,
        historyQuestions,
        geographyQuestions,
        mathLogicQuestions,
        scienceTechQuestions,
        sportsQuestions,
        movieQuestions,
        literatureQuestions,
        musicQuestions
      );
    } else {
      userData.categories.forEach((category) => {
        switch (category) {
          case "General Knowledge":
            masterArray = masterArray.concat(generalKnowledgeQuestions);
            break;
          case "History":
            masterArray = masterArray.concat(historyQuestions);
            break;
          case "Geography":
            masterArray = masterArray.concat(geographyQuestions);
            break;
          case "Maths and Logic":
            masterArray = masterArray.concat(mathLogicQuestions);
            break;
          case "Science and Technology":
            masterArray = masterArray.concat(scienceTechQuestions);
            break;
          case "Sports":
            masterArray = masterArray.concat(sportsQuestions);
            break;
          case "Movies and Entertainment":
            masterArray = masterArray.concat(movieQuestions);
            break;
          case "Literature":
            masterArray = masterArray.concat(literatureQuestions);
            break;
          case "Music":
            masterArray = masterArray.concat(musicQuestions);
            break;
          default:
            break;
        }
      });
    }

    // Hide setup and display the quiz
    document.getElementById("home-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("result-container").style.display = "none";

    const totalQuestions = userData.numQuestions;
    randomQuestions = selectRandomElements(masterArray, totalQuestions); // Assign value to randomQuestions
    generateQuiz(randomQuestions);
  });

  const Slider = document.querySelector("#question-container");
  const AllDivs = document.querySelectorAll(".oneque");
  let size;
  let counter = 0;
  const nextBtn = document.querySelector("#nextBtn");

  document
    .getElementById("quizz-submit")
    .addEventListener("click", function (e) {
      if (counter == randomQuestions.length - 1) {
        e.preventDefault();

        let correctAnswers = 0;

        const selectedOptions = document.querySelectorAll(
          'input[type="radio"]:checked'
        );

        selectedOptions.forEach(function (selectedOption) {
          const questionIndex =
            parseInt(selectedOption.name.replace("que", "")) - 1;
          const answer = randomQuestions[questionIndex][5];
          if (parseInt(selectedOption.value) === parseInt(answer)) {
            correctAnswers++;
            selectedCorrectAnswers.push(selectedOption.id);
          } else {
            selectedWrongAnswers.push(selectedOption.id);
          }
        });

        const totalQuestions = userData.numQuestions;
        const resultPercentage = (correctAnswers / totalQuestions) * 100;
        let greet;
        if (parseInt(resultPercentage) > 80) {
          greet = `Congratulations!! ${userData.name}, `;
        } else if (
          parseInt(resultPercentage) > 40 &&
          parseInt(resultPercentage) <= 80
        ) {
          greet = `Good! ${userData.name}, `;
        } else {
          greet = `Sorry! ${userData.name} But,`;
        }
        const resultMessage = `${greet}You got ${correctAnswers} out of ${totalQuestions} correct. (${resultPercentage}%)`;
        console.log(CorrectAnswers);
        console.log(selectedWrongAnswers);
        document.getElementById("quiz-container").style.display = "none";
        generateResults(randomQuestions);
        window.scroll(0, 0);
        changeoptioncolors();
        document.getElementById("result-container").style.display = "block";
        let resultdisplay = document.getElementById("result-display");
        resultdisplay.innerHTML = resultMessage;
      } else {
        Slider.style.transition = "transform 0.4s ease-in-out";
        size = Slider.clientWidth;
        Slider.style.transform = `translateX(` + -size * (counter + 1) + `px)`;
        counter++;
        console.log(counter, randomQuestions.length);
        if (counter == randomQuestions.length - 1) {
          document.getElementById("quizz-submit").value = "Submit";
        } else {
          document.getElementById("quizz-submit").value = "Next Question";
        }
      }
    });
});

let resetbutton2 = document.getElementById("restart2");
resetbutton2.addEventListener("click", () => {
  location.reload();
});
let resetbutton1 = document.getElementById("restart1");
resetbutton1.addEventListener("click", () => {
  location.reload();
});

function changeoptioncolors() {
  let wrans = [];
  let i = 0;
  selectedWrongAnswers.forEach(function (classnm) {
    document.querySelector("." + classnm).style.backgroundColor = "red";
    wrans.push(parseInt(classnm[3]));
  });
  CorrectAnswers.forEach(function (classnm) {
    document.querySelector("." + classnm).style.backgroundColor = "lime";
    if (
      !selectedCorrectAnswers.includes(classnm) &&
      wrans[i++] != parseInt(classnm[3])
    ) {
      document.querySelector("." + classnm).style.backgroundColor = "orange";
    }
  });
}
