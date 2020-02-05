CREATE DATABASE nomdelabasededonnee();   -- creation d'une base de donnée
CREATE TABLE nomdelatable(champ1 type_de_champ(nombre_de_caractere), champ2 type_de_champ2(),...);   -- création d'une table avec ses champs
SELECT champ1, champ2, ... (ou *(tout selectionner)) FROM `nom_de_la_table`; -- permet de selectionner les champs de la table désigner
SELECT DISTINCT champ1 FROM `nom_de_la_table`; -- permet d'afficher le champ1 mais si la meme valeur revient dans ce champ elle sera mise sur une seule ligne
SELECT * FROM `nom_de_la_table` LIMIT 10; -- permet d'afficher les 10 premier enregistrement
SELECT * FROM `nom_de_la_table` ORDER BY `nom_du_champ` ASC ou DESC; -- ordonner la table selon le champ selectionner par ordre ASC(croissant) ou DESC(decroissant) Sinon classement alphabetique
INSERT INTO `nom_de_la_table` (champ1, champ2, ...) VALUES ('valeur_champ1', 'valeur_champ2', );
UPDATE `nom_de_la_table` SET champ1='value_champ1'; -- permet de modifier la valeur du champ dans toute la table
UPDATE `nom_de_la_table` SET password='value_champ1' WHERE first_name='jimmy'; -- permet de modifier la valeur du champ password pour tout les champs first_name dont la valeur est jimmy
DELETE FROM `nom_de_la_table` WHERE champ1='value_champ1';  -- permet de supprimer le champ1 dont la valeur est value_champ1 de la table
DELETE FROM `nom_de_la_table`; -- permet de supprimer tout le contenu de la table
SELECT * FROM `nom_de_la_table` WHERE champ1='value_champ1'; -- permet d'afficher les enregistrements qui contienne value_champ1 dans la table
SELECT * FROM `nom_de_la_table` WHERE <= 10; -- permet d'afficher les enregistrements dont l'id est inferieur ou egal à 10
SELECT * FROM `nom_de_la_table` WHERE <= 10 AND(ou OR) champ1='value_champ1'; -- permet d'afficher les enregistrements qui remplissent les 2 conditions
SELECT * FROM `nom_de_la_table` WHERE champ1 IN ('value_champ1', 'value_champ2'); -- permet d'afficher les enregistrements qui inclus les valeurs dans les champs donner
SELECT * FROM `nom_de_la_table` WHERE champ1 IN ('value_champ1', 'value_champ2'); -- permet d'afficher les enregistrements qui inclus les valeurs dans les champs donner
SELECT champ1, champ2 AS Newchamp2; -- permet de changer le nom d'un champ ou d'une table
SELECT champ1 CONCAT(champ2,'- ',champ3, '- ',...) -- permet une concatenation
SELECT table1.champ, table2.champ FROM table1 INNER JOIN table2 ON table1.champ = table2.champ -- permet de joindre 2 table par un point commun pour les afficher ensemble
SELECT table1.champ, table2.champ FROM table1 LEFT JOIN table2 ON table1.champ = table2.champ -- permet de joindre 2 table par un point commun pour les afficher la table à gauche du mot sera afficher meme si la correspondance est vide
SELECT table1.champ, table2.champ FROM table1 RIGHT JOIN table2 ON table1.champ = table2.champ -- permet de joindre 2 table par un point commun pour les afficher la table à droite du mot sera afficher meme si la correspondance est vide
SELECT champ1 FROM table1 WHERE champ1 BETWEEN valeur1 AND valeur2 -- permet de selectionner un interval 
SELECT champ1, YEAR(champdate) FROM table1 WHERE champ1 -- permet de selectionner que l'année pour une date
SELECT champ1, MONTH(champdate) FROM table1 WHERE champ1    -- permet de selectionner que le mois pour une date
SELECT champ1, DAY(champdate) FROM table1 WHERE champ1  -- permet de selectionner que le jour pour une date
SELECT champ1, HOUR(champdate) FROM table1 WHERE champ1 -- permet de selectionner que l'heure pour une date
SELECT champ1, MINUTE(champdate) FROM table1 WHERE champ1   -- permet de selectionner que les minutes pour une date
SELECT champ1, SECOND(champdate) FROM table1 WHERE champ1   -- permet de selectionner que les secondes pour une date
SELECT champ1, NOW(champdate) FROM table1 WHERE champ1  -- permet de selectionner l'heure actuel pour une date
SELECT AVG(champ1) FROM table1; -- permet de faire la moyenne des valeur du champ1
SELECT COUNT(champ1) FROM table1;   -- permet de compter le nombre d'enregistrement de champs dans la table
"ATTENTION LES CHAMPS NULL SONT COMPTER COMME 1"
SELECT COUNT(DISTINCT champ1) FROM table1; -- permet de compter le champ1 mais si la meme valeur revient dans ce champ elle ne sera pas prise en compte
SELECT MAX(champ1) FROM table1; -- permet d'afficher lea valeur max du champ1 de la table1
SELECT MIN(champ1) FROM table1; -- permet d'afficher lea valeur min du champ1 de la table1
SELECT champ1, AVG(champ2) From table1 GROUP BY champ1; -- permet d'afficher la moyenne du champ2 mais regrouper par le champ1
SELECT product_categories.name, AVG(products.price) FROM products INNER JOIN product_categories ON products.category = product_categories.id GROUP BY product_categories.name HAVING products.price > 100; -- permet d'afficher les groupe qui reponde a la condition demander

