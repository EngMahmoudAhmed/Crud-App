import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

  return (
    <>
      <Navbar />
      <div className="container d-flex">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
