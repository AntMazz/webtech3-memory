Antwoorden:

# LEESOPDRACHT 1

a. De meest belemmerende frustratie als je niet kunt zien

Als ik mijn favoriete site wil bezoeken zonder te kunnen zien, lijkt het ontbreken van duidelijke namen op knoppen en links mij het moeilijkst. Je weet dan niet waar een knop of link naartoe gaat en dat maakt het heel onhandig en verwarrend. Het zorgt ervoor dat je maar moet gokken en dat kost veel tijd en moeite.

b. Lastige dingen voor mensen die wel kunnen zien

Als ik een website gebruik, kom ik soms menu’s tegen die niet goed werken of foutmeldingen die niet duidelijk zijn. Bijvoorbeeld als een formulier niet verzendt maar het niet duidelijk is waarom. Dat is vervelend en maakt het lastig om verder te gaan. Dit zou beter kunnen met simpele uitleg en goed werkende knoppen en menu’s.

### Artikel over responsive web design:
Ik ben het eens met de schrijver van het artikel dat mobile-first de beste benadering is voor responsive webdesign. De schrijver legt uit dat mobiele ontwerpen eenvoudiger zijn en dat websites van nature responsief zijn zonder CSS, wat betekent dat het gemakkelijker is om eerst voor mobiele apparaten te ontwerpen en vervolgens de stijl aan te passen voor grotere schermen. Dit voorkomt redundante code en maakt de ontwikkeling efficiënter. Bovendien zorgt de mobile-first benadering ervoor dat de website van begin af aan goed functioneert op mobiele apparaten, wat belangerijk is aangezien steeds meer mensen via hun telefoon surfen.

# LEESOPDRACHT 2

### 1
In hoofdstuk 2.5 van het proefschrift wordt een belangrijke methode beschreven betreft de impact van JavaScript op webpagina's, namelijk het uitschakelen van JavaScript in de browser. Door deze test uit te voeren, kun je zien hoe webpagina's functioneren zonder de JavaScript-functionaliteit en de effecten op de gebruikerservaring en prestaties observeren. Websites die zeer afhankelijk zijn van JavaScript kunnen niet goed functioneren of helemaal niet laden wanneer deze functie is uitgeschakeld.

Als ik deze methode zelf uitvoer en vier van mijn favoriete websites bekijk, valt het op dat alle moderne websites moeilijk te navigeren zijn zonder JavaScript. Functies zoals interactieve elementen, dynamische content (zoals knoppen die veranderen bij hover), inloggen, en ook het laden van de meeste pagina's zelf, werken niet correct of helemaal niet. Dit benadrukt hoe essentieel JavaScript is geworden voor de algehele gebruikerservaring van het web, vooral voor webapplicaties zoals Google Docs, waar de interface volledig afhankelijk is van JavaScript.
### 2
Een van de redenen die in hoofdstuk 2.7 wordt genoemd om andere talen dan JavaScript te overwegen voor webontwikkeling is de beveiligings en privacyproblemen die inherent zijn aan JavaScript. Omdat JavaScript een geïnterpreteerde taal is, wordt de code uitgevoerd in de browser van de gebruiker in plaats van vooraf gecompileerd te worden naar een machine leesbare vorm. Hierdoor kan de broncode relatief eenvoudig worden ingezien en mogelijk worden misbruikt door kwaadwillenden. Dit risico wordt verder vergroot door de overvloed aan JavaScript frameworks en bibliotheken, waarvan sommige onveilig kunnen zijn door gebrekkige kennis van ontwikkelaars over de onderliggende werking van JavaScript.

Is dit een belangrijke reden om JavaScript te vervangen?

