const expandOne = document.getElementById("q1_");
const expandTwo = document.getElementById("q2_");
const expandThree = document.getElementById("q3_");
const expandFour = document.getElementById("q4_");

const contractOne = document.getElementById("q1-");
const contractTwo = document.getElementById("q2-");
const contractThree = document.getElementById("q3-");
const contractFour = document.getElementById("q4-");

const paragraphOne = document.getElementById("p1");
const paragraphTwo = document.getElementById("p2");
const paragraphThree = document.getElementById("p3");
const paragraphFour = document.getElementById("p4");

expandOne.addEventListener("click", () => {
  paragraphOne.style.display = "block";
  contractOne.style.display = "block";
  expandOne.style.display = "none";

  paragraphTwo.style.display = "none";
  expandTwo.style.display = "block";
  contractTwo.style.display = "none";

  paragraphThree.style.display = "none";
  expandThree.style.display = "block";
  contractThree.style.display = "none";

  paragraphFour.style.display = "none";
  expandFour.style.display = "block";
  contractFour.style.display = "none";
});

expandTwo.addEventListener("click", () => {
  paragraphTwo.style.display = "block";
  contractTwo.style.display = "block";
  expandTwo.style.display = "none";

  paragraphOne.style.display = "none";
  expandOne.style.display = "block";
  contractOne.style.display = "none";

  paragraphThree.style.display = "none";
  expandThree.style.display = "block";
  contractThree.style.display = "none";

  paragraphFour.style.display = "none";
  expandFour.style.display = "block";
  contractFour.style.display = "none";
});

expandThree.addEventListener("click", () => {
  paragraphThree.style.display = "block";
  contractThree.style.display = "block";
  expandThree.style.display = "none";

  paragraphOne.style.display = "none";
  expandOne.style.display = "block";
  contractOne.style.display = "none";

  paragraphTwo.style.display = "none";
  expandTwo.style.display = "block";
  contractTwo.style.display = "none";

  paragraphFour.style.display = "none";
  expandFour.style.display = "block";
  contractFour.style.display = "none";
});

expandFour.addEventListener("click", () => {
  paragraphFour.style.display = "block";
  contractFour.style.display = "block";
  expandFour.style.display = "none";

  paragraphOne.style.display = "none";
  expandOne.style.display = "block";
  contractOne.style.display = "none";

  paragraphTwo.style.display = "none";
  expandTwo.style.display = "block";
  contractTwo.style.display = "none";

  paragraphThree.style.display = "none";
  expandThree.style.display = "block";
  contractThree.style.display = "none";
});

// Closing the Paragraphs

contractOne.addEventListener("click", () => {
  paragraphOne.style.display = "none";
  expandOne.style.display = "block";
  contractOne.style.display = "none";
});

contractTwo.addEventListener("click", () => {
  paragraphTwo.style.display = "none";
  expandTwo.style.display = "block";
  contractTwo.style.display = "none";
});

contractThree.addEventListener("click", () => {
  paragraphThree.style.display = "none";
  expandThree.style.display = "block";
  contractThree.style.display = "none";
});

contractFour.addEventListener("click", () => {
  paragraphFour.style.display = "none";
  expandFour.style.display = "block";
  contractFour.style.display = "none";
});
