class StatusCafe extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="box">
        	<div id="statuscafe">
        		<div id="statuscafe-username"></div>
        		<div id="statuscafe-content"></div>
        	</div>
        </div>
        `;

		const script = document.createElement("script");
		script.src = "https://status.cafe/current-status.js?name=kawamelon";
		script.defer = true;

		this.appendChild(script);
	}
}

customElements.define("status-cafe", StatusCafe);
