var Stoel = function(kleur, materiaal)
{
    this.kleur = kleur;
    this.materiaal = materiaal;
};

var Sofa = function(kleur, materiaal)
{
    this.prototype = new Stoel(kleur, materiaal);

    this.relax = function(){
        console.log("I'm a relaxing sofa");
    };
};

var s1 = new Stoel("rood", "plastic");
var s2 = new Sofa("zwart", "leder");
// s1.relax(); => s1 heeft die functie niet
s2.relax();
