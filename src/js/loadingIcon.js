import loaderImg from "../resources/spinner.gif";

/**
 * module for spinner loading icon
 */
export const spinner = (function () {
  const spinnerIcon = new Image();
  spinnerIcon.src = loaderImg;

  const spinnerDiv = document.createElement("div");
  spinnerDiv.className = "row justify-content-center";
  spinnerDiv.appendChild(spinnerIcon);

  document.querySelector("main").appendChild(spinnerDiv);

  hideSpinner();

  function showSpinner() {
    spinnerDiv.classList.remove("d-none");
  }

  function hideSpinner() {
    spinnerDiv.classList.add("d-none");
  }

  return {
    showSpinner,
    hideSpinner,
  };
})();
