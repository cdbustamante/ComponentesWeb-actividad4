class MensajeComponente extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1 id="arriba"></h1>
      <h1 id="abajo"></h1>`;
      window.addEventListener('cambiar-color', (event) => {
        const t1 = this.querySelector('#arriba');
        const t2 = this.querySelector('#abajo');
        if (event.detail.color === 'green') {
          t1.textContent = 'Verde';
          t2.textContent = '';
        } else {
          t1.textContent = '';
          t2.textContent = 'Rojo';
        }
      });
    }
  }
  customElements.define('mensaje-componente', MensajeComponente);