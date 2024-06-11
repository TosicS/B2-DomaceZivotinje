document.getElementById('pocetna').addEventListener("click",()=>{
    window.location.href = "../HTML/index.html"
})

document.getElementById('autor').addEventListener("click",()=>{
    window.location.href = "../HTML/Autor.html"
})

document.getElementById('uputstvo').addEventListener("click",()=>{
    window.location.href = "../HTML/Uputstvo.html"
})

function NewWindow(id)
{
    var string;

    if(id=="pas")
        {
            window.alert("Pas\nPas je domaća životinja koja je poznata po svojoj lojalnosti, inteligenciji i sposobnosti da se prilagodi različitim ulogama, uključujući kućnog ljubimca, čuvara i radnog psa.");
            string = "Pas je domaća životinja koja je poznata po svojoj lojalnosti, inteligenciji i sposobnosti da se prilagodi različitim ulogama, uključujući kućnog ljubimca, čuvara i radnog psa.";
            
            let newWindow = window.open('../HTML/Prikaz.html', '_blank', 'width=600,height=400');
            // treba u prikaz.html ispisati naslov i tekst
;
            
        }
    if(id=="patka")
        {
            window.alert("Patka\nPatka je domaća životinja poznata po svojoj sposobnosti plivanja, zahvaljujući svojim perajastim nogama, i često se uzgaja zbog mesa, jaja i perja.");
        }
    if(id=="macka")
        {
            window.alert("Macka\nMačka je domaća životinja poznata po svojoj gracioznosti, nezavisnosti i sposobnosti lova, a često je cenjena kao kućni ljubimac zbog svoje druželjubive prirode i sklonosti ka čišćenju.");
        }
    if(id=="pile")
        {
            window.alert("Pile\nPile je mlada domaća ptica koja se uzgaja prvenstveno zbog mesa i jaja, poznato po svom brzom rastu i potrebi za toplim i sigurnim okruženjem u ranim fazama života.");
        }
    if(id=="krava")
        {
            window.alert("Krava\nKrava je domaća životinja koja se uzgaja zbog mleka, mesa i kože, poznata po svojoj mirnoj prirodi i važnosti u poljoprivredi i stočarstvu.");
        }    
}

var pasAudio = new Audio("../AUDIO/pas.mp4")
var patkaAudio = new Audio("../AUDIO/patka.mp4")
var mackaAudio = new Audio("../AUDIO/macka.mp4")
var pileAudio = new Audio("../AUDIO/pile.mp4")
var kravaAudio = new Audio("../AUDIO/krava.mp4")


function pas()
{
    pasAudio.play();
}

function pasStaje()
{
    pasAudio.pause();
}

function patka()
{
    patkaAudio.play();
}

function patkaStaje()
{
    patkaAudio.pause();
}

function macka()
{
    mackaAudio.play();
}

function mackaStaje()
{
    mackaAudio.pause();
}

function pile()
{
    pileAudio.play();
}

function pileStaje()
{
    pileAudio.pause();
}

function krava()
{
    kravaAudio.play();
}

function kravaStaje()
{
    kravaAudio.pause();
}