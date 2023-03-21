import { Navbar, Welcome, Footer, Loader, Services, Transactions } from './Components'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="welcome-gradiant">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