Dit is zeker een belangrijke overweging, maar niet een doorslaggevende reden om JavaScript volledig te vervangen.
Hoewel de beveiligingsproblemen reëel zijn, worden ze in de praktijk vaak verzacht door tools en technieken zoals code minificatie, bundeling, Content Security Policies (CSP) en runtime beveiligingsmaatregelen. Het is onwaarschijnlijk dat een andere taal volledig immuun zou zijn voor beveiligingsuitdagingen.
Zoals de auteur benadrukt, zou het vervangen van JavaScript enorme wijzigingen in browsers en ontwikkelingspraktijken vereisen. De adoptie van een nieuwe taal als standaard voor client-side scripting zou niet alleen technisch uitdagend zijn maar zal ook heel lang duren om wereldwijd te kunnen implementeren.
Hoewel talen zoals Python en Ruby alternatieven kunnen bieden, missen ze momenteel de brede browserondersteuning en ecosysteemintegratie die JavaScript heeft opgebouwd. Dit maakt het moeilijk voor ontwikkelaars om te vertrouwen op deze talen voor cross-browser functionaliteit.

# LEESOPDRACHT 3

Hieronder volgt een samenvatting van de use-cases, voor en nadelen en best practices van JSON Web Tokens (JWT) zoals besproken in de blog, samen met een reflectie op hoe dit aansluit bij de memory opdracht en de projectopdracht.

### Use-cases van JWT

- Authenticatie: JWT wordt veel gebruikt voor het implementeren van gebruikersauthenticatie. Het biedt een veilige manier om sessies te beheren zonder voortdurend toegang tot de database.

- Gegevensuitwisseling: WT kan gegevens veilig tussen twee partijen (bijvoorbeeld client en server) overdragen.

- Autorisatie: Nadat een gebruiker is geauthenticeerd, kunnen JWT's worden gebruikt om toegangsrechten binnen applicaties te beheren.

### Voordelen van JWT

- Standaardisatie: JWT is een open standaard, waardoor het breed ondersteund wordt door talen en frameworks.
- Geen redundante database query's: Claims over gebruikers worden in de token opgeslagen, wat minder belasting voor de database oplevert.
- Integriteit van gegevens: Door gebruik van cryptografisch gesigneerde tokens wordt de integriteit van de claims gegarandeerd.
- Efficiëntie: Eenmaal aangemaakt, kunnen tokens onafhankelijk gebruikt worden, wat schaalbaarheid bevordert.

### Nadelen van JWT

- Geen standaard encryptie: JWT’s zijn standaard niet versleuteld, wat betekent dat gevoelige gegevens zichtbaar zijn als iemand toegang krijgt tot de token.
- Kwetsbaarheid voor exploits: Afhankelijk van de opslagmethode (bijvoorbeeld cookies of localStorage) kunnen tokens vatbaar zijn voor aanvallen zoals XSS (Cross-Site Scripting) en CSRF (Cross-Site Request Forgery).
- Groottebeperkingen: Browsers hebben limieten op de hoeveelheid data die in cookies of localStorage kan worden opgeslagen, wat problemen kan geven als de payloads groot zijn.

### Best practices

- Beperk de opgeslagen gegevens: Vermijd het opslaan van gevoelige informatie in de payload van een token.
- Gebruik secure transport: Stuur tokens alleen over versleutelde verbindingen (HTTPS).
- Minimaliseer toegang: Beperk de toegankelijkheid van tokens door gebruik te maken van beveiligde cookies met de HttpOnly en Secure vlaggen.
- Regelmatige rotatie: Maak gebruik van korte levensduur voor tokens en implementeer een mechanisme voor tokenvernieuwing.
- Extra validatie: Combineer JWT met server-side validatie om extra beveiligingslagen toe te voegen.
- 
#### Reflectie op de opdrachten

In de memory opdracht en projectopdracht spelen JWT’s een belangrijke rol bij het beheer van gebruikerssessies. Aangezien het spel mogelijk gevoelige gebruikersdata verwerkt (bijvoorbeeld scores of namen), biedt JWT een manier om gebruikersinformatie te beveiligen tijdens interacties met de server. De best practices zoals gebruik van HTTPS en het vermijden van gevoelige gegevens in tokens kunnen bijdragen aan een veilige implementatie.




