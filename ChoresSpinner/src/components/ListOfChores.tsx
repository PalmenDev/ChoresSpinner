import React from "react"

interface Props {
  listOfChores: Array<Chore>
}

interface Chore {
  id: number,
  name: string
}

const spinnerColors = [
  "#8f7f8f", "#f97066", "#2e90fa", "#fdb022", "#ee46bc", "#854CFF"
];

export default function ListOfChores({listOfChores} : Props ) {
    return (
        <div>
          {listOfChores.length > 0 && 
            <div className='mt-12 rounded-lg'>
              <ul>
                {listOfChores.map(chore => (
                  <li className='flex gap-2 pt-4' key={chore.id}> 
                  <p style={{backgroundColor: spinnerColors[chore.id], width: "8px", height: "20px"}}>
                  </p>
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
