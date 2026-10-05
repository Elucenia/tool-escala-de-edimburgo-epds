<!-- ELUCENIA technical documentation · escala-de-edimburgo-epds · es · no clinical/professional/rights approval -->

# Escala de depresión posparto de Edimburgo (EPDS)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/escala-de-edimburgo-epds)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### 1. He podido reírme y encontrar las cosas divertidas

`q1`

- `0` — Como siempre lo he hecho
- `1` — No tanto como antes
- `2` — Sin duda, menos que antes
- `3` — En absoluto

### 2. He pensado en el futuro con ilusión

`q2`

- `0` — Sí, como de costumbre
- `1` — Un poco menos que de costumbre
- `2` — Mucho menos que de costumbre
- `3` — Prácticamente nunca

### 3. Me he culpado sin razón cuando las cosas han salido mal

`q3`

- `0` — No, ninguna vez
- `1` — No muchas veces
- `2` — Sí, algunas veces
- `3` — Sí, la mayoría de las veces

### 4. Me he sentido ansiosa o preocupada sin una buena razón

`q4`

- `0` — No, en absoluto
- `1` — Muy pocas veces
- `2` — Sí, algunas veces
- `3` — Sí, muchas veces

### 5. Me he sentido asustada o en pánico sin un buen motivo

`q5`

- `0` — No, ninguna vez
- `1` — No muchas veces
- `2` — Sí, algunas veces
- `3` — Sí, muchas veces

### 6. Me he sentido abrumada por las tareas y acontecimientos cotidianos

`q6`

- `0` — No, puedo afrontarlos tan bien como antes
- `1` — No, la mayoría de las veces puedo afrontarlos bien
- `2` — Sí, a veces no puedo afrontarlos tan bien como antes
- `3` — Sí, la mayoría de las veces no puedo afrontarlos bien

### 7. Me he sentido tan infeliz que he tenido dificultades para dormir

`q7`

- `0` — No, ninguna vez
- `1` — No muchas veces
- `2` — Sí, algunas veces
- `3` — Sí, la mayoría de las veces

### 8. Me he sentido triste o abatida

`q8`

- `0` — No, en absoluto
- `1` — No muchas veces
- `2` — Sí, muchas veces
- `3` — Sí, la mayoría de las veces

### 9. Me he sentido tan infeliz que he llorado

`q9`

- `0` — No, ninguna vez
- `1` — De vez en cuando
- `2` — Sí, muchas veces
- `3` — Sí, casi todo el tiempo

### 10. Se me ha pasado por la cabeza la idea de hacerme daño

`q10`

- `0` — Nunca
- `1` — Muy pocas veces, últimamente
- `2` — Algunas veces en los últimos días
- `3` — Sí, muchas veces, últimamente

## Edición del método

EPDS/Cox 1987: 10 ítems, 7 días; corte brasileño Pelotas 2007 ≥10 frente al original ≥13; alarma ítem 10

## Fórmula documentada

10 ítems sobre los últimos 7 días, cada uno con una puntuación de 0 a 3. En el orden del formulario original de Cox (1987), los ítems 3 y del 5 al 10 tienen puntuación inversa; los ítems 1, 2 y 4 se puntúan de 0 a 3. En esta plataforma, todas las opciones ya están ordenadas por su puntuación de 0 a 3: sume los puntos de las respuestas seleccionadas, sin invertirlos de nuevo. Puntuación total de 0 a 30.

Corte brasileño: 10 puntos (Santos 2007, cohorte de Pelotas: sensibilidad 82,6%, especificidad 65,4%). Cox (1987) propuso ≥ 13 para probable depresión. Cualquier puntuación en el ítem 10 exige evaluación inmediata de riesgo suicida, sin importar total.

## Límites y población

Cribado de síntomas depresivos después del parto. La validación de Pelotas aplicó el cuestionario tres meses después del nacimiento y encontró un punto de corte ≥10 para el cribado. Este contexto no define una ventana universal ni valida automáticamente el uso en otras poblaciones o nuevas traducciones.

## Referencias

- [Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry, 1987.](https://doi.org/10.1192/bjp.150.6.782)

- [Santos IS et al. Validation of the Edinburgh Postnatal Depression Scale (EPDS) in a sample of mothers from the 2004 Pelotas Birth Cohort Study. Cad Saude Publica, 2007.](https://doi.org/10.1590/S0102-311X2007001100005)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
