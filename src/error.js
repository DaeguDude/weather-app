class Error {
  constructor() {
    this.elem = document.querySelector(".error");
  }

  show() {
    this.elem.classList.add("error--active");
  }

  hide() {
    this.elem.classList.remove("error--active");
  }
}

export default Error;
