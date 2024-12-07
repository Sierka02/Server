-- Active: 1730294809044@@127.0.0.1@5432@postgres@public

CREATE Table movie(
name VARCHAR(255) NOT NULL PRIMARY KEY,
YEAR INT,
genre VARCHAR(255),
FOREIGN KEY (genre) REFERENCES genre(name)
);

CREATE Table genre(
name VARCHAR(255) NOT NULL PRIMARY KEY,
description VARCHAR(255)
);

CREATE Table user_profile(
name VARCHAR(255) NOT NULL PRIMARY KEY,
username VARCHAR(255),
password VARCHAR(255),
birth_year INT
);

CREATE Table review(
id INT NOT NULL PRIMARY KEY,
movie_name VARCHAR(255),
user_name VARCHAR(255),
review_text VARCHAR(255),
FOREIGN KEY (movie_name) REFERENCES movie(name),
FOREIGN KEY (user_name) REFERENCES user_profile(name)
);

INSERT INTO genre VALUES 
('drama'),('comedy'),('scifi'),('fantasy'),('action'),('triller');

INSERT INTO movie (name, YEAR, genre) VALUES 
('Inception', 2010, 'action'),
('The Terminator', 1984, 'action'),
('Tropic Thunder', 2008, 'comedy'),
('Borat', 2006, 'comedy'),
('Interstellar', 2014, 'drama'),
('Joker', 2019, 'drama');

INSERT INTO user_profile (name, username, password, birth_year) VALUES
('reimarii', 'Reima Riihimäki', 'qwerty123', 1986),
('lizzy', 'Lisa Simpson', 'abcdef', 1991),
('boss', 'Ben Bossy', 'salasana', 1981)
