# Lang Leap
csci-3308-spring22-016-04

### Product Demo 
https://drive.google.com/file/d/1lLo46Y3gqTwBvnK2QRnH8AICSi9NTYP2/view?usp=sharing

#### LangLeap is an intelligent language-learning flashcard tool that can tailor sets of words to the user’s goals. 

LangLeap is an intelligent language-learning flashcard tool that can tailor sets of words to the user’s personal goals and interests. It utilizes user specified input which allows for more efficient and effective learning through the avoidance of unnecessary content unrelated to the users ultimate goals. Through LangLeap users are able to build customized flash card decks by uploading specific words, text from articles, business proposals or anything related to the subject matter they need or want to learn and LangLeap will generate a list of immediately useful flashcards. Once the user creates a deck it is added to their collection of pre-existing decks which they can transition between and study with an animation that gives the experience of studying with a normal deck of flash cards. Once a user is confident with their knowledge of a flash card deck they can further test themselves in LangLeaps’ quiz feature. The quiz feature is similar to flash cards but allows the user to also practice their spelling. In quizzes, the user types in the translations of words from a deck of their choosing which is then tested against the actual translation on the card. Upon completion of a quiz, LangLeap logs the user's progress and posts their stats to their profile page so that the user can see their improvements over time.

### Architecture Outline
- Use Postgre on docker to communicate with website on docker
- Postgre stores user information and passwords and the lists each user owns 
- Docker also runs a Node.js stateless service that runs the document-scraping, url-scraping, and translation services.
- That service communicates with outside APIs as needed to create lists. API's from other dictionaries and translation services.

### Running Code Locally and Testing
- Can be run through docker-compose, running on port 3000
- Testing done using mocha and chi just run "docker-compose up" and tests execute automatically (like lab 9)

![image](https://user-images.githubusercontent.com/61604985/164846572-b73daca2-e091-4011-ae29-b1ef019447ee.png)
