// https://www.testdome.com/questions/javascript/food-ranking/128892

function setup() {
  // Write your code here
  document.querySelector("ol").addEventListener("click", (e) => {
    if (e.target.classList.contains("up")) {
      const parentLI = e.target.parentElement;
      const previousLI = parentLI.previousElementSibling;
      if (previousLI) {
        parentLI.parentNode.insertBefore(parentLI, previousLI);
      }
    } else if (e.target.classList.contains("down")) {
      const parentLI = e.target.parentElement;
      const nextLI = parentLI.nextElementSibling;
      if (nextLI) {
        parentLI.parentNode.insertBefore(nextLI, parentLI);
      }
    }
  });
}

// Example case
document.body.innerHTML = `<ol>
  <li><button class="up">Up!</button>Taco<button class="down">Down!</button></li>
  <li><button class="up">Up!</button>Pizza<button class="down">Down!</button></li>
  <li><button class="up">Up!</button>Eggs<button class="down">Down!</button></li>
</ol>`;

setup();
document.getElementsByTagName('button')[2].click();

console.log(document.body.innerHTML);
