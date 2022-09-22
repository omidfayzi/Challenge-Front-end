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


// console.log(stellingen)

var extraStappen = [
    {
        titel : 'Zijn er onderwerpen die je extra belangrijk vindt?',
        beschrijving : '/ 30 stellingen geselecteerd'
    },
    {
        titel : 'Welke partijen wil je meenemen in het resultaat?',
        beschrijving : 'Kies alle partijen, alleen de partijen die nu al in de Tweede Kamer zitten, of maak zelf een selectie. Selecteer minimaal 3 partijen.'
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

var checkCounterVar = 0;
var clickCounter = 1;


// EERSTE STELLING OP HET SCHERM LATEN TONEN
function eersteStelling (stellingNummer) {
    stelling_titel.innerText = stellingen[stellingNummer].stelling_kop;
    stelling_inhoud.innerHTML = stellingen[stellingNummer].stelling;
    antwoorden = [];
} 
eersteStelling(0);


// MAIN FUNCTIE 
function displayResults (Array, displayAntwoord, extraStappenTitel, extraStappenBeschrijving, displayOfP) {
    extraOnderwerpenContainer.style.display = displayAntwoord;
    extraOnderwerpenTitel.innerText = extraStappenTitel;
    extraOnderwerpenBeschrijving.innerHTML = '<span id="checkedAmount">0</span>' + extraStappenBeschrijving;
    checkCounter.style.display = displayOfP;

    var maxNumber = stellingen.length - 1;
    checkCounterVar = 0;

    for(i = 0; i < maxNumber; i++) {
        var divElement = document.createElement('div');
        var checkBoxElement = document.createElement('input');
        var checkboxes = document.querySelectorAll('.checked');

        checkBoxElement.setAttribute('type', 'checkbox');
        checkBoxElement.setAttribute('id', 'checkbox' + i);
        checkBoxElement.setAttribute('onchange', 'checkForChanges(this)');
        checkBoxElement.classList.add('checked');

        checkCounter.innerHTML = `${checkCounterVar}`;

        divElement.innerText = stellingen[i + 1].stelling_kop;
        divElement.classList.add('stellingKop');
        divElement.setAttribute('id', 'div' + i)

        divElement.appendChild(checkBoxElement);
        extraOnderwerpenMainContent.appendChild(divElement);
    } 
    var checkbox21 = document.getElementById('checkbox21');
}

function checkForChanges(currentCheckBox) {
    if(currentCheckBox.checked) {
        checkCounterVar += 1;
    } else {
        checkCounterVar -= 1;
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


// FUNCTIE VOOR ELKE PRIMARY BUTTON 
var currentWidth = 3.3;

primaryButtons.forEach(function displayItem (item, index, object) {
    item.onclick = function (e) {
        
        if(clickCounter < 30) {
            // GETS THE  VALUE OF THE CURRENT BUTTON 
            var buttonValue = e.target.value;
            var thisButton = e.target;

            displayStelling(clickCounter, buttonValue, thisButton, 'block');

            console.log(clickCounter)
        
            // CHANGING THE WIDTH OF THE TOPBAR 
            currentWidth += 3.03;
            topBar.style.width = currentWidth + '%';

            // CHANGING THE NUMBER OF THE CURRENT QUESTION
            huidigeVraagNummer.innerText = clickCounter;

            // CALCULATION OF CLICK COUNT
            clickCounter ++;
        }   else if (clickCounter >= 30 ) {

            var buttonValue = e.target.value;

            antwoorden.push(buttonValue);

            main_content.style.display = 'none';
            buttonsContainer.style.display = 'none';
            displayResults ('', 'block', extraStappen[0].titel, extraStappen[0].beschrijving, 'none');
            
        }
        
    }
})


// FUNCTIE VOOR HET OVERSLAAN BUTTON 

skipButton.onclick = function () {
    clickCounter - 1;
    if (clickCounter <= 30 ) {   
        displayStelling(clickCounter, '3', 'block');
        
        // CHANGING THE WIDTH OF THE TOPBAR 
        currentWidth += 3.03;
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

// FUNCTIE VOOR HET PIJL NAAR RECHTS


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
        currentWidth -= 3.03;
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


nextButton.addEventListener("click", function(){
    displayResults ('', 'block', extraStappen[1].titel, extraStappen[1].beschrijving), 'block';
})