// Get modal elements\

const modal = document.getElementById("quote-modal");
const openBtn = document.getElementById("quote-btn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("quote-form");

// Open modal when button is clicked
openBtn.onclick = function() {
    modal.style.display = "block";
};

// Close modal when clicking "x"
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close modal if clicking outside content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Handle form submission
// form.addEventListener("submit", function(event) {
//    event.preventDefault(); // Prevent page refresh
//
  //  alert("Thank you! We will contact you soon.");
    //modal.style.display = "none"; // Close modal
    //form.reset(); // Clear form fields
//});




// Rotating Testimonials
// Testimonials Navigation with Fade Effect
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;
const prevBtnT = document.getElementById("prev-btn-t");
const nextBtnT = document.getElementById("next-btn-t");

function showTestimonial(i) {
    testimonials[index].classList.remove("active"); // Hide current
    index = (i + testimonials.length) % testimonials.length; // Ensure loop
    testimonials[index].classList.add("active"); // Show new
}

// Auto-switch every 5 seconds
let autoSwitch = setInterval(() => showTestimonial(index + 1), 5000);

// Manual buttons
prevBtnT.addEventListener("click", () => {
    showTestimonial(index - 1);
    resetAutoSwitch();
});
nextBtnT.addEventListener("click", () => {
    showTestimonial(index + 1);
    resetAutoSwitch();
});

// Reset auto-switch when user interacts
function resetAutoSwitch() {
    clearInterval(autoSwitch);
    autoSwitch = setInterval(() => showTestimonial(index + 1), 5000);
}

let gallery = document.querySelectorAll(".gallery");
let ind = 0;
const prevBtnG = document.getElementById("prev-btn-g");
const nextBtnG = document.getElementById("next-btn-g");

function showGallery(i) {
    gallery[ind].classList.remove("active"); // Hide current
    ind = (i + gallery.length) % gallery.length; // Ensure loop
    gallery[ind].classList.add("active"); // Show new
}

// Auto-switch every 5 seconds
let autoSwitchG = setInterval(() => showGallery(ind + 1), 5000);

// Manual buttons
prevBtnG.addEventListener("click", () => {
    showGallery(ind - 1);
    resetAutoSwitch();
});
nextBtnG.addEventListener("click", () => {
    showGallery(ind + 1);
    resetAutoSwitch();
});

// Reset auto-switch when user interacts
function resetAutoSwitch() {
    clearInterval(autoSwitchG);
    autoSwitchG = setInterval(() => showGallery(ind + 1), 5000);
}
