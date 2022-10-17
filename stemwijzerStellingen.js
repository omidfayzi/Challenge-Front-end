const stellingen = [
    {
        stelling_kop : 'Vaccinatiebewijs',
        stelling : 'Organisatoren van evenementen moeten bij de toegang een vaccinatiebewijs kunnen vragen.'
    },
    {
        stelling_kop : 'Defensiebudget',
        stelling : 'Nederland moet meer geld uitgeven aan defensie.'
    },
    {
        stelling_kop : 'Gratis kinderopvang',
        stelling : 'Kinderopvang moet voor alle ouders ten minste drie dagen in de week gratis worden.'
    }
    ,{
        stelling_kop : 'Nederland uit EU',
        stelling : 'Organisatoren van evenementen moeten bij de toegang een vaccinatiebewijs kunnen vragen.'
    }
    ,{
        stelling_kop : 'Rekeningrijden',
        stelling : 'In plaats van de belasting op autobezit moet er voor automobilisten een belasting komen per gereden kilometer.'
    }
    ,{
        stelling_kop : 'Vuurwerk',
        stelling : 'Aankomende jaarwisseling moet het weer toegestaan zijn om siervuurwerk af te steken.'
    }
    ,{
        stelling_kop : 'Vleesbelasting',
        stelling : 'Er moet een extra belasting komen op het kopen van vlees.'
    }
    ,{
        stelling_kop : 'Publieke omroep',
        stelling : 'Er moet minder geld naar de publieke omroep.'
    }
    ,{
        stelling_kop : 'Zorgfonds',
        stelling : 'In plaats van de bestaande zorgverzekeraars moet er een landelijk zorgfonds komen voor iedereen.t een extra belasting komen op het kopen van vlees.',
    }
    ,{
        stelling_kop : 'Gezichtsbedekkende kleding',
        stelling : 'De regering moet het verbod op gezichtsbedekkende kleding afschaffen.'
    }
    ,{
        stelling_kop : 'Volkshuisvesting',
        stelling : 'In plaats van provincies en gemeenten moet de landelijke overheid beslissen waar nieuwe woonwijken worden gebouwd.'
    }
    ,{
        stelling_kop : 'Btw op kunst en cultuur',
        stelling : 'De regering moet de btw op culturele activiteiten verlagen naar 5 procent.'
    }
    ,{
        stelling_kop : 'Kerncentrale',
        stelling : 'Nederland moet een nieuwe kerncentrale bouwen.'
    }
    ,{
        stelling_kop : 'Woningen op landbouwgrond',
        stelling : 'Er moeten woningen worden gebouwd op grond die nu voor landbouw wordt gebruikt.'
    }
    ,{
        stelling_kop : 'Belastingvoordeel huishoudens',
        stelling : 'Huishoudens met twee partners waarvan er één werkt, moeten net zoveel belastingvoordeel krijgen als huishoudens met twee werkende partners.'
    }
    ,{
        stelling_kop : 'Excuses slavenhandel',
        stelling : 'De Nederlandse regering moet excuses aanbieden voor de slavenhandel in het verleden.'
    }
    ,{
        stelling_kop : 'Correctief referendum',
        stelling : 'Burgers moeten de mogelijkheid krijgen om door het parlement aangenomen wetten tegen te houden via een referendum.'
    }
    ,{
        stelling_kop : 'Inkomen leraren',
        stelling : 'Leraren op basisscholen moeten net zoveel gaan verdienen als leraren op middelbare scholen.'
    }
    ,{
        stelling_kop : 'Gevangenisstraffen',
        stelling : 'Er moeten minder mogelijkheden komen om taakstraffen op te leggen in plaats van gevangenisstraffen.'
    }
    ,{
        stelling_kop : 'Vliegbelasting',
        stelling : 'Nederland moet een extra vliegbelasting invoeren voor korte-afstandsvluchten.'
    }
    ,{
        stelling_kop : 'Inburgering op locatie',
        stelling : 'Asielzoekers met een voorlopige verblijfsvergunning moeten eerst inburgeren voordat zij een huurwoning krijgen.'
    }
    ,{
        stelling_kop : 'Legalisering softdrugs',
        stelling : 'Zowel inkoop als verkoop van softdrugs door coffeeshops moet legaal worden.'
    }
    ,{
        stelling_kop : 'Nederlandstalig hoger onderwijs',
        stelling : 'De overheid moet onderwijs in het Nederlands vaker verplicht stellen op universiteiten en hogescholen.'
    }
    ,{
        stelling_kop : 'Voltooid leven',
        stelling : 'Mensen die hun leven voltooid vinden, moeten hulp kunnen krijgen bij zelfdoding.'
    }
    ,{
        stelling_kop : 'Koppeling minimumloon en bijstand',
        stelling : 'Verhoging van de minimumlonen moet niet langer automatisch leiden tot verhoging van de bijstandsuitkeringen.'
    }
    ,{
        stelling_kop : 'Sociale huurwoningen',
        stelling : 'Nieuwbouwwijken moeten voor ten minste 40 procent bestaan uit sociale huurwoningen.'
    }
    ,{
        stelling_kop : 'Boerenbedrijven',
        stelling : 'Er moeten geen nieuwe beperkingen komen op de activiteiten van boerenbedrijven.'
    }
    ,{
        stelling_kop : 'Middenschool',
        stelling : 'Er moet een middenschool komen, zodat leerlingen op latere leeftijd de keuze maken tussen vmbo, havo of vwo.'
    }
    ,{
        stelling_kop : 'Vluchtelingen opnemen',
        stelling : 'Nederland moet meer vluchtelingen opnemen dan het nu doet.'
    }
    ,{
        stelling_kop : 'Mondkapjesverplicht',
        stelling : 'Mensen moeten altijd zelf kunnen kiezen of ze een mondkapje dragen.'
    }
];

