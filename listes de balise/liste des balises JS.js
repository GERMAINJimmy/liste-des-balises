console.log(""ou''ou ``);    //écrire un texte dans la console
console.log(6+3);    //écrire le resultat de l'opération dans la console
\                   //pour inclure des caractère spéciaux dans une chaine de caractère
\n                  //sauter une ligne dans une chaine de caractère
//                  commentaire sur une seule ligne
/**/                //commentaire sur plusieurs lignes
let a;              // création de la variable a (portée locale de la variable)
var a;              // création de la variable a (v.2015) (portée global de la variable)
a = "Bonjour"       // attribution d'une valeurs à la variable a
"ATTENTION LA VALEUR PEUT AUSSI ETRE AJOUTEE DIRECTEMENT SUR LA CREATION !" let b = 6;
typeof	4 ou charac // permet de donner le type de variable
alert(typeof nomdelavariable); // permet de tester l'existence d'une variable et d'avoir son type de valeur (number,string,boolean)
const c = 30;       // création d'une variable constante ( impossibilité de toucher à la valeur de cette variable)
d += x ;            // addition de x à la valeur de d
d ++;               // ajoute 1 à la valeur de d
console.log(`${e}`};// permet d'afficher l'expression e
console.warn();		// outils developpement (ATTENTION à ENLEVER AVANT DE L'ENVOYER EN PRODUCTION)
console.error();	// outils developpement (ATTENTION à ENLEVER AVANT DE L'ENVOYER EN PRODUCTION)
x.toString();       // utilisation de la fonction tostring sur x qui permet de convertir un nombre en chaine 
parseInt(variable); // s'utilise comme Number
parseFloat(variable); // s'utilise comme Number mais permet de garder la decimal du nombre
Number("5");        // permet de convertir une chaine en nombre
String("5");        // permet de convertir un nombre en chaine
let a = prompt("");         // création d'une boite de dialogue
alert("");          // création d'un pop-up
confirm('');       // création d'un pop-up pour du booléen
if(condition){}     // création d'une condition
"ATTENTION VALEUR DES CONDITIONS :"
== egal à ( égalité de valeur)
=== Egal à (égalité de valeur et de type de variable)
!=  Différent de (valeur de variable)
!== Différent de (valeur et de type de variable)
< inférieur à
<= inférieur ou égal à
> superieur à
>= supérieu ou égal à
else{}               // si la condition de if n'est pas correct
"ATTENTION OPERATEUR DES CONDITIONS :"
&& Et
|| ou
!  inverse (NON)
switch (condition)    // expression de choix
{
    case "x":
        console.log("");
        break;
    case "y":
        console.log("");
        break;
    default:
        console.log("");
}
do {} while(condition)      // création d'une boucle do while (1 tour obligatoire avant de verifier la condition)
while(condition){}          //création d'une boucle while
for (initialisation; condition; étape){}           // création d'une boucle for
"ATTENTION"
La boucle for ne s'utilise que lorsque l'on connait le nombre de tour

function nomDeLaFontion(parametre){}     // création d'une fonction
function (parametre){}                   // création d'une fonction anonyme
(function (){})();                       // crétaion d'une zone de code isolé

const maVariable = function(param1, param2, ...) {} // Affectation d'une fonction anonyme à la variable maVariable
const maVariable = (param1, param2, ...) => {} //création d'une fonction anonyme dite fleché

