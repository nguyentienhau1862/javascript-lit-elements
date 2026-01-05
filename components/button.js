import { LitElement, html, css } from "lit";

customElements.define("lit-button", class extends LitElement {
	static properties = {
		tone: { type: String }
	};

	static styles = [
		css`
			:host {
				background-color: white;
				color: black;
				cursor: pointer;
			}

			:host:has([tone="primary"]) {
				background-color: black;
				color: white;
			}

			:host:has([tone="success"]) {
				background-color: green;
				color: white;
			}

			:host:has([tone="critical"]) {
				background-color: red;
				color: white;
			}

			:host:has([tone="information"]) {
				background-color: cyan;
				color: white;
			}

			:host:has([tone="warning"]) {
				background-color: orange;
				color: white;
			}

			:host:has([tone="attention"]) {
				background-color: yellow;
				color: white;
			}
		`
	];

	constructor() {
		super();
		this.tone = "secondary";
	}

	render() {
		return html`
			<div hidden tone=${this.tone}></div>
			<slot></slot>
		`;
	}
});
