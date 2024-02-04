import { useState } from 'react'
// componentes
import Inputcustom from './components/Inputcustom'
import ButtonCustom from './components/ButtonCustom'

export default function App() {
  // estados para manejar los inputs
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')

  // controlamos el resultado
  const [resultado, setResultado] = useState('')
  const [showResult, setShowResult] = useState(false)

  // funcion de las operaciones
  const operacion = (type) => {
    // validamos los datos
    if (n1 == '' || n2 == '') {
      alert('Por favor rellena los datos para la operacion')
      return
    }

    setShowResult(true)
    // convertimos los datos a numeros
    let N1 = parseFloat(n1)
    let N2 = parseFloat(n2)

    // logica para cada caso
    switch (type) {
      case 'suma':
        setResultado(N1 + N2)
        break
      case 'resta':
        setResultado(N1 - N2)
        break
      case 'multiplicacion':
        setResultado(N1 * N2)
        break
      case 'division':
        setResultado(N1 / N2)
        break
      default:
        break
    }
  }

  return (
    <>
      <div className='min-h-screen w-screen bg-slate-300 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-extrabold mb-10 text-center'>Caluladora App</h1>
        <div className='flex justify-center gap-10'>
          <div className='flex flex-col gap-2 items-center'>
            <p>Ingresa dos numeros</p>
            <Inputcustom
              value={n1}
              onChange={(e) => setN1(e.target.value)}
            />
            <Inputcustom
              value={n2}
              onChange={(e) => setN2(e.target.value)}
            />
            <ButtonCustom
              title='Sumar'
              className='bg-blue-600'
              onCLik={() => operacion('suma')}
            />
            <ButtonCustom
              title='Restar'
              className='bg-green-600'
              onCLik={() => operacion('resta')}
            />
            <ButtonCustom
              title='Multiplicar'
              className='bg-red-600'
              onCLik={() => operacion('multiplicacion')}
            />
            <ButtonCustom
              title='Dividir'
              className='bg-purple-600'
              onCLik={() => operacion('division')}
            />
          </div>
          {
            showResult && (
              <>
                <div className='flex flex-col gap-2'>
                  <p>Resultado</p>
                  <Inputcustom
                    value={resultado}
                  />
                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}


