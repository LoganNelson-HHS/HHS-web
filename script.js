//  START NAV MENU SECTION

const dropdownItems = document.querySelectorAll('.dropdown-item');

const showMenu = (toggleId, navId) =>{
    dContainer = document.querySelectorAll('.dropdown-container');
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');

    })
    return [toggle, nav];
}

const sMenu = showMenu('nav-toggle', 'nav-menu');



dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown-button');

    dropdownButton.addEventListener('click', () =>{
        const showDropdown = document.querySelector('.show-dropdown')

        toggleItem(item)

        if(showDropdown && showDropdown!= item){
            toggleItem(showDropdown);
        }
    })
})


const toggleItem = (item) =>{
    if(item.classList.contains('noDD')) {
        return;
    }
    
    const dropdownContainer = item.querySelector('.dropdown-container');
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdown');
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown');
    }

    
}

const mediaQuery = matchMedia('(min-width: 1118px)'),
    ddContainer = document.querySelectorAll('.dropdown-container');

const removeStyle = () =>{
    
    if(mediaQuery.matches){
        sMenu[1].classList.remove('show-menu')
        sMenu[0].classList.remove('show-icon')

        ddContainer.forEach((e) =>{
            e.removeAttribute('style');
            
        })
        
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown');
        })
    }
}

addEventListener('resize', removeStyle);
//   END NAV MENU SECTION









// Get modal elements\

const modal = document.getElementById("quote-modal");
const form = document.getElementById("quote-form");



// Rotating Testimonials
// Testimonials Navigation with Fade Effect
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;
const prevBtn = document.getElementById("prev-btn-t");
const nextBtn = document.getElementById("next-btn-t");

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

// let gallery = document.querySelectorAll(".gallery");
// let ind = 0;
// const prevBtnG = document.getElementById("prev-btn-g");
// const nextBtnG = document.getElementById("next-btn-g");

// function showGallery(i) {
//     gallery[ind].classList.remove("active"); // Hide current
//     ind = (i + gallery.length) % gallery.length; // Ensure loop
//     gallery[ind].classList.add("active"); // Show new
// }

// // Auto-switch every 5 seconds
// let autoSwitchG = setInterval(() => showGallery(ind + 1), 5000);

// // Manual buttons
// prevBtnG.addEventListener("click", () => {
//     showGallery(ind - 1);
//     resetAutoSwitch();
// });
// nextBtnG.addEventListener("click", () => {
//     showGallery(ind + 1);
//     resetAutoSwitch();
// });

// // Reset auto-switch when user interacts
// function resetAutoSwitch() {
//     clearInterval(autoSwitchG);
//     autoSwitchG = setInterval(() => showGallery(ind + 1), 5000);
// }

function openclose(id) {
    let element = document.getElementById(id);
    if (element.className.indexOf('invisible') >= 0) element.classList.remove('invisible');
    else element.classList.add('invisible');
}


function toggleTextbox(checkbox) {
    
    const textbox = document.getElementById(`${checkbox.className}-other`);
    textbox.className = checkbox.checked ? "visible-input" : "hidden-input";
}
  

function previewImage(input, previewId) {
    const file = input.files[0];
    const preview = document.getElementById(previewId);

    if (file) {
        console.log(file.name);
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









document.getElementById("quote-form").addEventListener("submit", function (event) {
    const fName = document.getElementById("f-name").value;
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
 
    const message = `Howdy ${fName}, Thanks for reaching out to Howdy Home Services!We're excited to help you with your:  ${serviceList} needs. We'll get back to you shortly to confirm the details. Cheers, The Howdy Team 🤠`;
    document.getElementById("autoresponse").value = message;
  });
  



const gallerySlider = document.getElementById("gallery-slider");
const galleryContainer = document.getElementById("gallery-images");
const thumb = document.getElementById('slider-thumb')
let gIndex = 0;
const numImages = galleryContainer.children.length;
const scrollAmnt = 3792 / numImages;


galleryContainer.addEventListener('scroll', () => {
    const scrollLeft = galleryContainer.scrollLeft;
    const scrollWidth = galleryContainer.scrollWidth - galleryContainer.clientWidth;
    
    gIndex = Math.round((scrollLeft / scrollWidth) * (numImages - 1));

    const thumbWidth = 100 / numImages;
    thumb.style.width = `${thumbWidth}`
    thumb.style.left = `${gIndex * thumbWidth}%`;

    document.getElementsByClassName('gActive')[0].classList.remove('gActive');

    document.getElementById(`slide-${gIndex + 1}`).classList.add('gActive');
})

function galleryPrev() {
    if (gIndex > 0) {
        gIndex --;
    }
    else {
        gIndex = numImages - 1;
    }
    
    // galleryContainer.scrollTo((gIndex * 298), 0);
    galleryContainer.scrollTo({
        left: (gIndex * scrollAmnt),
        behavior: 'smooth'
    });
}

function galleryNext() {
    if (gIndex < (numImages - 1)) {
        gIndex ++;
    }
    else {
        gIndex = 0;
    }
    galleryContainer.scrollTo({
        left: (gIndex * scrollAmnt),
        behavior: 'smooth'
    });
}


// document.getElementById(`slide-${gallerySlider.value}`).scrollIntoView();





document.querySelectorAll('.nav-link-cf').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default browser navigation
  
      const targetId = this.getAttribute('href').substring(1); // Get the target ID
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        // Calculate the vertical offset to center the target element
        const targetOffset = targetElement.offsetTop - (window.innerHeight / 4);
  
        // Smoothly scroll to the target element
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }

        sMenu[1].classList.remove('show-menu')
        sMenu[0].classList.remove('show-icon')
    });
  });