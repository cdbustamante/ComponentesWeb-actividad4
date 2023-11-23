class BotonComponente extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<button>Click me</button>`;
      this.querySelector('button').addEventListener('click', () => {
        const button = this.querySelector('button');
        const color = button.style.backgroundColor === 'red' ? 'green' : 'red';
        button.style.backgroundColor = color;
        const customEvent = new CustomEvent('cambiar-color', { detail: { color }, bubbles: true });
        this.dispatchEvent(customEvent);
      });
    }
  }
  customElements.define('boton-componente', BotonComponente);