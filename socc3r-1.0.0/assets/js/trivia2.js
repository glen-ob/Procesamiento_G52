
const questions = [
    { //MEXICO 1
        question: "¿En qué año jugó México en el primer partido de la primera Copa Mundial de la FIFA?",
        optionA: "1930",
        optionB: "1934",
        optionC: "1950",
        optionD: "1954",
        correctOption: "optionA"
    },

    { //MEXICO 2
        question: "¿Qué legendario portero mexicano fue el primer jugador de la historia en aparecer en cinco Copas Mundiales de la FIFA?",
        optionA: "Guillermo Ochoa",
        optionB: "Jorge Campos",
        optionC: "Antonio Carbajal",
        optionD: "Oswaldo Sánchez",
        correctOption: "optionC"
    },

    { //MEXICO 3
        question: "México fue sede de la Copa Mundial de la FIFA en 1970. ¿A qué etapa llegaron?",
        optionA: "Ronda de 16",
        optionB: "Cuartos de final",
        optionC: "Semifinales",
        optionD: "Final",
        correctOption: "optionB"
    },

    { //MEXICO 4
        question: "¿Quién marcó el gol acrobático de “tijera” contra Bulgaria en la Copa Mundial de la FIFA 1986, a menudo votó el gol más hermoso en la historia de México?",
        optionA: "Hugo Sánchez",
        optionB: "Manuel Negrete",
        optionC: "Tomas Boy",
        optionD: "Luis Flores",
        correctOption: "optionB"
    },

    { //MEXICO 5
        question: "Entre 1994 y 2018, México logró un récord consistente pero frustrante. ¿Qué era?",
        optionA: "Fueron eliminados en la fase de grupos cada vez.",
        optionB: "Llegaron a los cuartos de final cada vez.",
        optionC: "Fueron eliminados en la ronda de 16 siete veces consecutivas",
        optionD: "No se clasificaron para la Copa Mundial de la FIFA",
        correctOption: "optionC"
    },
    //total 5
    { //USA 1
        question: "¿Cuál es la mascota oficial de USA para la Copa Mundial de FIFA este 2026?",
        optionA: "Aguila calva",
        optionB: "Serpiente",
        optionC: "Jaguar",
        optionD: "Oso negro",
        correctOption: "optionA"
    },

    { //USA 2
        question: "¿Cuántas veces ha clasificado la selección masculina de fútbol de Estados Unidos para la Copa Mundial de la FIFA?",
        optionA: "12",
        optionB: "13",
        optionC: "11",
        optionD: "10",
        correctOption: "optionC"
    },

    { //USA 3
        question: "¿Cuándo se formó la selección masculina de fútbol de Estados Unidos?",
        optionA: "Diciembre 28 1912",
        optionB: "Octubre 30 1893",
        optionC: "Noviembre 28 1885",
        optionD: "Septiembre 17 1902",
        correctOption: "optionC"
    },

    { //USA 4
        question: "¿Cuál se considera la mejor Copa Mundial de FIFA para Estados Unidos?",
        optionA: "1982 FIFA World Cup Spain",
        optionB: "1986 FIFA World Cup Mexico",
        optionC: "1998 FIFA World Cup France",
        optionD: "1930 FIFA World Cup Uruguay",
        correctOption: "optionD"
    },

    { //USA 5
        question: "¿En que año Estados Unidos no clasificó para la Copa Mundial de FIFA?",
        optionA: "1990",
        optionB: "2018",
        optionC: "2014",
        optionD: "1986",
        correctOption: "optionB"
    },
    //total 10
    { //CANADA 1
        question: "¿Cuántas veces ha participado Canadá en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "2",
        optionC: "5",
        optionD: "6",
        correctOption: "optionA"
    },

    { //CANADA 2
        question: "¿Cuál fue la primera participación de Canadá en la Copa Mundial de la FIFA?",
        optionA: "Francia 1938",
        optionB: "Alemania 1974",
        optionC: " México 1986",
        optionD: "Estados Unidos 1994",
        correctOption: "optionC"
    },


    { //CANADA 3
        question: "¿Cuál fue la última participación de Canadá en la Copa Mundial?",
        optionA: "Rusia 2018",
        optionB: "Sudáfrica 2010",
        optionC: "Brasil 2014",
        optionD: "Catar 2022",
        correctOption: "optionD"
    },

    { //CANADA 4
        question: "¿Quién es el capitán de la selección de fútbol de Canadá?",
        optionA: "Jonathan David",
        optionB: "Atiba Hutchinson",
        optionC: "Tino Lettieri",
        optionD: "Alphonso Davies",
        correctOption: "optionD"
    },

    { //CANADA 5
        question: "¿En qué año participó por primera vez Canadá en la Copa NAFC?",
        optionA: "1990",
        optionB: "1996",
        optionC: "2008",
        optionD: "2007",
        correctOption: "optionA"
    },
    //total 15
    { //NUEVA ZELANDA 1
        question: "¿En qué años quedó eliminada en la fase de grupos la selección de Nueva Zelanda?",
        optionA: "1994 y 2006",
        optionB: "2002 y 2018",
        optionC: "1962 y 2014",
        optionD: "1982 y 2010",
        correctOption: "optionD"
    },

    { //NUEVA ZELANDA 2
        question: "¿Cuántas veces ha participado la selección de Nueva Zelanda en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "9",
        optionC: "6",
        optionD: "4",
        correctOption: "optionA"
    },

    { //NUEVA ZELANDA 3
        question: "¿Cuál fue la primera participación de Nueva Zelanda en la Copa Mundial de la FIFA?",
        optionA: "Suecia 1958",
        optionB: "Corea del sur y Japón 2002",
        optionC: "España 1982",
        optionD: "Italia 1990",
        correctOption: "optionC"
    },

    { //NUEVA ZELANDA 4
        question: "¿Cuál es el principal seudónimo de la selección de Nueva Zelanda?",
        optionA: "All Reds",
        optionB: "All Blues",
        optionC: "All Yellows",
        optionD: "All Whites",
        correctOption: "optionD"
    },

    { //NUEVA ZELANDA 5
        question: "¿Quién es el jugador con más partidos jugados en la selección de Nueva Zelanda?",
        optionA: "Ivan Vicelich",
        optionB: "Winston Reid",
        optionC: "Chris Wood",
        optionD: "Keith Nelson",
        correctOption: "optionA"
    },
    //total 20
    { //JAPON 1
        question: "¿En qué año participó Japón por primera vez en una Copa Mundial de la FIFA?",
        optionA: "1994",
        optionB: "1998",
        optionC: "2002",
        optionD: "2006",
        correctOption: "optionB"
    },

    { //JAPON 2
        question: "En la Copa Mundial de la FIFA 2018, ¿a qué equipo derrotó Japón en su partido inaugural?",
        optionA: "Polania",
        optionB: "Colombia",
        optionC: "Senegal",
        optionD: "Bélgica",
        correctOption: "optionB"
    },

    { //JAPON 3
        question: "Durante la Copa Mundial de la FIFA 2002, ¿contra qué nación logró Japón su primera victoria en una Copa Mundial de la FIFA?",
        optionA: "Tunéz",
        optionB: "Rusia",
        optionC: "Bélgica",
        optionD: "Turquía",
        correctOption: "optionB"
    },

    { //JAPON 4
        question: "En la Copa Mundial de la FIFA 2010, Japón derrotó a Dinamarca y se clasificó para los octavos de final. ¿Quién marcó un gol de tiro libre en ese partido?",
        optionA: "Shinji Kagawa",
        optionB: "Yasuhito Endo",
        optionC: "Keisuke Honda",
        optionD: "Yuto Nagamoto",
        correctOption: "optionC"
    },

    { //JAPON 5
        question: "En la Copa Mundial de la FIFA 2022, Japón remontó y venció a Alemania por 2-1. ¿Quién marcó el primer gol de Japón?",
        optionA: "Kaoru Mitoma",
        optionB: "Takuma Asano",
        optionC: "Ritsu Doan",
        optionD: "Daichi Kamada",
        correctOption: "optionC"
    },
    //total 25
    { //IRAN 1
        question: "¿En qué año participó Japón por primera vez en una Copa Mundial de la FIFA?",
        optionA: "1994",
        optionB: "1998",
        optionC: "2002",
        optionD: "2006",
        correctOption: "optionB"
    },

    { //IRAN 2
        question: "¿En cuántas ocasiones ha obtenido la Copa Asiática la selección de fútbol de Irán?",
        optionA: "2",
        optionB: "3",
        optionC: "1",
        optionD: "4",
        correctOption: "optionB"
    },

    { //IRAN 3
        question: "¿Cuántas participaciones tiene Irán en la Copa Mundial de la FIFA?",
        optionA: "4",
        optionB: "9",
        optionC: "6",
        optionD: "7",
        correctOption: "optionD"
    },

    { //IRAN 4
        question: "¿Cuántas clasificaciones consecutivas tiene Irán en la Copa Mundial de la FIFA?",
        optionA: "4",
        optionB: "3",
        optionC: "2",
        optionD: "5",
        correctOption: "optionA"
    },

    { //IRAN 5
        question: "¿Quién es el jugador con más goles en la selección de Irán?",
        optionA: "Saeid Ezatolahi",
        optionB: "Ali Daei",
        optionC: "Saman Ghoddos",
        optionD: "Amirhossein Hosseinzadeh",
        correctOption: "optionB"
    },
    //total 30
    { //ARGENTINA 1
        question: "¿Qué equipo jugó contra Argentina en la final de la primera Copa Mundial de la FIFA en 1930?",
        optionA: "Mexico",
        optionB: "Uruguay",
        optionC: "Camaroon",
        optionD: "Peru",
        correctOption: "optionB"
    },

    { //ARGENTINA 2
        question: "¿Cuántos goles marcó el legendario delantero Leopoldo Luque para Argentina en la Copa del Mundo de 1978?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        optionD: "3",
        correctOption: "optionA"
    },

    { //ARGENTINA 3
        question: "¿Qué país fue sede de la Copa del Mundo de 1978, en la que Argentina fue campeona por primera vez?",
        optionA: "Mexico",
        optionB: "Francia",
        optionC: "Argentina",
        optionD: "Uruguay",
        correctOption: "optionC"
    },

    { //ARGENTINA 4
        question: "¿En qué año ganó Argentina su primera Copa Mundial de la FIFA?",
        optionA: "1978",
        optionB: "1986",
        optionC: "1998",
        optionD: "2002",
        correctOption: "optionA"
    },

    { //ARGENTINA 5
        question: "¿Qué país derrotó a Argentina en los cuartos de final de la Copa Mundial de 2006?",
        optionA: "Mexico",
        optionB: "Uruguay",
        optionC: "Inglaterra",
        optionD: "Alemania",
        correctOption: "optionD"
    },
    //total 35
    { //UZBE 1
        question: "¿En cuántos mundiales ha clasificado Uzbekistán?",
        optionA: "3",
        optionB: "5",
        optionC: "2",
        optionD: "1",
        correctOption: "optionD"
    },

    { //UZBE 2
        question: "¿Cuál es el apodo oficial de la selección de Uzbekistán?",
        optionA: "Águilas Azules",
        optionB: "Lobos Blancos",
        optionC: "Libres y Locos",
        optionD: "Zariguellas Doradas",
        correctOption: "optionB"
    },

    { //UZBE 3
        question: "¿Quién es el capitán de la selección de fútbol de Uzbekistán?",
        optionA: "Jaloliddin Masharipov",
        optionB: "Abduvohid Nematov",
        optionC: "Eldor Shomurodov",
        optionD: "Odiljon Xamrobekov",
        correctOption: "optionC"
    },

    { //UZBE 4
        question: "¿En qué año quedó campeón Uzbekistán en la Copa Asia?",
        optionA: "1994",
        optionB: "2004",
        optionC: "1987",
        optionD: "2000",
        correctOption: "optionA"
    },

    { //UZBE 5
        question: "¿Cuánto quedó Uzbekistán contra Emiratos Árabes Unidos en junio del 2025?",
        optionA: "3 - 2",
        optionB: "1 - 2",
        optionC: "3 - 3",
        optionD: "0 - 1",
        correctOption: "optionC"
    },
    //total 40
    { //COREA 1
        question: "¿Cuántas veces ha podido calificar Corea del Sur en la Copa Mundial FIFA 2002?",
        optionA: "11",
        optionB: "12",
        optionC: "10",
        optionD: "9",
        correctOption: "optionA"
    },

    { //COREA 2
        question: "¿En donde tomó lugar la Copa Mundial de la FIFA 2002?",
        optionA: "Alemania",
        optionB: "Argentina",
        optionC: "Brasil",
        optionD: "Corea-Japón",
        correctOption: "optionD"
    },

    { //COREA 3
        question: "¿Qué posición ganó Corea del Sur en la Copa Mundial FIFA 2002?",
        optionA: "Primer lugar",
        optionB: "Segundo lugar",
        optionC: "Tercer lugar",
        optionD: "Cuarto lugar",
        correctOption: "optionD"
    },

    { //COREA 4
        question: "¿En qué Copa Mundial de la FIFA jugó por primera vez Corea del Sur?",
        optionA: "Uruguay 1930",
        optionB: "Suiza 1954",
        optionC: "Catar 2022",
        optionD: "Brasil 1950",
        correctOption: "optionB"
    },

    { //COREA 5
        question: "¿Cual se considera la mejor Copa Mundial de la FIFA para Corea del Sur?",
        optionA: "Suiza 1954",
        optionB: "Catar 2022",
        optionC: "Corea-Japón 2002",
        optionD: "Francia 1998",
        correctOption: "optionC"
    },
    //total 45
    { //JORDANIA 1
        question: "¿Cuál fue la primera Copa Mundial en la que Jordania calificó?",
        optionA: "Catar 2022",
        optionB: "Canada, Mexico & United States 2026",
        optionC: "Brazil 2014",
        optionD: "Rusia 2018",
        correctOption: "optionB"
    },

    { //JORDANIA 2
        question: "¿Cuál es la capital de Jordania?",
        optionA: "Amán",
        optionB: "Jerash",
        optionC: "Petra",
        optionD: "Beirut",
        correctOption: "optionA"
    },

    { //JORDANIA 3
        question: "¿Contra quién ganó Jordania para clasificar para la Copa Mundial de la FIFA 2026?",
        optionA: "Italia",
        optionB: "Albania",
        optionC: "Mongolia",
        optionD: "Omán",
        correctOption: "optionD"
    },

    { //JORDANIA 4
        question: "¿Por cuánto ganó Jordania para clasificar para la Copa Mundial de la FIFA 2026?",
        optionA: "4-1",
        optionB: "2-1",
        optionC: "3-0",
        optionD: "3-2",
        correctOption: "optionC"
    },

    { //JORDANIA 5
        question: "¿Contra quien perdió Jordania en 1986 y causó que no participaran en la Copa Mundial de la FIFA 2026?",
        optionA: "Iraq",
        optionB: "Iran",
        optionC: "Bagdad",
        optionD: "Mongolia",
        correctOption: "optionA"
    },
    //total 50
    { //AUSTRALIA 1
        question: "¿Cuál de estos es un apodo para el equipo de Australia?",
        optionA: "Socceroos",
        optionB: "Kangaroos",
        optionC: "Upside-downs",
        optionD: "Jumpers",
        correctOption: "optionA"
    },

    { //AUSTRALIA 2
        question: "¿Cuál fue la primera Copa Mundial en la que Australia calificó?",
        optionA: "Suiza 1954",
        optionB: "Brasil 1950",
        optionC: "Alemania 1974",
        optionD: "España 1982",
        correctOption: "optionC"
    },

    { //AUSTRALIA 3
        question: "¿Quién es el capitán del equipo de Australia?",
        optionA: "Tony Popovic",
        optionB: "Mathew Ryan",
        optionC: "Mark Schwarzer",
        optionD: "Tim Cahill",
        correctOption: "optionB"
    },

    { //AUSTRALIA 4
        question: "¿Quién es el director técnico del equipo de Australia?",
        optionA: "Tony Popovic",
        optionB: "Mathew Ryan",
        optionC: "Mark Schwarzer",
        optionD: "Tim Cahill",
        correctOption: "optionA"
    },

    { //AUSTRALIA 5
        question: "¿Quién es el máximo goleador en el equipo de Australia, con 50 goles en total?",
        optionA: "Tony Popovic",
        optionB: "Mathew Ryan",
        optionC: "Mark Schwarzer",
        optionD: "Tim Cahill",
        correctOption: "optionD"
    },
    //total 55
    { //ECUADOR 1
        question: "La Copa Mundial de la FIFA 2026 será la ___ en la que clasifica Ecuador",
        optionA: "4ta",
        optionB: "7ma",
        optionC: "5ta",
        optionD: "6ta",
        correctOption: "optionC"
    },

    { //ECUADOR 2
        question: "¿Cuál fue la primera Copa Mundial en la que Ecuador calificó?",
        optionA: "Suiza 1954",
        optionB: "Catar 2022",
        optionC: "Corea-Japón 2002",
        optionD: "Francia 1998",
        correctOption: "optionC"
    },

    { //ECUADOR 3
        question: "¿Quién es el capitán del equipo de Ecuador?",
        optionA: "Iván Hurtado",
        optionB: "Enner Valencia",
        optionC: "Jordi Cruijff",
        optionD: "Luis Fernando Suárez",
        correctOption: "optionB"
    },

    { //ECUADOR 4
        question: "¿Quién es el director técnico del equipo de Ecuador?",
        optionA: "Jordi Cruijff",
        optionB: "Luis Fernando Suárez",
        optionC: "Byron Castillo",
        optionD: "Sebastián Beccacece",
        correctOption: "optionD"
    },

    { //ECUADOR 5
        question: "¿Quién es el máximo goleador en el equipo de Ecuador, con 49 goles en total?",
        optionA: "Iván Hurtado",
        optionB: "Enner Valencia",
        optionC: "Agustín Delgado",
        optionD: "Gustavo Quinteros",
        correctOption: "optionB"
    },
    //total 60
    { //BRASIL 1
        question: "¿En qué año ganó Brasil su primer Mundial?",
        optionA: "1950",
        optionB: "1954",
        optionC: "1958",
        optionD: "1962",
        correctOption: "optionC"
    },

    { //BRASIL 2
        question: "¿Quién es el jugador más coronado de Brasil de todos los tiempos?",
        optionA: "Cafu",
        optionB: "Roberto Carlos",
        optionC: "Lucio",
        optionD: "Taffarel",
        correctOption: "optionA"
    },

    { //BRASIL 3
        question: "Fuleco es la mascota del Mundial de Brasil 2014. ¿Qué animal es?",
        optionA: "Perro",
        optionB: "Jaguar",
        optionC: "Armadillo",
        optionD: "León",
        correctOption: "optionC"
    },

    { //BRASIL 4
        question: "Pelé es el máximo goleador de Brasil de todos los tiempos. ¿Pero quién es el segundo en la lista?",
        optionA: "Romario",
        optionB: "Ronaldo",
        optionC: "Zico",
        optionD: "Bebeto",
        correctOption: "optionB"
    },

    { //BRASIL 5
        question: "¿Cuántas Copas Mundiales ha ganado Brasil? ",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "6",
        correctOption: "optionC"
    },
    //total 65
    { //URUGUAY 1
        question: "¿Qué equipo ganó la primera Copa Mundial de la FIFA?",
        optionA: "México",
        optionB: "Brasil",
        optionC: "Uruguay",
        optionD: "Argentina",
        correctOption: "optionC"
    },

    { //URUGUAY 2
        question: "¿Qué país fue anfitrión para la primera Copa Mundial de la FIFA?",
        optionA: "Francia",
        optionB: "Uruguay",
        optionC: "Brasil",
        optionD: "Argentina",
        correctOption: "optionB"
    },

    { //URUGUAY 3
        question: "¿Quién es el máximo goleador en el equipo de Uruguay, con 69 goles en total?",
        optionA: "Jose María Giménez",
        optionB: "Diego Godín",
        optionC: "Marcelo Bielsa",
        optionD: "Luis Suárez",
        correctOption: "optionD"
    },

    { //URUGUAY 4
        question: "¿Cual de estos es un apodo del equipo de Uruguay?",
        optionA: "Los Celestes",
        optionB: "Los Originales",
        optionC: "La Celeste",
        optionD: "Los Montevideo",
        correctOption: "optionC"
    },

    { //URUGUAY 5
        question: "¿Cuántas veces no ha clasificado el equipo de Uruguay para jugar en la Copa Mundial de la FIFA?",
        optionA: "6",
        optionB: "8",
        optionC: "3",
        optionD: "5",
        correctOption: "optionA"
    },
    //total 70
    { //COLOMBIA 1
        question: "¿Cual de estos equipos no participó en la Copa Mundial de la FIFA 2022?",
        optionA: "Chile",
        optionB: "Colombia",
        optionC: "Uruguay",
        optionD: "Mexico",
        correctOption: "optionB"
    },

    { //COLOMBIA 2
        question: "¿Cuál fue la primera participación de Colombia en la Copa Mundial de la FIFA?",
        optionA: "Chile 1962",
        optionB: "Uruguay 1930",
        optionC: "Italia 1990",
        optionD: "Estados Unidos 1994",
        correctOption: "optionA"
    },

    { //COLOMBIA 3
        question: "¿Quién es el capitán del equipo de Colombia?",
        optionA: "Néstor Lorenzo",
        optionB: "James Rodríguez",
        optionC: "David Ospina",
        optionD: "Radamel Falcao",
        correctOption: "optionB"
    },

    { //COLOMBIA 4
        question: "¿Quién es el director técnico del equipo de Colombia?",
        optionA: "Néstor Lorenzo",
        optionB: "James Rodríguez",
        optionC: "David Ospina",
        optionD: "Radamel Falcao",
        correctOption: "optionA"
    },

    { //COLOMBIA 5
        question: "¿Cuál de estos no es un apodo para el equipo de Colombia?",
        optionA: "Sudamericanos",
        optionB: "Los Cafeteros",
        optionC: "La Tricolor",
        optionD: "La Fiebre Amarilla",
        correctOption: "optionA"
    },
    //total 75
    { //PARAGUAY 1
        question: "¿Quién es el capitán del equipo de Paraguay?",
        optionA: "Gustavo Alfaro",
        optionB: "Gustavo Gómez",
        optionC: "Paulo da Silva",
        optionD: "Roque Santa Cruz",
        correctOption: "optionB"
    },

    { //PARAGUAY 2
        question: "¿Quién es el director técnico del equipo de Paraguay?",
        optionA: "Gustavo Alfaro",
        optionB: "Gustavo Gómez",
        optionC: "Paulo da Silva",
        optionD: "Roque Santa Cruz",
        correctOption: "optionA"
    },

    { //PARAGUAY 3
        question: "¿Cuál de estos es un apodo para el equipo de Paraguay?",
        optionA: "Los Bicolor",
        optionB: "La Albirroja",
        optionC: "Sudamericanos",
        optionD: "Paraguayoos",
        correctOption: "optionB"
    },

    { //PARAGUAY 4
        question: "¿Cuantos goles tiene el máximo goleador en el equipo de Paraguay?",
        optionA: "37",
        optionB: "34",
        optionC: "32",
        optionD: "35",
        correctOption: "optionC"
    },

    { //PARAGUAY 5
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó Paraguay?",
        optionA: "Chile 1962",
        optionB: "Uruguay 1930",
        optionC: "Italia 1990",
        optionD: "Sudafrica 2010",
        correctOption: "optionD"
    },
    //total 80
    { //MARRUECOS 1
        question: "¿Cuál de estos es un apodo para el equipo de Marruecos?",
        optionA: "Los Leones del Atlas",
        optionB: "Los Rojos del Atlas",
        optionC: "El Mar del Atlas",
        optionD: "La CAF",
        correctOption: "optionA"
    },

    { //MARRUECOS 2
        question: "¿Quién es el capitán del equipo de Marruecos?",
        optionA: "Mohamed Ouahbi",
        optionB: "Achraf Hakimi",
        optionC: "Noureddine Naybet",
        optionD: "Ahmed Faras",
        correctOption: "optionB"
    },

    { //MARRUECOS 3
        question: "¿Quién es el director técnico del equipo de Marruecos?",
        optionA: "Mohamed Ouahbi",
        optionB: "Achraf Hakimi",
        optionC: "Noureddine Naybet",
        optionD: "Ahmed Faras",
        correctOption: "optionA"
    },

    { //MARRUECOS 4
        question: "¿Cuántas participaciones tiene Marruecos en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "5",
        optionC: "7",
        optionD: "8",
        correctOption: "optionC"
    },

    { //MARRUECOS 5
        question: "¿Cuál fue la primera Copa Mundial en la que Marruecos calificó?",
        optionA: "Mexico 1970",
        optionB: "Catar 2022",
        optionC: "Francia 1998",
        optionD: "Suiza 1954",
        correctOption: "optionA"
    },
    //total 85
    { //TUNEZ 1
        question: "¿Cuál fue la primera Copa Mundial en la que Túnez calificó?",
        optionA: "Mexico 1970",
        optionB: "Argentina 1978",
        optionC: "Francia 1998",
        optionD: "Suiza 1954",
        correctOption: "optionB"
    },

    { //TUNEZ 2
        question: "¿Quién es el capitán del equipo de Túnez?",
        optionA: "Issam Jemâa",
        optionB: "Hammadi Agrebi",
        optionC: "Radhi Jaïdi ",
        optionD: "Ellyes Skhiri",
        correctOption: "optionD"
    },

    { //TUNEZ 3
        question: "¿Quién es el director técnico del equipo de Túnez?",
        optionA: "Radhi Jaïdi ",
        optionB: "Hammadi Agrebi",
        optionC: "Sabri Lamouchi",
        optionD: "Aymen Dahmen",
        correctOption: "optionC"
    },

    { //TUNEZ 4
        question: "¿Cuál de estos es un apodo para el equipo de Túnez?",
        optionA: "La Luna",
        optionB: "Las Estrellas",
        optionC: "Las Águilas de Cartago",
        optionD: "Las Águilas Arabicas",
        correctOption: "optionC"
    },

    { //TUNEZ 5
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó Túnez?",
        optionA: "Catar 2022",
        optionB: "Brasil 2014",
        optionC: "Argentina 1978",
        optionD: "Sudafrica 2010",
        correctOption: "optionA"
    },
    //total 90    
    { //EGIPTO 1
        question: "¿Cuál de estos es un apodo para el equipo de Egipto?",
        optionA: "The Pharaohs",
        optionB: "The Pyramids",
        optionC: "The Mummies",
        optionD: "The EFA",
        correctOption: "optionA"
    },

    { //EGIPTO 2
        question: "¿Quién es el capitán del equipo de Egipto?",
        optionA: "Mohamed Salah",
        optionB: "Hossam Hassan",
        optionC: "Ahmed Hassan",
        optionD: "Hany Ramzy",
        correctOption: "optionA"
    },

    { //EGIPTO 3
        question: "¿Quién es el director técnico del equipo de Egipto?",
        optionA: "Mohamed Salah",
        optionB: "Hossam Hassan",
        optionC: "Ahmed Hassan",
        optionD: "Hany Ramzy",
        correctOption: "optionB"
    },

    { //EGIPTO 4
        question: "¿Cuántas participaciones tiene Egipto en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "4",
        optionC: "2",
        optionD: "1",
        correctOption: "optionC"
    },

    { //EGIPTO 5
        question: "¿Cuál fue la primera Copa Mundial en la que Egipto calificó?",
        optionA: "Italia 1934",
        optionB: "Francia 1998",
        optionC: "Suiza 1954",
        optionD: "Brasil 1950",
        correctOption: "optionA"
    },
    //total 95
    { //ARGELIA 1
        question: "¿Cuánto tiempo pasó Argelia sin participar en una Copa Mundial de la FIFA?",
        optionA: "16 años",
        optionB: "4 años",
        optionC: "8 años",
        optionD: "12 años",
        correctOption: "optionD"
    },

    { //ARGELIA 2
        question: "¿Cuál fue la primera Copa Mundial en la que Argelia calificó?",
        optionA: "Brasil 2014",
        optionB: "España 1982",
        optionC: "Francia 1998",
        optionD: "Sudafrica 2010",
        correctOption: "optionB"
    },

    { //ARGELIA 3
        question: "¿Quién es el capitán del equipo de Argelia?",
        optionA: "Vladimir Petković",
        optionB: "Islam Slimani",
        optionC: "Riyad Mahrez",
        optionD: "Aïssa Mandi",
        correctOption: "optionC"
    },

    { //ARGELIA 4
        question: "¿Quién es el director técnico del equipo de Argelia?",
        optionA: "Vladimir Petković",
        optionB: "Islam Slimani",
        optionC: "Riyad Mahrez",
        optionD: "Aïssa Mandi",
        correctOption: "optionA"
    },

    { //ARGELIA 5
        question: "¿Cuántas participaciones tiene Argelia en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "6",
        correctOption: "optionC"
    },
    //total 100
    { //GHANA 1
        question: "¿Cuál de estos es un apodo para el equipo de Ghana?",
        optionA: "Black Stars",
        optionB: "Ghanadores",
        optionC: "The Tricolors",
        optionD: "The GFA",
        correctOption: "optionA"
    },

    { //GHANA 2
        question: "¿Cuál fue la primera Copa Mundial en la que Ghana calificó?",
        optionA: "Alemania 2006",
        optionB: "Corea-Japón 2002",
        optionC: "Francia 1998",
        optionD: "Catar 2022",
        correctOption: "optionA"
    },

    { //GHANA 3
        question: "¿Cuántas participaciones tiene Egipto en la Copa Mundial de la FIFA?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        optionD: "7",
        correctOption: "optionB"
    },

    { //GHANA 4
        question: "¿Quién es el capitán del equipo de Egipto?",
        optionA: "Asamoah Gyan",
        optionB: "André Ayew",
        optionC: "Jordan Ayew",
        optionD: "Carlos Queiroz",
        correctOption: "optionC"
    },

    { //GHANA 5
        question: "¿Quién es el director técnico del equipo de Egipto?",
        optionA: "Asamoah Gyan",
        optionB: "André Ayew",
        optionC: "Jordan Ayew",
        optionD: "Carlos Queiroz",
        correctOption: "optionD"
    },
    //total 105
    { //CABO VERDE 1
        question: "¿Cuántas participaciones tiene Cabo Verde en la Copa Mundial de la FIFA?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "Ninguna",
        correctOption: "optionA"
    },

    { //CABO VERDE 2
        question: "¿Cuál fue la primera Copa Mundial en la que Cabo Verde calificó?",
        optionA: "Catar 2022",
        optionB: "Canada, Mexico & United States 2026",
        optionC: "Brazil 2014",
        optionD: "Rusia 2018",
        correctOption: "optionB"
    },

    { //CABO VERDE 3
        question: "¿Cómo terminó el partido contra Esuatini que logró clasificar a Cabo Verde para la Copa Mundial de la FIFA 2026?",
        optionA: "3 - 2",
        optionB: "1 - 2",
        optionC: "3 - 0",
        optionD: "2 - 1",
        correctOption: "optionC"
    },

    { //CABO VERDE 4
        question: "¿Quién es el máximo goleador del equipo de Cabo Verde?",
        optionA: "Bupista",
        optionB: "Ryan Mendes",
        optionC: "Rui Águas",
        optionD: "Lúcio Antunes",
        correctOption: "optionB"
    },

    { //CABO VERDE 5
        question: "¿Qué selección quedó emparejada con España, Uruguay y Arabia Saudita en el Grupo H?",
        optionA: "Portugal",
        optionB: "Cabo Verde",
        optionC: "Jordania",
        optionD: "Sudáfrica",
        correctOption: "optionB"
    },
    //total 110
    { //SUDAFRICA 1
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó Sudáfrica?",
        optionA: "Catar 2022",
        optionB: "Sudáfrica 2010",
        optionC: "Brasil 2014",
        optionD: "Rusia 2018",
        correctOption: "optionB"
    },

    { //SUDAFRICA 2
        question: "¿Cuántas participaciones tiene Sudáfrica en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "2 ",
        optionC: "5",
        optionD: "4",
        correctOption: "optionD"
    },

    { //SUDAFRICA 3
        question: "¿Cuánto tiempo pasó Sudáfrica sin participar en una Copa Mundial de la FIFA?",
        optionA: "16 años",
        optionB: "12 años",
        optionC: "24 años",
        optionD: "8 años",
        correctOption: "optionA"
    },

    { //SUDAFRICA 4
        question: "¿En qué año participó Sudáfrica por primera vez en una Copa Mundial de la FIFA?",
        optionA: "Sudáfrica 2010",
        optionB: "Brasil 2014",
        optionC: "Francia 1998",
        optionD: "Estados Unidos 1994",
        correctOption: "optionC"
    },

    { //SUDAFRICA 5
        question: "¿Cuál es el apodo oficial de la selección de Costa de Marfil?",
        optionA: "Sudáfricanos",
        optionB: "Bafana Bafana",
        optionC: "The Bafanas",
        optionD: "SAFAs",
        correctOption: "optionB"
    },
    //total 115
    { //CATAR 1
        question: "¿Qué país fue anfitrión para la 22va Copa Mundial de la FIFA?",
        optionA: "Francia",
        optionB: "Brasil",
        optionC: "Catar",
        optionD: "Rusia",
        correctOption: "optionC"
    },

    { //CATAR 2
        question: "¿Cuántas participaciones tiene Catar en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "2",
        optionC: "5",
        optionD: "4",
        correctOption: "optionB"
    },

    { //CATAR 3
        question: "¿En qué año participó Catar por primera vez en una Copa Mundial de la FIFA?",
        optionA: "1998",
        optionB: "2002",
        optionC: "2006",
        optionD: "2022",
        correctOption: "optionD"
    },

    { //CATAR 4
        question: "¿Cómo terminó el partido contra Emiratos Árabes Unidos que logró clasificar a Catar para la Copa Mundial de la FIFA 2026?",
        optionA: "2 - 1",
        optionB: "3 - 1",
        optionC: "3 - 2",
        optionD: "2 - 2",
        correctOption: "optionA"
    },

    { //CATAR 5
        question: "¿Qué selección quedó emparejada con Bosnia y Herzegovina, Canadá y Suiza en el Grupo B?",
        optionA: "Marruecos",
        optionB: "Catar",
        optionC: "Haiti",
        optionD: "Sudáfrica",
        correctOption: "optionC"
    },
    //total 120
    { //INGLATERRA 1
        question: "¿En qué año ganó Inglaterra su único título de la Copa Mundial de la FIFA?",
        optionA: "1958",
        optionB: "1966",
        optionC: "1974",
        optionD: "2002",
        correctOption: "optionB"
    },

    { //INGLATERRA 2
        question: "¿Quién fue el entrenador de Inglaterra cuando ganó el Mundial?",
        optionA: "Bobby Brown",
        optionB: "John Stephens",
        optionC: "Gareth Southgate",
        optionD: "Alf Ramsey",
        correctOption: "optionD"
    },

    { //INGLATERRA 3
        question: "¿En qué estadio se jugó la final del Mundial que ganó Inglaterra?",
        optionA: "Old Trafford",
        optionB: "Wembley",
        optionC: "Anfield",
        optionD: "Stanford Bridge",
        correctOption: "optionB"
    },

    { //INGLATERRA 4
        question: "¿Contra qué selección jugó Inglaterra en la final de 1966?",
        optionA: "Brasil",
        optionB: "Francia",
        optionC: "Argentina",
        optionD: "Alemania",
        correctOption: "optionD"
    },

    { //INGLATERRA 5
        question: "¿Quién anotó el gol ganador para Inglaterra en la final de 1966?",
        optionA: "Geoff Hurst",
        optionB: "Michael Owen",
        optionC: "Gary Lineker",
        optionD: "Bobby Charlton",
        correctOption: "optionA"
    },
    //total 125   
    { //COSTA 1
        question: "¿Cuántas participaciones tiene Costa de Marfil en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "2",
        optionC: "5",
        optionD: "4",
        correctOption: "optionD"
    },

    { //COSTA 2
        question: "¿Quién es el capitán del equipo de Costa de Marfil?",
        optionA: "Emerse Faé",
        optionB: "Franck Kessié",
        optionC: "Didier Zokora",
        optionD: "Didier Drogba",
        correctOption: "optionB"
    },

    { //COSTA 3
        question: "¿Quién es el director técnico del equipo de Costa de Marfil?",
        optionA: "Emerse Faé",
        optionB: "Franck Kessié",
        optionC: "Didier Zokora",
        optionD: "Didier Drogba",
        correctOption: "optionA"
    },

    { //COSTA 4
        question: "¿En qué año participó Costa de Marfil por primera vez en una Copa Mundial de la FIFA?",
        optionA: "2002",
        optionB: "1998",
        optionC: "2006",
        optionD: "1994",
        correctOption: "optionC"
    },

    { //COSTA 5
        question: "¿Cuál es el apodo oficial de la selección de Costa de Marfil?",
        optionA: "Les Éléphants",
        optionB: "The Ivory Coast",
        optionC: "No tienen apodo",
        optionD: "The African Elephants",
        correctOption: "optionA"
    },
    //total 130   
    { //SENEGAL 1
        question: "¿Cuántas participaciones tiene Senegal en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "2",
        optionC: "1",
        optionD: "4",
        correctOption: "optionD"
    },

    { //SENEGAL 2
        question: "¿Quién es el capitán del equipo de Senegal?",
        optionA: "Pape Thiaw",
        optionB: "Kalidou Koulibaly",
        optionC: "Idrissa Gueye",
        optionD: "Sadio Mané",
        correctOption: "optionB"
    },

    { //SENEGAL 3
        question: "¿Quién es el director técnico del equipo de Senegal?",
        optionA: "Pape Thiaw",
        optionB: "Kalidou Koulibaly",
        optionC: "Idrissa Gueye",
        optionD: "Sadio Mané",
        correctOption: "optionA"
    },

    { //SENEGAL 4
        question: "¿En qué año participó Senegal por primera vez en una Copa Mundial de la FIFA?",
        optionA: "2002",
        optionB: "1998",
        optionC: "2006",
        optionD: "1994",
        correctOption: "optionA"
    },

    { //SENEGAL 5
        question: "¿Cuál es el apodo oficial de la selección de Senegal?",
        optionA: "Lions of Teranga",
        optionB: "Tigers of Teranga",
        optionC: "The Teranga Men",
        optionD: "The CAF",
        correctOption: "optionA"
    },
    //total 135
    { //ARABIA 1
        question: "¿En qué año debutó Arabia Saudita en la Copa Mundial de la FIFA?",
        optionA: "1992",
        optionB: "1994",
        optionC: "2006",
        optionD: "2012",
        correctOption: "optionB"
    },

    { //ARABIA 2
        question: "¿Qué jugador saudí anotó un famoso gol contra Bélgica en 1994 tras una carrera de 60 metros?",
        optionA: "Sami Al-Jaber ",
        optionB: "Yasser Al-Qahtani ",
        optionC: "Saeed Al-Owairan ",
        optionD: "Majed Abdullah",
        correctOption: "optionC"
    },

    { //ARABIA 3
        question: "¿Qué selección derrotó a Arabia Saudita 8-0 en el Mundial de 2002?",
        optionA: "Alemania",
        optionB: "México",
        optionC: "Estados Unidos",
        optionD: "Corea del Sur",
        correctOption: "optionA"
    },

    { //ARABIA 4
        question: "¿Qué victoria de Arabia Saudita sorprendió a todos en 2022?",
        optionA: "Contra Francia",
        optionB: "Contra Portugal",
        optionC: "Contra Argentina",
        optionD: "Contra Alemania",
        correctOption: "optionC"
    },

    { //ARABIA 5
        question: "¿Cuál ha sido el mejor resultado clasificatorio de Arabia Saudita?",
        optionA: "Octavos de final",
        optionB: "Cuartos de final",
        optionC: "Final",
        optionD: "Semifinal",
        correctOption: "optionA"
    },
    //total 140
    { //FRANCIA 1
        question: "¿Quién es el máximo goleador de todos los tiempos para la selección de fútbol de Francia?",
        optionA: "Thierry Henry",
        optionB: "Michel Platini",
        optionC: "Zinedine Zidane",
        optionD: "Karim Benzema",
        correctOption: "optionA"
    },

    { //FRANCIA 2
        question: "¿En qué año ganó Francia su primera Copa Mundial de la FIFA?",
        optionA: "1994",
        optionB: "1998",
        optionC: "2002",
        optionD: "2006",
        correctOption: "optionB"
    },

    { //FRANCIA 3
        question: "¿Cuál de estos es el estadio de la selección francesa?",
        optionA: "Stade de France",
        optionB: "Parque de los Príncipes",
        optionC: "Vélódromo de Stade",
        optionD: "Stade Geoffroy-Guichard",
        correctOption: "optionA"
    },

    { //FRANCIA 4
        question: "¿Quién fue el entrenador de la selección francesa durante la victoria en la Copa Mundial 2018?",
        optionA: "Didier Deschamps",
        optionB: "Raymond Domenech",
        optionC: "Laurent Blanc",
        optionD: "Michel Hidalgo",
        correctOption: "optionA"
    },

    { //FRANCIA 5
        question: "¿Qué jugador marcó el gol de la victoria en la final de la Copa del Mundo de 1998?",
        optionA: "Thierry Henry",
        optionB: "Michel Platini",
        optionC: "Zinedine Zidane",
        optionD: "Karim Benzema",
        correctOption: "optionC"
    },
    //total 145
    { //CROACIA 1
        question: "¿En qué año terminó en segundo lugar el equipo de Croacia?",
        optionA: "2018",
        optionB: "2014",
        optionC: "2002",
        optionD: "1998",
        correctOption: "optionA"
    },

    { //CROACIA 2
        question: "¿Cuántas participaciones tiene Croacia en la Copa Mundial de la FIFA?",
        optionA: "5",
        optionB: "6",
        optionC: "8",
        optionD: "7",
        correctOption: "optionD"
    },

    { //CROACIA 3
        question: "¿Cuál fue la primera participación de Croacia en la Copa Mundial de la FIFA?",
        optionA: "Francia 1998",
        optionB: "Catar 2022",
        optionC: "Corea-Japón 2002",
        optionD: "Rusia 2016",
        correctOption: "optionA"
    },

    { //CROACIA 4
        question: "¿En qué lugar terminó Croacia en la Copa Mundial de la FIFA 2022?",
        optionA: "Cuarto",
        optionB: "Quinto",
        optionC: "Tercero",
        optionD: "Sexto",
        correctOption: "optionC"
    },

    { //CROACIA 5
        question: "¿Quién es el director técnico del equipo de Croacia?",
        optionA: "Luka Modrić",
        optionB: "Davor Šuker",
        optionC: "Zlatko Dalić",
        optionD: "Ivo Josipović",
        correctOption: "optionC"
    },
    //total 150
    { //PORTUGAL 1
        question: "Este jugador es capitán, máximo goleador y tiene la mayor cantidad de partidos asistidos en el equipo de Portugal.",
        optionA: "Eusébio da Silva Ferreira",
        optionB: "Cristiano Ronaldo",
        optionC: "Cédric",
        optionD: "Adrien Silva",
        correctOption: "optionB"
    },

    { //PORTUGAL 2
        question: "Se convirtió en el primer jugador de la historia en anotar en ocho grandes torneos en forma consecutiva:",
        optionA: "Eusébio da Silva Ferreira",
        optionB: "Cristiano Ronaldo",
        optionC: "Cédric",
        optionD: "Adrien Silva",
        correctOption: "optionB"
    },

    { //PORTUGAL 3
        question: "Esta selección ha participado consecutivamente en 7 Copas Mundiales de la FIFA, pero su máxima posición ha sido tercer lugar:",
        optionA: "Francia",
        optionB: "Portugal",
        optionC: "México",
        optionD: "Japón",
        correctOption: "optionb"
    },

    { //PORTUGAL 4
        question: "¿Quién fue el entrenador de la selección de Portugal durante la Copa Mundial de la FIFA 2022?",
        optionA: "Fernando Santos",
        optionB: "Roberto Martínez",
        optionC: "Paulo Bento",
        optionD: "Carlos Queiroz",
        correctOption: "optionA"
    },

    { //PORTUGAL 5
        question: "¿Qué selección quedó emparejada con Colombia, Uzbekistán y RD Congo en el Grupo K?",
        optionA: "Japón",
        optionB: "Ghana",
        optionC: "Inglaterra",
        optionD: "Portugal",
        correctOption: "optionD"
    },
    //total 155    
    { //NORUEGA 1
        question: "¿Cuánto tiempo pasó Noruega sin participar en una Copa Mundial de la FIFA?",
        optionA: "28 años",
        optionB: "30 años",
        optionC: "18 años",
        optionD: "26 años",
        correctOption: "optionA"
    },

    { //NORUEGA 2
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó Noruega?",
        optionA: "Catar 2022",
        optionB: "Brasil 2014",
        optionC: "Francia 1998",
        optionD: "Corea-Japon 2022",
        correctOption: "optionC"
    },

    { //NORUEGA 3
        question: "¿Cuántas participaciones tiene Noruega en la Copa Mundial de la FIFA?",
        optionA: "4",
        optionB: "5",
        optionC: "2",
        optionD: "3",
        correctOption: "optionA"
    },

    { //NORUEGA 4
        question: "¿Cuál fue la primera participación de Noruega en la Copa Mundial de la FIFA?",
        optionA: "Francia 1938",
        optionB: "Uruguay 1930",
        optionC: "Suiza 1954",
        optionD: "Brasil 1950",
        correctOption: "optionA"
    },

    { //NORUEGA 5
        question: "¿Qué equipo nunca ha perdido contra Brasil en la Copa Mundial de la FIFA?",
        optionA: "Italia",
        optionB: "Noruega",
        optionC: "Francia",
        optionD: "Senegal",
        correctOption: "optionB"
    },
    //total 160   
    { //ALEMANIA 1
        question: "¿Cuántos títulos de la Copa Mundial de la FIFA ha ganado Alemania?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "5",
        correctOption: "optionC"
    },

    { //ALEMANIA 2
        question: "¿En qué año ganó Alemania su primer mundial?",
        optionA: "1954",
        optionB: "1958",
        optionC: "1986",
        optionD: "1990",
        correctOption: "optionA"
    },

    { //ALEMANIA 3
        question: "¿Qué jugador de Alemania es conocido por ser el máximo goleador histórico de los Mundiales?",
        optionA: "Gerd Müller",
        optionB: "Thomas Müller",
        optionC: "Jürgen Kilnsmann",
        optionD: "Miroslav Klose",
        correctOption: "optionD"
    },

    { //ALEMANIA 4
        question: "¿En qué país ganó Alemania su cuarto título mundial en 2014?",
        optionA: "Sudáfrica",
        optionB: "Brasil",
        optionC: "Rusia",
        optionD: "Italia",
        correctOption: "optionB"
    },

    { //ALEMANIA 5
        question: "¿Contra qué selección jugó Alemania la final del Mundial de 2014?",
        optionA: "España",
        optionB: "Inglaterra",
        optionC: "Argentina",
        optionD: "Francia",
        correctOption: "optionC"
    },
    //total 165   
    { //PAISES 1
        question: "¿En cuántas finales ha participado Países Bajos?",
        optionA: "2",
        optionB: "1",
        optionC: "4",
        optionD: "3",
        correctOption: "optionD"
    },

    { //PAISES 2
        question: "¿En qué año alcanzó Países Bajos su primera final mundialista?",
        optionA: "1966",
        optionB: "1974",
        optionC: "2002",
        optionD: "1990",
        correctOption: "optionB"
    },

    { //PAISES 3
        question: "¿Qué selección derrotó a Países Bajos en la final de 1974?",
        optionA: "Brasil",
        optionB: "Alemania",
        optionC: "Italia",
        optionD: "Argentina",
        correctOption: "optionB"
    },

    { //PAISES 4
        question: "¿En qué mundial Países Bajos perdió la final contra España?",
        optionA: "2002",
        optionB: "2006",
        optionC: "2010",
        optionD: "2014",
        correctOption: "optionC"
    },

    { //PAISES 5
        question: "¿Quién es considerado el máximo goleador de Países Bajos?",
        optionA: "Robin van Persie",
        optionB: "Ruud van Nistelrooy",
        optionC: "Dennis Bergkamp",
        optionD: "Arjen Robben",
        correctOption: "optionA"
    },
    //total 170

    { //BELGICA 1
        question: "¿Cuál ha sido el mejor resultado de Bélgica en una Copa Mundial de la FIFA?",
        optionA: "Campeón",
        optionB: "Subcampeón",
        optionC: "Semifinalista",
        optionD: "Cuartos de final",
        correctOption: "optionC"
    },

    { // 2
        question: "¿En qué Mundial logró Bélgica su mejor resultado?",
        optionA: "1990",
        optionB: "2010",
        optionC: "2006",
        optionD: "2018",
        correctOption: "optionD"
    },

    { // 3
        question: "¿Contra qué selección venció Bélgica para quedarse con el tercer lugar en 2018?",
        optionA: "Francia",
        optionB: "Croacia",
        optionC: "Países Bajos",
        optionD: "Inglaterra",
        correctOption: "optionD"
    },

    { // 4
        question: "¿Qué jugador belga fue capitán en Rusia 2018?",
        optionA: "Eden Hazard",
        optionB: "Kevin De Bruyne",
        optionC: "Romelu Lukaku",
        optionD: "Vincent Kompany",
        correctOption: "optionA"
    },

    { // 5
        question: "¿Cuándo fué la primera participación de Bélgica en una Copa Mundial de la FIFA?",
        optionA: "1930",
        optionB: "1950",
        optionC: "1966",
        optionD: "1974",
        correctOption: "optionA"
    },
    //total 175
    { //AUSTRIA 1
        question: "¿Cuál fue el mejor resultado de la selección de Austria en la Copa Mundial de la FIFA?",
        optionA: "Campeón",
        optionB: "Cuartos de final",
        optionC: "Tercer lugar",
        optionD: "Subcampeón",
        correctOption: "optionC"
    },

    { //AUSTRIA 2
        question: "¿En qué Mundial logró Austria el tercer lugar?",
        optionA: "1954",
        optionB: "1930",
        optionC: "1942",
        optionD: "1950",
        correctOption: "optionA"
    },

    { //AUSTRIA 3
        question: "¿Cuál fué la última participación de la selección de Austria en un Mundial?",
        optionA: "1998",
        optionB: "2022",
        optionC: "2018",
        optionD: "2002",
        correctOption: "optionA"
    },

    { //AUSTRIA 4
        question: "¿En cuántos mundiales ha participado Austria?",
        optionA: "8",
        optionB: "6",
        optionC: "7",
        optionD: "5",
        correctOption: "optionA"
    },

    { //AUSTRIA 5
        question: "¿Qué jugador de la selección de Austria se convertiría en entrenador?",
        optionA: "Herbert Prohaska",
        optionB: "Bruno Pezzey",
        optionC: "Erich Obermayer",
        optionD: "Friedrich Koncilia",
        correctOption: "optionA"
    },
    //total 180
    { //SUIZA 1
        question: "¿Cuál ha sido el mejor resultado de la selección de Suiza?",
        optionA: "Semifinal",
        optionB: "Cuartos de final ",
        optionC: "Octavos de final",
        optionD: "Final",
        correctOption: "optionB"
    },

    { //SUIZA 2
        question: "¿Cuándo fué la primera participación de Suiza en la Copa Mundial de la FIFA?",
        optionA: "1934",
        optionB: "1930",
        optionC: "1948",
        optionD: "1942",
        correctOption: "optionA"
    },

    { //SUIZA 3
        question: "¿Cuántas veces ha participado Suiza en un Mundial?",
        optionA: "12",
        optionB: "14",
        optionC: "13",
        optionD: "10",
        correctOption: "optionC"
    },

    { //SUIZA 4
        question: "¿Cuántas victorias lleva la selección de Suiza?",
        optionA: "14",
        optionB: "8",
        optionC: "19",
        optionD: "10",
        correctOption: "optionA"
    },

    { //SUIZA 5
        question: "¿Cuándo fué la última participación de Suiza en la Copa Mundial de la FIFA?",
        optionA: "2022",
        optionB: "2018",
        optionC: "2014",
        optionD: "2010",
        correctOption: "optionA"
    },
    //total 185
    { //ESPAÑA 1
        question: "¿En cuántas Copas Mundiales de la FIFA ha clasificado España?",
        optionA: "20",
        optionB: "19",
        optionC: "18",
        optionD: "17",
        correctOption: "optiond"
    },

    { //ESPAÑA 2
        question: "¿Qué país fue anfitrión para la 12va Copa Mundial de la FIFA?",
        optionA: "Sudáfrica",
        optionB: "Italia",
        optionC: "Argentina",
        optionD: "España",
        correctOption: "optionD"
    },

    { //ESPAÑA 3
        question: "¿Quién es el máximo goleador en el equipo de España, con 59 goles en total?",
        optionA: "David Villa",
        optionB: "Luis de la Fuente",
        optionC: "Álvaro Morata",
        optionD: "Sergio Ramos",
        correctOption: "optionA"
    },

    { //ESPAÑA 4
        question: "¿En cuántas Copas Mundiales de la FIFA no clasificó España?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        optionD: "7",
        correctOption: "optionC"
    },

    { //ESPAÑA 5
        question: "¿Quién es el capitán del equipo de España?",
        optionA: "David Villa",
        optionB: "Luis de la Fuente",
        optionC: "Álvaro Morata",
        optionD: "Sergio Ramos",
        correctOption: "optionC"
    },
    //total 190
    { //ESCOCIA 1
        question: "¿Qué selección quedó emparejada con Brasil, Marruecos y Haití en el Grupo C?",
        optionA: "Cabo Verde",
        optionB: "Curazao",
        optionC: "Escocia",
        optionD: "Japón",
        correctOption: "optionC"
    },

    { //ESCOCIA 2
        question: "¿Quién es el capitán del equipo de Escocia?",
        optionA: "Steve Clarke",
        optionB: "Andy Robertson",
        optionC: "Kenny Dalglish",
        optionD: "Denis Law",
        correctOption: "optionC"
    },

    { //ESCOCIA 3
        question: "¿Quién es el director técnico del equipo de Escocia?",
        optionA: "Steve Clarke",
        optionB: "Andy Robertson",
        optionC: "Kenny Dalglish",
        optionD: "Denis Law",
        correctOption: "optionA"
    },

    { //ESCOCIA 4
        question: "¿Cuál fue la primera participación de Escocia en la Copa Mundial de la FIFA?",
        optionA: "Francia 1998",
        optionB: "Suiza 1954",
        optionC: "Brasil 1950",
        optionD: "Sudáfrica 2010",
        correctOption: "optionB"
    },

    { //ESCOCIA 5
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó Escocia?",
        optionA: "Francia 1998",
        optionB: "Suiza 1954",
        optionC: "Brasil 1950",
        optionD: "Sudáfrica 2010",
        correctOption: "optionA"
    },
    //total 195

    { //CURAZAO 1
        question: "¿En cuántas Copas Mundiales de la FIFA  ha clasificado Curazao?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "4",
        correctOption: "optionA"
    },

    { //CURAZAO 2
        question: "¿En qué mundiales ha clasificado Curazao?",
        optionA: "2022",
        optionB: "2026",
        optionC: "2018 y 2022",
        optionD: "2022 y 2026",
        correctOption: "optionB"
    },

    { //CURAZAO 3
        question: "Esta selección se unió a Haití y Panamá como los únicos representantes de Concacaf",
        optionA: "Cabo Verde",
        optionB: "Costa de Marfil",
        optionC: "Uruguay",
        optionD: "Curazao",
        correctOption: "optionD"
    },

    { //CURAZAO 4
        question: "¿Cómo terminó el partido contra Jamaica que logró clasificar a Curazao para la Copa Mundial de la FIFA 2026?",
        optionA: "0 - 0",
        optionB: "1 - 0",
        optionC: "2 - 1",
        optionD: "4 - 2",
        correctOption: "optionA"
    },

    { //CURAZAO 5
        question: "¿Cual es el país más pequeño que ha clasificado para la Copa Mundial de la FIFA?",
        optionA: "Haití",
        optionB: "Jamaica",
        optionC: "Cabo Verde",
        optionD: "Curazao",
        correctOption: "optionD"
    },
    //total 200
    { //HAITI 1
        question: "¿En cuántas Copas Mundiales de la FIFA ha clasificado Haití?",
        optionA: "2",
        optionB: "3",
        optionC: "1",
        optionD: "4",
        correctOption: "optionA"
    },

    { //HAITI 2
        question: "¿En qué mundiales ha clasificado Haití?",
        optionA: "1954 y 2022",
        optionB: "1998 y 2002",
        optionC: "1974 y 2026",
        optionD: "1950 y 1958 ",
        correctOption: "optionC"
    },

    { //HAITI 3
        question: "¿Cuál de estos no es un apodo para el equipo de Haití?",
        optionA: "Les Grenadiers",
        optionB: "Le Rouge et Bleu",
        optionC: "Les Bicolores",
        optionD: "La Sélection Mondial",
        correctOption: "optionD"
    },

    { //HAITI 4
        question: "¿Quién es el capitán del equipo de Haití?",
        optionA: "Johny Placide",
        optionB: "Pierre Richard Bruny",
        optionC: "Duckens Nazon",
        optionD: "Sébastien Migné",
        correctOption: "optionA"
    },

    { //HAITI 5
        question: "¿Quién es el director técnico del equipo de Haití?",
        optionA: "Johny Placide",
        optionB: "Pierre Richard Bruny",
        optionC: "Duckens Nazon",
        optionD: "Sébastien Migné",
        correctOption: "optionD"
    },
    //total 205    
    { //PANAMA 1
        question: "¿En cuántos mundiales ha clasificado Panamá?",
        optionA: "2",
        optionB: "3",
        optionC: "1",
        optionD: "4",
        correctOption: "optionA"
    },

    { //PANAMA 2
        question: "¿Cuándo clasificó el equipo de Panamá para la Copa Mundial de la FIFA 2026?",
        optionA: "Enero 2026",
        optionB: "Diciembre 2025",
        optionC: "Noviembre 2025",
        optionD: "Octubre 2025 ",
        correctOption: "optionC"
    },

    { //PANAMA 3
        question: "¿En qué mundiales ha clasificado Panamá?",
        optionA: "1954 y 2022",
        optionB: "2018 y 2026",
        optionC: "1974 y 2002",
        optionD: "1950 y 1958",
        correctOption: "optionB"
    },

    { //PANAMA 4
        question: "¿Quién es el capitán del equipo de Panamá?",
        optionA: "Aníbal Godoy",
        optionB: "Luis Tejada",
        optionC: "Blas Pérez",
        optionD: "Gabriel Torres",
        correctOption: "optionA"
    },

    { //PANAMA 5
        question: "¿Quién es el director técnico del equipo de Panamá?",
        optionA: "Aníbal Godoy",
        optionB: "Luis Tejada",
        optionC: "Blas Pérez",
        optionD: "Thomas Christiansen",
        correctOption: "optionD"
    },
    //total 210
    { //TURQUIA 1
        question: "¿Quién es el director técnico del equipo de Turquía?",
        optionA: "Hakan Çalhanoğlu",
        optionB: "Hakan Şükür",
        optionC: "Rüştü Reçber",
        optionD: "Vincenzo Montella",
        correctOption: "optionD"
    },

    { //TURQUIA 2
        question: "¿Quién es el capitán del equipo de Turquía?",
        optionA: "Hakan Çalhanoğlu",
        optionB: "Hakan Şükür",
        optionC: "Rüştü Reçber",
        optionD: "Vincenzo Montella",
        correctOption: "optionA"
    },

    { //TURQUIA 3
        question: "¿Cuál se considera la mejor Copa Mundial de FIFA para Turquía?",
        optionA: "1982 FIFA World Cup España",
        optionB: "1986 FIFA World Cup México",
        optionC: "1930 FIFA World Cup Uruguay",
        optionD: "2002 FIFA World Cup Corea-Japon",
        correctOption: "optionD"
    },

    { //TURQUIA 4
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó Turquía?",
        optionA: "1982 FIFA World Cup España",
        optionB: "1986 FIFA World Cup México",
        optionC: "1930 FIFA World Cup Uruguay",
        optionD: "2002 FIFA World Cup Corea-Japon",
        correctOption: "optionD"
    },

    { //TURQUIA 5
        question: "¿Cuántas veces ha participado Turquía en la Copa Mundial de la FIFA?",
        optionA: "3",
        optionB: "2",
        optionC: "4",
        optionD: "5",
        correctOption: "optionA"
    },
    //total 215
    { //SUECIA 1
        question: "¿Cuántas veces ha participado Suecia en la Copa Mundial de la FIFA? ",
        optionA: "12",
        optionB: "13",
        optionC: "14",
        optionD: "15",
        correctOption: "optionB"
    },

    { //SUECIA 2
        question: "¿Qué país fue anfitrión para la 6ta Copa Mundial de la FIFA?",
        optionA: "Brasil",
        optionB: "Mexico",
        optionC: "Suecia",
        optionD: "Rusia",
        correctOption: "optionC"
    },

    { //SUECIA 3
        question: "¿Cuál ha sido el mejor resultado clasificatorio de Suecia?",
        optionA: "Cuartos de final",
        optionB: "Octavos de final",
        optionC: "Final",
        optionD: "Semifinal",
        correctOption: "optionA"
    },

    { //SUECIA 4
        question: "¿En qué año tuvo lugar la Copa Mundial de la FIFA Suecia?",
        optionA: "1934",
        optionB: "1958 ",
        optionC: "1998",
        optionD: "1950",
        correctOption: "optionB"
    },

    { //SUECIA 5
        question: "¿Qué selección quedó emparejada con Japón, Países Bajos y Túnez en el Grupo F?",
        optionA: "Brasil",
        optionB: "Rusia",
        optionC: "Irak",
        optionD: "Suecia",
        correctOption: "optionD"
    },
    //total 220
    { //BOSNIA 1
        question: "¿Cuál es el apodo oficial de la selección de Uzbekistán?",
        optionA: "The Stars",
        optionB: "Golden Lilies",
        optionC: "White Stars",
        optionD: "Golden Dragons",
        correctOption: "optionB"
    },

    { //BOSNIA 2
        question: "¿Qué selección quedó emparejada con Canadá, Catar y Suiza en el Grupo F?",
        optionA: "Bosnia y Herzegovina",
        optionB: "Rusia",
        optionC: "Irak",
        optionD: "Suecia",
        correctOption: "optionA"
    },

    { //BOSNIA 3
        question: "Este jugador es capitán, máximo goleador y tiene la mayor cantidad de partidos asistidos en el equipo de Bosnia y Herzegovina.",
        optionA: "Sergej Barbarez",
        optionB: "Edin Džeko",
        optionC: "Zvjezdan Misimović",
        optionD: "Muhamed Bešić",
        correctOption: "optionB"
    },

    { //BOSNIA 4
        question: "¿Cuántas veces ha participado Bosnia y Herzegovina en la Copa Mundial de la FIFA?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "4",
        correctOption: "optionB"
    },

    { //BOSNIA 5
        question: "¿En qué mundiales ha clasificado Bosnia y Herzegovina?",
        optionA: "1954 y 2022",
        optionB: "2014 y 2026",
        optionC: "1974 y 2002",
        optionD: "1950 y 1958",
        correctOption: "optionB"
    },
    //total 225
    { //CHECA 1
        question: "¿Cuál fue la primera participación de República Checa en la Copa Mundial de la FIFA?",
        optionA: "Francia 1998",
        optionB: "Italia 1934",
        optionC: "Brasil 1950",
        optionD: "Sudáfrica 2010",
        correctOption: "optionB"
    },

    { //CHECA 2
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó República Checa?",
        optionA: "Alemania 2006",
        optionB: "Catar 2022",
        optionC: "Sudáfrica 2010",
        optionD: "Rusia 2018",
        correctOption: "optionA"
    },

    { //CHECA 3
        question: "¿Qué selección quedó emparejada con México, Corea del Sur y Sudáfrica en el Grupo A?",
        optionA: "República Checa",
        optionB: "Rusia",
        optionC: "Catar",
        optionD: "Suecia",
        correctOption: "optionA"
    },

    { //CHECA 4
        question: "¿Qué equipo ganó 3 - 0 contra Estados Unidos en la Copa Mundial de Alemania 2006?",
        optionA: "República Checa",
        optionB: "Rusia",
        optionC: "Catar",
        optionD: "Suecia",
        correctOption: "optionC"
    },

    { //CHECA 5
        question: "¿Quién es el director técnico del equipo de Turquía?",
        optionA: "Tomáš Skuhravý",
        optionB: "Josef Masopust",
        optionC: "Oldřich Nejedlý",
        optionD: "Miroslav Koubek",
        correctOption: "optionD"
    },
    //total 230
    { //CONGO 1
        question: "¿Cuál fue la primera participación de R.D. del Congo en la Copa Mundial de la FIFA?",
        optionA: "Suiza 1954",
        optionB: "Brasil 1950",
        optionC: "Alemania 1974",
        optionD: "España 1982",
        correctOption: "optionC"
    },

    { //CONGO 2
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó R.D. del Congo?",
        optionA: "Suiza 1954",
        optionB: "Brasil 1950",
        optionC: "Alemania 1974",
        optionD: "España 1982",
        correctOption: "optionD"
    },

    { //CONGO 3
        question: "¿Cuánto tiempo pasó R.D. del Congo sin participar en una Copa Mundial de la FIFA?",
        optionA: "52 años",
        optionB: "56 años",
        optionC: "48 años",
        optionD: "62 años",
        correctOption: "optionA"
    },

    { //CONGO 4
        question: "¿Cómo terminó el partido contra Jamaica que logró clasificar a R.D. del Congo para la Copa Mundial de la FIFA 2026?",
        optionA: "0 - 0",
        optionB: "1 - 0",
        optionC: "2 - 1",
        optionD: "4 - 2",
        correctOption: "optionB"
    },

    { //CONGO 5
        question: "¿Quién dio el gol defensor que definió la clasificación de R.D. del Congo en la Copa Mundial de la FIFA 2026?",
        optionA: "Axel Tuanzebe",
        optionB: "Chancel Mbemba",
        optionC: "Dieumerci Mbokani",
        optionD: "Brian Bayeye",
        correctOption: "optionA"
    },
    //total 235
    { //IRAK 1
        question: "¿Cuál fue la primera participación de Irak en la Copa Mundial de la FIFA?",
        optionA: "Suiza 1954",
        optionB: "Brasil 1950",
        optionC: "Mexico 1986",
        optionD: "España 1982",
        correctOption: "optionC"
    },

    { //IRAK 2
        question: "¿Cuál es la Copa Mundial de la FIFA más reciente en la que jugó Irak ?",
        optionA: "Suiza 1954",
        optionB: "Brasil 1950",
        optionC: "Mexico 1986",
        optionD: "España 1982",
        correctOption: "optionC"
    },

    { //IRAK 3
        question: "¿Cuánto tiempo pasó Irak sin participar en una Copa Mundial de la FIFA?",
        optionA: "40 años",
        optionB: "46 años",
        optionC: "48 años",
        optionD: "52 años",
        correctOption: "optionA"
    },

    { //IRAK 4
        question: "¿Cuántas veces ha participado Irak en la Copa Mundial de la FIFA, incluyendo 2026?",
        optionA: "3",
        optionB: "4",
        optionC: "2",
        optionD: "5",
        correctOption: "optionC"
    },

    { //IRAK 5
        question: "¿Quién es el director técnico del equipo de Irak?",
        optionA: "Graham Arnold",
        optionB: "Jalal Hassan",
        optionC: "Younis Mahmoud",
        optionD: "Hussein Saeed",
        correctOption: "optionA"
    },
    //total 240
]


let shuffledQuestions = [] //arreglo vacio para mezclar las 10 preguntas

function handleQuestions() {
    //la función para mezclarlas
    while (shuffledQuestions.length <= 9) { //permite que tenga 10
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //para ver en q pregunta va
let playerScore = 0  //para la calif
let wrongAttempt = 0 //cantidad d respuestas incorrectas
let indexNumber = 0 //pa enseñar la siguiente pregunta

function NextQuestion(index) {
    // función pa mostrar la pregunta q sigue junto con la info del "jugador"
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //agarra la pregunta actual
    const currentQuestionAnswer = currentQuestion.correctOption //agarra la respuesta correcta
    const options = document.getElementsByName("option"); //saca todas las opciones
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //pa checar si la escogida es correctaaaa o ne
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            //revisa q no haya sido la 10ma pregunta ya
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//resetea tonos de los botones
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

//quita lo seleccionado
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//REINICIA el loop !!
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

