import { html, css, LitElement } from 'lit'; //I think this imports the needed files

export class HelloWorld extends LitElement {
  static get styles() { // I think this block of code determines what the button will look like, where on the screen it will be placed, what color it is, etc. 
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() { //I think this block of code determines the types of the objects on the screen 
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() { //not really sure what this block of code does, althogh I'm assuming that the "this.counter" determiens what number the code starts at
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() { //determines what happens when the button is pressed
    this.counter += 1;
  }

  render() { //I'm guessing this is the main function, the funciton that renders everything and combiens all of the methods and objects above
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
