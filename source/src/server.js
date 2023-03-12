var axios = require('axios');
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create Database Connection
var pgp = require('pg-promise')();

const dev_dbConfig = {
	host: 'db',
	port: 5432,
	database: process.env.POSTGRES_DB,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD
};

const isProduction = process.env.NODE_ENV === 'production';
const dbConfig = isProduction ? process.env.DATABASE_URL : dev_dbConfig;

if (isProduction) {
	pgp.pg.defaults.ssl = {rejectUnauthorized: false};
  }

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory


// PAGES
app.get('/', function (req, res) {
	res.render('pages/login', {
		page_title: 'LangLeap - Language Learning With a Purpose'
	})
});

app.get('/logout', function (req, res) {

	res.clearCookie('remember_me');
	req.session.loggedin=false; 
	res.render('pages/login', {})
});

app.get('/login', function (req, res) {
	if (req.session.loggedin) {
		res.redirect('/decks');
		return;
	}

	res.render('pages/login', {})
});

app.get('/decks', function (req, res) {
	if (!req.session.loggedin) {
		res.redirect('/login');
		return;
	}

	var defaultDecks = `SELECT SL.ListName, SL.ListID FROM SavedLists AS SL INNER JOIN USERS AS U ON SL.Username = U.Username WHERE SL.Username = 'admin' OR U.Email = '${req.session.username}' ORDER BY SL.ListName ASC;`;
	
	db.task('get-everything', task => {
        return task.batch([
            task.any(defaultDecks)
        ]);
    })
    .then(info => {
    	res.render('pages/decks',{
				page_title: 'Decks - LangLeap',
				default_decks: info[0]
			})
    })
    .catch(err => {
            console.log('error', err);
            res.render('pages/decks', {
                page_title: 'Decks - LangLeap',
				default_decks: ''
            })
    });
});

app.get('/cards', function (req, res) {
	if (!req.session.loggedin) {
		res.redirect('/login');
		return;
	}
	res.render('pages/cards', {
		page_title: 'Study - LangLeap'
	});
});

app.get('/quiz', function (req, res) {
	if (!req.session.loggedin) {
		res.redirect('/login');
		return;
	}
	res.render('pages/quiz', {
		page_title: 'Quiz - LangLeap'
	});
});


// ******* Open Quiz Deck **********
// pass a deck id to the quiz page and get that matching list from SavedLists
app.get('/quiz/:deck_id', function(req, res) {
	var id = req.params.deck_id;

	console.log(id);

	if (!parseInt(id)){
		return res
		.status(400)
		.json({ message: "Invalid Deck ID"});
	}

	var deckQ = "SELECT listdata FROM savedlists WHERE " + id + " = ListID;";

	db.task('get-everything', task => {
        return task.batch([
            task.any(deckQ)
        ]);
    })
    .then(info => {
		if (!req.session.loggedin) {
			res.redirect('/login');
			return;
		}	
    	res.render('pages/quiz',{
				page_title: 'Quiz - LangLeap',
				deck: info[0][0].listdata,
				email: req.session.username
			})
    })
    .catch(err => {
            console.log('error', err);
			if (!req.session.loggedin) {
				res.redirect('/login');
				return;
			}	
            res.render('pages/decks', {
                page_title: 'Decks - LangLeap',
                deck: '',
				email: ''
            })
    });
});

// ******* Open Flashcard Deck **********
// pass a deck id to the quiz page and get that matching list from SavedLists
app.get('/cards/:deck_id', function(req, res) {
	var id = req.params.deck_id;

	if (!parseInt(id)){
		return res
		.status(400)
		.json({ message: "Invalid Deck ID"});
	}

	var deckQ = "SELECT listdata FROM savedlists WHERE " + id + " = ListID;";

	db.task('get-everything', task => {
        return task.batch([
            task.any(deckQ)
        ]);
    })
    .then(info => {
		if (!req.session.loggedin) {
			res.redirect('/login');
			return;
		}	
		// console.log(info[0][0].listdata);
    	res.render('pages/cards',{
				page_title: 'Study - LangLeap',
				deck: info[0][0].listdata
			})
    })
    .catch(err => {
            console.log('error', err);
			if (!req.session.loggedin) {
				res.redirect('/login');
				return;
			}	
            res.render('pages/decks', {
                page_title: 'Decks - LangLeap',
                deck: ''
            })
    });
});
// ************* End Section *****************


