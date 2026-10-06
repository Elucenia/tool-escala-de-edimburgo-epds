<!-- ELUCENIA technical documentation · escala-de-edimburgo-epds · fr · no clinical/professional/rights approval -->

# Échelle de dépression postnatale d’Édimbourg (EPDS)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/escala-de-edimburgo-epds)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### 1. J’ai pu rire et trouver les choses amusantes

`q1`

- `0` — Comme je l’ai toujours fait
- `1` — Moins qu’avant
- `2` — Sans aucun doute, moins qu’avant
- `3` — Pas du tout

### 2. J’ai envisagé l’avenir avec joie

`q2`

- `0` — Oui, comme d’habitude
- `1` — Un peu moins que d’habitude
- `2` — Beaucoup moins que d’habitude
- `3` — Pratiquement jamais

### 3. Je me suis reproché sans raison ce qui allait mal

`q3`

- `0` — Non, jamais
- `1` — Pas souvent
- `2` — Oui, parfois
- `3` — Oui, la plupart du temps

### 4. Je me suis sentie anxieuse ou inquiète sans raison valable

`q4`

- `0` — Non, pas du tout
- `1` — Très rarement
- `2` — Oui, parfois
- `3` — Oui, souvent

### 5. Je me suis sentie effrayée ou paniquée sans raison valable

`q5`

- `0` — Non, jamais
- `1` — Pas souvent
- `2` — Oui, parfois
- `3` — Oui, souvent

### 6. Je me suis sentie dépassée par les tâches et événements du quotidien

`q6`

- `0` — Non, j’arrive à y faire face aussi bien qu’avant
- `1` — Non, la plupart du temps j’arrive à bien y faire face
- `2` — Oui, parfois je n’arrive pas à y faire face aussi bien qu’avant
- `3` — Oui, la plupart du temps je n’arrive pas à bien y faire face

### 7. Je me suis sentie si malheureuse que j’ai eu du mal à dormir

`q7`

- `0` — Non, jamais
- `1` — Pas souvent
- `2` — Oui, parfois
- `3` — Oui, la plupart du temps

### 8. Je me suis sentie triste ou accablée

`q8`

- `0` — Non, pas du tout
- `1` — Pas souvent
- `2` — Oui, souvent
- `3` — Oui, la plupart du temps

### 9. Je me suis sentie si malheureuse que j’ai pleuré

`q9`

- `0` — Non, jamais
- `1` — De temps en temps
- `2` — Oui, souvent
- `3` — Oui, presque tout le temps

### 10. L’idée de me faire du mal m’a traversé l’esprit

`q10`

- `0` — Jamais
- `1` — Très rarement, dernièrement
- `2` — Parfois ces derniers jours
- `3` — Oui, souvent, dernièrement

## Édition de la méthode

EPDS/Cox 1987 : 10 items, 7 jours ; seuil brésilien Pelotas 2007 ≥10 contre original ≥13 ; alerte item 10

## Formule documentée

10 items sur les 7 derniers jours, chacun coté de 0 à 3 points. Dans l’ordre du formulaire original de Cox (1987), les items 3 et 5 à 10 sont cotés en sens inverse ; les items 1, 2 et 4 sont cotés de 0 à 3. Sur cette plateforme, toutes les options sont déjà ordonnées selon leur score de 0 à 3 : additionnez les points des réponses sélectionnées, sans les inverser à nouveau. Score total de 0 à 30.

Seuil brésilien : 10 points (Santos 2007, cohorte de Pelotas : sensibilité 82,6%, spécificité 65,4%). Cox (1987) proposait ≥ 13 pour une dépression probable. Tout score à l’item 10 nécessite une évaluation immédiate du risque suicidaire, quel que soit le total.

## Limites et population

Dépistage des symptômes dépressifs après l’accouchement. La validation de Pelotas a administré le questionnaire trois mois après la naissance et identifié un seuil ≥10 pour le dépistage. Ce contexte ne définit pas une fenêtre universelle et ne valide pas automatiquement l’utilisation dans d’autres populations ou de nouvelles traductions.

## Références

- [Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry, 1987.](https://doi.org/10.1192/bjp.150.6.782)

- [Santos IS et al. Validation of the Edinburgh Postnatal Depression Scale (EPDS) in a sample of mothers from the 2004 Pelotas Birth Cohort Study. Cad Saude Publica, 2007.](https://doi.org/10.1590/S0102-311X2007001100005)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Dépistage négatif (moins de 10 points)


### 2

Dépistage négatif (moins de 10 points)


### 3

Dépistage positif (≥ 10 points) : évaluer une dépression


### 4

Dépression probable (≥ 13 points) : évaluation clinique pour le diagnostic


### 5

Idées d’automutilation (item 10 positif) : évaluation immédiate du risque suicidaire · Dépistage négatif (moins de 10 points)

Ne laissez pas la patiente seule en cas de plan ou d’intention ; activez le réseau de santé mentale. CVV : appelez le 188 (24 heures, gratuit). En cas d’urgence, SAMU 192.

