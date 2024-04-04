https://www.fronteditor.dev/nlw-unite
# HTML
*HyperText*
*Markup*
- Tag
- Atributos
*Language*
# CSS
/* Casccading StyleSheet */ 
```css
/* declaracoes */
body {
  background-color: #4F517D;
  color: #DBD2E0;
}

```
# JavaScript
```js
// variaveis
const mensagem = 'Oi, tudo bem?'

// tipos de dados
  // number
  // string

// funcao
alert(mensagem)

// objeto javascript
const participante = {
  nome: "Khoi",
  email: "khoi@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

// array
let participantes = [
  {
    nome: "Khoi",
    email: "khoi@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
]

  // estrutura de repeticao = loop
  for(let participante of participantes) {
    // faca alguma coisa
    output = output + criarNovoParticipante(participante)
  }

    const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  participantes = [participante, ...participantes]
  // ... = espalhar, colocar todas as informacoes anteriores nessa linha

  const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmarcao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmarcao) == false) {
    return
  }
  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}

// verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

