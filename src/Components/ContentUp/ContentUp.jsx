import { useState } from 'react'
import Searching from "../../Components/Searching/Searching"


const ContentUp = ({title}) => {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div>
    <div className="ContentUp flex items-center justify-between p-2">
      <div className="search">
        <Searching
        value={searchTerm}
        onchange={setSearchTerm} />
      </div>
        
        <div className="baseUp__text">
          <h4 className="capitalize text-2xl font-bold">{title}</h4>
        </div>

        
      </div>
    </div>
  )
}

export default ContentUp