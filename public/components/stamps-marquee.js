class StampsMarquee extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
          <div class="marquee">
            <!--Stamps-->
            <img
              src="../assets/stamps/garfpropaganda.png"
              alt="Stamp with the text: You are not immune to propaganda"
            />
            <img
              src="../assets/stamps/spongebob.gif"
              alt="Stamp with SpongeBob's face"
            />
            <img
              src="../assets/stamps/triplebaka.gif"
              alt="Stamp with Kasane Teto and Hatsune Miku from Triple Baka music video"
            />
            <img
              src="../assets/stamps/winkcat.gif"
              alt="Stamp of a cat with a text balloon of a winking emoticon"
            />
            <img
              src="../assets/stamps/teto.gif"
              alt="Stamp for Kasane Teto moving her head"
            />
          </div>
        `;
	}
}

customElements.define("stamps-marquee", StampsMarquee);
