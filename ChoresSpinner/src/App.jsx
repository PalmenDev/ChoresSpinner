import ChoresFactory from "./components/ChoresFactory"

function App() {

  return (
    <>
      <div className="mx-auto min-h-screen bg-black">
        <div className="pt-28">
          <h1 className="text-center text-4xl text-white mb-8">Chores Spinner</h1>
          <div className="mx-auto bg-gray-500 bg-opacity-40  max-w-7xl h-screen rounded-lg"> 
            <ChoresFactory/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
