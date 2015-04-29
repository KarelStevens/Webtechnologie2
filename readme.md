# Webtech 2 #
## Les 1 - GIT ##
In deze les kregen we een introductie in GIT

### SourceTree
A free Git & Mercurial client for Windows or Mac.
=> wij gebruiken sourceTree als GUI voor onze projecten en portfolio.

### Git basic commands
#### Commit 
Commit past je veranderingen lokaal toe (nog nie op de remote repository)

#### Push
Alle veranderingen in de commits doorsturen naar de remote repository

#### Pull
Alle veranderingen uit de remote repository ophalen en toepassen op je lokale bestanden.

## Les 2 - CSS Animations ##
In deze les hebben we gezien hoe we met CSS transition en transformations gemakkelijk en snel animaties kunnen maken.

### Transitions ###
Een transitie is de animatie van een veranderingen van een of meerdere properties.
Een transitie MOET getriggerd worden door het toevoegen van een klasse of een pseudo-selector zoals :hover.
=> kan zichzelf niet triggeren

“using linear to time your animations is like using comicsans
on your portfolio"

####nadelen:
- kan slecht zijn voor performance => door sommige transitioning properties moet de browser per frame de stijlen herberekenen.

### Transformations
Een transformatie is de fysische verandering van een element (zoals 2D als 3D) via keyframes.
veranderingen zoals:
- grootte
- locatie
- rotatie 
- ...

Een transformatie kan automatisch gestart worden.

#### 2D Transformations
- Translate(x,y): lineaire horizontale, verticale of diagonale (x+/- en y+/-) beweging.
- Rotate(angle): roteren volgens het meegegeven angle.
- Scale(x, y): vergoten en verkleinen.
- Skew(x,y): horizontaal en verticaal kantelen.
- Matrix(): al het bovenstaande.

#### 3D Transformations
3D kan hetzelfde als 2D maar ook in de diepte (z-as)

- RotateZ(x): roteren op de z-as.
- Perspective(): Visueel effect => hoe hoger de ingegeven waarde, hoe verder het element van de gebruiker weg lijkt te zijn.

### Opdracht les 2:
4 animaties maken: zie cursus

## Les 3 - Eigen JavaScript Framework (advanced JS) ##
In lab 3 leren we hoe een framework zoals jquery is opgebouwd uit javascript.

### waarom: 
Jquery is een zeer handig framework die het aantal lijnen code die wij moeten schrijven verlaagd. Maar voor kleine applicaties
is het laden van een eigen mini-framework veel sneller dan een volledig framework zoals jquery (die zeer veel ongebruikte code zou hebben).

### opdracht les 3:
Het aanvullen van de startbestanden van een to-do app.

## Les 4 - Building an app with APIs ##
In deze les hebben geleerd hoe we met publieke API's kunnen werken van andere organisaties, hoe Localstorage werkt, ..
vb. stad antwerpen de API om alle openbare toiletten op te halen, of alle nmbs stations in belgie, ...

API's zijn sets van functies die onder andere toelaten om data op te halen en weer te geven. Om de data op te vragen gebruiken wij het json formaat.

### Localstorage
Wanneer organisaties het toelaten om te werken met hun API is het dikwijls het geval dat je een account moet aanmaken en er een maximum staat
op het aantal gratis handelingen die je per dag mag uitvoeren. vb max 100 GETS per dag. Zodat het server niet overbelast geraakt.
Tijdens het testen kan het vervelend zijn dat je ineens geen handelingen meer mag uitvoeren. Daarom kan je Localstorage gebruiken.

Localstorage laat webpaginas toe om data lokaal op te slaan. Hierdoor moet je niet telkens een GET uitvoeren op de API.
=> hierdoor worden de paginas sneller geladen (geen GET uitvoeren op de API, want je hebt de data al) en verbruik je minder handelingen op je API.


### Opdracht les 4
Weerapplicatie die zijn data ophaalt via de API forecast.io en gebruikt maakt van geolocation.
Om de weervoorspellingen te verkrijgen van uw huidige locatie.
Extra: Localstorage gebruiken om je data op te slaan.

## Les 5 - Realtime apps met Node.js en web sockets ##
In deze les kwamen er 2 werknemers van District01 gastspreken over Node.js

De gastspreking zelf ging enorm snel en was naar mijn mening onduidelijk. Hierdoor was het nog steeds moeilijk om NodeJS te gebruiken.
Via zelfstudie en de herhaling van de docent werd het al iets duidelijker.

NodeJS is een platform gebouwd om gemakkelijk snelle en schaalbare netwerkapplicaties te maken.
Nodejs is server-side javascript die enorm populair is voor event-driven applicaties die constant moeten geupdate worden wanneer er nieuwe data beschikbaar is.
Zoals een chatroom.

We hebben dan in de les ook gebruik gemaakt van Nodejs en socket.io om at realtime data up te daten over verschillende schermen.

### npm
- npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.
- npm is de command-line utility die helpt bij het installeren van packages.

### web sockets
web sockets maken gebruik van een server om communicatie te voorzien tussen server en clients.

Opdracht les 5:
IMDquestions: een chatroom maken waarbij mensen kunnen vragen stellen die at-realtime wordt geupdate.

nog uit te voeren oplossing voor het probleem: wanneer er mensen van een andere laptop connecteren op de chatroom worden hun antwoorden niet doorgestuurd
want hun localhost is niet dezelfde als mijn localhost. => IP adressen opvragen en gebruiken ipv handelingen op localhost.

## Les 6 - Angular.js ##
Angularjs is het framework van Google, die zeer sterk is in SPA's.
Via Angular is het mogelijk om je HTML heel wat extra functionaliteiten aan te leren. (ng-repeat, andere directives, ..)

### Opdracht les 6 ###
digital bar base applicatie maken met angularJS.

Het moest mogelijk zijn om nieuwe drankjes toe te voegen aan de bar en een bestelling te plaatsen voor een gebruiker via een API van District01.

## Les 8 - SASS + BEM ##
SASS is een "extensie" van CSS, die werkt op Ruby.

Om sass goed te gebruiken heb je een goede mappenstructuur nodig. Je splits je css styles op in verschillende files
vb. _nav.css, _footer.css, ... SASS compileert dit allemaal automatisch naar 1 grote file waarbij hij alle enters, spaties, ... weghaalt => minder karakters waardoor de performance stijgt

SASS laat het ook toe om te werken met variabelen!
vb. : $kleur: #ff0000; die je dan kan gebruiken in je css vb. color: $kleur;


