
const cardsData = [
    {
        id: 1,
        title: "¿Sabes como piensa un programador? aqui te lo contamos",
        category: "FRONT-END",
        photo: "https://i.ytimg.com/vi/ov7vA5HFe6w/sddefault.jpg",
        link: "https://www.youtube.com/embed/ov7vA5HFe6w?si=rFYWWhqKMEWzxiJn",
        description: "¿Cuáles son las características que distinguen a un programador excepcional? Descubre las habilidades y competencias esenciales para aquellos que aspiran a una carrera en programación. En este video, Christian Velasco detalla las cualidades fundamentales que todo programador debería cultivar."



    },
    {
        id: 2,
        title: "Entendiendo let, var y const: Alcance de variables en JavaScript explicado",
        category: "FRONT-END",
        photo: "https://i.ytimg.com/vi/PztCEdIJITY/maxresdefaulficuldades en saber en t.jpg",
        link: "https://www.youtube.com/embed/PztCEdIJITY?si=hfEWd-LVzlUvP_qT",
        description: "¿Te confundes al decidir cuándo utilizar let, var o const al declarar variables en tus programas? Este video te proporciona claridad al explicar las diferencias entre estos tipos de declaración en JavaScript. Además, exploramos el concepto de alcance global y local para que entiendas cómo afecta tu código."
    },
    {
        id: 3,
        title: "Trazando el Camino de JavaScript: Historia y Debates entre Desarrolladores",
        category: "FRONT-END",
        photo: "https://i.ytimg.com/vi/GJfOSoaXk4s/mqdefault.jpg",
        link: "https://www.youtube.com/embed/GJfOSoaXk4s?si=Sy4rvrikw1n4x2-o",
        description: "Descubre la fascinante historia detrás de JavaScript y los debates que genera entre desarrolladores en este episodio especial de Alura Tips. Genesys y Gabriela nos revelan cómo se desarrolló este influyente lenguaje de programación."
    },
    {    
        id: 4,
        title: "Explorando el Mundo de la Programación y la Tecnología: ¿Listo para Iniciar Tu Viaje?",
        category: "FRONT-END",
        photo: "https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/rpvrLaBQwgg?si=V1VLVFRuKgOI_y6-",
        description:"¿Estás comenzando tu camino en la programación? ¿Te apasiona la creación de páginas web y el desarrollo de software? ¿O estás pensando en cambiar de carrera para explorar el fascinante mundo de la tecnología?"
    },
    {
        id: 5,
        title: "Spring Framework: Potencia y Comunidad para Tus Proyectos Java",
        category: "BACK-END",
        photo: "https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/t-iqt1b2qqk?si=HaMciLKuslok023B",
        description:"¿Estás en busca de un framework para potenciar tus proyectos? Conoce Spring Framework, el líder indiscutible en Java. Con herramientas que optimizan el desarrollo, fomentan las mejores prácticas y aceleran el tiempo de entrega. Únete a una comunidad vibrante con abundante documentación y soporte."
    },
    {
        id: 6,
        title: "SQL vs NoSQL: Diferencias y Ventajas Explicadas por Álvaro Camacho",
        category: "BACK-END",
        photo: "https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/cLLKVd5CNLc?si=MYp6WnXXQvqGSPYi",
        description:"Descubre las diferencias entre las estructuras de datos relacional (SQL) y no relacional (NoSQL), así como sus principales ventajas, en este video explicativo con Álvaro Camacho."
    },
    {
        id: 7,
        title: "Simplifica el Manejo de Constantes en Java con Enums: Lección de Génesys Rondón"

,
        category: "BACK-END",
        photo: "https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/EoPvlE85XAQ?si=jfXKclbzaZEcDm83",
        description: "¿Te resulta engorroso manejar numerosas constantes en Java y acabas con demasiado código? Descubre en este episodio de Alura+ cómo simplificar esta tarea con el uso de enums, explicado por la instructora Génesys Rondón."
    },
    {
        id: 8,
        title: "Soft Skills: Clave para Destacarte en el Mercado Laboral según Pri Stuani",
        category: "INNOVACIÓN Y GESTIÓN",
        photo: "https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/vhwspfvI52k?si=jWQPbz3Ph7gX03Zb",
        description: "Descubre qué son las soft skills y por qué es fundamental desarrollarlas para sobresalir en el mercado laboral en este video de Alura Tips. Pri Stuani nos guía a través de las habilidades más valoradas por las empresas y cómo estas soft skills pueden transformar tu carrera."
    },
    {
        id: 9,
        title:"Las 7 Soft Skills Más Buscadas por las Empresas: Importancia y Demanda Explicada",
        category: "INNOVACIÓN Y GESTIÓN",
        photo: "https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
        link: "https://www.youtube.com/embed/YhR7Zp8NUzE?si=ky6cHgq598bnyowv",
        description:"Seguro que has escuchado sobre las soft skills, pero ¿conoces las 7 más buscadas por las empresas? Descubre en este video la importancia de estas habilidades y por qué son tan demandadas en el mercado laboral."
    },
    {
        id: 10,
        title: "Café Punto Tech: Explorando las Ventajas de las Metodologías Ágiles con Elizabeth León y Andyara Pedrosa",
        category: "INNOVACIÓN Y GESTIÓN",
        photo: "https://i.ytimg.com/vi/p4kpHAvQH9w/mqdefault.jpg",
        link: "https://www.youtube.com/embed/p4kpHAvQH9w?si=ZGDif0_FdBSpWjuv",
        description: "En nuestra sexta edición del Café Punto Tech, exploramos junto a Elizabeth León y Andyara Pedrosa, expertas en metodología Agile. Agile facilita la adaptación del trabajo de equipos a los requisitos del proyecto, ofreciendo una metodología rápida, flexible y adaptable a diversas circunstancias. Nuestras invitadas destacarán las principales ventajas de estas metodologías."
    }
];

export default cardsData;
