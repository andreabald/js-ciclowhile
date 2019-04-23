var cognomi = ["rossi","verdi","bianchi","neri","violi"];

var cognome_utente = prompt("Qual è il tuo cognome?");
alert("Cognome inserito correttamente nella lista");

cognomi.push(cognome_utente);
cognomi.sort();

var i = 0;
var posizione = 0;
while (i < cognomi.length) {
  console.log(cognomi[i]);
  if (cognomi[i] == cognome_utente)  {
    posizione = i + 1;
  }
  i++;
}

alert("Il tuo cognome si trova nella posizione " + posizione);
