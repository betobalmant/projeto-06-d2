// o comando 'import' está recebendo as funções ou comandos que estão em outras pastas para serem usados nesta pasta
import Timer from './timer.js'
import Events from './events.js'
import { minutesDisplay, secondsDisplay } from './elements.js'
const timer = Timer({
  // a variável 'timer' recebe, em forma de objeto{}, os parametros da função importada
  minutesDisplay, // 'Timer'. Como eles tem o mesmo nome das variáveis desta pasta,
  secondsDisplay // automaticamente (short-hand), são inicializados com os mesmos
  // valores. Desta forma, essas variáveis serão reconhecidas na pasta de
  // de onde vieram (Dependências)
})

Events({ timer })
