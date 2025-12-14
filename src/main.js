const events = document.querySelectorAll("#eventList li");

const title = document.querySelector("#event-title");
const text = document.querySelector("#eventText");
const image = document.querySelector("#event-image");
// console.log(image);
// console.log(title);
// Event data
const eventInfo = {
  family: {
    title: "Family Gathering",
    text: `We love catering for entire families. So please bring everyone along for a special meal with your 
  loved ones. We’ll provide a memorable experience for all.`,
    img: "/images/homepage/family-gathering-desktop.jpg",
  },
  special: {
    title: "Special Events",
    text: ` Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
  We’ll be sure to mark your special date with an unforgettable meal.`,
    img: "/images/homepage/special-events-desktop.jpg",
  },
  social: {
    title: "Social Events",
    text: `Are you looking to have a larger social event?  No problem! We’re more than happy to cater for big 
  parties. We’ll work with you to make your event a hit with everyone.`,
    img: "/images/homepage/social-events-desktop.jpg",
  },
};

// Add click behavior
events.forEach((li) => {
  li.addEventListener("click", () => {
    // Remove active style
    events.forEach((e) => e.classList.remove("font-semibold", "text-gray-900"));
    events.forEach((e) => e.classList.add("text-gray-600"));

    // Add active to clicked
    li.classList.remove("text-gray-600");
    li.classList.add("font-semibold", "text-gray-900");

    // Fade out
    title.style.opacity = 0;
    text.style.opacity = 0;
    image.style.opacity = 0;

    setTimeout(() => {
      const selected = eventInfo[li.dataset.event];
      // console.log(li);
      // console.log(li.dataset.event);
      title.textContent = selected?.title;
      text.textContent = selected?.text;
      image.src = selected?.img;

      // Fade in
      title.style.opacity = 1;
      text.style.opacity = 1;
      image.style.opacity = 1;
    }, 300);
  });
});
