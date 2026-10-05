<!-- ELUCENIA technical documentation · escala-de-edimburgo-epds · en · no clinical/professional/rights approval -->

# Edinburgh Postnatal Depression Scale (EPDS)

[conditions, sources and permissions](https://elucenia.org/en/tools/escala-de-edimburgo-epds)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### 1. I have been able to laugh and find things amusing

`q1`

- `0` — As I always have
- `1` — Not as much as before
- `2` — Definitely less than before
- `3` — Not at all

### 2. I have looked forward to the future with enjoyment

`q2`

- `0` — Yes, as usual
- `1` — A little less than usual
- `2` — Much less than usual
- `3` — Hardly ever

### 3. I have blamed myself unnecessarily when things went wrong

`q3`

- `0` — No, never
- `1` — Not often
- `2` — Yes, sometimes
- `3` — Yes, most of the time

### 4. I have felt anxious or worried without a good reason

`q4`

- `0` — No, not at all
- `1` — Very rarely
- `2` — Yes, sometimes
- `3` — Yes, often

### 5. I have felt frightened or panicky without a good reason

`q5`

- `0` — No, never
- `1` — Not often
- `2` — Yes, sometimes
- `3` — Yes, often

### 6. I have felt overwhelmed by everyday tasks and events

`q6`

- `0` — No, I can cope with them as well as before
- `1` — No, most of the time I can cope well with them
- `2` — Yes, sometimes I cannot cope as well as before
- `3` — Yes, most of the time I cannot cope well with them

### 7. I have felt so unhappy that I have had difficulty sleeping

`q7`

- `0` — No, never
- `1` — Not often
- `2` — Yes, sometimes
- `3` — Yes, most of the time

### 8. I have felt sad or miserable

`q8`

- `0` — No, not at all
- `1` — Not often
- `2` — Yes, often
- `3` — Yes, most of the time

### 9. I have felt so unhappy that I have cried

`q9`

- `0` — No, never
- `1` — Occasionally
- `2` — Yes, often
- `3` — Yes, almost all the time

### 10. The thought of harming myself has occurred to me

`q10`

- `0` — Never
- `1` — Very rarely, recently
- `2` — Sometimes in the past few days
- `3` — Yes, often, recently

## Method edition

EPDS/Cox 1987: 10 items, 7 days; Brazilian Pelotas 2007 cutoff ≥10 versus original ≥13; item 10 alert

## Documented formula

10 items about the past 7 days, each scored from 0 to 3 points. In the order of Cox’s original form (1987), items 3 and 5 to 10 are reverse scored; items 1, 2 and 4 are scored from 0 to 3. On this platform, all options are already ordered by their score from 0 to 3: add the points for the selected responses without reversing them again. Total score from 0 to 30.

Brazilian screening cutoff: 10 points (Santos 2007, Pelotas cohort: sensitivity 82.6%, specificity 65.4%). Cox (1987) proposed ≥ 13 for probable depression. Any score on item 10 requires immediate suicide-risk assessment, irrespective of total.

## Limits and population

Screening for depressive symptoms after childbirth. The Pelotas validation administered the questionnaire three months after birth and found a ≥10 screening cutoff. That context does not define a universal window or automatically validate use in other populations or new translations.

## References

- [Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry, 1987.](https://doi.org/10.1192/bjp.150.6.782)

- [Santos IS et al. Validation of the Edinburgh Postnatal Depression Scale (EPDS) in a sample of mothers from the 2004 Pelotas Birth Cohort Study. Cad Saude Publica, 2007.](https://doi.org/10.1590/S0102-311X2007001100005)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
