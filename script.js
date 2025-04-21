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
const prevBtn = document.getElementById("prev-btn-g");
const nextBtn = document.getElementById("next-btn-g");

function showTestimonial(i) {
    testimonials[index].classList.remove("active"); // Hide current
    index = (i + testimonials.length) % testimonials.length; // Ensure loop
    testimonials[index].classList.add("active"); // Show new
}

// Auto-switch every 5 seconds
let autoSwitch = setInterval(() => showTestimonial(index + 1), 5000);

// Manual buttons
prevBtn.addEventListener("click", () => {
    showTestimonial(index - 1);
    resetAutoSwitch();
});
nextBtn.addEventListener("click", () => {
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

function openclose(id) {
    console.log(id);
    let element = document.getElementById(id);
    if (element.className.indexOf('invisible') >= 0) element.classList.remove('invisible');
    else element.classList.add('invisible');
}


// other checkbox
//const otherCheckbox = document.querySelector("#other");
//const otherText = document.querySelector("#otherValue");
//otherText.style.visibility = "hidden";

//otherCheckbox.addEventListener("change", () => {
//  if (otherCheckbox.checked) {
//    otherText.style.visibility = "visible";
//    otherText.value = "";
//  } else {
//    otherText.style.visibility = "hidden";
//  }
//});

function toggleTextbox(checkbox) {
    
    const textbox = document.getElementById(`${checkbox.className}-other`);
    textbox.className = checkbox.checked ? "visible-input" : "hidden-input";
}
  

function previewImage(input, previewId) {
    const file = input.files[0];
    const preview = document.getElementById(previewId);

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
    }
}

//let imageCount = 1;
//function addImageInput() {
//    imageCount++;
//    if (imageCount > 5) return; // Limit to 5 images, or change the number

//    const container = document.getElementById("upload-img-container");
//    const newInput = document.createElement("div");
//    newInput.innerHTML = `
//      <label>Image ${imageCount}:</label>
//      <input type="file" class="img-upload" name="attachment" accept="image/*"><br><br>
//    `;
//    container.appendChild(newInput);
//}

document.getElementById("imgUpload").addEventListener("change", function () {
    previewImage(this, "upload-preview");
});

document.getElementById("quote-form").addEventListener("submit", function (event) {
    const name = document.getElementById("customer-name").value;
//  ar-times
    const selectedARTimes = Array.from(document.querySelectorAll('.ar_time-option:checked'))
    .map(input => input.value);
    document.getElementById("selected-ar-times").value = selectedARTimes.join(", ");

// Engagement
    document.getElementById("otherEng").value = "Other: " + document.getElementById("eng-option-other").value;
    const selectedEngagement = Array.from(document.querySelectorAll('.eng-option:checked'))
    .map(input => input.value);
    document.getElementById("selected-engagement").value = selectedEngagement.join(", ");

//other
    document.getElementById("other").value = "Other: " + document.getElementById("service-option-other").value;
        
// services
    const serviceCheckboxes = document.querySelectorAll(".service-option");
    const oneChecked = Array.from(serviceCheckboxes).some(cb => cb.checked);

    if (!oneChecked) {
        event.preventDefault(); // Stop form submission
        alert("Please select at least one service before submitting.");
    }
    
    const engCheckboxes = document.querySelectorAll(".eng-option");
    const engChecked = Array.from(engCheckboxes).some(cb => cb.checked);

    if (!engChecked) {
        event.preventDefault(); // Stop form submission
        alert("Please select at least one engagement source before submitting.");
    } 

    const selectedServices = Array.from(document.querySelectorAll('.service-option:checked'))
    .map(input => input.value);

    document.getElementById("selected-services").value = selectedServices.join(", ");
    const serviceList = selectedServices.join(", ");
 
    const message = `Howdy ${name},   | --- |   Thanks for reaching out to Howdy Home Services!\nWe're excited to help you with your:  ${serviceList} needs.   | --- |   We'll get back to you shortly to confirm the details.   |---|   Cheers,\nThe Howdy Team 🤠`;
    document.getElementById("autoresponse").value = message;
  });
  