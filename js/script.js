// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// **Consigli del giorno:**  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Buon lavoro! :muscolo:

// DATI

// INPUT ELEMENTS
const playBtn = document.getElementById("play-btn");

// OUTPUT ELEMENTS
const grid = document.querySelector(".ms_main-container");

// INPUT
// 1 SE l'utente clicca sul pulsante play
playBtn.addEventListener("click", function () {
    console.log(playBtn);
    // ESECUZIONE
    // 2 Si avvia un ciclo che 100 volte:
    for (let i = 1; i <= 100; i++) {
        //  2.1 Crea un elemento HTML con classe .ms_cell che contiene
        const cell = document.createElement("div");
        cell.classList.add("ms_cell");
        
        //  2.2 Un Numero che corrisponde all'indice del ciclo
        cell.innerHTML = i;
        //  2.3 Un event listner per la colorazione in azzurro
        //      2.3.1 SE l'utente clicca sulla casella
        cell.addEventListener("click", function() {
            //      2.3.2 ALLORA viene aggiunta una classe all cella che colori ll background di azzurro
            cell.classList.toggle("bg_cell-touched")
            console.log("clicked cell")
        });
        // OUTPUT
        grid.append(cell);

        //  2.4 Fine iterazione
        console.log("iteration", i);
    }
})
// 3 Fine ciclo

// FUNCTIONS
