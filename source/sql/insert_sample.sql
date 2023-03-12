/* 
    USER SAMPLE DATA: EIGHT USERS.
*/

INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username01', 'email01@gmail.com', 'password01', CAST(NOW() AS DATE));
INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username02', 'email02@gmail.com', 'password02', CAST(NOW() AS DATE));
INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username03', 'email03@gmail.com', 'password03', CAST(NOW() AS DATE));
INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username04', 'email04@gmail.com', 'password04', CAST(NOW() AS DATE));
INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username05', 'email05@gmail.com', 'password05', CAST(NOW() AS DATE));
INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username06', 'email06@gmail.com', 'password06', CAST(NOW() AS DATE));
INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username07', 'email07@gmail.com', 'password07', CAST(NOW() AS DATE));
INSERT INTO Users (Username, Email, Password, RegistrationDate) 
VALUES ('username08', 'email08@gmail.com', 'password08', CAST(NOW() AS DATE));

/* 
    For now, no hashing in database. But will eventually insert the PW as 
    the output of a NodeJS script that hashes/salts PWs. (Probably)
*/

-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* 
    WORD ACCURACY SAMPLE DATA: 3 WORDS FOR 4 USERS.
*/

INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (1, 'butterfly', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (1, 'treehouse', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (1, 'wolf', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (2, 'butterfly', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (2, 'treehouse', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (2, 'wolf', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (3, 'butterfly', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (3, 'treehouse', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (3, 'wolf', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (4, 'butterfly', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (4, 'treehouse', CAST(NOW() AS DATE));
INSERT INTO WordAccuracies (UserID, Word, DateFirstAttempted)
VALUES (4, 'wolf', CAST(NOW() AS DATE));