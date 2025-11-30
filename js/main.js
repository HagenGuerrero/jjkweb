// Objeto que contiene toda la información de los personajes.
const characterData = {
  sukuna: {
    name: 'Ryomen Sukuna',
    mainImg: './img/sukuna.webp',
    epithet: 'El Rey de las Maldiciones',
    description: 'Considerado el indiscutible Rey de las Maldiciones, Sukuna es un espíritu maldito legendario e inmensamente poderoso. Yuji Itadori se convierte en su recipiente después de consumir uno de sus dedos. Sukuna es sádico, arrogante y excepcionalmente inteligente, con una profunda comprensión del jujutsu.',
    abilities: [
      '<strong>Inmensa Energía Maldita:</strong> Posee una cantidad vasta y abrumadora de energía maldita.',
      '<strong>Desmantelar (解, Kai) y Hender (捌, Hachi):</strong> Sus principales ataques cortantes que pueden atravesar prácticamente cualquier cosa.',
      '<strong>Técnica de Maldición Inversa:</strong> Puede regenerarse de la mayoría de las heridas, incluyendo el recrecimiento de extremidades y órganos.',
      '<strong>Flecha de Fuego:</strong> Una poderosa habilidad pirocinética, demostrada en su lucha contra Jogo.',
    ],
    domainExpansion: '<strong>Santuario Malévolo (伏魔御廚子, Fukuma Mizushi):</strong> Un Dominio único que no crea un espacio separado con una barrera. Tiene un alcance efectivo masivo y corta implacablemente todo lo que está dentro hasta que no queda nada.',
    curiosities: 'Sukuna tiene un gran interés en el potencial de Megumi Fushiguro y su Técnica de Diez Sombras. Es el hechicero más poderoso de la historia, de la era Heian.',
    gallery: [
      './img/sukuna_2.webp',
      './img/sukuna_3.webp',
      './img/sukuna_4.webp',
    ],
  },
  gojo: {
    name: 'Satoru Gojo',
    mainImg: './img/gojo.webp',
    epithet: 'El Más Fuerte',
    description: 'Reconocido como el hechicero de jujutsu más fuerte del mundo, Satoru Gojo es un hechicero de grado especial y profesor en la Preparatoria de Jujutsu de Tokio. Confía en sus habilidades, pero debajo de su exterior juguetón y despreocupado, se preocupa profundamente por sus estudiantes.',
    abilities: [
      '<strong>Ilimitado (無下限, Mukagen):</strong> Una técnica heredada de la familia Gojo que otorga a los usuarios un control casi absoluto sobre el espacio.',
      '<strong>Infinito (無限, Mugen):</strong> El estado base del Ilimitado, creando un espacio donde las cosas se ralentizan infinitamente, evitando que algo lo alcance.',
      '<strong>Inversión de Técnica Maldita: Rojo (術式反転「赫」, Jutsushiki Hanten: Aka):</strong> Una fuerza explosiva creada al invertir la energía maldita.',
      '<strong>Lapso de Técnica Maldita: Azul (術式順転「蒼」, Jutsushiki Junten: Ao):</strong> Una poderosa fuerza de atracción que puede jalar y aplastar la materia.',
    ],
    domainExpansion: '<strong>Vacío Infinito (無量空処, Muryōkūsho):</strong> La Expansión de Dominio de Gojo inunda la mente de la víctima con una cantidad infinita de información cruda, paralizándola al instante.',
    curiosities: 'Gojo es un notorio amante de los dulces y a menudo se le ve comiendo postres. A pesar de su inmenso poder, tiene un profundo desdén por los altos mandos del mundo del jujutsu.',
    gallery: [
      './img/gojo_2.webp',
      './img/gojo_3.webp',
      './img/gojo_4.webp',
    ],
  },
  itadori: {
    name: 'Yuji Itadori',
    mainImg: './img/itadori.webp',
    epithet: 'El Recipiente de Sukuna',
    description: 'Un estudiante de preparatoria de buen corazón que se convierte en el recipiente de Ryomen Sukuna después de comer uno de sus dedos malditos para salvar a sus amigos. Se une a la Preparatoria de Jujutsu de Tokio para encontrar y consumir todos los dedos de Sukuna y exorcizar la maldición de una vez por todas.',
    abilities: [
      '<strong>Fuerza y Durabilidad Sobrehumanas:</strong> Yuji posee inmensas capacidades físicas incluso antes de convertirse en hechicero.',
      '<strong>Puño Divergente (逕庭拳, Keiteiken):</strong> Un golpe donde su energía maldita se retrasa respecto al golpe físico, creando un segundo impacto retardado.',
      '<strong>Destello Negro (黒閃, Kokusen):</strong> Un golpe crítico que amplifica un ataque físico con energía maldita en un destello de luz negra.',
    ],
    domainExpansion: null,
    curiosities: 'Yuji es un gran fan de Jennifer Lawrence. Tiene un código personal de asegurarse de que las personas tengan una "muerte digna".',
    gallery: [
      './img/itadori_2.webp',
      './img/itadori_3.webp',
    ],
  },
  megumi: {
    name: 'Megumi Fushiguro',
    mainImg: './img/megumi.webp',
    epithet: 'El Usuario de las Diez Sombras',
    description: 'Un hechicero de jujutsu de grado 2 y estudiante de primer año en la Preparatoria de Jujutsu de Tokio. Como descendiente de la familia Zenin, heredó la preciada Técnica de Diez Sombras del clan. Megumi es estoico y calculador, deseando ayudar a las personas que considera buenas o amables.',
    abilities: [
      '<strong>Técnica de Diez Sombras (十種影法術, Tokusa no Kage Bōjutsu):</strong> Una técnica heredada que permite al usuario invocar y controlar hasta diez shikigamis diferentes desde las sombras.',
      '<strong>Perros Divinos (玉犬, Gyokuken):</strong> Un par de lobos que rastrean y devoran maldiciones.',
      '<strong>Nue (鵺):</strong> A flying shikigami that can deliver electric shocks.',
      '<strong>Elefante Máximo (満象, Banshō):</strong> Un elefante masivo que puede aplastar oponentes o liberar grandes cantidades de agua de su trompa.',
    ],
    domainExpansion: '<strong>Jardín de Sombras Quimera (嵌合暗翳庭, Kangō An\'eitei):</strong> Un dominio lleno de líquido que le permite a Megumi invocar múltiples shikigamis y manipular sombras a gran escala.',
    curiosities: 'Es el hijo de Toji Fushiguro, el "Asesino de Hechiceros". Sukuna ha tomado un interés especial en el potencial de Megumi.',
    gallery: [
      './img/megumi_2.webp',
      './img/megumi_3.webp',
    ],
  },
  nobara: {
    name: 'Nobara Kugisaki',
    mainImg: './img/nobara.webp',
    epithet: 'La Hechicera del Muñeco de Paja',
    description: 'Una hechicera de jujutsu de grado 3 y estudiante de primer año en la Preparatoria de Jujutsu de Tokio. Nobara es una joven segura de sí misma y audaz con una convicción inquebrantable. Vino a Tokio para escapar de su vida rural y vivir fiel a sí misma.',
    abilities: [
      '<strong>Técnica de Muñeco de Paja (芻霊呪法, Sūrei Juhō):</strong> La técnica innata de Nobara que implica el uso de un martillo, clavos y un muñeco de paja para atacar a sus oponentes a distancia.',
      '<strong>Resonancia (共鳴り, Tomonari):</strong> Al colocar una parte de su objetivo (como una gota de sangre) en su muñeco de paja, puede atacar directamente los puntos vitales del objetivo.',
      '<strong>Horquilla (簪, Kanzashi):</strong> Una aplicación de su técnica donde detona energía maldita en clavos que ha clavado en objetos.',
    ],
    domainExpansion: null,
    curiosities: 'Nobara tiene un profundo amor por las compras y todo lo que la gran ciudad de Tokio tiene para ofrecer. Siente un inmenso respeto por Maki Zenin.',
    gallery: [
      './img/nobara_2.webp',
      './img/nobara_3.webp',
    ],
  },
  yuta: {
    name: 'Yuta Okkotsu',
    mainImg: './img/yuta.webp',
    epithet: 'El Niño Maldito',
    description: 'El protagonista de la precuela, Jujutsu Kaisen 0. Yuta es uno de los cuatro únicos hechiceros de grado especial. Una vez fue atormentado por el espíritu maldito de su amiga de la infancia, Rika Orimoto. Es humilde y amable, pero un oponente aterrador cuando se enoja.',
    abilities: [
      '<strong>Rika:</strong> La "Reina de las Maldiciones", un poderoso espíritu maldito que sirve a Yuta. Puede almacenar energía y herramientas malditas para él.',
      '<strong>Inmensa Energía Maldita:</strong> Yuta tiene una de las mayores reservas de energía maldita de la serie, incluso mayor que la de Satoru Gojo.',
      '<strong>Copiar:</strong> La técnica innata de Yuta le permite copiar las técnicas malditas de otros bajo ciertas condiciones.',
      '<strong>Técnica de Maldición Inversa:</strong> Puede emitir energía maldita inversa para curar a otros.',
    ],
    domainExpansion: '<strong>Amor Mutuo y Verdadero:</strong> La Expansión de Dominio de Yuta. Sus efectos completos son actualmente desconocidos, pero es increíblemente poderosa.',
    curiosities: 'Es un pariente lejano del clan Gojo. Pasó varios años en el extranjero después de los eventos de JJK 0, entrenando en África.',
    gallery: [
      './img/yuta_2.webp',
      './img/yuta_3.webp',
    ],
  },
  maki: {
    name: 'Maki Zen\'in',
    mainImg: './img/maki.webp',
    epithet: 'La Maestra de las Herramientas',
    description: 'Una estudiante de la Preparatoria de Jujutsu de Tokio que nació en el clan de élite Zenin pero con muy poca energía maldita. Compensa esto con una destreza física sobrehumana debido a una Restricción Celestial, lo que la convierte en una maestra de las herramientas malditas.',
    abilities: [
      '<strong>Restricción Celestial:</strong> A cambio de casi nada de energía maldita, posee una fuerza, velocidad y agilidad sobrehumanas, a la par de Toji Fushiguro.',
      '<strong>Maestra Especialista en Armas:</strong> Es experta en una amplia variedad de herramientas y armas malditas.',
      '<strong>Hueso de Dragón:</strong> Una poderosa herramienta maldita que adquirió que puede almacenar y liberar energía cinética.',
    ],
    domainExpansion: null,
    curiosities: 'Maki tiene una hermana gemela, Mai, cuya existencia fue parte de lo que frenó su Restricción Celestial. Su objetivo es convertirse en la líder del clan Zenin a pesar de ser marginada por ellos.',
    gallery: [
      './img/maki_2.webp',
      './img/maki_3.webp',
    ],
  },
  toji: {
    name: 'Toji Fushiguro',
    mainImg: './img/toji.webp',
    epithet: 'El Asesino de Hechiceros',
    description: 'Conocido como el "Asesino de Hechiceros", Toji fue un exmiembro del clan Zenin que no poseía energía maldita en absoluto. Esta Restricción Celestial le otorgó habilidades físicas sobrehumanas, permitiéndole rivalizar e incluso derrotar a hechiceros de grado especial.',
    abilities: [
      '<strong>Restricción Celestial Total:</strong> Su completa falta de energía maldita resultó en un físico sumamente perfeccionado, otorgándole una inmensa velocidad, fuerza y sentidos.',
      '<strong>Maestro Especialista en Armas:</strong> Era un experto en el uso de una amplia gama de herramientas malditas, que almacenaba en un espíritu maldito.',
      '<strong>Lanza Invertida del Cielo:</strong> Una herramienta maldita de grado especial que puede anular cualquier técnica maldita.',
    ],
    domainExpansion: null,
    curiosities: 'Toji es el padre de Megumi Fushiguro. Abandonó el mundo del jujutsu y a su familia, solo para regresar como mercenario.',
    gallery: [
      './img/toji_2.webp',
      './img/toji_3.webp',
    ],
  },
  todo: {
    name: 'Aoi Todo',
    mainImg: './img/todo.webp',
    epithet: 'El Maestro del Boogie Woogie',
    description: 'Un estudiante de tercer año de la Preparatoria de Jujutsu de Kioto y un hechicero de jujutsu de grado 1. Es excepcionalmente fuerte y tiene una personalidad excéntrica. Juzga a los hombres por su gusto en las mujeres y rápidamente se hace amigo de Yuji Itadori, considerándolo su "mejor amigo". A pesar de su comportamiento bullicioso y aparentemente brutal, es un estratega brillante y un luchador poderoso. [1, 2, 4]',
    abilities: [
      '<strong>Boogie Woogie (不義遊戯, Bugi Ugi):</strong> La técnica maldita innata de Todo le permite intercambiar las posiciones de cualquier cosa con un cierto nivel de energía maldita al aplaudir. Puede intercambiarse con un aliado, un enemigo o incluso intercambiar a otras dos personas u objetos. [1, 5]',
      '<strong>Destreza Física Sobrehumana:</strong> Todo posee una inmensa fuerza física y velocidad, prefiriendo abrumar a los oponentes en combate cuerpo a cuerpo. [1]',
      '<strong>Control de Energía Maldita:</strong> Tiene una gran cantidad de energía maldita y un control experto sobre ella, que utiliza para mejorar sus ataques físicos. [1]',
      '<strong>Dominio Simple:</strong> Puede crear un Dominio Simple para contrarrestar el efecto de golpe seguro de la Expansión de Dominio de un oponente. [1]',
    ],
    domainExpansion: null,
    curiosities: 'Es un gran fan de la idol Nobuko Takada (Takada-chan) y a menudo imagina escenarios que la involucran. [1, 8] Tiene una cicatriz en la cara de su entrenamiento con Yuki Tsukumo. [1] Afirma tener un coeficiente intelectual de 530,000. [1]',
    gallery: [
      './img/todo_2.webp',
      './img/todo_3.webp',
    ],
  },
  choso: {
    name: 'Choso',
    mainImg: './img/choso.webp',
    epithet: 'Pintura de la Muerte',
    description: 'El mayor de las Pinturas de la Muerte del Vientre Maldito, Choso es un espíritu maldito de grado especial que considera a Yuji Itadori su hermano menor debido a una conexión de sangre compartida a través de Kenjaku. Es un luchador tranquilo y analítico.',
    abilities: [
      '<strong>Manipulación de Sangre (赤血操術, Sekketsu Sōjutsu):</strong> Una técnica heredada que le permite controlar y dar forma a su propia sangre. No está limitado por la pérdida de sangre debido a su naturaleza como maldición.',
      '<strong>Sangre Perforante (穿血, Senketsu):</strong> Comprime la sangre hasta su límite y la dispara como un rayo láser de alta presión.',
      '<strong>Supernova (超新星, Chōshinsei):</strong> Detona múltiples orbes de sangre alrededor de un oponente en una explosión similar a una escopeta.',
    ],
    domainExpansion: null,
    curiosities: 'Como una Pintura de la Muerte, tiene tres padres: una madre humana, un padre espíritu maldito y Kenjaku. Experimenta falsos recuerdos de Yuji, lo que lo convence de que son hermanos.',
    gallery: [
      './img/choso_2.webp',
      './img/choso_3.webp',
    ],
  },
  geto: {
    name: 'Suguru Geto',
    mainImg: './img/geto.webp',
    epithet: 'El Peor Usuario de Maldiciones',
    description: 'Un ex hechicero de grado especial y compañero de clase de Satoru Gojo. Geto desarrolló un profundo odio por los no hechiceros, a quienes llamaba "monos", lo que lo llevó a convertirse en un usuario de maldiciones con el objetivo de crear un mundo solo para hechiceros. Es el principal antagonista de la precuela, Jujutsu Kaisen 0.',
    abilities: [
      '<strong>Manipulación de Espíritus Malditos:</strong> La técnica innata de Geto le permite capturar y controlar espíritus malditos después de derrotarlos. Puede invocar una gran cantidad de maldiciones para abrumar a sus oponentes.',
      '<strong>Máximo: Uzumaki:</strong> La máxima expresión de su técnica, que combina todos sus espíritus malditos en un solo ataque de energía maldita superconcentrada.',
      '<strong>Maestro en Combate Cuerpo a Cuerpo:</strong> A pesar de su técnica basada en la invocación, Geto es un luchador físico excepcionalmente hábil, capaz de enfrentarse a otros hechiceros de alto nivel.',
      '<strong>Herramienta Maldita: Nube Itinerante (Playful Cloud):</strong> Un bastón de tres secciones de grado especial que contiene un poder físico puro, que Geto utilizaba con gran habilidad.',
    ],
    domainExpansion: null,
    curiosities: 'Fue el mejor amigo de Satoru Gojo durante sus días de estudiante. Su cuerpo fue poseído por el antiguo hechicero Kenjaku después de su muerte a manos de Gojo.',
    gallery: [
      './img/geto_2.webp',
      './img/geto_3.webp',
    ],
  },
};

