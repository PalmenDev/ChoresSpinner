import ChoresFactory from "./components/choresFactory"

function App() {

  return (
    <>
      <div className="max-w-6xl mx-auto min-h-screen bg-gray-300">
        <h1 className="text-center text-4xl">Chores Spinner</h1>
        <div className="mx-auto"> 
        <ChoresFactory/>
        </div>
      </div>
    </>
  )
}

export default App
