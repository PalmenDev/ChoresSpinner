import {useRef, useState} from 'react'
import SpinCircle from './Spinner';
import ListOfChores from './ListOfChores';

function ChoresFactory() {

const [choreName, setChoresName] = useState('');
const inputRef = useRef(null);
let [chores, setChores] = useState([]);

const clearAllChores = () => {
   setChores([]);
}

const clearInputValue = () => {
    inputRef.current.value = '';
}

const handleClick = () => {
    setChores([...chores, {id: chores.length, name: choreName, value: 20}])
    clearInputValue()
}


  return (
    <div className='w-full mx-auto justify-center grid pt-4'>
        <div className='flex'>
            <input type='text' placeholder='Add chore' onChange={e => setChoresName(e.target.value)} ref={inputRef} /> 
            <button className='w-32 p-2 bg-green-600 rounded-e-lg hover:duration-700 hover:bg-green-400' 
            onClick={() => {
                handleClick()
            }}> 
            Add Chore 
            </button>
        </div>
        <button className='mt-2 w-32 p-2 rounded-lg bg-red-600 hover:duration-700 hover:bg-red-400' onClick={clearAllChores}> 
            Clear all chores 
        </button>

        <ListOfChores listOfChores={chores}/>
        <SpinCircle chores={chores} />

        </div>
  )
}

export default ChoresFactory