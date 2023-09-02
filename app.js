const menuButton = document.querySelector(".mobileMenuBtn");
const menuList = document.querySelector(".mobileNav");
const cancelBtn = document.querySelector("#mobileCancel");
const subMenuItems = document.querySelectorAll(".navMenuItemMobile");
const subMenuMobile = document.querySelectorAll(".subMenuMobile");
const body = document.body;
const navBar = document.querySelector(".navBar");
const darkBtn = document.querySelector(".darkBtn");
const darkBtnMobile = document.querySelector(".darkBtnMobile");
const root = document.querySelector(":root");
const moonIcon = document.getElementById("moon");
const moonIconMobile = document.getElementById("moonMobile");
const sunIcon = document.getElementById("sun");
const sunIconMobile = document.getElementById("sunMobile");
const arrow = document.querySelectorAll(".fa-chevron-down")
let isOpen = false;
let isDark = false;
menuButton.addEventListener("click", () => {
  menuList.classList.add("activeMenu");
});
cancelBtn.addEventListener("click", () => {
  menuList.classList.remove("activeMenu");
});

subMenuMobile.forEach((subItem) => {
  subItem.previousElementSibling.addEventListener("click", () => {
    if (!isOpen) {
      subItem.classList.add("activeSub");
      isOpen = true;
    } else {
      subItem.classList.remove("activeSub");
      isOpen = false;
    }
  });
});
darkBtn.addEventListener("click", () => {
  if (!isDark) {
    root.style.setProperty("--background-color", "rgb(28, 28, 40)");
    root.style.setProperty("--text-color", "#fff");
    moonIcon.style.display = "none"
    sunIcon.style.display = "block"
    isDark = true;
  } else {
    root.style.setProperty("--background-color", "rgba(243, 244, 246, 1)");
    root.style.setProperty("--text-color", "rgb(63, 63, 70)");
    moonIcon.style.display = "block"
    sunIcon.style.display = "none"
    isDark = false;
  }
});
darkBtnMobile.addEventListener("click", () => {
  if (!isDark) {
    root.style.setProperty("--background-color", "rgb(28, 28, 40)");
    root.style.setProperty("--text-color", "#fff");
    moonIconMobile.style.display = "none"
    sunIconMobile.style.display = "block"
    isDark = true;
  } else {
    root.style.setProperty("--background-color", "rgba(243, 244, 246, 1)");
    root.style.setProperty("--text-color", "rgb(63, 63, 70)");
    moonIconMobile.style.display = "block"
    sunIconMobile.style.display = "none"
    isDark = false;
  }
});
arrow.forEach((arrow) => {
  arrow.parentElement.addEventListener("click", () => {
    
    if (!isOpen) {
      
      arrow.classList.remove("activeArrow")
      subItem.classList.add("activeSub");
      isOpen = true;
    } else {
      
      arrow.classList.add("activeArrow")
      subItem.classList.remove("activeSub");
      isOpen = false;
    }
  });
});