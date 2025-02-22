// https://www.testdome.com/questions/javascript/image-gallery/76533

function setup() {
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

// Example case.
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3xXPxPR" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/4de3sQr" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
