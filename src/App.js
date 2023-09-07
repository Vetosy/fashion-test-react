import Brands from './components/brands/brands'
import Header from './components/header/header'
import Hero from './components/hero/hero'

function App() {
  return (
    <div className="App">
      <div className="site-container">
        <Header />
        <main className="main">
          <Hero />
          <Brands />
        </main>
      </div>
    </div>
  )
}

export default App
