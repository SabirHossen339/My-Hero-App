import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Error from '../pages/Root/Error/Error'
import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <Error />
      </main>

      <Footer />
    </div>
  )
}

export default App
