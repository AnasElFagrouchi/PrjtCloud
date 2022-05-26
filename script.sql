CREATE DATABASE Forum;

USE Forum;

CREATE TABLE Utilisateur (
	id INT AUTO_INCREMENT,
	login VARCHAR(20),
	nom VARCHAR(20),
	password VARCHAR(20),
	PRIMARY KEY (id)
);

CREATE TABLE Cours (
	id INT AUTO_INCREMENT, 
	nom VARCHAR(50),
	sujets INT,
	posts INT,
	date_post DATETIME,
	PRIMARY KEY (id)
);

CREATE TABLE Sujet (
	id INT AUTO_INCREMENT,
	sujet VARCHAR(80),
	posts INT,
	date_post DATETIME,
	id_cours INT,
	PRIMARY KEY (id),
	FOREIGN KEY (id_cours) REFERENCES Cours(id)
);

CREATE TABLE Post (
	id INT AUTO_INCREMENT, 
	message VARCHAR(500),
	date_post DATETIME,
	id_sujet INT, 
	id_utilisateur INT,
	PRIMARY KEY (id),
	FOREIGN KEY (id_sujet) REFERENCES Sujet(id),
	FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id)
);

CREATE TABLE Cours_Utilisateur (
	id_cours INT,
	id_utilisateur INT,
	PRIMARY KEY (id_cours, id_utilisateur),
	FOREIGN KEY (id_cours) REFERENCES Cours(id),
	FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id)
);

INSERT INTO Utilisateur VALUES(1, 'Polytech4A', 'étudiant 4A', 'R2020Pol4AXy');
INSERT INTO Utilisateur VALUES(2, 'PolytechALT4', 'étudiant 5A', '123456');


INSERT INTO Cours VALUES(1, 'Prog web et mobile', 5, 5, '2022-03-09 11:17:18');
INSERT INTO Cours VALUES(2, 'Programmation Objet', 5, 0, '2022-03-09 11:17:18');

INSERT INTO Sujet VALUES(1, "sheesh", 2, '2022-03-09 11:17:18', 1);
INSERT INTO Sujet VALUES(2, "Salut", 2, '2022-03-09 11:17:18', 1);
INSERT INTO Sujet VALUES(3, "Esi4a", 0, NULL, 1);
INSERT INTO Sujet VALUES(4, "Test4", 1, '2022-03-09 11:17:18', 1);
INSERT INTO Sujet VALUES(5, "Julien et Andrea sont les hommes les plus charismatiques de la Terre", 0, NULL, 1);


INSERT INTO Sujet VALUES(6, "test1", 0, NULL, 2);
INSERT INTO Sujet VALUES(7, "Est-ce que le C++ est un langage objet ?", 0, NULL, 2);
INSERT INTO Sujet VALUES(8, "qu'est-ce que le polymorphisme", 0, NULL, 2);
INSERT INTO Sujet VALUES(9, "Est-ce que le C++ contien le langage C", 0, NULL, 2);
INSERT INTO Sujet VALUES(10, "héritage multiple", 0, NULL, 2);


INSERT INTO Post VALUES(1, "post 1", '2022-03-09 11:17:18', 1, 1);
INSERT INTO Post VALUES(2, "post 2", '2022-03-09 11:17:18', 2, 1);
INSERT INTO Post VALUES(3, "post 3", '2022-03-09 11:17:18', 4, 2);
INSERT INTO Post VALUES(4, "post 4", '2022-03-09 11:17:18', 1, 2);
INSERT INTO Post VALUES(5, "post 5", '2022-03-09 11:17:18', 2, 2);

INSERT INTO Cours_Utilisateur VALUES (1, 1);
INSERT INTO Cours_Utilisateur VALUES (1, 2);
INSERT INTO Cours_Utilisateur VALUES (2, 2);