import './App.css'
import { IbanForm } from './IbanForm/IbanForm'

function App() {
  return (
    <>
      <div>
        <div className="border-b border-gray pb-4 mb-2">
          <h1 className="text-3xl font-bold text-gray-900">IBAN Validator</h1>
        </div>
        <h2 className="py-1 text-sm font-semi-bold">This is just a demo application.</h2>
        <p className='py-0 text-xs text-gray-400 mb-5'>IBAN example numbers: DE023-7050-2990-0006-8471-2, DE021-20300-0000-0020-2051, DE021-0010-0100-0068-2010-1</p>
        <IbanForm />
      </div>
    </>
  )
}

export default App
