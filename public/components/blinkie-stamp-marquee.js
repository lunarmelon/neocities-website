class BlinkieStampMarquee extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
          <div class="marquee">
          	<img src="../assets/buttons/drpepper.gif" alt="Dr. Pepper gif">
          	<img src="../assets/buttons/miku.gif" alt="Hatsune Miku gif">
          	<img
          		src="../assets/buttons/neocities_rainbow.gif"
          		alt="Neocities rainbow gif"
          	>
          	<img src="../assets/buttons/sonadow.jpg" alt="Sonic Adventure 2 gif">
          	<img src="../assets/buttons/neocitizensrock.gif" alt="Neocitizens rock">
          </div>
          <div class="marquee">
          	<!--Stamps-->
          	<img
          		src="../assets/stamps/garfpropaganda.png"
          		alt="Stamp with the text: You are not immune to propaganda"
          	>
          	<img src="../assets/stamps/spongebob.gif" alt="Stamp with SpongeBob's face">
          	<img
          		src="../assets/stamps/triplebaka.gif"
          		alt="Stamp with Kasane Teto and Hatsune Miku from Triple Baka music video"
          	>
          	<img
          		src="../assets/stamps/winkcat.gif"
          		alt="Stamp of a cat with a text balloon of a winking emoticon"
          	>
          	<img
          		src="../assets/stamps/teto.gif"
          		alt="Stamp for Kasane Teto moving her head"
          	>
          </div>
        `;
	}
}

customElements.define("blinkie-stamp-marquee", BlinkieStampMarquee);
