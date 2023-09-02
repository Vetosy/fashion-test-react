import Header from './components/header/header'
import Hero from './components/hero/hero'

function App() {
  return (
    <div className="App">
      <div className="site-container">
        <Header />
        <main className="main">
          <Hero />
        </main>
      </div>
    </div>
  )
}

export default App
