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


  return (
    <div className='w-full mx-auto justify-center grid mt-12'>
        <div className='flex'>
            <input type='text' placeholder='Add chore' onChange={e => setChoresName(e.target.value)} ref={inputRef} /> 
            <button type='submit' className='w-32 p-2 bg-green-600' onClick={() => {
                setChores([...chores, {id: chores.length, name: choreName, value: 20}])
                clearInputValue()
                }}> Add Chore 
            </button>
        </div>
        <button className='mt-2 w-32 p-2 bg-red-600' onClick={clearAllChores}> 
            Clear all chores 
        </button>

        <ListOfChores listOfChores={chores}/>
        <SpinCircle chores={chores} />

        </div>
  )
}

export default ChoresFactory