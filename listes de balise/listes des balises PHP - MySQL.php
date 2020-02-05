<?php
$database = new PDO('mysql:host=...;dbname=...','utilisateur','password',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
 # connexion à une base de donnée 
query('SELECT champ FROM table'); # permet de taper une requete SQL
fetch(PDO::FETCH_ASSOC); # permet de recuperer ligne par ligne de la table de maniere associative ou avec NUM pour index
fetchAll(PDO::FETCH_ASSOC); # permet de recuperer toutes les lignes de la table de maniere associative ou avec NUM pour index
"ATTENTION si l'argument est vide on recupere l'assoc et le NUM en meme temps"
prepare('INSERT INTO table(champ1, champ2) VALUES (?,?)') # permet de preparer une requete mais les valeur doivent etre ?
execute(array($champ1,champ2)); # permet de donner l'ordre d'executer la fonction prepare