/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu');
 /*---------------------------navbar js ends here-----------------------------*/ 
 /*-----------------------form 1 section js starts here-------------------------*/ 
// form1.js

document.addEventListener('DOMContentLoaded', () => {
    const floorplanBoxes = document.querySelectorAll('#floorplan .form1box1');
    const purposeBoxes = document.querySelectorAll('#purpose .form1box1');
    const proceedButton = document.getElementById('proceedButton');

    let selectedFloorplan = null;
    let selectedPurpose = null;

    function updateButtonState() {
        if (selectedFloorplan && selectedPurpose) {
            proceedButton.disabled = false;
        } else {
            proceedButton.disabled = true;
        }
    }

    function handleSelection(event) {
        const selectedElement = event.target;
        const parentBox = selectedElement.parentElement.children;

        // Remove 'selected' class from all siblings
        for (let i = 0; i < parentBox.length; i++) {
            parentBox[i].classList.remove('selected');
        }

        // Add 'selected' class to the clicked element
        selectedElement.classList.add('selected');

        // Update selected value based on which section was clicked
        if (selectedElement.parentElement.id === 'floorplan') {
            selectedFloorplan = selectedElement.dataset.type;
        } else if (selectedElement.parentElement.id === 'purpose') {
            selectedPurpose = selectedElement.dataset.type;
        }

        updateButtonState();
    }

    function handleProceed() {
        // Save data to local storage
        localStorage.setItem('floorplan', selectedFloorplan);
        localStorage.setItem('purpose', selectedPurpose);
    }

    floorplanBoxes.forEach(box => box.addEventListener('click', handleSelection));
    purposeBoxes.forEach(box => box.addEventListener('click', handleSelection));
    proceedButton.addEventListener('click', handleProceed);
});
 /*-----------------------form 1 section js ends here-------------------------*/ 
 /*-----------------------form 1  extra section js starts here-------------------------*/ 
// form1.js

