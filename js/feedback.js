const feedbackButton = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".modal-window");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".type-name");
const feedbackEmail = feedbackPopup.querySelector(".type-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
  feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
evt.preventDefault();
  feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
    }
  }
});
