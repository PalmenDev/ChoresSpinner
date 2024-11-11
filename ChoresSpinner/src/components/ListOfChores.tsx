import React from "react"

interface Props {
  listOfChores: Array<Chore>
}

interface Chore {
  id: number,
  name: string
}

export default function ListOfChores({listOfChores} : Props ) {
    return (
        <div>
          {listOfChores.length > 0 && 
            <div className='mt-12 rounded-lg'>
              <ul>
                {listOfChores.map(chore => (
                  <li className='flex gap-2' key={chore.id}> 
                    <p> 
                      {chore.name} 
                    </p> 
                 </li>
                ))}
              </ul>
           </div>
          }
        </div>
        )
}
