const tabItem = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content Item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab Content Item From The Dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add Show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItem.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Listen For Tab Click
tabItem.forEach((item) => item.addEventListener("click", selectItem));
