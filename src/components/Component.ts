import type ComponentStructure from "./types.js";

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    className = "",
    tag = "div"
  ) {
    this.domElement = document.createElement(tag);
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
