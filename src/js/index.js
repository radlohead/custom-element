customElements.define(
    'fancy-tabs',
    class extends HTMLElement {
        constructor() {
            super()

            const shadowRoot = this.attachShadow({ mode: 'open' })
            shadowRoot.innerHTML = `
        <style>
            #tabs {
                color: white;
                background-color: black;
            }
            #panels {
                background-color: green;
            }
        </style>
        <div id="tabs">
            <slot id="tabsSlot" name="title"></slot>
        </div>
        <div id="panels">
            <slot id="panelsSlot"></slot>
        </div>
      `
        }
    }
)
