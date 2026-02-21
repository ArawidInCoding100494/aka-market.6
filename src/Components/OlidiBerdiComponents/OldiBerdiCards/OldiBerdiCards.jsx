import React from 'react'
import {UseCollection} from "../../../Hooks/UseCollection"

const OldiBerdiCards = () => {
    const {data: brends} = UseCollection("brends")

  return (
    <div>
        {/* <div className='brands'>
            {brends && brends.map((brend) => (
                <div key={brend.id}
                className='brendTitle btn w-[85%] lg:w-[50%] p-2 font-bold text-2xl lg:text-xl'
                >
                    <h2>{brend.bName}</h2>
                </div>
            ))}
        </div> */}



        <div></div>
    </div>
  )
}

export default OldiBerdiCards