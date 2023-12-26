const accordianItem = document.querySelectorAll(".accordian__item");
const questions = document.querySelectorAll(".accordian__question-content");
const questionSigns = document.querySelectorAll(".question-sign");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    for (let j = 0; j < accordianItem.length; j++) {
      if (i === j) {
        if (accordianItem[j].classList.contains("expand")) {
          collapse(j);
        } else {
          expand(j);
        }
      } else {
        collapse(j);
      }
    }
  });
}

// function for expnding
function expand(a) {
  accordianItem[a].classList.add("expand");
  questionSigns[a].src = "assets/images/icon-minus.svg";
}

// function for collapsing
function collapse(b) {
  accordianItem[b].classList.remove("expand");
  questionSigns[b].src = "assets/images/icon-plus.svg";
}
