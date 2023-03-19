let value = 0;
let pcCount = localStorage.getItem("pccount") || 0;
let userCount = localStorage.getItem("usercount") || 0;
document.getElementById("ruleButton").addEventListener("click", function () {
  let div = document.getElementById("rule");
  div.style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function () {
  let div2 = document.getElementById("rule");
  div2.style.display = "none";
});
document.getElementById("stone1").addEventListener("click", function () {
  let initial = document.getElementById("init");
  let main = document.getElementById("mainCont");
  let div3 = document.getElementById("stone2");
  let div4 = document.getElementById("scissors2");
  let div5 = document.getElementById("paper2");
  initial.style.display = "none";
  main.style.display = "block";
  div3.style.display = "block";
  div4.style.display = "none";
  div5.style.display = "none";
  value = 1;
  mainFuntion();
});
document.getElementById("scissors1").addEventListener("click", function () {
  let initial = document.getElementById("init");
  let main = document.getElementById("mainCont");
  let div3 = document.getElementById("stone2");
  let div4 = document.getElementById("scissors2");
  let div5 = document.getElementById("paper2");
  initial.style.display = "none";
  main.style.display = "block";
  div3.style.display = "none";
  div4.style.display = "block";
  div5.style.display = "none";
  value = 2;
  mainFuntion();
});
document.getElementById("paper1").addEventListener("click", function () {
  let initial = document.getElementById("init");
  let main = document.getElementById("mainCont");
  let div3 = document.getElementById("stone2");
  let div4 = document.getElementById("scissors2");
  let div5 = document.getElementById("paper2");
  initial.style.display = "none";
  main.style.display = "block";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "block";
  value = 3;
  mainFuntion();
});
document.getElementById("playagain").addEventListener("click", function () {
  let initial = document.getElementById("init");
  let main = document.getElementById("mainCont");
  let div7 = document.getElementById("nextButton");
  initial.style.display = "block";
  main.style.display = "none";
  div7.style.display = "none";
});
document.getElementById("replay").addEventListener("click", function () {
  let initial = document.getElementById("init");
  let main = document.getElementById("mainCont");
  let div7 = document.getElementById("nextButton");
  initial.style.display = "block";
  main.style.display = "none";
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function mainFuntion() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;//Computer generating random
  console.log(randomNumber);
  if (randomNumber === 1) {
    let div3 = document.getElementById("stone3");
    let div4 = document.getElementById("scissors3");
    let div5 = document.getElementById("paper3");
    div3.style.display = "block";
    div4.style.display = "none";
    div5.style.display = "none";
    if (value == 2) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "none";
      div4.style.display = "block";
      div5.textContent = "YOU LOST";
      div6.style.display = "block";
      div7.style.display = "none";
      div8.style.display = "block";
      div9.style.display = "none";
      div5.style.marginLeft = "-0.4rem";
      pcCount++;
      localStorage.setItem("pccount", pcCount);
      document.getElementById("computerScore").textContent = pcCount;
    } else if (value == 3) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "block";
      div4.style.display = "none";
      div5.textContent = "YOU WON";
      div6.style.display = "block";
      div7.style.display = "block";
      div8.style.display = "block";
      div9.style.display = "none";
      div5.style.marginLeft = "-0.4rem";
      userCount++;
      localStorage.setItem("usercount", userCount);
      document.getElementById("yourscorecount").textContent = userCount;
    } else if (value == 1) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "none";
      div4.style.display = "none";
      div7.style.display = "none";
      div8.style.display = "none";
      div9.style.display = "block";
      div5.textContent = "TIED UP";
      div5.style.marginLeft = "2.4rem";
      div5.style.marginTop = "2rem";
      div5.style.position = "relative";
      div6.style.display = "none";
    }
  } else if (randomNumber === 2) {
    let div3 = document.getElementById("stone3");
    let div4 = document.getElementById("scissors3");
    let div5 = document.getElementById("paper3");
    div3.style.display = "none";
    div4.style.display = "block";
    div5.style.display = "none";
    if (value == 3) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "none";
      div4.style.display = "block";
      div5.textContent = "YOU LOST";
      div6.style.display = "block";
      div7.style.display = "none";
      div8.style.display = "block";
      div9.style.display = "none";
      div5.style.marginLeft = "-0.4rem";
      pcCount++;
      localStorage.setItem("pccount", pcCount);
      document.getElementById("computerScore").textContent = pcCount;
    } else if (value == 1) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "block";
      div4.style.display = "none";
      div5.textContent = "YOU WON";
      div6.style.display = "block";
      div7.style.display = "block";
      div8.style.display = "block";
      div9.style.display = "none";
      div5.style.marginLeft = "-0.4rem";
      userCount++;
      localStorage.setItem("usercount", userCount);
      document.getElementById("yourscorecount").textContent = userCount;
    } else if (value == 2) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "none";
      div4.style.display = "none";
      div7.style.display = "none";
      div8.style.display = "none";
      div9.style.display = "block";
      div5.textContent = "TIED UP";
      div5.style.marginLeft = "2.4rem";
      div5.style.marginTop = "2rem";
      div5.style.position = "relative";
      div6.style.display = "none";
    }
  } else if (randomNumber === 3) {
    let div3 = document.getElementById("stone3");
    let div4 = document.getElementById("scissors3");
    let div5 = document.getElementById("paper3");
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "block";
    if (value == 1) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "none";
      div4.style.display = "block";
      div5.textContent = "YOU LOST";
      div6.style.display = "block";
      div7.style.display = "none";
      div8.style.display = "block";
      div9.style.display = "none";
      div5.style.marginLeft = "-0.4rem";
      pcCount++;
      localStorage.setItem("pccount", pcCount);
      document.getElementById("computerScore").textContent = pcCount;
    } else if (value == 2) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");

      div3.style.display = "block";
      div4.style.display = "none";
      div5.textContent = "YOU WON";
      div6.style.display = "block";
      div7.style.display = "block";
      div8.style.display = "block";
      div9.style.display = "none";
      div5.style.marginLeft = "-0.4rem";
      userCount++;
      localStorage.setItem("usercount", userCount);
      document.getElementById("yourscorecount").textContent = userCount;
    } else if (value == 3) {
      let div3 = document.getElementById("circleContainer1");
      let div4 = document.getElementById("circleContainer2");
      let div5 = document.getElementById("changeableText");
      let div6 = document.getElementById("changeonTie");
      let div7 = document.getElementById("nextButton");
      let div8 = document.getElementById("playagain");
      let div9 = document.getElementById("replay");
      div3.style.display = "none";
      div4.style.display = "none";
      div7.style.display = "none";
      div8.style.display = "none";
      div9.style.display = "block";
      div5.textContent = "TIED UP";
      div5.style.marginLeft = "2.4rem";
      div5.style.marginTop = "2rem";
      div5.style.position = "relative";
      div6.style.display = "none";
    }
  }
}
function gonext() {
  window.location.href = "./winning.html";
}
function goback() {
  window.location.href = "./index.html";
}
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
  localStorage.clear();
  location.reload();
});
document.getElementById('computerScore').textContent = pcCount;
document.getElementById('yourscorecount').textContent =userCount;