<!-- ELUCENIA technical documentation · escala-de-edimburgo-epds · pt-BR · no clinical/professional/rights approval -->

# Escala de Depressão Pós-Parto de Edimburgo (EPDS)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/escala-de-edimburgo-epds)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### 1. Eu tenho sido capaz de rir e achar graça das coisas

`q1`

- `0` — Como eu sempre fiz
- `1` — Não tanto quanto antes
- `2` — Sem dúvida, menos que antes
- `3` — De jeito nenhum

### 2. Eu tenho pensado no futuro com alegria

`q2`

- `0` — Sim, como de costume
- `1` — Um pouco menos que de costume
- `2` — Muito menos que de costume
- `3` — Praticamente não

### 3. Eu tenho me culpado sem razão quando as coisas dão errado

`q3`

- `0` — Não, nenhuma vez
- `1` — Não muitas vezes
- `2` — Sim, algumas vezes
- `3` — Sim, na maioria das vezes

### 4. Eu tenho ficado ansiosa ou preocupada sem uma boa razão

`q4`

- `0` — Não, de maneira alguma
- `1` — Pouquíssimas vezes
- `2` — Sim, algumas vezes
- `3` — Sim, muitas vezes

### 5. Eu tenho me sentido assustada ou em pânico sem um bom motivo

`q5`

- `0` — Não, nenhuma vez
- `1` — Não muitas vezes
- `2` — Sim, algumas vezes
- `3` — Sim, muitas vezes

### 6. Eu tenho me sentido esmagada pelas tarefas e acontecimentos do meu dia a dia

`q6`

- `0` — Não, eu consigo lidar com eles tão bem quanto antes
- `1` — Não, na maioria das vezes consigo lidar bem com eles
- `2` — Sim, algumas vezes não consigo lidar bem como antes
- `3` — Sim, na maioria das vezes não consigo lidar bem com eles

### 7. Eu tenho me sentido tão infeliz que tenho tido dificuldade para dormir

`q7`

- `0` — Não, nenhuma vez
- `1` — Não muitas vezes
- `2` — Sim, algumas vezes
- `3` — Sim, na maioria das vezes

### 8. Eu tenho me sentido triste ou arrasada

`q8`

- `0` — Não, de jeito nenhum
- `1` — Não muitas vezes
- `2` — Sim, muitas vezes
- `3` — Sim, na maioria das vezes

### 9. Eu tenho me sentido tão infeliz que tenho chorado

`q9`

- `0` — Não, nenhuma vez
- `1` — De vez em quando
- `2` — Sim, muitas vezes
- `3` — Sim, quase todo o tempo

### 10. A ideia de fazer mal a mim mesma passou por minha cabeça

`q10`

- `0` — Nenhuma vez
- `1` — Pouquíssimas vezes, ultimamente
- `2` — Algumas vezes nos últimos dias
- `3` — Sim, muitas vezes, ultimamente

## Edição do método

EPDS/Cox 1987:10 itens,7 dias; cutoff PTPelotas 2007≥10 vsoriginal≥13; item 10 alarme

## Fórmula documentada

10 itens sobre os últimos 7 dias, cada um de 0 a 3 pontos. Na ordem do formulário original de Cox (1987), os itens 3 e 5 a 10 têm pontuação invertida; os itens 1, 2 e 4 pontuam de 0 a 3. Nesta plataforma, todas as opções já estão ordenadas pela pontuação de 0 a 3: some os pontos das respostas selecionadas, sem inverter novamente. Total de 0 a 30.

Ponto de corte de rastreamento no Brasil: 10 pontos (Santos 2007, coorte de Pelotas: sensibilidade 82,6%, especificidade 65,4%). Cox (1987) propôs ≥ 13 para provável depressão. Qualquer pontuação no item 10 exige avaliação imediata do risco de suicídio, independentemente do total.

## Limites e população

Rastreamento de sintomas depressivos após o parto. A validação de Pelotas aplicou o questionário três meses após o nascimento e encontrou corte ≥10 para rastreamento. Esse contexto não define uma janela universal e não valida automaticamente uso em outras populações ou novas traduções.

## Referências

- [Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry, 1987.](https://doi.org/10.1192/bjp.150.6.782)

- [Santos IS et al. Validation of the Edinburgh Postnatal Depression Scale (EPDS) in a sample of mothers from the 2004 Pelotas Birth Cohort Study. Cad Saude Publica, 2007.](https://doi.org/10.1590/S0102-311X2007001100005)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
