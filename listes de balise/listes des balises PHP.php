"ATTENTION PHP 7 : POUR PROTEGER DES ERREURS IL FAUT RAJOUTER"
<?php declare(strict_types=1); ?>


<?php  ?> délimite le code php
<?					
//...	délimite un commentaire monoligne
#...    délimite un commentaire monoligne
/*...*/	délimite un commentaire multiligne
    
$nomdelavariable  # permet de créer une variable (le nom de la variable peut commencer par une lettre ou _)
define("nom de la constante", "valeurs") #  création d'une constante

echo "…" ou '...'	# permet d'insérer du texte ou d'afficher une variable 
<?= $var?> // équivalent à <?php echo $var ?> 
var_dump($variable) #   permet d'afficher le type de variable
print_r($variable_tableau)	#    permet d'afficher le contenu du tableau	ATTENTION pour un affichage correcte il faut encadrer par echo'<pre>' et echo'</pre>'				
include "page.php"	# permet d'inclure une page php (si il n'existe pas il ecrit quand meme le HTML)
require "page.php"  # permet d'inclure une page php (si il n'existe pas il bloque l'écriture de la page)

 ' … ' . $variable . ' … '	#    concaténation					
"OPERATEUR"
    + ADDITION
    - SOUSTRACTION
    * MULTIPLICATION
    / DIVISION
    ** AU CARRE
    ** AU CARRE
    10 % 3 = 1	Modulo %
    +=
    -=
    *=
    /=
    %=
    .=  # raccourci concatenation
    "ATTENTION NOUVEAU DEPUIS PHP 7"
   x <=> y SPACESHIP # si x est superieur =1; si ils sont egaux =0; si x est inferieur =-1
    
	==	egal				
	>	superieur à				
	<	inferieur à				
	>=	superieur ou égal à				
	<=	inferieur ou egal à				
	!=	différent de #convertion avant comparaison
    
    !== différent de # pas de convertion avant comparaison
    
$variable = (condition) ? "reponsetrue" : "reponsefalse" #ternaire
    "ATTENTION NOUVEAU DEPUIS PHP 7"
$variable = $reponse1 ?? $reponse2 ?? $reponse3 $ "" #  si reponse1 est pas définie passe a la reponse2
    
If ( $variable = valeur)	#    création d'une condition (si)
    
elseif	#    création de la contre condition (sinon si)					
else	#    création de la contre condition (sinon)					
If ( $variable = valeur and $variable = valeur)	#    condition multiple					
	and	#    Et ( &&)				
	or	#    Ou ( || )	
    
    ! #      Not(inverse)
    
"ATTENTION NOUVEAU DEPUIS PHP 7"
    
    xor #    donne true si au moin des element est vrai 
"SI LES DEUX ELEMENT SONT VRAI OU FAUX XOR DONNE FALSE"
    
switch($variable)
{
    case "":
        code a appliquer
    break;
    default:
        code;
}
#    alternative a un if...else trop long					
while(condition)
{
    code à executer tant que la condition est vrai    
}
#    Création d'une boucle pour une infinité
do
{
    code à executer tant que la condition est vrai
}
while(condition)
# Création d'une boucle pour une infinité mais il ce lance au moin une fois

for(initialisation;condition;incrémentation)
{
    code à executer
}
#    Création d'une boucle pour un nombre précis

foreach($variabe_tableau as $element(ou $cle => $valeur));	#    Création d'une boucle pour un tableau					
strlen();	#    fonction affiche la longueur d'une chaine	
str_word_count(); #  compte le nombre de mot dans la chaine
count();             # permet de compter (element de tableau, nombre de caractere dans une chaine,...)
strrev(); #  sert a retourner une chaine
strpos($variable,"mot a trouver"); # sert a rechercher un mot dans la chaine
str_replace(element a remplacer ,element qui remplace, element final);	#    fonction recherche et remplace ( mot ou lettre )	
strtolower();	#    fonction affiche la chaîne de caractère en minuscule					
strtoupper();	#    fonction affiche la chaîne de caractère en majuscule					
strtoupper();	#    fonction affiche la chaîne de caractère en majuscule					
date();	#    fonction recuperer la date					
function nom_de_la_fonction($variable){}	#    création d'une fonction
global $variable ou echo $GLOBALS['variable'];   #   permet de recuperer une variable global au sein d'une fonction
static $variable #  permet de conserver la valeur de cette variable

