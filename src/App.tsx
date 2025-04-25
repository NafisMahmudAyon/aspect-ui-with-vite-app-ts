import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AspectUILogo from '/aspect-ui.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='inline-flex gap-4 '>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.npmjs.com/package/aspect-ui" target="_blank">
          <img src={AspectUILogo} className="logo aspect-ui" alt="Aspect UI logo" />
        </a>
      </div>
      <h1 className=''>Vite + React + Aspect UI</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
