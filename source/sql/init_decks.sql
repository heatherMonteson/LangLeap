INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('admin', 'admin@gmail.com', 'admin', CAST(NOW() AS DATE));


  INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
  VALUES ('admin', 'Animals', '[{
    "eng" : "whale",
    "span" : "ballena"
  },
  {
    "eng" : "horse",
    "span" : "caballo"
  },
  {
    "eng" : "bird",
    "span" : "pájaro"
  },
  {
    "eng" : "cow",
    "span" : "vaca"
  },
  {
    "eng" : "pig",
    "span" : "cerdo"
  },
  {
    "eng" : "snake",
    "span" : "serpiente"
  },
  {
    "eng" : "dog",
    "span" : "perro"
  },
  {
    "eng" : "cat",
    "span" : "gato"
  },
  {
    "eng" : "rabbit",
    "span" : "conejo"
  },
  {
    "eng" : "lion",
    "span" : "léon"
  }]', 10, CAST(NOW() AS DATE), TRUE, 0, 0, 0);

  INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
  VALUES ('admin', 'Food', '[{
    "eng" : "apple",
    "span" : "manzana"
  },
  {
    "eng" : "chicken",
    "span" : "pollo"
  },
  {
    "eng" : "meat",
    "span" : "carne"
  },
  {
    "eng" : "to eat",
    "span" : "comer"
  },
  {
    "eng" : "onion",
    "span" : "cebolla"
  },
  {
    "eng" : "cheese",
    "span" : "queso"
  },
  {
    "eng" : "fish",
    "span" : "pescado"
  },
  {
    "eng" : "bread",
    "span" : "pan"
  },
  {
    "eng" : "rice",
    "span" : "arroz"
  },
  {
    "eng" : "to have dinner",
    "span" : "cenar"
  }]', 10, CAST(NOW() AS DATE), TRUE, 0, 0, 0);


INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
VALUES ('admin', 'Ordinal Numbers', 
'[{
    "eng" : "first",
    "span" : "primero"
  },
  {
    "eng" : "second",
    "span" : "segundo"
  },
  {
    "eng" : "third",
    "span" : "trecero"
  },
  {
    "eng" : "fourth",
    "span" : "cuarto"
  },
  {
    "eng" : "fifth",
    "span" : "quinto"
  },
  {
    "eng" : "sixth",
    "span" : "sexto"
  },
  {
    "eng" : "seventh",
    "span" : "séptimo"
  },
  {
    "eng" : "eigth",
    "span" : "octavo"
  },
  {
    "eng" : "ninth",
    "span" : "noveno"
  },
  {
    "eng" : "tenth",
    "span" : "décimo"
  }
  
]', 10, CAST(NOW() AS DATE), TRUE, 0, 0, 0);

INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
VALUES ('admin', 'Subjective Pronouns' , 
'[{
    "eng" : "I",
    "span" : "yo"
  },
  {
    "eng" : "you",
    "span" : "tú/usted"
  },
  {
    "eng" : "he",
    "span" : "él"
  },
  {
    "eng" : "it",
    "span" : "él"
  },
  {
    "eng" : "she",
    "span" : "ella"
  },
  {
    "eng" : "we",
    "span" : "nosotros"
  },
  {
    "eng" : "they",
    "span" : "ellos/ellas"
  }
]' , 7, CAST(NOW() AS DATE), TRUE, 0, 0, 0);


INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
VALUES ('admin', 'Greetings and Farwells' , 
'[{
    "eng" : "hello",
    "span" : "hola"
  },
  {
    "eng" : "hi",
    "span" : "buenas"
  },
  {
    "eng" : "good morning",
    "span" : "buenos días"
  },
  {
    "eng" : "good afternoon",
    "span" : "buenas tardes "
  },
  {
    "eng" : "good night",
    "span" : "buenas noches"
  },
  {
    "eng" : "welcome",
    "span" : "bienvenido "
  },
  {
    "eng" : "goodbye",
    "span" : "adiós"
  },
  {
    "eng" : "see you later",
    "span" : "hasta luego"
  },
  {
    "eng" : "see you soon",
    "span" : "hasta pronto"
  },
  {
    "eng" : "see you next time",
    "span" : "hasta la vista"
  },
  {
    "eng" : "see you tomorrow",
    "span" : "hasta mañana "
  },
  {
    "eng" : "see ya",
    "span" : "nos vemos"
  }
]' , 12, CAST(NOW() AS DATE), TRUE, 0, 0, 0);

INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
VALUES ('admin', 'Familiar Words', '[{
    "eng" : "library",
    "span" : "biblioteca"
  },
  {
    "eng" : "cat",
    "span" : "gato"
  },
  {
    "eng" : "dog",
    "span" : "perro"
  },
  {
    "eng" : "school",
    "span" : "escuela"
  },
  {
    "eng" : "man",
    "span" : "hombre"
  },
  {
    "eng" : "woman",
    "span" : "mujer"
  },
  {
    "eng" : "book",
    "span" : "libro"
  },
  {
    "eng" : "table",
    "span" : "mesa"
  },
  {
    "eng" : "car",
    "span" : "carro"
  },
  {
    "eng" : "house",
    "span" : "casa"
  }]', 10, CAST(NOW() AS DATE), TRUE, 0, 0, 0);

  INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
  VALUES ('admin', 'General Words #1' , '[{
    "eng" : "as",
    "span" : "como"
  },
  {
    "eng" : "that",
    "span" : "Esa/ese"
  },
  {
    "eng" : "was",
    "span" : "era"
  },
  {
    "eng" : "for",
    "span" : "para"
  },
  {
    "eng" : "on",
    "span" : "en"
  },
  {
    "eng" : "are",
    "span" : "son"
  },
  {
    "eng" : "with",
    "span" : "con"
  },
  {
    "eng" : "be",
    "span" : "ser"
  },
  {
    "eng" : "at",
    "span" : "en"
  },
  {
    "eng" : "have",
    "span" : "tener"
  },
  {
    "eng" : "this",
    "span" : "este"
  },
  {
    "eng" : "from",
    "span" : "desde"
  },
  {
    "eng" : "by",
    "span" : "por"
  },
  {
    "eng" : "hot",
    "span" : "caliente"
  },
  {
    "eng" : "word",
    "span" : "palabra"
  },
  {
    "eng" : "but",
    "span" : "pero"
  },
  {
    "eng" : "what",
    "span" : "qué"
  },
  {
    "eng" : "some",
    "span" : "algunos"
  },
  {
    "eng" : "is",
    "span" : "es"
  },
  {
    "eng" : "it",
    "span" : "lo"
  },
  {
    "eng" : "or",
    "span" : "o"
  },
  {
    "eng" : "had",
    "span" : "tenido"
  },
  {
    "eng" : "the",
    "span" : "la"
  },
  {
    "eng" : "of",
    "span" : "de"
  },
  {
    "eng" : "to",
    "span" : "a"
  },
  {
    "eng" : "and",
    "span" : "y"
  },
  {
    "eng" : "a",
    "span" : "un"
  },
  {
    "eng" : "in",
    "span" : "en"
  },
  {
    "eng" : "can",
    "span" : "lata"
  },
  {
    "eng" : "out",
    "span" : "fuera"
  },
  {
    "eng" : "other",
    "span" : "otros"
  },
  {
    "eng" : "were",
    "span" : "eran"
  },
  {
    "eng" : "which",
    "span" : "que"
  },
  {
    "eng" : "do",
    "span" : "hacer"
  },
  {
    "eng" : "their",
    "span" : "su"
  },
  {
    "eng" : "time",
    "span" : "tiempo"
  },
  {
    "eng" : "if",
    "span" : "si"
  },
  {
    "eng" : "will",
    "span" : "lo hará"
  },
  {
    "eng" : "how",
    "span" : "cómo"
  },
  {
    "eng" : "said",
    "span" : "dicho"
  },
  {
    "eng" : "each",
    "span" : "cada"
  },
  {
    "eng" : "tell",
    "span" : "dicir"
  },
  {
    "eng" : "does",
    "span" : "hace"
  },
  {
    "eng" : "want",
    "span" : "querer"
  },
  {
    "eng" : "still",
    "span" : "todavía"
  },
{
    "eng" : "between",
    "span" : "entre"
  },
  {
    "eng" : "never",
    "span" : "nunca"
  },
  {
    "eng" : "let",
    "span" : "dejar"
  },
  {
    "eng" : "while",
    "span" : "mientras"
  },
  {
    "eng" : "few",
    "span" : "pocos"
  },
  {
    "eng" : "stop",
    "span" : "eténgase"
  },
  {
    "eng" : "got",
    "span" : "conseguido"
  },
  {
    "eng" : "always",
    "span" : "siempre"
  }
]', 53, CAST(NOW() AS DATE), TRUE, 0, 0, 0);

INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
  VALUES ('admin', 'General Words #2', '[{
    "eng" : "well",
    "span" : "así"
  },
  {
    "eng" : "also",
    "span" : "también"
  },
  {
    "eng" : "put",
    "span" : "poner"
  },
  {
    "eng" : "read",
    "span" : "leer"
  },
  {
    "eng" : "large",
    "span" : "grande"
  },
  {
    "eng" : "spell",
    "span" : "deletrear"
  },
  {
    "eng" : "add",
    "span" : "añadir"
  },
  {
    "eng" : "even",
    "span" : "incluso"
  },
  {
    "eng" : "here",
    "span" : "aquí"
  },
  {
    "eng" : "must",
    "span" : "debe"
  },
  {
    "eng" : "big",
    "span" : "grande"
  },
  { 
    "eng" : "such",
    "span" : "tal"
  },
  {
    "eng" : "follow",
    "span" : "siga"
  },
  {
    "eng" : "why",
    "span" : "por qué"
  },
  {
    "eng" : "ask",
    "span" : "preguntar"
  },
  {
    "eng" : "men",
    "span" : "hombres"
  },
  {
    "eng" : "went",
    "span" : "se fue"
  },
  {
    "eng" : "off",
    "span" : "fuera"
  },
  {
    "eng" : "need",
    "span" : "necesitar"
  },
  {
    "eng" : "try",
    "span" : "tratar"
  },
  {
    "eng" : "again",
    "span" : "de nuevo"
  },
  {
    "eng" : "near",
    "span" : "cerca"
  },
  {
    "eng" : "any",
    "span" : "cualquier"
  },
  {
    "eng" : "new",
    "span" : "nuevo"
  },
  {
    "eng" : "work",
    "span" : "trabajo"
  },
  {
    "eng" : "part",
    "span" : "parte"
  },
  {
    "eng" : "take",
    "span" : "tomar"
  },
  {
    "eng" : "get",
    "span" : "conseguir"
  },
  {
    "eng" : "place",
    "span" : "lugar"
  },
  {
    "eng" : "made",
    "span" : "hecho"
  },
  {
    "eng" : "live",
    "span" : "vivir"
  },
  {
    "eng" : "where",
    "span" : "donde"
  },
  {
    "eng" : "after",
    "span" : "después"
  },
  {
    "eng" : "little",
    "span" : "poco"
  },
  {
    "eng" : "only",
    "span" : "sólo"
  },
  {
    "eng" : "year",
    "span" : "años"
  },
  {
    "eng" : "came",
    "span" : "vino"
  },
  {
    "eng" : "every",
    "span" : "cada"
  },
  {
    "eng" : "good",
    "span" : "buena"
  },
  {
    "eng" : "give",
    "span" : "dar"
  },
  {
    "eng" : "our",
    "span" : "nuestro"
  },
  {
    "eng" : "under",
    "span" : "bajo"
  },
  {
    "eng" : "very",
    "span" : "muy"
  },
  {
    "eng" : "through",
    "span" : "a través de"
  },
  {
    "eng" : "those",
    "span" : "los"
  },
  {
    "eng" : "both",
    "span" : "ambos"
  },
  {
    "eng" : "often",
    "span" : "menudo"
  },
  {
    "eng" : "until",
    "span" : "hasta"
  },
  {
    "eng" : "usual",
    "span" : "habitual"
  },
  {
    "eng" : "through",
    "span" : "aunque"
  },
  {
    "eng" : "soon",
    "span" : "pronto"
  },
  {
    "eng" : "told",
    "span" : "dicho"
  },
  {
    "eng" : "since",
    "span" : "desde"
  },
  {
    "eng" : "whole",
    "span" : "todo"
  },
  {
    "eng" : "yes",
    "span" : "sí"
  },
  {
    "eng" : "no",
    "span" : "no"
  },
  {
    "eng" : "able",
    "span" : "capaz"
  }]', 55, CAST(NOW() AS DATE), TRUE, 0, 0, 0);


INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated, IsPublic, TimesStudied, ListMistakes, ListAccuracy)
VALUES ('admin', 'General Words #3', 
'[{
    "eng" : "just",
    "span" : "solo"
  },
  {
    "eng" : "form",
    "span" : "forma"
  },
 {
    "eng" : "sentence",
    "span" : "frase"
  },
 {
    "eng" : "great",
    "span" : "gran"
  },
 {
    "eng" : "think",
    "span" : "pensar"
  },
 {
    "eng" : "say",
    "span" : "decir"
  },
 {
    "eng" : "help",
    "span" : "ayudar"
  },
 {
    "eng" : "line",
    "span" : "línea"
  },
 {
    "eng" : "much",
    "span" : "mucho"
  },
 {
    "eng" : "before",
    "span" : "antes"
  },
{
    "eng" : "right",
    "span" : "drecho"
  },
 {
    "eng" : "left",
    "span" : "izquierdo"
  },
 {
    "eng" : "too",
    "span" : "demasiado"
  },
 {
    "eng" : "same",
    "span" : "misma"
  },
 {
    "eng" : "all",
    "span" : "todo"
  },
 {
    "eng" : "there",
    "span" : "hay"
  },
 {
    "eng" : "when",
    "span" : "cuando"
  },
 {
    "eng" : "up",
    "span" : "hasta"
  },
 {
    "eng" : "use",
    "span" : "uso"
  },
 {
    "eng" : "way",
    "span" : "camino"
  },
{
    "eng" : "about",
    "span" : "acerca"
  },
 {
    "eng" : "many",
    "span" : "muchos"
  },
 {
    "eng" : "then",
    "span" : "entonces"
  },
 {
    "eng" : "would",
    "span" : "haría"
  },
 {
    "eng" : "like",
    "span" : "como"
  },
 {
    "eng" : "so",
    "span" : "así"
  },
 {
    "eng" : "these",
    "span" : "éstos"
  },
 {
    "eng" : "day",
    "span" : "día"
  },
 {
    "eng" : "more",
    "span" : "más"
  },
 {
    "eng" : "could",
    "span" : "podía"
  },
 {
    "eng" : "go",
    "span" : "ir"
  },
 {
    "eng" : "come",
    "span" : "venir"
  },
  {
    "eng" : "did",
    "span" : "hizo"
  },
  {
    "eng" : "number",
    "span" : "número"
  },
  {
    "eng" : "over",
    "span" : "sobre"
  },
  {
    "eng" : "know",
    "span" : "saber"
  },
  {
    "eng" : "than",
    "span" : "que"
  },
  {
    "eng" : "may",
    "span" : "puede"
  },
  {
    "eng" : "been",
    "span" : "estado"
  }]', 39, CAST(NOW() AS DATE), TRUE, 0, 0, 0);
