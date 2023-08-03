const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");
const todoList = document.querySelector(".todo-list");
const popupTodoList = document.querySelector(".popup-todoList");
const exitTodoListBtn = document.querySelector(".exit-todoList-btn");
const donateUs = document.querySelector(".donate-us");
const popupDonateUs = document.querySelector(".popup-donateUs");
const exitDonateUsBtn = document.querySelector(".exit-donateUs-btn");
const merchandise = document.querySelector(".merchandise");
const popupMerchandise = document.querySelector(".popup-merchandise");
const exitMerchandiseBtn = document.querySelector(".exit-merchandise-btn");
const popupCategory = document.querySelector(".popup-category");
const sejarahBtn = document.querySelector(".sejarah-btn");
const budayaBtn = document.querySelector(".budaya-btn");

startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  popupCategory.classList.add("active");
  popupInfo.classList.remove("active");
};

sejarahBtn.onclick = () => {
  setupQuiz(questionSejarah);
};

budayaBtn.onclick = () => {
  setupQuiz(questionBudaya);
};

tryAgainBtn.onclick = () => {
  quizBox.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);

  headerScore();
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
};

let currentCategoryQuestions = null;

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${currentCategoryQuestions[index].numb}. ${currentCategoryQuestions[index].question
    }`;

  let optionTag = `<div class="option"><span>${currentCategoryQuestions[index].options[0]
    }</span></div>
        <div class="option"><span>${currentCategoryQuestions[index].options[1]
    }</span></div>
        <div class="option"><span>${currentCategoryQuestions[index].options[2]
    }</span></div>
        <div class="option"><span>${currentCategoryQuestions[index].options[3]
    }</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function setupQuiz(questions) {
  currentCategoryQuestions = questions;
  quizSection.classList.add("active");
  popupCategory.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  showQuestions(0);
  questionCounter(1);
  headerScore();
}



let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < currentCategoryQuestions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove("active");
  } else {
    showResultBox();
  }
};

const optionList = document.querySelector(".option-list");
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${currentCategoryQuestions[index].numb}. ${
    currentCategoryQuestions[index].question
  }`;

  let optionTag = `<div class="option"><span>${
    currentCategoryQuestions[index].options[0]
  }</span></div>
        <div class="option"><span>${
          currentCategoryQuestions[index].options[1]
        }</span></div>
        <div class="option"><span>${
          currentCategoryQuestions[index].options[2]
        }</span></div>
        <div class="option"><span>${
          currentCategoryQuestions[index].options[3]
        }</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}


function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = currentCategoryQuestions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
    userScore++;
    headerScore();
  } else {
    answer.classList.add("incorrect");

    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent === correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questionSejarah.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore} / ${questionSejarah.length}`;
}

function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${questionSejarah.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = (userScore / questionSejarah.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(seagreen ${progressStartValue * 3.6
      }deg, rgba(255, 255, 255, .1) 0deg)`;

    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

todoList.onclick = () => {
  main.classList.add("active");
  popupTodoList.classList.add("active");
};

exitTodoListBtn.onclick = () => {
  popupTodoList.classList.remove("active");
  main.classList.remove("active");
};

const myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}


const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);


function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Ketik sesuatu!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

donateUs.onclick = () => {
  main.classList.add("active");
  popupDonateUs.classList.add("active");
};

exitDonateUsBtn.onclick = () => {
  popupDonateUs.classList.remove("active");
  main.classList.remove("active");
};

merchandise.onclick = () => {
  main.classList.add("active");
  popupMerchandise.classList.add("active");
};

exitMerchandiseBtn.onclick = () => {
  popupMerchandise.classList.remove("active");
  main.classList.remove("active");
};

let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let lists = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector(".body-merchandise");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Kaos Pak Jokowi",
    image: "images/1.PNG",
    price: 50000,
  },
  {
    id: 2,
    name: "Bendara Merah Putih",
    image: "images/2.PNG",
    price: 35000,
  },
  {
    id: 3,
    name: "Peluit Anti Ofside",
    image: "images/3.PNG",
    price: 15000,
  },
];
let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Rp. ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
    lists.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div class="cart-title">${value.name}</div>
                <div class="cart-price">Rp. ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1
        })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1
        })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