var allePartijenArray = ["VVD", "PVV", "CDA", "D66", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "VIJFTIGPLUS", "SGP", "DENK", "ForumVoorDemocratie", "BIJ1", "JA21", "CodeOranje", "Volt", "NIDA", "Piratenpartij", "JONG", "Splinter", "NLBeter", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "UBuntuConnectedFront", "BBB"]

var zittendePartijenArray = ["checkbox0", "checkbox3", "checkbox1", "checkbox2", "checkbox5", "checkbox6", "checkbox4", "checkbox12", "checkbox8", "checkbox7", "checkbox16", "checkbox14", "checkbox10", "checkbox11", "checkbox9", "checkbox13"]

// Eens - Geen van beiden - 2 
var partijenMening = [
    {
        0 : ["VVD", "D66", "VIJFTIGPLUS", "BIJ1", "Volt", "LibertairePartij", "JONG", "NLBeter"], 
        1 : [],
        2 : ["PVV", "CDA", "GroenLinks", "SP", "PVAD", "ChristenUnie", "PartijVoorDeDieren", "SPG", "DENK", "ForumVoorDemocratie", "JA21", "CodeOranje", "NIDA", "Piratenpartij", "Splinter", "BBB", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"]
    },
    {
        0 : ["VVD", "PVV", "CDA", "D66", "PartijVandeArbeid", "ChristenUnie", "VIJFTIGPLUS", "SGP", "ForumVoorDemocratie", "Volt", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "TrotsOpNederland", "UBuntuConnectedFront"], 
        1 : ["LibertairePartij", "JONG"],
        2 : ["GroenLinks", "SP", "PartijVoorDeDieren", "DENK", "BIJ1", "NIDA", "PiratenPartij", "JezusLeeft", "Lijst30"]
    },
    {
        0 : ["CDA", "D66", "GroenLinks", "SP", "PartijVandeArbeid", "PartijVoorDeDieren", "VIJFTIGPLUS", "Volt", "NIDA", "Piratenpartij", "JONG", "Splinter", "BBB", "NLBeter", "Oprecht", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : ["ChristenUnie", "DENK"],
        2 : ["VVD", "PVV", "SGP", "ForumVoorDemocratie", "JA21", "LibertairePartij", "LijstHenkKrol", "JezusLeeft"]
    },
    {
        0 : ["PVV", "ForumVoorDemocratie", "JezusLeeft"],
        1 : ["CodeOranje", "LibertairePartij", "Lijst30"],
        2 : ["VVD", "CDA", "D66", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "VIJFTIGPLUS", "SGP", "DENK", "BIJ1", "JA21", "Volt", "NIDA", "JONG", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "TrotsOpNederland", "UBuntuConnectedFront"]
    },
    {
        0 : ["D66", "GroenLinks", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "VIJFTIGPLUS", "SGP", "BIJ1", "Volt", "NIDA", "LibertairePartij", "JONG", "Splinter", "NLBeter", "JezusLeeft", "TrotsOpNederland", "UBuntuConnectedFront"], 
        1 : ["VVD", "JA21", "LijstHenkKrol"],
        2 : ["PVV", "CDA", "SP", "ForumVoorDemocratie", "CodeOranje", "Piratenpartij", "BBB", "Lijst30"],
    },
    {
        0 : ["VVD", "PVV", "CDA", "D66", "SP", "ForumVoorDemocratie", "JA21", "LibertairePartij", "BBB", "Oprecht", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"], 
        1 : ["LijstHenkKrol"],
        2 : ["GroenLinks", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "DENK", "BIJ1", "Volt", "NIDA", "JONG", "Splinter", "NLBeter", "JezusLeeft"],
    },
    {
        0 : ["D66", "GroenLinks", "ChristenUnie", "PartijVoorDeDieren", "Volt", "JONG", "Splinter"], 
        1 : [],
        2 : ["VVD", "PVV", "CDA", "SP", "PartijVandeArbeid", "VIJFTIGPLUS", "SGP", "DENK", "ForumVoorDemocratie", "BIJ1", "JA21", "Piratenpartij", "LibertairePartij", "BBB", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
    },
    {
        0 : ["VVD", "PVV", "SGP", "DENK", "ForumVoorDemocratie", "JA21", "CodeOranje", "LibertairePartij", "BBB", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"], 
        1 : ["JONG"],
        2 : ["CDA", "D66", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "VIJFTIGPLUS", "BIJ1", "Volt", "NIDA", "Piratenpartij", "Splinter", "NLBeter", "UBuntuConnectedFront"],
    },
    {
        0 : ["GroenLinks", "SP", "PartijVoorDeDieren", "DENK", "BIJ1", "CodeOranje", "NIDA", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"], 
        1 : ["PVV"],
        2 : ["VVD", "CDA", "ChristenUnie", "VIJFTIGPLUS", "SGP", "ForumVoorDemocratie", "JA21", "Volt", "LibertairePartij", "JezusLeeft"],
    },
    {
        0 : ["D66", "GroenLinks", "DENK", "BIJ1", "Volt", "NIDA", "Piratenpartij"],
        1 : [],
        2 : ["VVD", "PVV", "CDA", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "VIJFTIGPLUS", "SGP", "ForumVoorDemocratie", "JA21", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
    },
    {
        0 : ["VVD", "PVV", "CDA", "PartijVandeArbeid", "PartijVoorDeDieren", "VIJFTIGPLUS", "DENK"],
        1 : ["SP", "LijstHenkKrol", "Oprecht"],
        2 : ["D66", "GroenLinks", "ChristenUnie", "SGP", "ForumVoorDemocratie", "BIJ1", "JA21", "Piratenpartij", "LibertairePartij", "JONG", "Splinter", "BBB", "NLBeter", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
    },
    {
        0 : ["D66", "GroenLinks", "SP", "PartijVoorDeDieren", "VIJFTIGPLUS", "DENK", "BIJ1", "NIDA", "Piratenpartij", "LibertairePartij", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : [],
        2 : ["PVV", "CDA", "Partij van de Arbeid", "ChristenUnie", "SGP", "ForumVoorDemocratie", "JA21", "JONG"],
 
    },
    {
        0 : ["VVD", "PVV", "CDA", "VIJFTIGPLUS", "SGP", "ForumVoorDemocratie", "JA21", "CodeOranje", "JONG", "BBB", "LijstHenkKrol", "Oprecht", "TrotsOpNederland"],
        1 : [],
        2 : ["D66", "ChristenUnie", "NIDA", "Piratenpartij", "Splinter", "NLBeter", "Lijst30", "GroenLinks", "SP", "PartijVandeArbeid", "PartijVoorDeDieren", "DENK", "BIJ1", "JezusLeeft", "UBuntuConnectedFront"],
    },
    {
        0 : ["CDA", "D66", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "VIJFTIGPLUS", "Piratenpartij", "Splinter", "JezusLeeft", "UBuntuConnectedFront", "Lijst30"],
        1 : ["PVV", "GroenLinks", "SGP", "JA21", "LibertairePartij", "Oprecht"],
        2 : ["BIJ1", "CodeOranje", "NIDA", "JONG", "BBB", "NLBeter", "LijstHenkKrol", "TrotsOpNederland"],
    },
    {
        0 : ["PVV", "CDA", "SP", "ChristenUnie", "PartijVoorDeDieren", "SGP", "DENK", "BIJ1", "JA21", "NIDA", "Piratenpartij", "LibertairePartij", "Splinter", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : [],
        2 :["D66", "GroenLinks", "PartijVandeArbeid", "VIJFTIGPLUS", "CodeOranje", "Volt", "JONG", "BBB", "NLBeter"],
    },
    {
        0 : ["D66", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "DENK", "NIDA", "Piratenpartij", "JONG", "UBuntuConnectedFront"],
        1 : [],
        2 :["VVD", "PVV", "CDA", "VIJFTIGPLUS", "SGP", "ForumVoorDemocratie", "JA21", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
    },
    {
        0 : ["PVV", "D66", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "VIJFTIGPLUS", "ForumVoorDemocratie", "JA21", "CodeOranje", "Piratenpartij", "LibertairePartij", "JONG", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : [],
        2 :["VVD", "CDA", "GroenLinks", "SGP", "BIJ1", "Volt", "NIDA"],
 
    },
    {
        0 : ["PVV", "CDA", "D66", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "DENK", "BIJ1", "CodeOranje", "NIDA", "Piratenpartij", "JONG", "Splinter", "NLBeter", "TrotsOpNederland", "UBuntuConnectedFront"],
        1 : ["VVD"],
        2 : ["JA21", "Volt", "LibertairePartij", "BBB", "LijstHenkKrol", "Oprecht", "JezusLeeft", "Lijst30"],
    },
    {
        0 : ["VVD", "PVV", "CDA", "VIJFTIGPLUS", "SGP", "ForumVoorDemocratie", "JA21", "NLBeter", "LijstHenkKrol", "Oprecht", "TrotsOpNederland"],
        1 : [],
        2 : ["D66", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "DENK", "Volt", "NIDA", "Piratenpartij", "LibertairePartij", "JONG", "Splinter", "JezusLeeft", "UBuntuConnectedFront", "Lijst30"],
    },
    {
        0 : ["D66", "GroenLinks", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "SGP", "BIJ1", "JONG", "Splinter", "BBB", "NLBeter", "Oprecht", "JezusLeeft"],
        1 : [],
        2 : ["VVD", "PVV", "CDA", "SP", "VIJFTIGPLUS", "JA21", "CodeOranje", "NIDA", "LibertairePartij", "LijstHenkKrol", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
 
    },
    {
        0 : ["VVD", "PVV", "CDA", "PartijVandeArbeid", "ChristenUnie", "VIJFTIGPLUS", "ForumVoorDemocratie", "CodeOranje", "JONG", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "TrotsOpNederland", "Lijst30"],
        1 : ["LibertairePartij", "JezusLeeft"],
        2 : ["SP", "Partij voor de Dieren", "SGP", "DENK", "BIJ1", "Volt", "NIDA", "Piratenpartij", "UBuntuConnectedFront"],
    },
    {
        0 : ["D66", "GroenLinks", "SP", "PartijVandeArbeid", "PartijVoorDeDieren", "VIJFTIGPLUS", "ForumVoorDemocratie", "CodeOranje", "Volt", "Piratenpartij", "LibertairePartij", "JONG", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : ["VVD"],
        2 : ["PVV", "CDA", "ChristenUnie", "SGP", "DENK", "NIDA", "Oprecht", "JezusLeeft"], 
    },
    {
        0 : ["VVD", "PVV", "CDA", "D66", "GroenLinks", "PartijVandeArbeid", "ChristenUnie", "SGP", "ForumVoorDemocratie", "JA21", "Splinter", "BBB", "NLBeter", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
        1 : ["SP"],
        2 : ["DENK", "BIJ1", "CodeOranje", "Volt", "NIDA", "Piratenpartij", "LibertairePartij", "JONG", "UBuntuConnectedFront"],
    },
    {
        0 : ["LibertairePartij", "JONG", "Splinter", "BBB", "LijstHenkKrol", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30", "LibertairePartij", "JONG", "Splinter", "BBB", "LijstHenkKrol", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : ["PVV", "Volt", "Oprecht"],
        2 : ["ChristenUnie", "SGP", "DENK", "ForumVoorDemocratie", "JA21", "NIDA", "NLBeter", "JezusLeeft"],
    },
    {
        0 : ["VVD", "PVV", "SGP", "ForumVoorDemocratie", "JA21", "CodeOranje", "BBB", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
        1 : ["LibertairePartij", "UBuntuConnectedFront"],
        2 : ["CDA", "D66", "GroenLinks", "SP", "PartijVandeArbeid", "VIJFTIGPLUS", "DENK", "BIJ1", "Volt", "NIDA", "Piratenpartij", "JONG", "Splinter", "LijstHenkKrol"],
    },
    {
        0 : ["PVV", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "VIJFTIGPLUS", "CodeOranje", "NIDA", "Piratenpartij", "JONG", "Splinter", "NLBeter", "Oprecht", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : ["SGP"],
        2 : ["D66", "ForumVoorDemocratie", "JA21", "Volt", "LibertairePartij", "BBB", "LijstHenkKrol", "JezusLeeft"],
    }
    ,
    {
        0 : ["VVD", "PVV", "CDA", "SGP", "ForumVoorDemocratie", "JA21", "CodeOranje", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
        1 : ["ChristenUnie"],
        2 : ["D66", "GroenLinks", "SP", "PartijVandeArbeid", "PartijVoorDeDieren", "VIJFTIGPLUS", "Volt", "NIDA", "Piratenpartij", "JONG", "Splinter", "NLBeter", "LijstHenkKrol", "UBuntuConnectedFront"],
    }
    ,
    {
        0 : ["CDA", "D66", "GroenLinks", "SP", "PartijVandeArbeid", "PartijVoorDeDieren", "VIJFTIGPLUS", "BIJ1", "Volt", "NIDA", "Piratenpartij", "Splinter", "BBB", "JezusLeeft", "TrotsOpNederland", "UBuntuConnectedFront", "Lijst30"],
        1 : ["Oprecht"],
        2 : ["PVV", "VVD", "ChristenUnie", "SGP", "ForumVoorDemocratie", "JA21", "CodeOranje", "LibertairePartij", "JONG", "NLBeter", "LijstHenkKrol"],
    },
    {
        0 : ["D66", "GroenLinks", "SP", "PartijVandeArbeid", "ChristenUnie", "PartijVoorDeDieren", "DENK", "NIDA", "Piratenpartij", "NLBeter", "UBuntuConnectedFront"],
        1 : [],
        2 : ["VVD", "PVV", "CDA", "VIJFTIGPLUS", "SGP", "ForumVoorDemocratie", "JA21", "JONG", "Splinter", "BBB", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
    },
    {
        0 : ["PartijVoorDeDieren", "SGP", "DENK", "ForumVoorDemocratie", "CodeOranje", "NIDA", "Piratenpartij", "BBB", "LijstHenkKrol", "Oprecht", "JezusLeeft", "TrotsOpNederland", "Lijst30"],
        1 : ["JA21"],
        2 : ["VVD", "PVV", "CDA", "D66", "PartijVandeArbeid", "ChristenUnie", "VIJFTIGPLUS", "BIJ1", "Volt", "JONG", "NLBeter", "UBuntuConnectedFront"],
    }
]


// console.log(stellingen)

var extraStappen = [
    {
        titel : 'Welke partijen wil je meenemen in het resultaat?',
        beschrijving : 'Kies alle partijen, alleen de partijen die nu al in de Tweede Kamer zitten, of maak zelf een selectie.',
        aantal : 'Selecteer minimaal 3 partijen'
    },
]

// ANTWOORDEN VAN DE GEBRUIKER
var antwoorden = [];

// HEADER SECTION 
var topBar = document.getElementById('topBar');
var huidigeVraagNummer = document.getElementById('currentQuestionNumber')
var leftArrowIcon = document.querySelector('.fa-arrow-left');
var leftArrow = document.getElementById('leftArrow');

// MAIN CONTENT 
var main = document.querySelector('.main');
var main_content = document.querySelector('.main_content');
var stelling_titel = document.getElementById('stelling_titel');
var stelling_inhoud = document.getElementById('stelling_inhoud');

// FIEXED BUTTONS 
var buttonsContainer = document.querySelector('.buttonsContainer');
var primaryButtons = document.querySelectorAll('.primary_buttons');
var skipButton = document.querySelector('.skipButton');

// EXTRA STELLINGEN AAN HET EINDE 
var extraOnderwerpenContainer = document.querySelector('.extraOnderwerpenContainer');
var extraOnderwerpenMainContent = document.querySelector('.extraOnderwerpenMainContent'); 
var extraOnderwerpenTitel = document.getElementById('extraOnderwerpenTitel');
var checkCounter = document.getElementById('checkCounter');
var nextButton = document.querySelector('.nextButton');
var extraOnderwerpenBeschrijving = document.getElementById('extraOnderwerpenBeschrijving');
var geselecteerdePartijen = document.getElementById('geselecteerdePartijen');

var checkCounterVar = 0;
var clickCounter = 1;

var arrayOfCheckedCheckboxex = []


// FUNCTION FOR THE FIRST STELLING
function eersteStelling (stellingNummer) {
    stelling_titel.innerText = stellingen[stellingNummer].stelling_kop;
    stelling_inhoud.innerHTML = stellingen[stellingNummer].stelling;
    antwoorden = [];
} 
eersteStelling(0);


// FUNCTION FOR DISPLAYING STELLINGEN 
function displayResults (Array, displayAntwoord, extraStappenTitel, extraStappenBeschrijving, displayOfP) {
    extraOnderwerpenContainer.style.display = displayAntwoord;
    extraOnderwerpenTitel.innerText = extraStappenTitel;
    extraOnderwerpenBeschrijving.innerHTML =  extraStappenBeschrijving;
    geselecteerdePartijen.innerHTML = '<span id="checkedAmount">0</span> van de <span id="bold">28</span>'
    checkCounter.style.display = displayOfP;


    var radioContainer = document.createElement("div");
    radioContainer.setAttribute("class", "buttonContainer")
    extraOnderwerpenMainContent.appendChild(radioContainer);

    var container1 = document.createElement("div");
    container1.setAttribute("class", "container1")
    radioContainer.appendChild(container1);

    var container2 = document.createElement("div");
    container2.setAttribute("class", "container2")
    radioContainer.appendChild(container2);
    
    var unselectButtton = document.createElement("button");
    unselectButtton.innerText = "Deselecteer alles"
    unselectButtton.setAttribute("class", "unselectButtton");

    radioContainer.appendChild(unselectButtton)

    unselectButtton.addEventListener("click", function() {
        for(item of checkboxes) {
            item.checked = false
            item.classList.remove("checkedCheckboxes")
        }
        
        inzittendePartijen.checked = false;
        allePartijenSelectie.checked = false;
        checkedAmount.innerText = 0;
        arrayOfCheckedCheckboxex = []
    })

    var labelInzittendePartijen = document.createElement("label");
    labelInzittendePartijen.innerText = "Zittende partijen"
    labelInzittendePartijen.setAttribute("for", "inzittendePartijen")
    labelInzittendePartijen.setAttribute("class", "label")
    container1.appendChild(labelInzittendePartijen)

    var inzittendePartijen = document.createElement("input");
    inzittendePartijen.setAttribute("type", "radio")
    inzittendePartijen.setAttribute("name", "inzittendePartijen")
    inzittendePartijen.setAttribute("class", "typeRadio")
    inzittendePartijen.setAttribute("id", "radio1")
    container1.appendChild(inzittendePartijen)


    var labelAllePartijenSelectie = document.createElement("label");
    labelAllePartijenSelectie.innerText = "Alle partijen"
    labelAllePartijenSelectie.setAttribute("for", "allePartijenSelectie")
    labelAllePartijenSelectie.setAttribute("class", "label")
    container2.appendChild(labelAllePartijenSelectie)

    var allePartijenSelectie = document.createElement("input");
    allePartijenSelectie.setAttribute("type", "radio")
    allePartijenSelectie.setAttribute("name", "allePartijenSelectie")
    allePartijenSelectie.setAttribute("class", "typeRadio")
    inzittendePartijen.setAttribute("id", "radio2")
    container2.appendChild(allePartijenSelectie)

    
    allePartijenSelectie.onchange = function radioCheck1() {
        for(item of checkboxes) {
            item.checked = true;
            item.classList.add("checkedCheckboxes")
        }

        checkedAmount.innerText = 28;
        inzittendePartijen.checked = false;
    }

    inzittendePartijen.onchange = function radioCheck2() {
        for(item of checkboxes) {
            item.checked = false
            item.classList.remove("checkedCheckboxes")
        }
        for(item of checkboxes) {
            for(i = 0; i < zittendePartijenArray.length; i++) {
                if(item.id == zittendePartijenArray[i]) {
                    item.checked = true; 
                    item.classList.add("checkedCheckboxes")
                } 
            }
        }
        checkedAmount.innerText = zittendePartijenArray.length;
        allePartijenSelectie.checked = false;
    }


    var maxNumber = stellingen.length - 2;
    checkCounterVar = 0;

    for(i = 0; i < maxNumber; i++) {
        var divElement = document.createElement('div');
        var checkBoxElement = document.createElement('input');
        var checkboxes = document.querySelectorAll('.checked');

        checkBoxElement.setAttribute('type', 'checkbox');
        checkBoxElement.setAttribute('id', 'checkbox' + i);
        checkBoxElement.setAttribute('value', allePartijenArray[i])
        checkBoxElement.setAttribute('onchange', 'checkForChanges(this)');
        checkBoxElement.classList.add('checked');

        checkCounter.innerHTML = `${checkCounterVar}`;

        divElement.innerText = allePartijenArray[i];
        divElement.classList.add('stellingKop');
        divElement.setAttribute('id', 'div' + i)

        divElement.appendChild(checkBoxElement);
        extraOnderwerpenMainContent.appendChild(divElement);
    } 
}


function checkForChanges(currentCheckBox) {
    var radio2 = document.getElementById("radio2");
    if(currentCheckBox.checked) {
        currentCheckBox.setAttribute("class", "checked checkedCheckboxes")
        if(radio2.checked == true) {
            checkCounterVar = Number(zittendePartijenArray.length);
        } 
        checkCounterVar += 1;
    } else {
        checkCounterVar -= 1;
        item.classList.remove("checkedCheckboxes")
    }
    console.log(checkCounterVar)
    document.getElementById('checkedAmount').innerText = checkCounterVar;
}


function displayStelling (clickCounter, buttonValue, thisButton, style) {
    var stelling_titel_innerText = stellingen[clickCounter].stelling_kop;
    var stelling_inhoud_innerText = stellingen[clickCounter].stelling;

    stelling_titel.innerText = stelling_titel_innerText;
    stelling_inhoud.innerHTML = stelling_inhoud_innerText;
    antwoorden.push(buttonValue);

    main.style.display = style;
} 


// FUNCTION FOR EACAH PRIMARY BUTTON 
var currentWidth = 3.3;

var randomNumber;

var selectieVanPartijen = []
var allePartijen = []

primaryButtons.forEach(function displayItem (item, index, object) {
    item.onclick = function (e) {
        
        if(clickCounter < 30) {
            // GETS THE  VALUE OF THE CURRENT BUTTON 
            var buttonValue = e.target.value;
            var thisButton = e.target;

            displayStelling(clickCounter, buttonValue, thisButton, 'block');

            // console.log(clickCounter)
        
            // CHANGING THE WIDTH OF THE TOPBAR 
            currentWidth += 3.225;
            topBar.style.width = currentWidth + '%';

            // CHANGING THE NUMBER OF THE CURRENT QUESTION
            huidigeVraagNummer.innerText = clickCounter;

            // CALCULATION OF CLICK COUNT
            clickCounter ++;
        }   else if (clickCounter >= 30 ) {
            topBar.style.width = 100 + '%';
            currentQuestionNumber.innerText = 30;

            var buttonValue = e.target.value;
            antwoorden.push(buttonValue);

            main_content.style.display = 'none';
            buttonsContainer.style.display = 'none';
            displayResults ('', 'block', extraStappen[0].titel, extraStappen[0].beschrijving, 'none');

           
            function calculation() {

                var reversed = selectieVanPartijen.reverse();
    
                for(i = 0; i < antwoorden.length; i++) {
                    randomNumber = antwoorden[i]
                }
    
                for(key of partijenMening) {
                    reversed.push(key[randomNumber])
                }

                // EACH ITEM WILL BE PUSHED INSIDE THE allePartijen
                
                var array0 = reversed[0]
                var array1 = reversed[1]

                for(i = 0; i < array0.length; i++) {
                    allePartijen.push(array0[i])
                }

                var array1 = reversed[1]

                for(i = 0; i < array1.length; i++) {
                    allePartijen.push(array1[i])
                }

                var array2 = reversed[2]

                for(i = 0; i < array2.length; i++) {
                    allePartijen.push(array2[i])
                }

                var array3 = reversed[3]

                for(i = 0; i < array3.length; i++) {
                    allePartijen.push(array3[i])
                }

                var array4 = reversed[4]

                for(i = 0; i < array4.length; i++) {
                    allePartijen.push(array4[i])
                }

                var array5 = reversed[5]

                for(i = 0; i < array5.length; i++) {
                    allePartijen.push(array5[i])
                }

                var array6 = reversed[6]

                for(i = 0; i < array6.length; i++) {
                    allePartijen.push(array6[i])
                }

                var array7 = reversed[7]

                for(i = 0; i < array7.length; i++) {
                    allePartijen.push(array7[i])
                }

                var array8 = reversed[8]

                for(i = 0; i < array8.length; i++) {
                    allePartijen.push(array8[i])
                }

                var array9 = reversed[9]

                for(i = 0; i < array9.length; i++) {
                    allePartijen.push(array9[i])
                }

                var array10 = reversed[10]

                for(i = 0; i < array10.length; i++) {
                    allePartijen.push(array10[i])
                }

                var array11 = reversed[11]

                for(i = 0; i < array11.length; i++) {
                    allePartijen.push(array11[i])
                }

                var array12 = reversed[12]

                for(i = 0; i < array12.length; i++) {
                    allePartijen.push(array12[i])
                }

                var array13 = reversed[13]

                for(i = 0; i < array13.length; i++) {
                    allePartijen.push(array13[i])
                }

                var array14 = reversed[14]

                for(i = 0; i < array14.length; i++) {
                    allePartijen.push(array14[i])
                }

                var array15 = reversed[15]

                for(i = 0; i < array15.length; i++) {
                    allePartijen.push(array15[i])
                }

                var array16 = reversed[16]

                for(i = 0; i < array16.length; i++) {
                    allePartijen.push(array16[i])
                }

                var array17 = reversed[17]

                for(i = 0; i < array17.length; i++) {
                    allePartijen.push(array17[i])
                }

                var array18 = reversed[18]

                for(i = 0; i < array18.length; i++) {
                    allePartijen.push(array18[i])
                }

                var array19 = reversed[19]

                for(i = 0; i < array19.length; i++) {
                    allePartijen.push(array19[i])
                }

                var array20 = reversed[20]

                for(i = 0; i < array20.length; i++) {
                    allePartijen.push(array20[i])
                }

                var array21 = reversed[21]

                for(i = 0; i < array21.length; i++) {
                    allePartijen.push(array21[i])
                }

                var array22 = reversed[22]

                for(i = 0; i < array22.length; i++) {
                    allePartijen.push(array22[i])
                }

                var array23 = reversed[23]

                for(i = 0; i < array23.length; i++) {
                    allePartijen.push(array23[i])
                }

                var array24 = reversed[24]

                for(i = 0; i < array24.length; i++) {
                    allePartijen.push(array24[i])
                }

                var array25 = reversed[25]

                for(i = 0; i < array25.length; i++) {
                    allePartijen.push(array25[i])
                }

                var array26 = reversed[26]

                for(i = 0; i < array26.length; i++) {
                    allePartijen.push(array26[i])
                }

                var array27 = reversed[27]

                for(i = 0; i < array27.length; i++) {
                    allePartijen.push(array27[i])
                }

                var array28 = reversed[28]

                for(i = 0; i < array28.length; i++) {
                    allePartijen.push(array28[i])
                }

                var array29 = reversed[29]

                for(i = 0; i < array29.length; i++) {
                    allePartijen.push(array29[i])
                }
            }
            calculation()
            
        }
        
    }
})


// FUNCTION FOR SKIPBUTTON 

skipButton.onclick = function () {
    clickCounter - 1;
    if (clickCounter <= 30 ) {   
        displayStelling(clickCounter, '3', 'block');
        
        // CHANGING THE WIDTH OF THE TOPBAR 
        currentWidth += 3.225;
        topBar.style.width = currentWidth + '%';

        // CHANGING THE NUMBER OF THE CURRENT QUESTION
        huidigeVraagNummer.innerText = clickCounter;

        // CALCULATION OF CLICK COUNT
        clickCounter ++;

        console.log(clickCounter)

    }  else if (clickCounter >= 31) {

        main_content.style.display = 'none';
        buttonsContainer.style.display = 'none';
        displayResults ('', 'block', extraStappen[0].titel, extraStappen[0].beschrijving, 'none');
    }
}


// FUNCTION FOR LEFT ARROW BUTTON 

leftArrowLink.onclick = function () {
    Number(clickCounter -1)

    if(clickCounter >= 2 && clickCounter <= 31) {
        extraOnderwerpenContainer.style.display = 'none';
        main_content.style.display = 'block';
        buttonsContainer.style.display = null;


        for(var i = 0; i < 3; i++) {
            if(primaryButtons[i].style.backgroundColor  == 'rgb(35, 63, 255)'){

                 primaryButtons[0].style.backgroundColor = '#20a84b';
                 primaryButtons[1].style.backgroundColor = '#e7eaeb';
                 primaryButtons[1].style.color = 'black';
                 primaryButtons[2].style.backgroundColor = '#d8173a';
            }
        }

        var range = antwoorden[clickCounter - 2];

        if(range == 0 ||
           range == 1 ||
           range == 2 ) {
            primaryButtons[range].style.backgroundColor = '#233fff';
            primaryButtons[range].style.color = 'white';
        }

        // CHANGING THE WIDTH OF THE TOPBAR 
        currentWidth -= 3.225;
        clickCounter -= 1;
        topBar.style.width = currentWidth + '%';

       if (clickCounter <= 30) {
            displayStelling(clickCounter, '', 'block');
        } 
       
        huidigeVraagNummer.innerHTML = clickCounter;
    }

    if (clickCounter == 1) {
        eersteStelling(0);
        clickCounter = 0;
    }

    if (clickCounter == 0) {
        leftArrowLink.href = '/Challenge-Front-end/stemwijzer.html';
    }
}

var extraOnderwerpenContainer = document.querySelector(".extraOnderwerpenContainer");

nextButton.addEventListener("click", function(){ 
    var checkboxes = document.querySelectorAll('.checked');
    var title = document.createElement("h1");
   
    title.classList.add("title");
    title.innerHTML = "Je resultaat voor de verkiezingen"

    main.appendChild(title)

    for(key of checkboxes) {
        if(key.classList.contains("checkedCheckboxes")) {
            arrayOfCheckedCheckboxex.push(key)
        }
    }
    extraOnderwerpenContainer.style.display = "none"


    var endResult = {};

    for(item of arrayOfCheckedCheckboxex) {
        for(key of allePartijen) {

            if(key == item.value) {
                
                if(endResult[key] == undefined || endResult == null) {
                    endResult[key] = 1;
                } else {
                    endResult[key]++;
                }
            }

        }
    }

    endResultLength = [];

    for(key in endResult) {
        endResultLength.push(key)
    }

    var mainElement = document.createElement("div")
    mainElement.setAttribute("id", "mainElement")
    main.appendChild(mainElement)

    
    var eindPartij = document.createElement("div"); 
    eindPartij.classList.add("eindPartij")
    var barElement = document.createElement("div"); 
    barElement.classList.add("barElement");
    var precentages = document.createElement("div"); 
    precentages.classList.add("precentages");

    
    mainElement.appendChild(eindPartij)
    mainElement.appendChild(barElement)
    mainElement.appendChild(precentages)

    var keyValues = []

    for(key in endResult) {
        keyValues.push(endResult[key] * 4)
    }

    for(i = 0; i < endResultLength.length; i++) {
        var gekozenPartijen = document.createElement("p");
        var barVoorPartijen = document.createElement("div");
        var insideBar = document.createElement("div");
        var precentage = document.createElement("p");

        barVoorPartijen.classList.add("barVoorPartijen")
        gekozenPartijen.classList.add("pVoorPartijen");
        insideBar.classList.add("insideBar");
        precentage.classList.add("precentage");

        gekozenPartijen.innerText = endResultLength[i];
        insideBar.style.width = keyValues[i] + "px"
        precentage.innerText = keyValues[i] + " %";

        barVoorPartijen.appendChild(insideBar)
        eindPartij.appendChild(gekozenPartijen)
        barElement.appendChild(barVoorPartijen)
        precentages.appendChild(precentage)
    }

    


})