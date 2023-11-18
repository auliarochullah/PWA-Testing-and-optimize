class NavbarItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="menu-hp">
          <div>
            <a href="/" class="logo-font">AulxFood </a>
          </div>

          <div class="menu-container">
            <button
              class="menu"
              aria-label="button menu dropdown on mobile"
              type="button"
            >
              <span class="fa fa-bars"></span>
            </button>
          </div>
        </div>

        <ul class="nav-list">
          <li class="nav-item"><a href="/">HOME</a></li>
          <li class="nav-item"><a href="#/favorite">FAVORITE</a></li>
          <li class="nav-item">
            <a
              href="https://www.instagram.com/zefroxegt/"
              target="_blank"
              rel="noopener noreferrer"
              >ABOUT</a
            >
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavbarItem);
