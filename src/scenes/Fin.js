// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Fin extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("fin");
  }

  init(data) {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    console.log(data);
    this.cantidadEstrellas = data.cantidadEstrellas;
  }

  create() {

   

    this.cantidadEstrellasTexto = this.add.text(
      15,
      15,
      "Estrellas recolectadas: " + this.cantidadEstrellas,
      { fontSize: "15px", fill: "#FFFFFF" }
    );

    this.add.text(150, 200, "¡TERMINASTE EL JUEGO!", {
      fontSize: "40px",
      fill: "#ffffff",
      fontFamily: "roboto",
      fontWeight: "bold",
      shadow: {
        offsetX: 3,
        offsetY: 3,
        color: "#000000",
        blur: 5,
        stroke: false,
        fill: true,
      },
    });

    const button = this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2 + 50,
        "REINICIAR",
        {
          fontFamily: "Arial",
          fontSize: 20,
          color: "#ffffff",
          backgroundColor: "#000000",
          padding: {
            x: 16,
            y: 8,
          },
        }
      )
      .setOrigin(0.5)
      .setInteractive();

    button.on("pointerover", () => {
      button.setStyle({ backgroundColor: "#888888" });
    });

    button.on("pointerout", () => {
      button.setStyle({ backgroundColor: "#000000" });
    });

    button.on("pointerup", () => {
      this.scene.start("juego");
    });
  }

  }

