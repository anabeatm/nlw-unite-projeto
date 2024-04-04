let participantes = [
  {
    nome: "Khoi",
    email: "khoi@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Ana Silva",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 10, 30),
    dataCheckIn: null
  },
  {
    nome: "João Fernandes",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 15, 45),
    dataCheckIn: new Date(2024, 2, 25, 20, 45)
  },
  {
    nome: "Maria Souza",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 9, 0),
    dataCheckIn: new Date(2024, 2, 25, 18, 30)
  },
  {
    nome: "Pedro Henrique",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 13, 15),
    dataCheckIn: null
  },
  {
    nome: "Lúcia Maria",
    email: "lucia@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 14, 30),
    dataCheckIn: new Date(2024, 2, 25, 20, 30)
  },
  {
    nome: "Carlos Eduardo",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 16, 45),
    dataCheckIn: new Date(2024, 2, 25, 21, 0)
  },
  {
    nome: "Mariana Alvez",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 8, 0),
    dataCheckIn: new Date(2024, 2, 25, 17, 30)
  },
  {
    nome: "Fernando Castelo",
    email: "fernando@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 11, 30),
    dataCheckIn: new Date(2024, 2, 25, 18, 45)
  },
  {
    nome: "Gabriela Drumont",
    email: "gabriela@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 14, 45),
    dataCheckIn: null
  }
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email = "${participante.email}"
      onclick = "fazerCheckIn(event)"
    >
      Confirmar Check-In
    </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repeticao = loop
  for(let participante of participantes) {
    // faca alguma coisa
    output = output + criarNovoParticipante(participante)
  }

  // substituir informacao do HTML
  document.querySelector('tbody').innerHTML = output
} 

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
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
}

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
