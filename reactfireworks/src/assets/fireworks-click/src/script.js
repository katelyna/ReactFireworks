// A list of all possible colors
const COLORS = [["purple", "blue", "lightblue"], ["green", "yellow", "lightgreen"], ["burgundy", "pink", "red"], ["orange", "lightorange", "orange"], ["red", "blue", "white"]];
// Defines the particle number
const PARTICLES_NUMBER = 100;

function createParticle(x, y, firstIndex) {
  const element = document.createElement("div");
  element.style.width = "3px";
  element.style.height = "3px";
  //element.style.border = "1px solid black";
  // The elements are in absolute position
  element.style.position = "absolute";
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
  // We want our cursor to be centered in the square
  element.style.transform = "translate(-50%, -50%)";
  // Get a color randomly
  console.log(firstIndex);
  element.style.backgroundColor = //COLORS[0][0];
    COLORS[firstIndex][Math.floor(Math.random() * 3)];
  
  const animation = element.animate(
    [
      {
        // Math.random() - 0.5 returns integer between -0.5 and 0.5
        transform: `translate(${(Math.random() - 0.5) * 500}px, ${
          (Math.random() - 0.5) * 500
        }px) rotate(${Math.random() * 520}deg)`,
        // We want to reduce the opacity until 0
        opacity: 0
      }
    ],
    1500
  );

  // Remove the particle at the end of animation
  animation.finished.then(() => element.remove());
  
  document.getElementById('app').appendChild(element);
}

document.getElementById('app').addEventListener("click", (e) => {
  // Get the position of the cursor in the document
  const { clientX: x, clientY: y } = e;
  const firstIndex = Math.floor(Math.random() * 5);
  // Create multiple particles
  for (let i = 0; i < PARTICLES_NUMBER; i++) {
    createParticle(x, y, firstIndex);
  }
});
