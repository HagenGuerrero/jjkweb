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
      '<strong>Perros Divinos (玉犬, Gyokuken):</strong> Un par de lobos shikigami que rastrean y devoran maldiciones.',
      '<strong>Nue (鵺):</strong> Un shikigami volador que puede lanzar descargas eléctricas.',
      '<strong>Elefante Máximo (満象, Banshō):</strong> Un elefante masivo que puede aplastar oponentes o liberar grandes cantidades de agua desde su trompa.',
    ],
    domainExpansion: '<strong>Jardín de Sombras Quimera (嵌合暗翳庭, Kangō An\'eitei):</strong> Un dominio inundado de sombras líquidas que le permite a Megumi invocar múltiples shikigamis y manipular las sombras a su antojo.',
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
      '<strong>Resonancia (共鳴り, Tomonari):</strong> Al clavar una parte del objetivo (como una gota de sangre) en su muñeco de paja, puede atacar directamente los puntos vitales del cuerpo original.',
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
      '<strong>Energía Maldita Inmensa:</strong> Yuta posee una de las reservas de energía maldita más grandes de la serie, superando incluso a la de Satoru Gojo.',
      '<strong>Copiar:</strong> La técnica innata de Yuta le permite copiar las técnicas malditas de otros bajo ciertas condiciones aún no reveladas del todo.',
      '<strong>Técnica de Maldición Inversa:</strong> Puede emitir energía maldita inversa para curar a otros.',
    ],
    domainExpansion: '<strong>Amor Mutuo y Verdadero:</strong> La Expansión de Dominio de Yuta. Sus efectos completos son actualmente desconocidos, pero se sabe que es increíblemente poderosa.',
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
      '<strong>Maestra de Armas:</strong> Es experta en una amplia variedad de herramientas y armas malditas.',
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
      '<strong>Maestro de Armas:</strong> Era un experto en el uso de una amplia gama de herramientas malditas, las cuales almacenaba dentro de un espíritu maldito que lo acompañaba.',
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
    description: 'Un estudiante de tercer año de la Preparatoria de Jujutsu de Kioto y un hechicero de grado 1. Es excepcionalmente fuerte y tiene una personalidad excéntrica. Juzga a los hombres por su tipo de mujer ideal y rápidamente se hace amigo de Yuji Itadori, a quien considera su "mejor amigo". A pesar de su comportamiento ruidoso, es un estratega brillante.',
    abilities: [
      '<strong>Boogie Woogie (不義遊戯, Bugi Ugi):</strong> La técnica innata de Todo le permite intercambiar las posiciones de cualquier cosa con energía maldita con solo aplaudir. Puede intercambiarse a sí mismo con un aliado, un enemigo, o incluso intercambiar a otras dos personas.',
      '<strong>Fuerza Física Sobresaliente:</strong> Todo posee una inmensa fuerza física y velocidad, prefiriendo el combate cuerpo a cuerpo.',
      '<strong>Gran Control de Energía Maldita:</strong> Tiene una gran cantidad de energía maldita y un control experto sobre ella, usándola para reforzar sus ataques físicos.',
      '<strong>Dominio Simple:</strong> Puede crear un Dominio Simple para contrarrestar el efecto de golpe seguro de la Expansión de Dominio de un oponente.',
    ],
    domainExpansion: null,
    curiosities: 'Es un gran fan de la idol Nobuko Takada (Takada-chan). Tiene una cicatriz en la cara que obtuvo durante su entrenamiento con la hechicera de grado especial Yuki Tsukumo. Afirma tener un coeficiente intelectual de 530,000.',
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
      '<strong>Sangre Perforante (穿血, Senketsu):</strong> Comprime su sangre hasta el límite y la dispara como un rayo láser de alta presión.',
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
      '<strong>Máximo: Uzumaki:</strong> La máxima expresión de su técnica, que combina una gran cantidad de sus espíritus malditos en un solo ataque de energía maldita superconcentrada.',
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
  nanami: {
    name: 'Kento Nanami',
    mainImg: './img/nanami.webp',
    epithet: 'El Hechicero Asalariado',
    description: 'Un hechicero de Grado 1 y mentor de Yuji Itadori. Nanami es un hombre pragmático y serio que una vez dejó el mundo del jujutsu para convertirse en un oficinista, solo para regresar después de darse cuenta de que su verdadera vocación era salvar a la gente. Valora las reglas y la eficiencia por encima de todo. [3]',
    abilities: [
      '<strong>Técnica de Proporción (十劃呪法, Tōkaku Juhō):</strong> Su técnica innata le permite crear puntos débiles en cualquier objetivo al dividirlo forzadamente en una proporción de 7:3. Golpear este punto garantiza un golpe crítico. [3]',
      '<strong>Voto Vinculante: Tiempo Extra (時間外労働, Jikangairōdō):</strong> Un voto que restringe su energía maldita durante sus "horas de trabajo". Una vez que entra en "tiempo extra", su poder aumenta considerablemente. [1]',
      '<strong>Colapso:</strong> Una técnica de extensión que le permite crear un gran punto débil en el entorno y destruirlo.',
    ],
    domainExpansion: null,
    curiosities: 'A pesar de su exterior estoico, se preocupa profundamente por sus aliados, especialmente por Yuji. Su muerte a manos de Mahito durante el Incidente de Shibuya es uno de los momentos más impactantes de la serie. [1]',
    gallery: [
      './img/nanami_2.webp',
      './img/nanami_3.webp',
    ],
  },
  mahito: {
    name: 'Mahito',
    mainImg: './img/mahito.webp',
    epithet: 'La Maldición de la Transfiguración',
    description: 'Un espíritu maldito de grado especial nacido del odio y el miedo de los humanos hacia otros humanos. Mahito es sádico, inmaduro y disfruta jugando con las vidas humanas. Su filosofía se centra en que el alma precede al cuerpo, lo que le da una perspectiva aterradora sobre la vida y la muerte. [1, 9]',
    abilities: [
      '<strong>Transfiguración Ociosa (無為転変, Mui Tenpen):</strong> Su técnica le permite tocar el alma de una persona y remodelarla, alterando su cuerpo de formas grotescas o matándola instantáneamente. También puede curarse a sí mismo y cambiar su propia forma. [1, 20]',
      '<strong>Multiplicidad de Almas:</strong> Puede fusionar almas transfiguradas para crear ataques más complejos.',
      '<strong>Cuerpo Espiritual Instantáneo de Asesinato Distorsionado:</strong> Una forma poderosa y aerodinámica que aumenta drásticamente su velocidad y poder de ataque.',
    ],
    domainExpansion: '<strong>Encarnación Propia de la Perfección (自閉円頓裹, Jihei Endonka):</strong> Dentro de su dominio, su técnica de Transfiguración Ociosa se aplica a cualquiera atrapado, garantizando un golpe mortal. [1]',
    curiosities: 'Es el archienemigo de Yuji Itadori, ya que Yuji es una de las pocas personas que puede dañar directamente su alma. Mahito es responsable de la muerte de Kento Nanami y Junpei Yoshino, y de dejar a Nobara Kugisaki en coma. [1]',
    gallery: [
      './img/mahito_2.webp',
      './img/mahito_3.webp',
    ],
  },
  hakari: {
    name: 'Kinji Hakari',
    mainImg: './img/hakari.webp',
    epithet: 'El Apostador Imparable',
    description: 'Un estudiante de tercer año de la Preparatoria de Jujutsu de Tokio, actualmente suspendido. Hakari dirige un club de lucha clandestino. Es considerado por Satoru Gojo como uno de los estudiantes con el potencial de superarlo. Es un individuo seguro de sí mismo y amante del riesgo, cuya técnica se basa en la suerte. [1, 7]',
    abilities: [
      '<strong>Energía Maldita Aspera:</strong> La energía maldita de Hakari tiene una textura "áspera" o "rugosa", lo que hace que sus golpes sean particularmente dolorosos y dañinos.',
      '<strong>Maestro del Combate Cuerpo a Cuerpo:</strong> Es un luchador físico extremadamente hábil, capaz de enfrentarse a oponentes de alto nivel sin depender de su técnica.',
    ],
    domainExpansion: '<strong>Atraco Ocioso de la Muerte (坐殺博徒, Zasatsu Bakuto):</strong> Su dominio se manifiesta como un juego de pachinko con temática de romance. Si Hakari saca el "premio gordo" (con una probabilidad de 1/239), obtiene 4 minutos y 11 segundos de energía maldita infinita, lo que le permite usar la técnica de maldición inversa de forma automática e inconsciente, volviéndolo efectivamente inmortal durante ese tiempo. [1, 13]',
    curiosities: 'Debido a que su dominio es inofensivo para el oponente (solo le bombardea con las reglas del juego), puede activarlo repetidamente. Su racha de suerte lo convierte en uno de los hechiceros más formidables en combate prolongado.',
    gallery: [
      './img/hakari_2.webp',
      './img/hakari_3.webp',
    ],
  },
  kenjaku: {
    name: 'Kenjaku',
    mainImg: './img/kenjaku.webp',
    epithet: 'El Titiritero Milenario',
    description: 'Un antiguo y malvado hechicero que ha vivido durante más de mil años utilizando su técnica innata para trasplantar su cerebro a diferentes cuerpos y apoderarse de ellos. Actualmente ocupa el cuerpo de Suguru Geto. Es el cerebro detrás de la mayoría de los eventos catastróficos de la serie. [2, 9]',
    abilities: [
      '<strong>Trasplante Cerebral:</strong> Su técnica innata le permite sobrevivir a la muerte y tomar el control de otros cuerpos, obteniendo acceso a sus recuerdos y técnicas malditas. [2]',
      '<strong>Manipulación de Espíritus Malditos:</strong> Al estar en el cuerpo de Geto, puede usar su técnica para controlar maldiciones que ha absorbido. [2]',
      '<strong>Técnicas Múltiples:</strong> Ha acumulado varias técnicas a lo largo de los siglos, incluyendo la antigravedad de la madre de Yuji, Kaori Itadori. [2]',
      '<strong>Máximo: Uzumaki:</strong> La técnica definitiva de la Manipulación de Espíritus Malditos, que combina una gran cantidad de maldiciones en un ataque de energía superconcentrada.',
    ],
    domainExpansion: '<strong>Útero Profuso (胎蔵遍野, Taizō Hen\'ya):</strong> Una expansión de dominio que se manifiesta como un pilar de rostros retorcidos y no tiene una barrera, similar al Santuario Malévolo de Sukuna.',
    curiosities: 'Kenjaku es técnicamente la "madre" de Yuji Itadori, ya que dio a luz a Yuji mientras poseía el cuerpo de Kaori Itadori. Su objetivo final es "optimizar" la energía maldita en todo Japón, forzando la evolución de la humanidad al fusionar a todos los no hechiceros con Tengen. [2]',
    gallery: [
      './img/kenjaku_2.webp',
      './img/kenjaku_3.webp',
    ],
  },
  uraume: {
    name: 'Uraume',
    mainImg: './img/uraume.webp',
    epithet: 'La Estrella Congelada',
    description: 'Un usuario de maldiciones que ha vivido durante más de mil años y es un subordinado directo y leal de Ryomen Sukuna. [1, 7] Uraume es una figura misteriosa y poderosa, a menudo vista al lado de Sukuna. También es un excelente cocinero, una de las razones por las que Sukuna le mantiene cerca. [2]',
    abilities: [
      '<strong>Formación de Hielo (氷凝呪法, Hikori Juhō):</strong> La técnica maldita de Uraume le permite crear y manipular enormes cantidades de hielo. [1] Este poder es lo suficientemente fuerte como para congelar a grandes grupos de personas al instante. [1]',
      '<strong>Técnica de Maldición Inversa:</strong> Es capaz de utilizar la Técnica de Maldición Inversa para curarse a sí mismo. [1]',
      '<strong>Calma Muerta:</strong> Considerada la cima del Jujutsu de Hielo, utiliza energía maldita helada en lugar de hielo real para congelar a sus objetivos. [5]',
    ],
    domainExpansion: null,
    curiosities: 'Uraume ha servido a Sukuna desde la era Heian, hace más de 1,000 años, y su lealtad es absoluta. [2, 7] Sukuna le considera un aliado. [1] Tras la muerte de Sukuna, Uraume se quita la vida. [1]',
    gallery: [
      './img/uraume_2.webp',
      './img/uraume_3.webp',
    ],
  },
};