const stylo =           // création d'un objet stylo
{
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

console.log(stylo.type);   // fait appel au parametre type de l'objet stylo

console.log(aurora.decrire()); //fait appel à la methode (interne à l'objet) decrire de l'objet aurora

console.log(decrire(aurora)); // fait appel a la fonction (externe à l'objet) decrire sur l'objet aurora

decrire() {return `${this.nom}`;} // le mot-clé this cible l'objet dont la methode a été appelée

const tableau = ["element0","element1"]; //création d'un tableau

console.log(tableau.length);        //obtenir la taille du tableau

console.log(tableau[1]);        // faire appel a l'element 1 du tableau

for (let i = 0; i < tableau.length; i++) {
  console.log(tableau[i]);}          // parcourir le tableau 1er methode

ATTENTION !!! si on cherche i<= tableau.length-1; // parcourir le tableau 

tableau.forEach(film => {
  console.log(film);})              // parcourir le tableau 2eme methode
              
for (const film of tableau) {
  console.log(film);}             // parcourir le tableau 3eme methode

tableau.push("element2");          // ajouter un element a la fin du tableau

tableau.unshift("element3");        // ajouter un element au debut du tableau

tableau.pop();                      // supprimer le dernier element du tableau

tableau.splice(0,2);  //couper de l'element 0 à l'element 2(non inclus)
"peut aussi être utilisé avec un seul élément dans ce cas la il part de l'element designé et enleve ce qu'il y a avant"

console.log("ABC".length); //affichera la longueur de la chaine

console.log("ABC".toUpperCase);   // affichera la chaine en majuscule

console.log("ABC".toLowerCase);   // affichera la chaine en minuscule

console.log(saisie === motDePasse);  // comparaison des chaines saisie et mot de passe

console.log(maChaine[monIndice]);  // affichera le caractere de la chaine correspondant a l'indice
"peut etre utiliser dans une boucle pour epeler la chaine"

const prenom = "Odile";
const tabPrenom = Array.from(prenom);  // transforme la chaine en tableau

const chanson = "Honky Tonk Women";
console.log(chanson.indexOf("onk"));  // permet la recherche de valeur a l'interieur de la chaine
" de la meme maniere chanson.startWith (pour le debut) et chanson.endWith(pour la fin) peuvent etre utilisé"
console.log(chanson.replace("Onk","bebe")); // remplace Onk par bebe dans la chanson

const listeMois = "Jan,Fev,Mar,Avr,Mai,Jun,Jul,Aou,Sep,Oct,Nov,Dec";
const mois = listeMois.split(",");  // permet de separer chaque partie de la chaine a partir du caractere demandé


class Personnage {                  // création d'une classe avec deux methode
  constructor(nom, sante, force) {  // ATTENTION CONSRUCTOR() est un mot clé et dans une classe les elements sont séparer par des ; 
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0;}
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience`;
  }
}
for (var propriete in Personnage)       // affiche toute les valeurs des proprietes de l'objet Personnage
{
    console.log(dog[propriete]);
}

const monObjet = new MaClasse(arg1, arg2, ...); // création de l'objet avec la Classe
                              
const unAutreObjet = Object.create(unObjet); //création d'unAutreObjet qui a pour prototype unObjet.

window // est un objet qui represente la fenetre du navigateur

document // sous obet de window qui represente la balise HTML

document.getElementById('id') // permet d'acceder a un element par son id

document.getElementsByTagName('div') // permet d'acceder a tout les element demander sous forme de tableau

document.getElementsByName('div') // permet de ne recuperer que les element qui possede l'attribut name que l'on specifie

document.querySelector('#menu .item span') //permet de renvoyer le 1er élement trouvé 

document.querySelectorAll('#menu .item span')  // permet de renvoyer tous les élements trouvés (sous forme de tableau)
"ATTENTION : Ce sélecteur CSS stipule que l'on souhaite sélectionner les balises de type<span>contenues dans les classes.itemelles-mêmes contenues dans un élément dont l'identifiant est#menu."

variable.getAttribute('attribut') //permet de rechercher un attribut dans le document

variable.setAttribute('attribut', 'nouvelle valeur') // permet de modifier la valeur de l'attribut selectionner ou de le rajouter si il n'éxiste pas

"Pour selectionner l'attribue d'une class il faudra utiliser .className et pour selection une boucle for element.htmlFor"

variable.classList.add('new-class'); // Ajoute une nouvelle classe

variable.classList.remove('new-class'); // Retire une classe

variable.classList.toggle('toggled-class'); // Retire une classe si elle est présente ou bien l'ajoute si elle est absente

variable.classList.contains('old-class'); // Indique si une classe est présente ou non

variable.innerHTML;  // permet de recuperer le code HTML sous forme de chaine

variable.innerText; // permet de recuperer le text contenu mais sans les balises (compatible IE jusqu'a v8)

document.getElementById('div').innerHTML = // permet de d'éditer la selection div
    
document.getElementById('div').innerHTML +=  // permet de rajouter à la selection div
    
variable.textContent;  // version standardisé de innerText (compatible a partir de IE v9)

variable.parentNode; // acceder au noeux parent

variable.nodeType; // donne le type de noeux sous forme de numéro

variable.nodeName; // donne le nom du noeux
"ATTENTION : le nom est retourner en majuscule !!"

variable.firstChild; // sert a acceder au premier enfant du noeud

variable.firstElementChildChild; // sert a acceder au premier enfant Element du noeud

variable.lastChild; // sert a acceder au dernier enfant du noeud

variable.lastElementChildChild; // sert a acceder au dernier enfant Element du noeud

variable.firstChild.nodeValue; // permet de recuperer la valeur du noeud du premier enfant

variable.firstChild.data; // permet de recuperer la valeur du noeud du premier enfant
"ATTENTION : nodeValue et data NE S'APPLIQUE QUE SUR DES NOEUD TEXTUEL"

variable.childNodes; // permet de retourner un tableau contenant la liste des noeuds enfant

variable.nextSibling; // permet de passer au noeud suivant

variable.nextElementSiblingSibling; // permet de passer au l'element suivant

variable.previousSibling; // permet de passer au noeud precedent

variable.previousElementSiblingSibling; // permet de passer au l'element precedent
"Attention aux nœuds vides : les espaces entre les éléments tout comme les retours à la ligne sont considérés comme des nœuds textuels." 
"Les attributsfirstElementChild,lastElementChild, nextElementSibling et previousElementSiblingne retournent que des éléments HTML et permettent donc d'ignorer les nœuds textuels."

document.createElement();  // permet de creer un Element sur la page
document.getElementById().appendChild(); // permet de rajouter l'element désigner en child dans l'element désigner dans element
"ATTENTION : on peut aussi faire variable.appendChild();"
document.createTextNode("texte"); // permet de creer un noeud textuel
variable.cloneNode(true ou false); //permet de cloner un noeud, false le clone sans ses enfants et attributs
variable.replaceChild(nouvelleVariable, variableARemplacer); // permet de remplacer un noeud
variable.removeChild(); // permet de supprimer le noeud
variable.hasChildNodes(); // permet de vérifier si le noeud possede des enfants
variable.insertBefore((nouvelleVariable, variableSuivante)) // permet d'inserer un noeud avant celui selectionner
"ATTENTION LA FONCTION variable.insertAfter n'exista pas, il faut donc la creer."
function insertAfter(nouvelleVariable, variableSuivante) {
    var parent = variableSuivante.parentNode;
	
    if (parent.lastChild === variableSuivante) { // Si le dernier élément est le même que l'élément après lequel on veut insérer, il suffit de faire appendChild()
        parent.appendChild(nouvelleVariable);
    } else { // Dans le cas contraire, on fait un insertBefore() sur l'élément suivant
        parent.insertBefore(nouvelleVariable, variableSuivante.nextSibling);
    }
}