document.addEventListener('DOMContentLoaded', () => {
    const floorplanBoxes1 = document.querySelectorAll('#floorplan1 .form1box12');
    const purposeBoxes1 = document.querySelectorAll('#purpose1 .form1box12');
    const proceedButton1 = document.getElementById('proceedButton1');

    let selectedFloorplan1 = null;
    let selectedPurpose1 = null;

    function updateButtonState1() {
        if (selectedFloorplan1 && selectedPurpose1) {
            proceedButton1.disabled = false;
        } else {
            proceedButton1.disabled = true;
        }
    }

    function handleSelection1(event) {
        const selectedElement = event.target;
        const parentBox1 = selectedElement.parentElement.children;

        // Remove 'selected' class from all siblings
        for (let i = 0; i < parentBox1.length; i++) {
            parentBox1[i].classList.remove('selected1');
        }

        // Add 'selected' class to the clicked element
        selectedElement.classList.add('selected1');

        // Update selected value based on which section was clicked
        if (selectedElement.parentElement.id === 'floorplan1') {
            selectedFloorplan1 = selectedElement.dataset.type;
        } else if (selectedElement.parentElement.id === 'purpose1') {
            selectedPurpose1 = selectedElement.dataset.type;
        }

        updateButtonState1();
    }

    function handleProceed1() {
        // Save data to local storage
        localStorage.setItem('floorplan1', selectedFloorplan1);
        localStorage.setItem('purpose1', selectedPurpose1);
    }

    floorplanBoxes1.forEach(box => box.addEventListener('click', handleSelection1));
    purposeBoxes1.forEach(box => box.addEventListener('click', handleSelection1));
    proceedButton1.addEventListener('click', handleProceed1);
});
 /*-----------------------form 1 extra section js ends here-------------------------*/ 
 /*-----------------------form 2 section js starts here-----------------------*/
 // script.js

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const floorplanBoxes = document.querySelectorAll('#floorplan .form1box1');
    const purposeBoxes = document.querySelectorAll('#purpose .form1box1');
    const proceedButton = document.getElementById('proceedButton');
    const backButton = document.getElementById('backButton');
    const whatsappButton = document.getElementById('whatsappButton');
    const form1 = document.querySelector('.form1');
    const secondForm = document.querySelector('.secondform');

    if (!proceedButton || !backButton || !whatsappButton) {
        console.error('One or more buttons are missing in the HTML.');
        return;
    }

    let selectedFloorplan = null;
    let selectedPurpose = null;

    function updateButtonState() {
        if (selectedFloorplan && selectedPurpose) {
            proceedButton.disabled = false;
        } else {
            proceedButton.disabled = true;
        }
    }

    function handleSelection(event) {
        const selectedElement = event.target;
        const parentBox = selectedElement.parentElement.children;

        // Remove 'selected' class from all siblings
        for (let i = 0; i < parentBox.length; i++) {
            parentBox[i].classList.remove('selected');
        }

        // Add 'selected' class to the clicked element
        selectedElement.classList.add('selected');

        // Update selected value based on which section was clicked
        if (selectedElement.parentElement.id === 'floorplan') {
            selectedFloorplan = selectedElement.dataset.type;
        } else if (selectedElement.parentElement.id === 'purpose') {
            selectedPurpose = selectedElement.dataset.type;
        }

        updateButtonState();
    }

    function handleProceed() {
        form1.style.display = 'none';
        secondForm.style.display = 'block';
    }

    function increment(id) {
        const input = document.getElementById(id);
        input.value = parseInt(input.value) + 1;
    }

    function decrement(id) {
        const input = document.getElementById(id);
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    }

    function handleSendToWhatsapp() {
        const wardrobe = document.getElementById('wardrobe').value;
        const entertainment = document.getElementById('entertainment').value;
        const study = document.getElementById('study').value;
        const crockery = document.getElementById('crockery').value;

        const message = `New Inquiry:\n\nFloorplan: ${selectedFloorplan}\nPurpose: ${selectedPurpose}\nWardrobe: ${wardrobe}\nEntertainment unit: ${entertainment}\nStudy unit: ${study}\nCrockery unit: ${crockery}`;

        // Replace 'YOUR_PHONE_NUMBER' with your actual phone number including country code
        const whatsappURL = `https://api.whatsapp.com/send?phone=919836790822&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');

        // Show confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';
        setTimeout(function() {
            document.getElementById('confirmationMessage').style.display = 'none'; // Hide it after 3 seconds
        }, 3000); // Message will disappear after 3 seconds
    }

    // Event listeners for form interactions
    floorplanBoxes.forEach(box => box.addEventListener('click', handleSelection));
    purposeBoxes.forEach(box => box.addEventListener('click', handleSelection));
    proceedButton.addEventListener('click', handleProceed);
    backButton.addEventListener('click', () => {
        form1.style.display = 'block';
        secondForm.style.display = 'none';
    });
    whatsappButton.addEventListener('click', handleSendToWhatsapp);

    // Expose increment and decrement functions for HTML buttons
    window.increment = increment;
    window.decrement = decrement;
});

 /*-----------------------form 2 section js ends here-----------------------*/
 /*--------------------------section 1 js starts here--------------------------*/
 document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
 /*--------------------------section 1 js ends here--------------------------*/
 /*--------------------------script for sec-10 starts here-------------------*/ 
 // script.js
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200; // Adjust speed if needed
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCount(counter), 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when at least 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                updateCount(counter);
                observer.unobserve(counter); // Stop observing after animation starts
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
/*---------------------experience js ends here------------------*/
 /*--------------------------script for sec-10 ends here-------------------*/ 
 
 /*-------------------------section 6 js starts here-----------------------*/
//  let recentSlide=0;
//  function slideSlider(e){
//     const totalBoxes= box-container . children .length;
//     const visibleBox = 3;
//     const slide= document.querySelector(".box-container");
//     const maxIndex= totalBoxes - visibleBox;
//     recentSlide+=e;
//     if(recentSlide>maxIndex){
//         recentSlide=0;
//     }
//     else if(recentSlide<0){
//         recentSlide = maxIndex;
//     }
//     const offset = -recentSlide * 30;
//     slide.style.transform= `translateX(${offset}%)`;
//  }
 /*-------------------------section 6 js ends here-----------------------*/
 /*-------------------------about us  js starts here-----------------------*/
 var swiper = new Swiper('.swiper-container', {
    loop: true, // Allows infinite loop scrolling
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
 /*-------------------------about us  js ends here-----------------------*/
 /*------------------work section js starts here--------------------------*/

 /*------------------work section js ends here--------------------------*/
 document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
/*--------------------contact us slider js starts here---------------------*/
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left></i>",
            "<i class='fa-solid fa-arrow-right></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
/*--------------------contact us slider js ends here---------------------*/
/*--------------------testimonial section js starts here----------------*/
let slideIndex = 0;
let slides = document.getElementsByClassName("testimonial-slide");
showSlides();

// Auto-play functionality
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active"); // Show current slide
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Manual slide control
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Hide all slides
    }
    slides[slideIndex - 1].classList.add("active"); // Show current slide
}
/*--------------------testimonial section js ends here----------------*/
const dialog = document.getElementById('popupDialog');

function showDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function checkDialogDisplay() {
    const lastShown = localStorage.getItem('dialogLastShown');
    const now = new Date().getTime();

    // If dialog has not been shown or was shown more than 1 minute ago
    if (!lastShown || now - lastShown >= 3000) {
        localStorage.setItem('dialogLastShown', now);
        showDialog();
    }
}

// Initial call to check and show the dialog
document.addEventListener('DOMContentLoaded', function() {
    checkDialogDisplay();
    // Set up to check and show the dialog every minute
    setInterval(checkDialogDisplay, 60000); // 60000 ms = 1 minute
});
//-----------------gallery section js starts here-------------------
   
//-----------------gallery section js ends here-------------------
