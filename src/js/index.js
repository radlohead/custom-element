customElements.define(
    'fancy-tabs',
    class extends HTMLElement {
        constructor() {
            super()

            const shadowRoot = this.attachShadow({ mode: 'open' })
            shadowRoot.innerHTML = `
        <style>
            :host {
                display: flex;
                flex-direction: column;
                border: 1px solid red;
            }
            :hover {
                border: 3px solid red;
            }
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
