import Component from "../Component.js";

class Button extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly text: string,
    className: ""
  ) {
    super(parentElement, "button");
  }

  render(): void {
    super.render();

    this.domElement.textContent = this.text;
  }

  addListeners(): void {}
}

export default Button;
