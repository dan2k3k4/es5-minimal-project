import { LitElement, html, customElement } from 'lit-element';

class Tabs extends LitElement {
  links = null;

  contents = null;

  currentIndex = 0;

  connectedCallback() {
    super.connectedCallback();
    this.links = Array.from(this.querySelectorAll('.tabs__action'));
    this.contents = Array.from(this.querySelectorAll('.tabs__content'));
    const currentHash = decodeURI(window.location.hash);

    setTimeout(() => {
      if (this.contents.length) {
        this.contents.forEach((content, index) => {
          const idValue = content.getAttribute('id');
          if (currentHash === idValue) {
            content.removeAttribute('hidden');
            this.currentIndex = index;
          }
          // Display first item if no hash is found
          if (currentHash === '') {
            this.contents[0].removeAttribute('hidden');
          }
        });
      }

      if (this.links.length) {
        this.links.forEach(link => {
          const hrefValue = link.getAttribute('href');
          if (currentHash === hrefValue) {
            link.setAttribute('aria-selected', 'true');
            link.classList.add('active');
          }
          // Set first tab as active if no hash
          if (currentHash === '') {
            this.links[0].setAttribute('aria-selected', 'true');
            this.links[0].classList.add('active');
          }

          link.addEventListener('click', this.clickToChangeTab);
        });
      }
    }, 0);

    document.addEventListener('keydown', this.keyToChangeTab);
  }

  setAttributes = (selectedIndex, newIndex = null) => {
    const { links, currentIndex, contents } = this;
    // eslint-disable-next-line no-redeclare
    const nCurrentIndex = newIndex || currentIndex;

    links[nCurrentIndex].removeAttribute('aria-selected');
    links[nCurrentIndex].classList.remove('active');

    links[selectedIndex].setAttribute('aria-selected', 'true');
    links[selectedIndex].classList.add('active');
    links[selectedIndex].focus();

    contents[nCurrentIndex].setAttribute('hidden', '');
    contents[selectedIndex].removeAttribute('hidden');

    this.currentIndex = selectedIndex;

    // Save hash temporarily
    const tempHash = links[selectedIndex].getAttribute('href');
    // Remove the id so page does not jump when resetting hash value
    contents[selectedIndex].removeAttribute('id');
    links[selectedIndex].removeAttribute('id');

    window.location.hash = links[selectedIndex].getAttribute('href');
    // Bring id and href values back after modifying hash
    contents[selectedIndex].setAttribute('id', tempHash);
    links[selectedIndex].setAttribute('href', tempHash);
  };

  keyToChangeTab = event => {
    // Left and right arrows
    if (event.key !== undefined && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
      const { links, currentIndex } = this;
      let newIndex = event.key === 'ArrowLeft' ? currentIndex - 1 : currentIndex + 1;

      if (newIndex < 0) {
        newIndex = links.length - 1;
      }

      if (newIndex === links.length) {
        newIndex = 0;
      }

      this.setAttributes(newIndex, currentIndex);
    }
  };

  clickToChangeTab = event => {
    event.preventDefault();
    this.setAttributes(this.links.indexOf(event.currentTarget));
  };

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElement('zi-tabs-location')(Tabs);
