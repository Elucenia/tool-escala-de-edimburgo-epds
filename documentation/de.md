<!-- ELUCENIA technical documentation · escala-de-edimburgo-epds · de · no clinical/professional/rights approval -->

# Edinburgh-Postnatal-Depressionsskala (EPDS)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/escala-de-edimburgo-epds)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### 1. Ich konnte lachen und Dinge lustig finden

`q1`

- `0` — Wie ich es immer getan habe
- `1` — Nicht so sehr wie früher
- `2` — Ganz bestimmt weniger als früher
- `3` — Überhaupt nicht

### 2. Ich habe mit Freude an die Zukunft gedacht

`q2`

- `0` — Ja, wie gewohnt
- `1` — Etwas weniger als gewohnt
- `2` — Viel weniger als gewohnt
- `3` — Praktisch nie

### 3. Ich habe mir ohne Grund die Schuld gegeben, wenn etwas schiefging

`q3`

- `0` — Nein, nie
- `1` — Nicht oft
- `2` — Ja, manchmal
- `3` — Ja, meistens

### 4. Ich war ohne triftigen Grund ängstlich oder besorgt

`q4`

- `0` — Nein, überhaupt nicht
- `1` — Sehr selten
- `2` — Ja, manchmal
- `3` — Ja, oft

### 5. Ich fühlte mich ohne triftigen Grund erschrocken oder panisch

`q5`

- `0` — Nein, nie
- `1` — Nicht oft
- `2` — Ja, manchmal
- `3` — Ja, oft

### 6. Ich fühlte mich von den Aufgaben und Ereignissen des Alltags überwältigt

`q6`

- `0` — Nein, ich kann damit so gut wie früher umgehen
- `1` — Nein, meistens kann ich gut damit umgehen
- `2` — Ja, manchmal kann ich nicht so gut damit umgehen wie früher
- `3` — Ja, meistens kann ich nicht gut damit umgehen

### 7. Ich fühlte mich so unglücklich, dass ich Schwierigkeiten beim Schlafen hatte

`q7`

- `0` — Nein, nie
- `1` — Nicht oft
- `2` — Ja, manchmal
- `3` — Ja, meistens

### 8. Ich fühlte mich traurig oder niedergeschlagen

`q8`

- `0` — Nein, überhaupt nicht
- `1` — Nicht oft
- `2` — Ja, oft
- `3` — Ja, meistens

### 9. Ich fühlte mich so unglücklich, dass ich geweint habe

`q9`

- `0` — Nein, nie
- `1` — Gelegentlich
- `2` — Ja, oft
- `3` — Ja, fast die ganze Zeit

### 10. Der Gedanke, mir selbst etwas anzutun, ist mir gekommen

`q10`

- `0` — Nie
- `1` — In letzter Zeit sehr selten
- `2` — Manchmal in den letzten Tagen
- `3` — Ja, in letzter Zeit oft

## Fassung der Methode

EPDS/Cox 1987: 10 Items, 7 Tage; brasilianisch Pelotas 2007 ≥10 gegenüber Original ≥13; Alarm Item 10

## Dokumentierte Formel

10 Items zu den vergangenen 7 Tagen, jeweils mit 0 bis 3 Punkten bewertet. In der Reihenfolge des Originalfragebogens von Cox (1987) werden die Items 3 und 5 bis 10 umgekehrt bewertet; die Items 1, 2 und 4 werden mit 0 bis 3 Punkten bewertet. Auf dieser Plattform sind alle Optionen bereits nach ihrer Punktzahl von 0 bis 3 geordnet: Addieren Sie die Punkte der ausgewählten Antworten, ohne sie erneut umzukehren. Gesamtpunktzahl von 0 bis 30.

Brasilianischer Screening-Grenzwert: 10 Punkte (Santos 2007, Pelotas-Kohorte: Sensitivität 82,6%, Spezifität 65,4%). Cox (1987) schlug ≥ 13 für wahrscheinliche Depression vor. Jede Punktzahl bei Item 10 erfordert sofortige Suizidrisikobeurteilung, unabhängig von Gesamtpunkten.

## Grenzen und Population

Screening auf depressive Symptome nach der Geburt. Die Validierung in Pelotas setzte den Fragebogen drei Monate nach der Geburt ein und fand eine Screeningschwelle ≥10. Dieser Kontext legt kein universelles Zeitfenster fest und validiert nicht automatisch die Anwendung in anderen Populationen oder neue Übersetzungen.

## Referenzen

- [Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry, 1987.](https://doi.org/10.1192/bjp.150.6.782)

- [Santos IS et al. Validation of the Edinburgh Postnatal Depression Scale (EPDS) in a sample of mothers from the 2004 Pelotas Birth Cohort Study. Cad Saude Publica, 2007.](https://doi.org/10.1590/S0102-311X2007001100005)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