// Se ejecuta cuando el contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', () => {
  // Selección de elementos clave del DOM que se usarán en el script.
  const characterView = document.getElementById('character-view');
  const closeBtn = document.querySelector('.character-view-close');
  const body = document.body;

  const imgBoxes = document.querySelectorAll('.img-box');
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

  // Añade un listener para la tecla 'Escape' para cerrar la vista de detalles.
  document.addEventListener('keydown', (event) => {
    // Comprueba si la tecla presionada es 'Escape' y si la vista de detalles está activa.
    if (event.key === 'Escape' && characterView.classList.contains('active')) {
      // Llama a la función para ocultar la vista de detalles.
      hideCharacterView();
    }
  });

  // Comprueba si hay un 'hash' en la URL al cargar la página.
  // Esto permite enlazar directamente a la vista de un personaje.
  const initialChar = window.location.hash.substring(1);
  if (initialChar && characterData[initialChar]) {
    // Se usa un pequeño retraso para asegurar que todo esté cargado y la animación sea fluida.
    setTimeout(() => populateAndShowView(initialChar), 500);
  }


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

    // Oculta la imagen de destino en la cuadrícula para que no aparezca antes de tiempo.
    targetBox.style.opacity = '0';

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
        // Muestra la imagen de la cuadrícula una vez que la animación ha terminado.
        targetBox.style.opacity = '1';
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
    // Oculta la PFP real para que no aparezca antes de que termine la animación del clon.
    pfp.style.opacity = '0';

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
        // Muestra la PFP real una vez que la animación ha terminado.
        pfp.style.opacity = '1';
      },
      { once: true }
    );

    // Medida de seguridad para eliminar el clon si el evento 'transitionend' no se dispara.
    setTimeout(
      () => {
        if (document.body.contains(clone)) {
          clone.remove();
          pfp.style.opacity = '1';
        }
      },
      1000 // Un tiempo ligeramente mayor que la duración de la transición.
    );
  }
});