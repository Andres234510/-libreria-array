let libro = [
    {
        titulo : "Harry Potter y la piedra filosofal",
        autor : "J.K. Rowling",
        genero : "fantasia",
        idioma : "Castellano",
        precio : "$ 47.000 Col.",
        formato : "Tapa blanda bolsillo",
        ISBN : "9788498382662",
        descripcion : "Con las manos temblorosas, Harry le dio la vuelta al sobre y vio un  sello de lacre púrpura con un escudo de armas: un león, un águila, un tejón y una serpiente, que rodeaban una gran letra H. Harry Potter nunca ha oído hablar de Hogwarts hasta que empiezan a caer  cartas en el felpudo del número 4 de Privet Drive. Llevan la dirección  escrita con tinta verde en un sobre de pergamino amarillento con un  sello de lacre púrpura, y sus horripilantes tíos se apresuran a  confiscarlas. Más tarde, el día que Harry cumple once años, Rubeus  Hagrid, un hombre gigantesco cuyos ojos brillan como escarabajos negros,  irrumpe con una noticia extraordinaria: Harry Potter es un mago, y le  han concedido una plaza en el Colegio Hogwarts de Magia y Hechicería. ¡Está a punto de comenzar una aventura increíble!",
        estado : "Nuevo",
        ubicacion : "la casa del libro",
        fechaPublicacion : "26 June 1997",
        editorial : "264",
        paginas: "Salamandra Infantil y Juvenil",
        dimensiones : {
            ancho : "13.7 cm",
            alto : "22 cm",
            grueso : "2.2 cm",
        },
        peso: "397 gr"
    },
    {
        titulo : "Harry Potter y la camara de secreta",
        autor : "J.K. Rowling",
        genero : "fantasia",
        idioma : "Castellano",
        precio : "$ 47.000 Col.",
        formato : "Tapa dura",
        ISBN : "9788478884957",
        descripcion :"Hay una conspiración, Harry Potter. Una conspiración para hacer que este año sucedan las cosas más terribles en el Colegio Hogwarts de Magia y Hechicería. El verano de Harry Potter ha incluido el peor cumpleaños de su vida, las funestas advertencias de un elfo doméstico llamado Dobby y el rescate de casa de los Dursley protagonizado por su amigo Ron Weasley al volante de un coche mágico volador. De vuelta en el Colegio Hogwarts de Magia y Hechicería, donde va a empezar su segundo curso, Harry oye unos extraños susurros que resuenan por los pasillos vacíos. Y entonces empiezan los ataques y varios alumnos aparecen petrificados... Por lo visto, las siniestras predicciones de Dobby se están cumpliendo....",
        estado : "Nuevo",
        ubicacion : "la casa del libro",
        fechaPublicacion : "2 July 1998",
        editorial : "296",
        paginas: "Salamandra Infantil y Juvenil",
        dimensiones : {
            ancho : "13.7 cm",
            alto : "22 cm",
            grueso : "2.3 cm",
        },
        peso: "432 gr"
    },
    {
        titulo : "Harry Potter y el pricionero de azkaban",
        autor : "J.K. Rowling",
        genero : "fantasia",
        idioma : "Castellano",
        precio : "$ 75.999 Col.",
        formato : "Tapa dura",
        ISBN : "9788478885190",
        descripcion :"«Bienvenido al autobús noctámbulo, transporte de emergencia para el  brujo abandonado a su suerte. Levante la varita, suba a bordo y lo llevaremos a donde quiera.» Cuando el autobús noctámbulo irrumpe en una calle oscura y frena con  fuertes chirridos delante de Harry, comienza para él un nuevo curso en  Hogwarts, lleno de acontecimientos extraordinarios. Sirius Black,  asesino y seguidor de lord Voldemort, se ha fugado, y dicen que va en  busca de Harry. En su primera clase de Adivinación, la profesora  Trelawney ve un augurio de muerte en las hojas de té de la taza de  Harry... Pero quizá lo más aterrador sean los dementores que patrullan  por los jardines del colegio, capaces de sorberte el alma con su beso...",
        estado : "Nuevo",
        ubicacion : "la casa del libro",
        fechaPublicacion : "8 July 1999",
        editorial : "Salamandra Infantil y Juvenil",
        paginas: "352",
        dimensiones : {
            alto : "22 cm",
            ancho : "14 cm",
            grueso : "2.7 cm",
        },
        peso: "498 gr"
    },
    {
        titulo : "Harry Potter y el caliz de fuego",
        autor : "J.K. Rowling",
        genero : "fantasia",
        idioma : "Castellano",
        precio : "$ 75.999 Col.",
        formato : "Tapa dura",
        ISBN : "9788478885190",
        descripcion :"«Bienvenido al autobús noctámbulo, transporte de emergencia para el  brujo abandonado a su suerte. Levante la varita, suba a bordo y lo llevaremos a donde quiera.» Cuando el autobús noctámbulo irrumpe en una calle oscura y frena con  fuertes chirridos delante de Harry, comienza para él un nuevo curso en  Hogwarts, lleno de acontecimientos extraordinarios. Sirius Black,  asesino y seguidor de lord Voldemort, se ha fugado, y dicen que va en  busca de Harry. En su primera clase de Adivinación, la profesora  Trelawney ve un augurio de muerte en las hojas de té de la taza de  Harry... Pero quizá lo más aterrador sean los dementores que patrullan  por los jardines del colegio, capaces de sorberte el alma con su beso...",
        estado : "Nuevo",
        ubicacion : "la casa del libro",
        fechaPublicacion : "8 July 1999",
        editorial : "Salamandra Infantil y Juvenil",
        paginas: "352",
        dimensiones : {
            alto : "22 cm",
            ancho : "14 cm",
            grueso : "2.7 cm",
        },
        peso: "498 gr"
    },
]

function agregarLibro() {
let libro = {};

libro.titulo = prompt("Ingresa el título del libro:");
libro.autor = prompt("Ingresa el autor del libro:");
libro.genero = prompt("Ingresa el género del libro:");
libro.idioma = prompt("Ingresa el idioma del libro:");
libro.precio = prompt("Ingresa el precio del libro:");
libro.formato = prompt("Ingresa el formato del libro:");
libro.isbn = prompt("Ingresa el ISBN del libro:");
libro.descripcion = prompt("Ingresa la descripción del libro:");
libro.estado = prompt("Ingresa el estado del libro:");
libro.ubicacion = prompt("Ingresa la ubicación del libro:");
libro.fecha_publicacion = prompt("Ingresa la fecha de publicación del libro:");
libro.editorial = prompt("Ingresa la editorial del libro:");
libro.paginas = prompt("Ingresa el número de páginas del libro:");
libro.dimensiones = {
    alto: prompt("Ingresa el alto del libro:"),
    ancho: prompt("Ingresa el ancho del libro:"),
    grueso: prompt("Ingresa el grueso del libro:")
};
libro.peso = prompt("Ingresa el peso del libro:");

libros.push(libro);
}

agregarLibro(libro)

console.log(libro);