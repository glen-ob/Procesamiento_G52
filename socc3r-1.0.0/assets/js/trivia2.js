
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
    { //  1
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionB"
    },

    { //  2
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionD"
    },

    { //  3
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  4
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  5
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionA"
    },
    //total 110
    { //  1
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionB"
    },

    { //  2
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionD"
    },

    { //  3
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  4
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  5
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionA"
    },
    //total 115
    { //  1
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionB"
    },

    { //  2
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionD"
    },

    { //  3
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  4
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  5
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionA"
    },
    //total 120
    { //  1
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionB"
    },

    { //  2
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionD"
    },

    { //  3
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  4
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionC"
    },

    { //  5
        question: " ",
        optionA: " ",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionA"
    },
    //total 125
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

