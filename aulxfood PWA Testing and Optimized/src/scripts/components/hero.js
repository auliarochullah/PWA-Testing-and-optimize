class HeroContentItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero-text">
        <h1 class="hero-title">AulxFood</h1>

        <p class="hero-subtitle">
        You can find the best restaurants out there.
        </p>
    `;
  }
}

customElements.define('hero-content', HeroContentItem);