app.get('/profile', function (req, res) {
	if (!req.session.loggedin) {
		res.redirect('/login');
		return;
	}
	
	var decks = `SELECT SL.ListName, SL.ListID, SL.TotalCards FROM SavedLists AS SL INNER JOIN USERS AS U ON SL.Username = U.Username WHERE SL.Username = 'admin' OR U.Email = '${req.session.username}' ORDER BY SL.ListName ASC;`;

	var user= `SELECT Username, RegistrationDate, TotalAttempts, TotalCorrect, TotalMistakes FROM Users WHERE Email = '${req.session.username}' ;`;
	
	db.task('get-everything', task => {
        return task.batch([
            task.any(decks),
			task.any(user)
        ]);
    })
    .then(info => {
    	res.render('pages/profile',{
				page_title: 'Profile - LangLeap',
				decks: info[0],
				userInfo: info[1][0]
			})
    })
    .catch(err => {
            console.log('error', err);
            res.render('pages/decks', {
                page_title: 'Decks - LangLeap',
				decks: '',
				userInfo: ''
            })
    });
});


app.get('/create-deck', function (req, res) {
	if (!req.session.loggedin) {
		res.redirect('/login');
		return;
	}
	res.render('pages/create-deck', {
		page_title: 'Create Decks - LangLeap'
	});
});

// Login Service
app.post('/auth', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;

	if (email && password) {
		const bcrypt = require('bcrypt');

		// Querying salt that is saved in DB to use in hash generation.
		var query = "SELECT * FROM Users WHERE Email = '" + email + "';";
		db.any(query)
			.then(function (data) {
				if (data.length > 0) {
					// Formatting query result for use in Bcrypt function.
					var json_obj = JSON.stringify(data);
					var json_parsed = JSON.parse(json_obj);
					var hash = json_parsed[0]['password'];

					// Hashing comparison algorithm. Generates hash based on input and saved salt & compares to DB's saved hash for that user.
					bcrypt.compare(password, hash, function (err, compare_res) {
						if (compare_res) {
							console.log("Password successfully verified.");
							req.session.loggedin = true;
							req.session.username = email;
							res.redirect('/decks');
						} else {
							res.send("This password does not match the password on record. Please enter a valid password!");
							// TODO: Do something useful here.
						}
					});
				} else {
					res.send('Incorrect Username and/or Password!');
					// TODO: Do something here.
				}
			})
			.catch(function (err) {
				res.send('An error has occured! Lmao SO FUNNY! Err: ' + err);
				// TODO: Do something here.
			});
	}
});

app.post('/quiz', function (req, res) {
	var total_correct = req.body.amnt_correct;
	var total_mistakes = req.body.amnt_incorrect;
	var total_attempts = req.body.amnt_attempts;

	var defaultDecks = `SELECT SL.ListName, SL.ListID FROM SavedLists AS SL INNER JOIN Users AS U ON SL.Username = U.Username WHERE SL.Username = 'admin' OR U.Email = '${req.session.username}' ORDER BY SL.ListName ASC;`;
	var update_correct = `UPDATE Users SET TotalCorrect = TotalCorrect + ${total_correct} WHERE Email = '${req.session.username}';`;
	var update_mistakes = `UPDATE Users SET TotalMistakes = TotalMistakes + ${total_mistakes} WHERE Email = '${req.session.username}';`;
	var update_attempts = `UPDATE Users SET TotalAttempts = TotalAttempts + ${total_attempts} WHERE Email = '${req.session.username}';`;

	db.task('get-everything', task => {
		return task.batch([
			task.any(defaultDecks),
			task.any(update_correct),
			task.any(update_mistakes),
			task.any(update_attempts)
		]);
	})
	.then(info => {
    	res.render('pages/decks', {
				page_title: 'Decks - LangLeap',
				default_decks: info[0]
		});
    })
    .catch(err => {
		console.log('error', err);
		res.render('pages/decks', {
			page_title: 'Decks - LangLeap',
			default_decks: ''
		});
    });
});

