customElements.define(
    'fancy-tabs',
    class extends HTMLElement {
        constructor() {
            super() // always call super() first in the constructor.

            const shadowRoot = this.attachShadow({ mode: 'open' })
            shadowRoot.innerHTML = `
        <style>#tabs { ... }</style> <!-- styles are scoped to fancy-tabs! -->
        <div id="tabs">
            shadow tabs
        </div>
        <div id="panels">
            shadow panels
        </div>
      `
        }
    }
)
