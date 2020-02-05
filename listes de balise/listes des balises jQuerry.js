"pour inserer jQuerry dans une page : "
"balise script src="lien du fichier sur le disque" ou "lien du fichier en ligne"que l'on retrouve sur le site jQuerry"

$(document).ready(function(){}); // permet d'intervenir sur la page que lorsqu'elle est chargé completement.(version compresser: $(function(){}); )

$("") // selecteur d'élement.
"La selection d'element est sur la meme synthaxe que le CSS"
$("").hide(argument, callBack); // permet de cacher l'element selectionner
$("").show(argument, callBack); // permet d'afficher l'element selectionner
"les arguments peuvent etre exprimer en string (ex: "slow", "fast")ou en nombre (exprimer en millisecondes)"
"utilisation de callBack possible sous forme de fonction supplementaire."
$("").toggle(argument, callBack) //permet d'alterner entre visible et invisible(alternative à hide et show).
$("").fadeOut(argument, callBack) //permet de creer un flou sur l'element selectionner (changement d'opacité de 1 à 0)
$("").fadeIn(argument, callBack) //permet de creer un flou sur l'element selectionner (changement d'opacité de 0 à 1)
$("").fadeToggle(argument, callBack) //permet d'alterner l'opacité.
"argument1 temps, argument2 indice d'opacité"

$("").click(function({});); //permet d'appliquer la fonction lors du clique sur l'element selectionner
$("").mouseenter(function({});); //permet d'appliquer la fonction lorsque la souris est sur l'element selectionner
$("").mouseleave(function({});); //permet d'appliquer la fonction lorsque la souris est parti de l'element selectionner
$("").hover(function1({});, function2({});); //permet d'appliquer la fonction1 lorsque la souris entre et la functiion2 quand elle est parti de l'element selectionner
$("").on({click: function1({}), mouseenter: function2({});}); //permet de creer un objet qui applique la fonction selectionner selon la fonction utiliser
$("").animate(arg1, arg2, arg3); // permet de creer une animation (arg1: objet à animer(proprièté), [arg2: temps, arg3: callBack] arg2 et arg3 optionnel)
$("").stop(arg1, arg2); // permet d'arreter l'animation en stock. (arg1: booléen(par default false ce qui entraine un arret que de la 1er animation), arg2:booleen (par default false), true provoque l'arret de l'animation mais l'objet sera envoyer en fin de l'animation en cours) )
$("").slideUp(arg); // permet de reduire l'objet jusqu'a le faire disparaitre
$("").slideDown(arg); // effet contraire de slideUp
$("").text(); // recuperer le texte de l'element selectionner
$("").html(); // recuperer le code HTML de l'element selectionner
$("").val(); // recuperer la valeur de l'element selectionner
$("").attr(arg); // recuperer l'attribut demandé de l'element selectionner
"On peut utiliser ses même fonctions pour remplacer le contenu en le mettant en argument des fonctions"
$("").prependpend("<p>mon nouveau paragraphe</p>"); // permet d'ajouter au début de l'element selectionner
$("").append("<p>mon nouveau paragraphe</p>"); // permet d'ajouter à la fin de l'element selectionner
$("").before("<p>mon nouveau paragraphe</p>"); // permet d'ajouter le contenu avant l'element selectionner
$("").after("<p>mon nouveau paragraphe</p>"); // permet d'ajouter le contenu après l'element selectionner
$("").remove(); // permet de supprimer l'element selectionner
$("").empty(); // permet de supprimer le contenu de l'element selectionner
$("").addClass(); // permet de donner une classe à l'element selectionner
$("").removeClass(); // permet de supprimer une classe à l'element selectionner
$("").toggleClass(); // permet d'alterner une classe a l'element selectionner
"on peut specifier plusieurs class a rajouter en meme temps"
$("").css("proprièté","valeur"); // permet d'ajouter une propièté et une valeur a celle-ci a l'element selectionner
console.log( $("").css("proprièté")); // permet d'interroger l'élément sur la valeur de la proprièté css demander
$("").css({"proprièté1" : "valeur", "proprièté2" : "valeur"}); // permet d'ajouter plusieurs propiètées et une valeur a celles-ci à l'element selectionner
"ATTENTION les propriètées sont a mettre en string(entre guillements)"
$("").width(argument); // permet d'obtenir la largeur l'element selectionner, si un argument est donné il remplacera la valeur de l'element
$("").height(argument); // permet d'obtenir la largeur l'element selectionner, si un argument est donné il remplacera la valeur de l'element 
"Pour toutes les fonctions, on peut selectionner plusieurs element en le separant par une virgule"
$("").parent(); // permet de selectionner le parent de l'element
$("").parents(); // permet de selectionner les parents de l'element
$("").children(); // permet de selectionner les enfants direct de l'element
$("").find(); // permet de selectionner les descendants de l'element
$("").siblings(); // permet de selectionner les freres de l'element
$("").next(); // permet de selectionner le frere suivant de l'element
$("").first(); // permet de selectionner le premier de l'element
$("").last(); // permet de selectionner le dernier de l'element
$("").eq(); // permet de selectionner l'element d'indice n° de l'element
$("").filter(); // permet de filtrer les element à partir de l'element
$("").not(); // permet de selectionner tout element qui ne possede pas le filtre de l'element
"on peut selectionner les elements par des id ou class"