// This is where I did majority of my hover effects where on hover the texts and buttons will appear and when not hovering the image of the cream will be there by itself
const hoverButton = document.querySelector("#hover-button");
console.log(hoverButton);

// I used the Week 10 examples to guide me through the process of adding the hover effects to my elements. I just repeated the same steps for each element that would appear on hover. 
const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

hoverButton.addEventListener("mouseover", showMoreInfo);
hoverButton.addEventListener("mouseout", hideMoreInfo);

function showMoreInfo() {
  moreInfo.classList.add("show");
}

function hideMoreInfo() {
  moreInfo.classList.remove("show");
}

const heartIcon = document.querySelector("#heart-img");
console.log(heartIcon);

hoverButton.addEventListener("mouseover", showHeart);
hoverButton.addEventListener("mouseout", hideHeart);

function showHeart() {
  heartIcon.classList.add("showHeart"); 
}

function hideHeart() {
  heartIcon.classList.remove("showHeart");
}

const nameElement = document.querySelector("#name");
console.log(nameElement); 

hoverButton.addEventListener("mouseover", showNameElement);
hoverButton.addEventListener("mouseout", hideNameElement);

function showNameElement() {
  nameElement.classList.add("showName"); 
}

function hideNameElement() {
  nameElement.classList.remove("showName");
}

const starIcon = document.querySelector("#star-img");
console.log(starIcon);

hoverButton.addEventListener("mouseover", showStar);
hoverButton.addEventListener("mouseout", hideStar);

function showStar() {
  starIcon.classList.add("showStar"); 
}

function hideStar() {
  starIcon.classList.remove("showStar");
}

const reviewText = document.querySelector("#review-text");
console.log(reviewText);

hoverButton.addEventListener("mouseover", showReview);
hoverButton.addEventListener("mouseout", hideReview);

function showReview() {
  reviewText.classList.add("showReview"); 
}

function hideReview() {
  reviewText.classList.remove("showReview");
}

// The code below is when I attempted to make the elements slide in on hover. I thought I could manipulate the code used in the "Toggle drawer" example however, it didn't work. That's when I used Gemini to assist me in this code. It suggested that it would be easier to do the effects through the style sheet and not javascript. I found that using Gemini as opposed to ChatGPT was a lot more useful. As mentioned in my last assignment, I sometimes struggled using ChatGPT becuase it gave me faulty code or coding techniques I was unfamiliar with. With Gemini, it incorporated the code I have already used and gave answers that were similar to the coding techniques we've used in class so it was easier for me to comprehend the code. 

// const nameElement = document.querySelector("#name");
// console.log(nameElement);
// let isOpen = false;
// nameButton.addEventListener("hover", openName);

// function openName() {
//   console.log("i am hovered");
//   if (!isOpen) {
//     // slideIn.style.transform = `translateX(200px)`;
//     nameElement.style.translate = "200px";
//     isOpen = true;
//   } else {
//     nameElement.style.translate = "-200px";
//     // slideIn.style.transform = `translateX(-200px)`;
//     isOpen = false;
//   }
// }

