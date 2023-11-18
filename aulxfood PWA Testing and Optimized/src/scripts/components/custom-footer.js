class CustomFooterItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <ul>
          <li>Copyright©AulxFood 2023</li>          
        </ul>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooterItem);
