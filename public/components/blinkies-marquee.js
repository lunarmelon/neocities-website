class BlinkiesMarquee extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <div class="marquee">
                <img src="../assets/buttons/drpepper.gif" alt="Dr. Pepper gif" />
                <img src="../assets/buttons/miku.gif" alt="Hatsune Miku gif" />
                <img
                    src="../assets/buttons/neocities_rainbow.gif"
                    alt="Neocities rainbow gif"
                />
                <img
                    src="../assets/buttons/sonadow.jpg"
                    alt="Sonic Adventure 2 gif"
                />
                <img
                    src="../assets/buttons/neocitizensrock.gif"
                    alt="Neocitizens rock"
                />
            </div>
        `;
	}
}

customElements.define("blinkies-marquee", BlinkiesMarquee);
