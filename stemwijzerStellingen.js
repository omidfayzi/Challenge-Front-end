const stellingen = [
    '',
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

// EERSTE STELLING OP HET SCHERM LATEN TONEN
function eersteStelling () {
    var stelling_titel_innerText = stellingen[1].stelling_kop;
    var stelling_inhoud_innerText = stellingen[1].stelling;
    stelling_titel.innerText = stelling_titel_innerText;
    stelling_inhoud.innerHTML = stelling_inhoud_innerText;
} 
eersteStelling();


// MAIN FUNCTIE 
function displayResults (Array, displayAntwoord, extraStappenTitel, extraStappenBeschrijving, displayOfP) {
    extraOnderwerpenContainer.style.display = displayAntwoord;
    extraOnderwerpenTitel.innerText = extraStappenTitel;
    extraOnderwerpenBeschrijving.innerText = extraStappenBeschrijving;
    checkCounter.style.display = displayOfP;
    stellingen.pop();

    var maxNumber = stellingen.length - 1;

    for(i = 0; i < maxNumber; i++) {
        var divElement = document.createElement('div');
        var checkBoxElement = document.createElement('input');

        checkBoxElement.setAttribute('type', 'checkbox');
        checkBoxElement.setAttribute('id', 'checkbox' + i);
        checkBoxElement.classList.add('checked');

        var checkboxes = document.querySelectorAll('.checked');
        var checkCounterVar = 0;

        checkCounter.innerHTML = `${checkCounterVar}`;

        divElement.innerText = stellingen[i + 1].stelling_kop;
        divElement.classList.add('stellingKop');
        divElement.setAttribute('id', 'div' + i)
        divElement.onclick = function (e) {
            var currrentElement =  e.target.id;
            currrentElement = currrentElement.substr(3);
            if(checkboxes[currrentElement].checked == false) {
                checkboxes[currrentElement].checked = true;
                checkCounterVar += 1;

            } else {
                checkboxes[currrentElement].checked = false;
                checkCounterVar -= 1;

            }
        }

        divElement.appendChild(checkBoxElement);
        extraOnderwerpenMainContent.appendChild(divElement);
    }   
    
    console.log(antwoorden)
}


function displayStelling (clikcCounter, buttonValue, thisButton, style) {
    var stelling_titel_innerText = stellingen[clikcCounter].stelling_kop;
    var stelling_inhoud_innerText = stellingen[clikcCounter].stelling;

    stelling_titel.innerText = stelling_titel_innerText;
    stelling_inhoud.innerHTML = stelling_inhoud_innerText;
    antwoorden.push(buttonValue);

    main.style.display = style;
} 

// FUNCTIE VOOR ELKE PRIMARY BUTTON 

var clikcCounter = 2;
var currentWidth = 3.3;

primaryButtons.forEach(function displayItem (item, index, object) {
    item.onclick = function (e) {
        
        if(clikcCounter <= 30) {
            // GETS THE  VALUE OF THE CURRENT BUTTON 
            var buttonValue = e.target.value;
            var thisButton = e.target;

            displayStelling(clikcCounter, buttonValue, thisButton, 'block');
        
            // CHANGING THE WIDTH OF THE TOPBAR 
            currentWidth += 3.03;
            topBar.style.width = currentWidth + '%';

            // CHANGING THE NUMBER OF THE CURRENT QUESTION
            huidigeVraagNummer.innerText = clikcCounter;

            // CALCULATION OF CLICK COUNT
            clikcCounter ++;
        }   else if (clikcCounter >= 31) {
            main_content.style.display = 'none';
            buttonsContainer.style.display = 'none';
            displayResults ('', 'block', extraStappen[0].titel, extraStappen[0].beschrijving, 'none');
        }
        
    }
})


// FUNCTIE VOOR HET OVERSLAAN BUTTON 

skipButton.onclick = function () {

    if (clikcCounter < 31 ) {   
        displayStelling(clikcCounter, '', 'block');
        
        // CHANGING THE WIDTH OF THE TOPBAR 
        currentWidth += 3.03;
        topBar.style.width = currentWidth + '%';

        // CHANGING THE NUMBER OF THE CURRENT QUESTION
        huidigeVraagNummer.innerText = clikcCounter;
        console.log(clikcCounter)

        // CALCULATION OF CLICK COUNT
        clikcCounter ++;
    }   else if (clikcCounter >= 31) {
       console.log('Ga terug om de vragen te beantwoorden')
    }
}

// FUNCTIE VOOR HET PIJL NAAR RECHTS

leftArrowLink.onclick = function () {
    if(clikcCounter > 2 && clikcCounter <= 31) {
        extraOnderwerpenContainer.style.display = 'none';

        var colorOfButton = '';

        for (key of primaryButtons) {
            colorOfButton =  key.value;
        }

        console.log('This is the empty varible ' + colorOfButton)


        if (colorOfButton == 'Eens') {
            console.log('Groen')
        } else if (colorOfButton == 'Oneens') {
            console.log('Rood')
        } else {
            console.log('Geen van Beiden')
        }



        // if(colorOfButton == antwoorden[clikcCounter]) {
        //     console.log(colorOfButton)

        //     console.log('')

        //     console.log(clikcCounter - 1)
        // }

        // CHANGING THE WIDTH OF THE TOPBAR 
        currentWidth -= 3.03;
        clikcCounter -= 1;
        topBar.style.width = currentWidth + '%';

       if (clikcCounter <= 30) {
            displayStelling(clikcCounter, '', 'block');
        }
       
        huidigeVraagNummer.innerHTML = clikcCounter;
    }


    if (clikcCounter <= 0) {
        leftArrowLink.href = '/Challenge-Front-end/stemwijzer.html';
    }
}


nextButton.addEventListener("click", function(){
    displayResults ('', 'block', extraStappen[1].titel, extraStappen[1].beschrijving), 'block';
})











