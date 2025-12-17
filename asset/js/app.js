const navMenu = document.getElementById("nav-menu")
const closeBtn = document.getElementById("close-btn")
const toggleBtn = document.getElementById("toggle-btn")
const navList = document.querySelectorAll(".nav-list")

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

navList.forEach(list => {
  list.addEventListener("click", (e) => {
    const href = list.getAttribute("href")

    if (window.innerWidth <= 1024) {
      if (href && href !== "#") {
        e.preventDefault()
      }
    }
    navMenu.classList.remove("show-menu")

    navMenu.addEventListener("transitionend", function handler() {
      if (window.innerWidth <= 1024) {
        if (href && href !== "#") {
          window.location.href = href
        }
      }
      navMenu.removeEventListener("transitionend", handler)
    })
  })
})

const header = document.getElementById("header")
window.addEventListener("scroll", () => {
  if (scrollY >= 50) {
    header.classList.add("bg-header")
  }
  else {
    header.classList.remove("bg-header")
  }
})

const swiperRental = new Swiper('.rental-swiper', {
    loop: true, 
    spaceBetween: 25, 
    grabCursor: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
  });

  const swiperTestimonial = new Swiper('.testimonial-swiper', {
    loop: true, 
    spaceBetween: 25, 
    grabCursor: true,
    slidesPerView: 1,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
  });

const scrollBtn = document.getElementById("scroll-btn")
  window.addEventListener("scroll", () => {
    if (scrollY >= 300) {
      scrollBtn.classList.add("show-scroll")
    }
    else {
      scrollBtn.classList.remove("show-scroll")
    }
  })

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0
  })
})

var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-content")
var tabSelect = document.getElementById("tab-select")

function opentab(tabname, el = null) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-links")
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab")
  }

  event.currentTarget.classList.add("active-links")
  document.getElementById(tabname).classList.add("active-tab")

  if (el) {
    el.classList.add("active-link")
  }

  if (tabSelect) {
    tabSelect.value = tabname
  }
}

// const bars = document.querySelectorAll(".progress-fill")
// bars.forEach(bar => {
//   const percent = bar.dataset.percent
//   bar.style.width = percent + "%"
// })

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.percent + "%";
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".progress-fill").forEach(bar => {
  observer.observe(bar);
});