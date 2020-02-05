"pour inserer Bootstrap dans une page : 2 fichier (1.html 2.js)"
"balise script src="lien du fichier sur le disque" ou "lien du fichier en ligne"que l'on retrouve sur le site Bootstrap"
<!-- "ATTENTION !!!  Bootstrap a généralement besoin de fichier jQuery pour fonctionner (ce referer au fichier jQuerry)" -->

<meta name="viewport" content="width=device-width, initial-scale=1"> <!-- permet d'initialiser bootstrap --> 
    
<div class="container"></div> <!-- permet de fixer la largeur de la div-->
    
<div class="container-fluid"></div> <!-- permet de rendre la largeur de la div redimensionable-->

<!-- taille des écrans
xs < 768px      phones
sm >= 768px     tablettes
md >= 992px     desktop
lg >= 1200px    large desktop-->

<div class="col-sm-6 col-md-4 col-lg-3"></div> <!-- permet de redimensionner la div selon la dimension de l'ecran (la ligne est a 12pts) nombre de point par element.
col(colonne)-sm(taille ecran)-6(pts donner a l'élément sur 12)-->

<div class="text-" class="form-" class="btn btn-"></div>
<!--
default    xs       block(permet de prendre toute la largeur du block)
primary    sm       group(group les boutons par exemple)
success    md       group-vertical (pareil mais aligner en vertical)
info       lg
warning
danger
Link

mot clé couleur, taille pour design pré-défini
-->
<div class="active(apercu appuyer)/disabled(apercu desactiver)"></div> <!--fonctionne sur checkbox ou button -->

<div class="img-"></div>
<!--
rounded (bord arrondi)
circle (decoupe en rond)
thumbnail (vignette)
responsive
-->
<a><span class="glyphicon glyphicon-"></span></a> <!-- permet d'afficher une icone avant par exemple un lien -->
<!--
https://getbootstrap.com/docs/3.3/components/#glyphicons
-->
<div class="dropdown">
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Fruits <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li></li>
        </ul>
</div>
<!-- 
https://getbootstrap.com/docs/3.3/components/#dropdowns
création une liste déroulante
class="dropdown" ou "dropup" liste déroulante par le bas ou haut
dropdown-toggle (liste deroulante)
data-toggle="dropdown" (donnée dans la liste déroulante)
class="caret" (fleche deroulante)
class="dropdown-menu" (donnée utilisé pour la liste)
-->

<!--
<li class="divider"></li> (barre de separation)
<li class="dropdown-header"></li> (titre dans le menu deroulant)
<li class="disabled"></li> (désactiver)
-->

<div class="progress">
    <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-active" role="progress-bar" style="width:80%"></div>
</div>

<!--
https:<!--getbootstrap.com/docs/3.3/components/#progress
class="progress" (création barre de pogression)
class="progress-bar progress-bar-info" (changement de couleur)
class="progress-bar progress-bar-striped" (changement texture)
-->
"ATTENTION : les tooltip on besoin d'une activation par jQuerry ou JS"
<!-- 
partie Jquerry

$(function(){
    $('[data-toggle="tooltip]'ou '#special').tooltip();
});
-->
<button type="button" id="special" class="btn btn-primary" data-toggle="tooltip" data-placement="right" title="contenu du tooltip">nom du boutton</button>
<!-- 
data-placement permet de modifier la position du tooltip (par défault en haut)
-->

"MODDAL" <!-- création modal/popup-->

<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#monModal">ouvrir Modal</a> <!-- création bouton-->
    <div class="modal fade" id="monModal"> <!-- animation modal -->
        <div class="modal-dialog modal-lg"> 
            <div class="modal-content"> <!-- contenu modal -->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">x</button>
                    <h4 class="modal-title">titre de mon modal</h4>
                </div>
                <div class="modal-body">
                    <p> Hello les amis !</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

"NAVBAR" <!-- création menu-->

<nav class="navbar navbar-default navbar-fixed-top"> <!-- création menu et proprièté -->
    <div class="container-fluid"> <!-- contenu menu -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#monmenu"> <!-- création bouton menu pour petite résolution-->
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Nom du site</a>
        </div>
        <div class="collapse collapse-navbar" id="monmenu">
            <ul class="nav navbar-nav">
                <li><a href="#">ACCUEIL</a></li>
                <li><a href="#">QUI SOMMES NOUS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    </div>
</nav>

"SPY SCROLLBAR" 

<body data-spy="scroll" data-target=".navbar" data-offset="50"></body> <!-- permet de selectionner la partie du menu afficher; data-offset permet de regler la sensibilité du spy -->

"CARROUSEL"

<div id="monCarousel" class="carousel slide" data-ride="carousel" style="max-width:800px"><!-- création carousel avec width optionel -->
    <ol class="carousel-indicators"> <!-- création petite bille en bas du carousel -->
        <li data-target ="#monCarousel" data-slide-to="0" class="active"></li>
        <li data-target ="#monCarousel" data-slide-to="1"></li>
        <li data-target ="#monCarousel" data-slide-to="2"></li>
        <li data-target ="#monCarousel" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox"> <!-- création des images du carousel -->
        <div class="item active">
            <img src="#">
            <div class="carousel-caption"><h3>Legende de la photo 1</h3></div>
        </div>
        <div class="item">
            <img src="#">
            <div class="carousel-caption"><h3>Legende de la photo 2</h3></div>
        </div>
        <div class="item">
            <img src="#">
            <div class="carousel-caption"><h3>Legende de la photo 3</h3></div>
        </div>
    </div>
    <a href="#monCarousel" class="left carousel-control" role="button" data-slide="prev"> <!-- création bouton de defilement du carousel -->
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
     <a href="#monCarousel" class="right carousel-control" role="button" data-slide="next"><!-- création bouton de defilement du carousel -->
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>

