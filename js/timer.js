// esse comando 'export' serve para exportar as funções ou comandos desta pasta outra pasta que vai usá-los, no caso a pasta 'index'
export default function Timer({
  minutesDisplay, // nesta parte, usada para passar os parametros da função, neste caso,
  secondsDisplay // está passando as 'dependencias' em forma de objetos. 'Dependencias'
  // são comandos, variáveis ou funções que são executados nesta pasta, mas
  // que estão em outra pasta.
}) {
  let timerTimeOut
  // esta função atualiza o display de relogio da tela, ela recebe os valores de minutos e segundos como parametros
  function updateDisplay(minutes, seconds) {
    // a função 'textContent' pega o texto da classe '.minutes' e '.seconds' (que estão declaradas dentro das variáveis 'minutesDisplay' e 'secondsDisplay')
    // a função 'padStart' preenche o texto com '0' e tamanho 2
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(0, 0)
    clearTimeout(timerTimeOut)
  }

  function hold() {
    clearTimeout(timerTimeOut) //a função nativa JS 'clearTimeout' faz parar(stop) a função 'setTimeOut's
  }

  // esta função é para fazer uma contagem regressiva do tempo optado pelo usuário
  function countdow() {
    // a função 'setTimeout' é nativa do JS. Ela tem 2 parametros. O primeiro é uma função. O segundo é um tempo (em milisegundos) pra executar a função. No caso abaixo foi colocado dentro da função comandos para atualizar o display do relogio  a cada 1000 milisegundos ou 1 segundo
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        reset()
        return
      }
      // nesta linha verifica se o segundo é menor que '0', se for subtrai 1 do minuto e iguala o segundo a 60
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      // nesta linha é subtraido em 1 o segundo e atualizado no display atraves da função 'up dateTimerDisplay'
      updateDisplay(minutes, String(seconds - 1))
      // nesta linha é chamada a função 'countdow' dentro dela mesma (recursividade) para criar um loop até se criar um comando para sair (linha 38-return)
      countdow()
    }, 1000)
  }

  return {
    // esta função retorna as funções que estão dentro dela como um objeto{}
    countdow, // aqui é um dos objeto. Como ele tem o mesmo nome da função, o JS entende que ele é um objeto com as mesmas propriedades da função (short-hand)
    reset, // ídem
    updateDisplay,
    hold
  }
}