// Se ejecuta cuando el contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', () => {
  // Selección de elementos clave del DOM que se usarán en el script.
  const imgBoxes = document.querySelectorAll('.img-box');
  const characterView = document.getElementById('character-view');
  const closeBtn = document.querySelector('.character-view-close');
  const body = document.body;

  // Itera sobre cada 'caja de imagen' de personaje en la cuadrícula principal.
  imgBoxes.forEach((box) => {
    const charKey = box.dataset.character;
    if (characterData[charKey]) {
      // Crea y añade dinámicamente el elemento para el nombre del personaje.
      const charName = characterData[charKey].name;
      const nameElement = document.createElement('div');
      nameElement.classList.add('character-name');
      nameElement.textContent = charName;
      box.appendChild(nameElement);
    }

    // Añade un listener de clic para mostrar los detalles del personaje correspondiente.
    box.addEventListener('click', () => populateAndShowView(box.dataset.character));
  });

  // Añade un listener de clic al botón de cerrar para ocultar la vista de detalles.
  closeBtn.addEventListener('click', () => {
    hideCharacterView();
  });

  /**
   * Oculta la vista de detalles del personaje con una animación inversa.
   * La imagen del perfil (PFP) se anima de vuelta a su posición en la cuadrícula.
   */
  async function hideCharacterView() {
    // Obtiene la clave del personaje actual desde un atributo de datos.
    const charKey = characterView.dataset.currentChar;
    if (!charKey) {
      // Si no hay clave, oculta la vista sin animación (como medida de seguridad).
      characterView.classList.remove('active');
      body.classList.remove('no-scroll');
      return;
    }

    // Selecciona los elementos necesarios para la animación.
    const content = characterView.querySelector('.character-content');
    const pfp = characterView.querySelector('.character-pfp');
    const targetBox = document.querySelector(`.img-box[data-character="${charKey}"]`);

    // Si no se encuentran los elementos, se sale de la función para evitar errores.
    if (!pfp || !targetBox) return;

    // Obtiene las coordenadas y dimensiones de la PFP y de la caja de destino en la cuadrícula.
    const pfpRect = pfp.getBoundingClientRect();
    const targetRect = targetBox.getBoundingClientRect();

    // 1. Inicia el desvanecimiento del contenido de texto.
    content.classList.remove('reveal');

    // 2. Crea un clon de la PFP para animarlo.
    const clone = document.createElement('div');
    clone.classList.add('image-clone');
    clone.style.backgroundImage = `url(${pfp.src})`;
    clone.style.top = `${pfpRect.top}px`;
    clone.style.left = `${pfpRect.left}px`;
    clone.style.width = `${pfpRect.width}px`;
    clone.style.height = `${pfpRect.height}px`;
    clone.style.borderRadius = '50%';
    clone.style.borderWidth = '4px';
    clone.style.filter = 'grayscale(80%)';
    document.body.appendChild(clone);

    // 3. Anima el clon para que regrese a la posición de la imagen en la cuadrícula.
    // Se espera al siguiente frame de animación para asegurar que el clon se haya renderizado antes de animarlo.
    await new Promise((resolve) => requestAnimationFrame(resolve));
    clone.style.top = `${targetRect.top}px`;
    clone.style.left = `${targetRect.left}px`;
    clone.style.width = `${targetRect.width}px`;
    clone.style.height = `${targetRect.height}px`;
    clone.style.borderRadius = '10px';
    clone.style.borderWidth = '0px';
    clone.style.filter = 'grayscale(0%) opacity(1)';

    // 4. Simultáneamente, inicia el "fade in" del contenido principal (cuadrícula y encabezado).
    document
      .querySelectorAll('.container, .main-header')
      .forEach((el) => el.classList.remove('fade-out'));

    // 5. Cuando la animación del clon termina, se realiza la limpieza.
    clone.addEventListener(
      'transitionend',
      () => {
        characterView.classList.remove('active');
        body.classList.remove('no-scroll');
        clone.remove();
      },
      { once: true }
    );
  }

  /**
   * Rellena y muestra la vista de detalles para un personaje específico.
   * @param {string} charKey - La clave del personaje a mostrar (ej. 'sukuna').
   */
  async function populateAndShowView(charKey) {
    const data = characterData[charKey];
    if (!data) return;

    // Reinicia el scroll de la vista de detalles a la parte superior.
    characterView.scrollTop = 0;

    // Almacena la clave del personaje actual para usarla en la animación de cierre.
    characterView.dataset.currentChar = charKey;

    // Rellena el contenido de la vista de detalles con la información del personaje.
    const header = characterView.querySelector('.character-header');
    const pfp = header.querySelector('.character-pfp');
    pfp.src = data.mainImg;
    pfp.alt = data.name;
    header.querySelector('h2').textContent = data.name;
    const epithetEl = characterView.querySelector('.character-epithet');
    epithetEl.textContent = data.epithet || '';
    characterView.querySelector('.description p').innerHTML = data.description;

    // Rellena la lista de habilidades.
    const abilitiesList = characterView.querySelector('.abilities ul');
    abilitiesList.innerHTML = '';
    data.abilities.forEach((ability) => {
      const li = document.createElement('li');
      li.innerHTML = ability;
      abilitiesList.appendChild(li);
    });

    // Muestra u oculta la sección de Expansión de Dominio si el personaje tiene una.
    const deSection = characterView.querySelector('.domain-expansion');
    if (data.domainExpansion) {
      deSection.querySelector('p').innerHTML = data.domainExpansion;
      deSection.style.display = 'block';
    } else {
      deSection.style.display = 'none';
    }

    characterView.querySelector('.curiosities p').innerHTML = data.curiosities;

    // Rellena la galería de imágenes.
    const galleryContainer = characterView.querySelector('.gallery-images');
    galleryContainer.innerHTML = '';
    if (data.gallery && data.gallery.length > 0) {
      data.gallery.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${data.name} image ${index + 1}`;
        // Añade un retraso de animación escalonado para un efecto de entrada agradable.
        img.style.setProperty('--animation-delay', `${index * 150}ms`);
        galleryContainer.appendChild(img);
      });
      characterView.querySelector('.secondary-gallery').style.display = 'block';
    } else {
      characterView.querySelector('.secondary-gallery').style.display = 'none';
    }

    // --- Inicio de la Animación de Apertura ---
    const clickedBox = document.querySelector(`.img-box[data-character="${charKey}"]`);
    const startRect = clickedBox.getBoundingClientRect();

    // 1. Desvanece la cuadrícula principal y el encabezado.
    document
      .querySelectorAll('.container')
      .forEach((c) => c.classList.add('fade-out'));
    document.querySelector('.main-header').classList.add('fade-out');

    // 2. Crea y posiciona el clon de la imagen en la ubicación inicial.
    const clone = document.createElement('div');
    clone.classList.add('image-clone');
    clone.style.backgroundImage = `url(${data.mainImg})`;
    clone.style.top = `${startRect.top}px`;
    clone.style.left = `${startRect.left}px`;
    clone.style.width = `${startRect.width}px`;
    clone.style.height = `${startRect.height}px`;
    document.body.appendChild(clone);

    // 3. Muestra la vista de detalles (el contenido aún es transparente).
    characterView.classList.add('active');
    body.classList.add('no-scroll');
    // Reinicia el estado de la animación del contenido para la animación de entrada.
    const content = characterView.querySelector('.character-content');
    content.classList.remove('reveal');

    // Espera al siguiente frame para que el navegador renderice la vista de detalles y se pueda obtener la posición de la PFP.
    await new Promise((resolve) => requestAnimationFrame(resolve));

    const pfpRect = pfp.getBoundingClientRect();

    // 4. Anima el clon para que se mueva y transforme en la PFP.
    clone.style.top = `${pfpRect.top}px`;
    clone.style.left = `${pfpRect.left}px`;
    clone.style.width = `${pfpRect.width}px`;
    clone.style.height = `${pfpRect.height}px`;
    clone.style.borderRadius = '50%';
    clone.style.borderWidth = '4px';
    clone.style.filter = 'grayscale(80%)';

    // 5. Inicia el "fade in" del contenido de texto simultáneamente con la animación del clon.
    content.classList.add('reveal');

    // 6. Cuando la animación del clon termina, se elimina el clon.
    clone.addEventListener(
      'transitionend',
      () => {
        clone.remove();
      },
      { once: true }
    );

    // Medida de seguridad para eliminar el clon si el evento 'transitionend' no se dispara.
    setTimeout(
      () => {
        if (document.body.contains(clone)) clone.remove();
      },
      1000 // Un tiempo ligeramente mayor que la duración de la transición.
    );
  }
});