app.post('/signup', function (req, res) {
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var confirmpass = req.body.passwordrepeat;

	if (email && password && password == confirmpass) {
		// Hashing algorithm. Generates salt and corresponding hash, then stores to DB.
		const bcrypt = require('bcrypt');
		const saltRounds = 10;

		bcrypt.genSalt(saltRounds, function (err, salt) {
			bcrypt.hash(password, salt, function (err, hash) {
				var query = 'INSERT INTO Users (username, email, password, registrationdate) VALUES (\'' + username + '\', \'' + email + '\', \'' + hash + '\', (SELECT CURRENT_DATE));';
				db.any(query)
					.then(function (data) {
						req.session.loggedin = true;
						req.session.username = email;
						res.redirect('/decks');
					})
					.catch(function (err) {
						console.log('err ', err);
						res.redirect('/signup');
						// TODO: Do something here.
					});
			});
		});
	}
	else {
		res.redirect('/decks');
		// TODO: Do something here.
	}
});




// Create List Service
app.get('/decks/create', function (req, res) {
	if (!req.session.loggedin) {
		res.redirect('/login');
		return;
	}
	res.render('pages/create-deck', {
		page_title: 'Create Deck - LangLeap'
	})
});

app.post('/decks/create', function (req, res) {
	
	var verifyLength=req.body.deck_name;
	if(verifyLength.length == 0)
	{
		return res.status(400).json({ message: "Deck Name Length Zero" });
	}
	
	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	function generateList(shuffled) {
		// REMEMBER: CHANGE THIS TO 70 FOR PROPER LENGTH OF LISTS.
		var first_70 = shuffled.slice(0, 20);
		// TODO Change this to 70 ^^

		// console.log("Words for list:");
		// console.log(first_70);

		// API call to create JSON object.
		var key = '2dfff770-a840-4be6-abb2-87618e9f3877';

		var api_urls = first_70.map(word => `http://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${key}`);
		var api_calls = api_urls.map(url => axios.get(url));

		var list_data = [];
		// var j = 0;

		axios.all(api_calls)
		.then(
			axios.spread((...responses) => {
				responses.forEach(response => {
					var i = 0;
					if (response.data[i].shortdef.length === 0) {
						i++;
					}
					
					// console.log(response.data);

					var eng = response.data[i].meta.id;
					if (eng.includes(":")) {
						eng = eng.substring(0, eng.indexOf(":"));
					}

					var span = response.data[i].shortdef[0];
					span = span.substring((span.indexOf(":") + 1), span.length);
					if (span.includes(",")) {
						span = span.substring(0, span.indexOf(","));
					}
					var word_data = "{\"eng\":\"" + eng + "\",\"span\":\"" + span + "\"}";

					list_data.push(word_data);

					/*
					if (j != 4) {
						j++;
					} else {
						console.log("List data:");
						console.log(list_data);
					}
					*/
				})	
				
				var insert_query = "INSERT INTO SavedLists (Username, ListName, ListData, TotalCards, DateCreated) VALUES ('" + req.body.username + "', '" + deck_name + "', '[" + list_data + "]', '" + list_data.length + "', CAST(NOW() AS DATE));";
				// console.log("Insert query:");
				// console.log(insert_query);

				db.any(insert_query)
					.then(function (list) {
						res.redirect('/decks');
					})
					.catch((err) => {
						res.redirect('/decks');
					})
				
			})
		).catch((err) => {
			// Reshuffle if bug occurs (as some words w/o definitions slip through).
			console.log(err);
			console.log("Reshuffling deck...");
			var reshuffled = shuffleArray(shuffled);
			generateList(reshuffled);
		})
	}

	var deck_name = req.body.deck_name;
	var text_input = req.body.text_input;

	const ignore_words = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it",
		"he", "was", "for", "on", "are", "as", "with", "his", "they", "I","at", "be",
		"this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what",
		"all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each",
		"which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out",
		"many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him",
		"into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no",
		"way", "could", "people", "my", "than", "first", "water", "been", "call", "who",
		"oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made",
		"may", "part"];

	var no_punctuation = text_input.replace(/[^\w\s]|_\;.—/g, " ").replace(/\s+/g, " ").split(" ");
	var no_ignored = no_punctuation.filter(word => !ignore_words.includes(word));
	var no_duplicates = no_ignored.reduce(function(a, b) {
		if (a.indexOf(b) < 0) { a.push(b); }
		return a;
	}, []);
	var words = no_duplicates.filter(word => word != "")
	var shuffled = shuffleArray(words);

	generateList(shuffled);
});


const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`Express running → PORT ${server.address().port}`);
  });

  module.exports = server;