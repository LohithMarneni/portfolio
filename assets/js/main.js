
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}


window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}


var typingEffect = new Typed(".typedText", {
  strings: ["Data Analyst", "ML Enthusiast", "Web-Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});


const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});


sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });


sr.reveal(".project-box", { interval: 200 });


sr.reveal(".top-header", {});




const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });


const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });



const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav-menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    const linkElement = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

    if (linkElement) {  // Ensure linkElement is not null
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        linkElement.classList.add("active-link");
      } else {
        linkElement.classList.remove("active-link");
      }
    }
  });
}

function downloadResume() {
  
  const userConfirmed = confirm("Do you want to download the resume?");

  
  if (userConfirmed) {
    
    const fileUrl = "assets/files/resume.pdf";

    
    const link = document.createElement("a");

    
    link.href = fileUrl;

    
    link.download = "resume.pdf";

    
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
  }
}


window.addEventListener("scroll", scrollActive);
function sendEmail(event) {
  event.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  const mailtoLink = `mailto:lohith_marnenil@srmap.edu.in?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;

  
  window.open(mailtoLink);
}
