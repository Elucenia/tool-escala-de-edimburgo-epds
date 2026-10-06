<!-- ELUCENIA technical documentation · escala-de-edimburgo-epds · it · no clinical/professional/rights approval -->

# Scala della depressione postnatale di Edimburgo (EPDS)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/escala-de-edimburgo-epds)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### 1. Sono riuscita a ridere e a trovare divertenti le cose

`q1`

- `0` — Come ho sempre fatto
- `1` — Non quanto prima
- `2` — Senza dubbio, meno di prima
- `3` — Per niente

### 2. Ho pensato al futuro con gioia

`q2`

- `0` — Sì, come al solito
- `1` — Un po’ meno del solito
- `2` — Molto meno del solito
- `3` — Praticamente mai

### 3. Mi sono incolpato senza motivo quando le cose sono andate male

`q3`

- `0` — No, mai
- `1` — Non spesso
- `2` — Sì, qualche volta
- `3` — Sì, la maggior parte delle volte

### 4. Mi sono sentita ansiosa o preoccupata senza un valido motivo

`q4`

- `0` — No, per niente
- `1` — Molto raramente
- `2` — Sì, qualche volta
- `3` — Sì, spesso

### 5. Mi sono sentita spaventata o in preda al panico senza un valido motivo

`q5`

- `0` — No, mai
- `1` — Non spesso
- `2` — Sì, qualche volta
- `3` — Sì, spesso

### 6. Mi sono sentita sopraffatta dai compiti e dagli eventi quotidiani

`q6`

- `0` — No, riesco ad affrontarli bene come prima
- `1` — No, nella maggior parte dei casi riesco ad affrontarli bene
- `2` — Sì, a volte non riesco ad affrontarli bene come prima
- `3` — Sì, nella maggior parte dei casi non riesco ad affrontarli bene

### 7. Mi sono sentita così infelice da avere difficoltà a dormire

`q7`

- `0` — No, mai
- `1` — Non spesso
- `2` — Sì, qualche volta
- `3` — Sì, la maggior parte delle volte

### 8. Mi sono sentita triste o abbattuta

`q8`

- `0` — No, per niente
- `1` — Non spesso
- `2` — Sì, spesso
- `3` — Sì, la maggior parte delle volte

### 9. Mi sono sentita così infelice da piangere

`q9`

- `0` — No, mai
- `1` — Di tanto in tanto
- `2` — Sì, spesso
- `3` — Sì, quasi sempre

### 10. Mi è passato per la mente il pensiero di farmi del male

`q10`

- `0` — Mai
- `1` — Molto raramente, ultimamente
- `2` — Qualche volta negli ultimi giorni
- `3` — Sì, spesso, ultimamente

## Edizione del metodo

EPDS/Cox 1987: 10 item, 7 giorni; soglia brasiliana Pelotas 2007 ≥10 contro originale ≥13; allerta item 10

## Formula documentata

10 item sugli ultimi 7 giorni, ciascuno con un punteggio da 0 a 3. Nell’ordine del modulo originale di Cox (1987), gli item 3 e dal 5 al 10 hanno un punteggio invertito; gli item 1, 2 e 4 hanno un punteggio da 0 a 3. Su questa piattaforma, tutte le opzioni sono già ordinate secondo il punteggio da 0 a 3: sommare i punti delle risposte selezionate, senza invertirli nuovamente. Punteggio totale da 0 a 30.

Soglia brasiliana: 10 punti (Santos 2007, coorte Pelotas: sensibilità 82,6%, specificità 65,4%). Cox (1987) propose ≥ 13 per probabile depressione. Ogni punteggio all’item 10 richiede immediata valutazione del rischio suicidario, indipendentemente dal totale.

## Limiti e popolazione

Screening dei sintomi depressivi dopo il parto. La validazione di Pelotas ha somministrato il questionario tre mesi dopo la nascita e ha riscontrato una soglia ≥10 per lo screening. Tale contesto non definisce una finestra universale e non valida automaticamente l’uso in altre popolazioni o nuove traduzioni.

## Riferimenti

- [Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry, 1987.](https://doi.org/10.1192/bjp.150.6.782)

- [Santos IS et al. Validation of the Edinburgh Postnatal Depression Scale (EPDS) in a sample of mothers from the 2004 Pelotas Birth Cohort Study. Cad Saude Publica, 2007.](https://doi.org/10.1590/S0102-311X2007001100005)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Screening negativo (meno di 10 punti)


### 2

Screening negativo (meno di 10 punti)


### 3

Screening positivo (≥ 10 punti): valutare la depressione


### 4

Depressione probabile (≥ 13 punti): valutazione clinica per la diagnosi


### 5

Pensieri di autolesionismo (item 10 positivo): valutazione immediata del rischio di suicidio · Screening negativo (meno di 10 punti)

Non lasciare sola la paziente se vi è un piano o un’intenzione; attivare la rete di salute mentale. CVV: chiamare il 188 (24 ore, gratuito). In emergenza, SAMU 192.

