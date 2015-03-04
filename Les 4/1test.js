// XML
/*<sofa>
    <kleur>zwart</kleur>
    <materiaal>leder</materiaal>
    </sofa>*/

// JSON: js object notation
/*var Sofa = {
    'kleur': 'zwart',
    'materiaal': 'leder'
}; => sofa2, sofa3, bla bla bla = is niet DRY (don't repeat yourself) dus maken we er functies van
console.log(Sofa.kleur);*/

var Sofa = function(kleur, materiaal){
    this.kleur = kleur;
    this.materiaal = materiaal;

    this.relax = function(){
        console.log("sofa is relaxing!");
    };
};

var s1 = new Sofa("zwart", "leder");
var s2 = new Sofa("rood", "pluche");

console.log(s1.kleur + " " + s1.materiaal);
console.log(s2.kleur + " " + s2.materiaal);
s1.relax();