return $variable	#    instruction pour retourner la valeur de la variable					
$variable = array ('valeur0', 'valeur1', …);	#    création d'un tableau numéroté					
$variable = array ( 'prenom' => 'bidule', …);	#    création d'un tableau associatif					
array_key_exists('nom_de_la_clé', $variable_tableau);	#    recherche la clé demander dans le tableau ciblé					
in_array('nom_de_la_valeur', $variable_tableau);	#    recherche la valeur demander dans le tableau ciblé					
array_search('nom_de_la_valeur', $variable_tableau);	#    affiche la valeur demander dans le tableau ciblé
class nom_de_objet 
{
    public $propriete1;
    public $propriete2;
    
    public function __construct($propriete1deobjet, $propriete2deobjet)
    {
        $this -> propriete1 = $propriete1deobjet
        $this -> propriete2 = $propriete2deobjet
    }
}                                   # création d'un type d'objet

$variable = new nom_de_objet(propriete1, propriete2);  # création d'un objet a partir du type creer 
    
$variable->nom_de_la_fonction();      # permet d'utiliser la fonction sur la variable

$variable->propriete1 = nouvellevaleur;    #  permet de modifier la valeur d'une propriete d'un objet

"LISTE SUPER-GLOBALS"
$GLOBALS['$variable'];
$_SERVER['$variable'];
$_GET['$variable'];
$_POST['$variable'];
$_REQUEST['$variable'];
$_SESSION['$variable'];
    
UTILISATION _GET
    partie HTML <a href="lien?propriete1=valeur1&propriete2=valeur2&..."></a>
    partie PHP #<?php echo "texte".$_GET['propriete1']."texte"; >?

UTILISATION _POST
    partie HTML <form method="post"><input name="propriete1"></form>
    partie PHP  #<?php echo $_POST['propriete1']; >?

"POUR LES SUIVANTES LA PARTIE PHP EST A METTRE EN DEBUT DE PAGE"

UTILISATION _SESSIONS (partie HTML à rajouter au debut de toutes les pages)
    partie HTML #<?php session_start(); $_SESSION["propriete1"]="valeur1"; >?
    partie PHP  #<?php echo $_SESSOIN['propriete1']; >?

UTILISATION _COOKIE (il faut un double chargement de la page pour afficher le cookie)
    partie HTML #<?php setcookie('nomducookie','valeurducookie', time() + vie du cookie en secondes); >?
    partie PHP  #<?php echo $_COOKIE['nomducookie']; >?

"ATTENTION A BIEN PROTEGER LE CODE POUR TOUTE DONNEES ENTRANTES"

$firstname = $name = $email = $phone = $message = ""; #demande au serveur de vider les variables
    if($_SERVER["REQUEST_METHOD"]== "POST") # indique que lorsque le serveur recharche la page due au POST(formulaire) elle prennent les valeur fournis
    {
        $firstname = verifyInput($_POST['firstname']);
        $name = verifyInput($_POST['name']);
        $email = verifyInput($_POST['email']);
        $phone = verifyInput($_POST['phone']);
        $message = verifyInput($_POST['message']);
    }
    function verifyInput($var) 
    {
        $var = trim($var); # enleve les balises et les espaces supplementaires
        $var = stripslashes($var); # enleve les antislashs
        $var = htmlspecialchars($var); # enleve les scripts
        
        return $var;
    }
>?
# permet de nettoyer les envoi de données formulaire vers le serveur (exemple d'application)
mail(adressemail(variable),objet du mail, emailText, coordonnéesdu corespondant(variable)) # permet d'envoyer un mail
$coordonnéesducorrespondant = "From: $prenom $nom <$email>\r\nReply-To: $email";
#permet de de transmet les donnée necessaire a l'envoi