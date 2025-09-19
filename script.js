/* ============================= */
/* Part 2: JS Functions & Scope */
/* ============================= */

// Global variable
let clickCount = 0;

/**
 * Adds a CSS class to an element to trigger animation
 * @param {HTMLElement} element - The element to animate
 * @param {string} className - The CSS class to add
 * @returns {string} - Confirmation message
 */
function triggerAnimation(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
    setTimeout(() => element.classList.remove(className), 1000);
    return `Animation triggered on ${element.id || element.className}`;
  }
  return `Animation already running`;
}

/**
 * Calculates the sum of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} sum
 */
function sum(a, b) {
  // Local scope variables
  let result = a + b;
  return result;
}

/* ============================= */
/* Part 3: Event Listeners & Dynamic Interaction */
/* ============================= */

// Animate box when button is clicked
const animateBtn = document.getElementById('animate-btn');
const animatedBox = document.getElementById('animated-box');

animateBtn.addEventListener('click', () => {
  const message = triggerAnimation(animatedBox, 'animate');
  console.log(message);
});

// Calculate sum example
const calcBtn = document.getElementById('calc-btn');
const calcResult = document.getElementById('calc-result');

calcBtn.addEventListener('click', () => {
  clickCount++;
  const result = sum(clickCount, 5);
  calcResult.textContent = `Click count + 5 = ${result}`;
});
