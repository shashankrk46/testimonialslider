const reviews = [
  {
    id: 1,
    name: "Tanya Sinclair",
    desc:
      " I've been interested in coding for a while but never taken the jump until now.I couldn't recommend this course enough.I'm now in the job of my dreams and so excited about thefuture.",
    job: "UX Engineer",
    pic: "./images/image-tanya.jpg"
  },
  {
    id: 2,
    name: "John Tarkpor",
    desc:
      "If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer.",
    job: "Junior Front-end Developer",
    pic: "./images/image-john.jpg"
  }
];

let currentItem = 0;

const para = document.querySelector(".para");
const job = document.querySelector(".job");
const name = document.querySelector(".name");
const image = document.querySelector(".image");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const button = document.querySelector("button");

prev.addEventListener("click", showPrevItem);
next.addEventListener("click", showNextItem);

function showNextItem() {
  const next = reviews[currentItem++];

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  para.innerText = `${next.desc}`;
  job.innerText = `${next.job}`;
  name.innerText = `${next.name}`;
  image.src = `${next.pic}`;
}
function showPrevItem() {
  const prev = reviews[currentItem--];
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  para.innerText = `${prev.desc}`;
  job.innerText = `${prev.job}`;
  name.innerText = `${prev.name}`;
  image.src = `${prev.pic}`;
}
