<!-- 
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
 Consigli del giorno:
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Scriviamo sempre prima la scaletta in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore
BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, append, ecc)
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
 -->

# FizzBuzz
## Operazioni preliminari
- Collego l'elemento nel DOM che conterrà gli elementi
- Creo una variabile `divisibileBy3`.
- Creo una variabile `divisibileBy5`.

## Svolgimento
-  **PER OGNI CICLO** da 1 a 100 fai una verifica su una variabile
  - **SE** la variabile è divisibile per 3, stampa su console la parola *Fizz*.
  - **ALTRIMENTI SE** la variabile è divisibile per 5, stampa su console la parola *Buzz*.
  - **ALTRIMENTI SE** la variabile è divisibile sia per 3 che per 5, stampa la parola *FizzBuzz*.
  - **ALTRIMENTI** Stampa solo il numero.
## BONUS
- Aggiungi nel DOM il risultato anziché stamparlo su console.
- Stilizzare il risultato differentemente se numero, fizz, buzz o fizzBuzz.