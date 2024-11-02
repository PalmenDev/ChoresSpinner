import {useState} from 'react'
import SpinCircle from './Spinner';

function ChoresFactory() {
const [choreName, setChoresName] = useState('');
let [chores, setChores] = useState([]);

let choresId = 0;

const clearAllChores = () => {
   setChores([]);
}

  return (
    <div className='w-full mx-auto justify-center grid mt-12'>
    <div className='flex'>
            <input type='text' placeholder='Add chore' onChange={e => setChoresName(e.target.value)}/> 
            <button type='submit' className='w-32 p-2 bg-green-600' onClick={() => {
                setChores([...chores, {id: choresId++, name: choreName, value: 20}])
            }}> Add Chore </button>
    </div>
        <button className='mt-2 w-32 p-2 bg-red-600' onClick={clearAllChores}> Clear all chores </button>
    <div className='mt-12 bg-slate-700 rounded-lg p-12'>
        <ul>
            {chores.map(chore => (
                <li key={chore.id}>{chore.name}</li>
            ))}
        </ul>
    </div>
        <SpinCircle chores={chores} />
    </div>
  )
}

export default ChoresFactory