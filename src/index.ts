import { css, html, LitElement } from 'lit'

class QuickFormElement extends LitElement {
	static styles = css`
		@unocss-placeholder;
	`

	render() {
		return html``
	}
}

export function defineQuickFormElement(name: string) {
	customElements.define(name, QuickFormElement)
}
