CREATE TABLE IF NOT EXISTS Users (
    UserID INT GENERATED ALWAYS AS IDENTITY,
    Username VARCHAR(45) UNIQUE NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    RegistrationDate DATE NOT NULL,
    TotalCards INT DEFAULT 0,
    TotalAttempts INT DEFAULT 0,
    TotalCorrect INT DEFAULT 0,
    TotalMistakes INT DEFAULT 0,
    UserAccuracy NUMERIC(3, 2) DEFAULT 0.00,
    TotalWords INT DEFAULT 0,
    AverageWordsPerDay NUMERIC(5, 2) DEFAULT 0.00,
    CurrentStreak INT DEFAULT 0,
    HighestStreak INT DEFAULT 0,
    HighestRelativeImprovement NUMERIC(3, 2) DEFAULT 0.00,
    PRIMARY KEY (UserID)
);

CREATE TABLE IF NOT EXISTS SavedLists (
    Username VARCHAR(45) NOT NULL,
    ListID INT UNIQUE GENERATED ALWAYS AS IDENTITY,
    ListName VARCHAR(45) NOT NULL,
    ListData JSON NOT NULL,
    TotalCards INT NOT NULL,
    DateCreated DATE NOT NULL,
    IsPublic BOOLEAN DEFAULT FALSE,
    TimesStudied INT DEFAULT 0,
    TimesQuizzed INT DEFAULT 0,
    ListAttempts INT DEFAULT 0,
    ListCorrect INT DEFAULT 0,
    ListMistakes INT DEFAULT 0,
    ListAccuracy NUMERIC(5, 2) DEFAULT 0.00,
    PRIMARY KEY (Username, ListID),
    CONSTRAINT UserID_fkey 
        FOREIGN KEY (Username)
        REFERENCES Users(Username)
);

CREATE TABLE IF NOT EXISTS PublicLists (
    ListID INT NOT NULL,
    SharedBy INT NOT NULL,
    DateShared DATE NOT NULL,
    PRIMARY KEY (ListID),
    CONSTRAINT ListID_fkey 
        FOREIGN KEY (ListID)
        REFERENCES SavedLists(ListID),
    CONSTRAINT SharedBy_fkey 
        FOREIGN KEY (SharedBy)
        REFERENCES Users(UserID)
);

CREATE TABLE IF NOT EXISTS WordAccuracies (
    UserID INT NOT NULL,
    Word VARCHAR(45) NOT NULL,
    DateFirstAttempted DATE NOT NULL,
    WordAttempts INT DEFAULT 0,
    WordCorrect INT DEFAULT 0,
    WordMistakes INT DEFAULT 0,
    WordAccuracy NUMERIC(5, 2) DEFAULT 0.00,
    IsCommonlyMissed BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (UserID, Word),
    CONSTRAINT UserID_fkey 
        FOREIGN KEY (UserID)
        REFERENCES Users(UserID)
);

CREATE TABLE IF NOT EXISTS ListWordAccuracies (
    UserID INT NOT NULL,
    ListID INT NOT NULL,
    Word VARCHAR(45) NOT NULL,
    DateFirstAttempted DATE NOT NULL,
    ListWordAttempts INT DEFAULT 0,
    ListWordCorrect INT DEFAULT 0,
    ListWordMistakes INT DEFAULT 0,
    ListWordAccuracy NUMERIC(5, 2) DEFAULT 0.00,
    PRIMARY KEY (UserID, ListID, Word),
    CONSTRAINT ListID_fkey 
        FOREIGN KEY (ListID)
        REFERENCES SavedLists(ListID),
    CONSTRAINT UserID_fkey
        FOREIGN KEY (UserID)
        REFERENCES Users(UserID)
);
