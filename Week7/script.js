/* -------------------------------
   PART 2: JavaScript Functions
--------------------------------- */

// Global variable example
let box = document.querySelector(".box");

// Function with parameters & return value
function calculateScale(factor, offset) {
  // Local variable
  let scaleValue = factor + offset;
  return `scale(${scaleValue})`;
}

// Reusable function to animate box
function animateBox() {
  // Add/remove bounce animation class
  box.classList.add("bouncing");

  // Remove after animation ends (reusable)
  setTimeout(() => {
    box.classList.remove("bouncing");
  }, 2000);
}

// Function that uses scope properly
function transformBox(scaleFactor) {
  // Global variable "box" is accessible
  box.style.transform = calculateScale(scaleFactor, 0.2);
}

/* -------------------------------
   PART 3: Combine CSS + JS
--------------------------------- */

// Animate box on button click
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  animateBox();
  transformBox(1.2); // Call function with parameter
});

// Modal handling
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModal = document.getElementById("closeModal");

toggleModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500); // wait for transition
});

