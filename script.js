document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
    } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };

 
  // Get the values from the input fields
  var fullName = document.getElementById("name").value;
  var phoneNumber = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("mssg").value;
  var category = document.getElementById("category").value;
  var services = document.getElementsByName("services");
  console.log(services);
  let selectedServices = null;
  


// Set the sidebar off-screen initially
const sidebar = document.querySelector(".header__navbar__links__mobile");
const hamburger = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  // Toggle the "opened" class on the sidebar to open/close it
  sidebar.classList.toggle("opened");

  // Update aria-expanded attribute for accessibility
  const isOpened = sidebar.classList.contains("opened");
  hamburger.setAttribute("aria-expanded", isOpened);
});


// ----------------------------
  document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Replace with your Google Form action URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse';

    const formData = new FormData(this);

    fetch(googleFormURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Avoid CORS issues
    })
    .then(() => {
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error!', error.message);
    });
  });
// ----------------------------

// ---------------------------------------------------------------------------
//   for (const i of services) {
//     if (i.checked) {
//       selectedServices = i.value;
//       break;
//     }
//   }
  
//   console.log(selectedServices);
  
//   function submitForm(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
  
//     // Get form elements
//     const form = document.getElementById("contactForm");
//     const fullName = form.elements["fullname"].value;
//     const phoneNumber = form.elements["phoneNumber"].value;
//     const email = form.elements["email"].value;
//     const companyName = form.elements["mssg"].value;
//     const category = form.elements["category"].value;
//     const selectedServices = form.elements["services"].value;
  
//     // Prepare the form data
//     const formData = new FormData();
//     formData.append("fullname", fullName);
//     formData.append("phoneNumber", phoneNumber);
//     formData.append("email", email);
//     formData.append("companyName", companyName);
//     formData.append("category", category);
//     formData.append("services", selectedServices);
  
//     // Send the form data to the server using AJAX
//     fetch("https://form-handlers.rinkusinghdhiman3.workers.dev/", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Process the response from the server if needed
//         console.log(data);
//       })
//       .catch((error) => {
//         // Handle errors
//         console.error("Error:", error);
//       });
//   }
  
//   // Add a form submit event listener to call the submitForm function
//   const form = document.getElementById("contactForm");
//   form.addEventListener("submit", submitForm);
  
//   // // Create a new XHR object
//   // var xhr = new XMLHttpRequest();
  
//   // // Define the endpoint URL
//   // var url = "https://form-handlers.rinkusinghdhiman3.workers.dev/";
  
//   // // Prepare the form data
//   // var formData = new FormData();
//   // formData.append("name", fullName);
//   // formData.append("number", phoneNumber);
//   // formData.append("email", email);
//   // formData.append("message", message);
//   // formData.append("category", category);
//   // formData.append("services", selectedServices);
  
//   // // Set up the request
//   // xhr.open("POST", url, true);
  
//   // // Define the callback function when the request is complete
//   // xhr.onload = function () {
//   //   if (xhr.status === 200) {
//   //     // Request was successful
//   //     console.log("Request successful!");
//   //   } else {
//   //     // Request failed
//   //     console.log("Request failed with status code " + xhr.status);
//   //   }
//   // };
  
//   // // Send the request with the form data
//   // xhr.send(formData);
  
 
  gsap.from(".real-estate", {
    x: -400,
    opacity: 0,
    ease: "power3.out",
    duration: 2,
    scrollTrigger: {
      trigger: ".prebook_section_img_container",
      // markers: true,
      start: "top center",
    },
  });
  gsap.from(".course", {
    x: -400,
    opacity: 0,
    ease: "power3.out",
    duration: 2,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".prebook_section_img_container",
      start: "top center",
    },
  });
  gsap.from(".ecommerce", {
    x: -400,
    opacity: 0,
    ease: "power3.out",
    duration: 2,
    delay: 0.4,
    scrollTrigger: {
      trigger: ".prebook_section_img_container",
      start: "top center",
    },
  });
  gsap.from(".restaurant", {
    x: 400,
    opacity: 0,
    ease: "power3.out",
    duration: 2,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".prebook_section_img_container",
  
      start: "top center",
    },
  });
  gsap.from(".astrology", {
    x: 400,
    opacity: 0,
    ease: "power3.out",
    duration: 2,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".prebook_section_img_container",
      start: "top center",
    },
  });
  gsap.from(".webinar", {
    x: 400,
    opacity: 0,
    ease: "power3.out",
    duration: 2,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".prebook_section_img_container",
      start: "top center",
    },
  });
  
  gsap.fromTo(
    ".creativity",
    {
      duration: 2,
      ease: "power4.out",
      opacity: 0,
    },
    {
      duration: 2,
      ease: "power4.out",
      opacity: 1,
      scrollTrigger: {
        trigger: ".creativity",
        start: "top center",
      },
    }
  );
  
  gsap.from(".creativity__h2", {
    opacity: 0,
    x: -200,
    duration: 1,
    scrollTrigger: {
      trigger: ".creativity",
      start: "top center",
    },
  });
  gsap.from(".creativity__p", {
    opacity: 0,
    x: -200,
    duration: 1,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".creativity",
      start: "top center",
    },
  });
  gsap.from(".creativity__btn", {
    opacity: 0,
    x: -200,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".creativity",
      start: "top center",
    },
  });
  gsap.from(".creativity__img__container", {
    opacity: 0,
    x: 200,
    duration: 1,
    scrollTrigger: {
      trigger: ".creativity",
      start: "top center",
    },
  });
  
  let tl = gsap.timeline({
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".prebook_section__demo",
      start: "top +=70",
      end: "+=2000 top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });
  
//   let mm = gsap.matchMedia(),
//     breakPoint = 1024;
  
//   mm.add(
//     {
//       isDesktop: `(max-width: ${breakPoint + 1}px)`,
//       isDesktopLarge: `(min-width: ${breakPoint}px)`,
//       isDesktopXL: `(min-width: ${breakPoint + 416}px)`,
//       isTablet: `(max-width: ${breakPoint - 256}px)`,
//       isMobile: `(max-width: ${breakPoint - 598}px)`,
//     },
//     (context) => {
//       let { isDesktop, isMobile, isDesktopLarge, isDesktopXL, isTablet } =
//         context.conditions;
//       tl.to(".logo", {
//         y: isTablet
//           ? "-100%"
//           : isDesktop
//           ? "-110%"
//           : isDesktopLarge
//           ? "-110%"
//           : "-110%",
//         x: isTablet ? "-30%" : "-40%",
//       })
//         .to(".logoTitle", {
//           opacity: 0,
//         })
//         .to(".logoImgContainer", {
//           borderColor: "transparent",
//         })
//         .to(".logo_dots", {
//           background: "transparent",
//         })
//         .to(".optionBar", {
//           x: isDesktopXL
//             ? "-50%"
//             : isDesktopLarge
//             ? "-50%"
//             : isDesktop
//             ? "-18%"
//             : "-45%",
//           y: isDesktopXL
//             ? "5%"
//             : isDesktopLarge
//             ? "-0%"
//             : isDesktop
//             ? "-10%"
//             : "-12%",
//         })
//         .to(".optionBarTitle", {
//           opacity: 0,
//         })
//         .to(".optionBarNav", {
//           borderColor: "transparent",
//         })
//         .to(".nav_dots", {
//           background: "transparent",
//         })
//         .to(".tools", {
//           x: isTablet ? "20%" : "25%",
//           y: isTablet
//             ? "-120%"
//             : isDesktopXL
//             ? "-215%"
//             : isDesktopLarge
//             ? "-188%"
//             : isDesktop
//             ? "-195%"
//             : "-170%",
//         })
//         .to(".toolsTitle", {
//           opacity: 0,
//         })
//         .to(".toolsIconContainer", {
//           borderColor: "transparent",
//         })
//         .to(".tools_dots", {
//           background: "transparent",
//         })
//         .to(".prebook_section__demo_title", {
//           opacity: 0,
//         })
//         .to(".prebook_section__demo__shoe", {
//           x: isTablet ? "30%" : isDesktop ? "80%" : "75%",
//           y: isMobile ? "-50%" : isTablet ? "-30%" : "-45%",
//         })
//         .to(".prebook_section__demo__shoe_p", {
//           opacity: 0,
//         })
//         .to(".prebook_section__demo__shoe__img", {
//           borderColor: "transparent",
//         })
//         .to(".watermark", {
//           x: isMobile ? "-5%" : isTablet ? "-15%" : "-90%",
//           y: isMobile
//             ? "-35%"
//             : isTablet
//             ? "-50%"
//             : isDesktop
//             ? "-120%"
//             : "-140%",
//         })
//         .to(".watermarkTitle", {
//           opacity: 0,
//         })
//         .to(".watermarkImgContainer", {
//           borderColor: "transparent",
//         })
//         .to(".watermark_dots", {
//           background: "transparent",
//         })
//         .to(".watermark2", {
//           opacity: 1,
//           y: "100%",
//         });
//     }
//   );
  
//   gsap.fromTo(
//     ".sale_section__screenshots__image_container_img",
//     {
//       height: "0",
//     },
//     {
//       height: "auto",
//       scrollTrigger: {
//         trigger: ".sale_section__screenshots",
//         start: "top center",
//         scrub: 2,
//         once: true,
//       },
//     }
//   );
//   // gsap.set('.image_1', { yPercent: 101 });
//   // const photos = gsap.utils.toArray('.image');
//   // // gsap.set(photos, { yPercent: 101 });
  
//   // const animation = gsap.to(photos, { yPercent: -200, duration: 1, stagger: 1 });
//   // ScrollTrigger.create({
//   //   trigger: '.divider',
//   //   pin: '.right_part',
//   //   start: 'top top',
//   //   end: 'bottom bottom',
//   //   animation: animation,
//   //   scrub: true,
//   // });
//   ScrollTrigger.create({
//     trigger: ".image_1",
//     pin: ".image_1",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   });
//   ScrollTrigger.create({
//     trigger: ".image_2",
//     pin: ".image_2",
//     start: "top top",
//     end: "+=200% top",
//     scrub: true,
//   });
//   ScrollTrigger.create({
//     trigger: ".image_3",
//     pin: ".image_3",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   });
//   // ScrollTrigger.create({
//   //   trigger: '.image_1',
//   //   pin: '.image_1',
//   //
//   //   start: 'top +=16',
//   //   end: 'bottom +=16',
//   // });
//   // ScrollTrigger.create({
//   //   trigger: '.image_2',
//   //   pin: '.image_2',
//   //
//   //   start: 'top +=16',
//   //   end: 'bottom +=16',
//   // });
//   // ScrollTrigger.create({
//   //   trigger: '.content_2',
//   //   pin: '.content_2',
//   //
//   //   start: 'top +=16',
//   //   end: 'bottom +=16',
//   // });
//   // ScrollTrigger.create({
//   //   trigger: '.content_3',
//   //   pin: '.content_3',
//   //
//   //   start: 'top +=16',
//   //   end: 'bottom +=16',
//   // });
  
//   // gsap.to('.sale_section__whatsapp', {
//   //   scrollTrigger: {
//   //     trigger: '.sale_section__whatsapp',
//   //     pin: true,
//   //     pinSpacing: true,
//   //     scrub: 2,
//   //     start: 'top +=100 ',
//   //
//   //   },
//   // });
//   // gsap.to('.sale_section__sms', {
//   //   scrollTrigger: {
//   //     trigger: '.sale_section__sms',
//   //     pin: true,
//   //     pinSpacing: true,
//   //     scrub: 2,
//   //     start: 'center center',
//   //     end: 'bottom top',
//   //   },
//   // });
//   // gsap.to('.sale_section__feature_text__sms', {
//   //   scrollTrigger: {
//   //     trigger: '.sale_section__feature_text__sms',
//   //     pin: true,
//   //     pinSpacing: true,
//   //     scrub: 2,
//   //     start: 'center center',
//   //     end: 'bottom top',
//   //   },
//   // });
//   // gsap.to('.sale_section__feature_text__mail', {
//   //   scrollTrigger: {
//   //     trigger: '.sale_section__feature_text__mail',
//   //     pin: true,
//   //     pinSpacing: true,
//   //     scrub: 2,
//   //     start: 'center center',
//   //     end: 'bottom top',
//   //   },
//   // });
  
//   gsap.from(".payment_section__logo", {
//     y: 100,
//     opacity: 0,
//     stagger: 0.5,
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".payment_section__logos",
//       start: "top center",
//     },
//   });
  
//   ScrollTrigger.create({
//     trigger: "body",
//     pin: ".header__navbar",
//     pinSpacing: false,
//     start: "top top",
//   });
