import React, { useState } from 'react'
import ContentUp from '../../Components/ContentUp/ContentUp'
import SellProductCard from '../../Components/TradeComponents/SellProductCard/SellProductCard'

const DayTrade = () => {
           const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div>
      <div className=" w-full lg:w-[50%]">
      <ContentUp 
      title={"savdo"}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
       />
      </div>
      <div>
        <SellProductCard searchTerm={searchTerm}/>

      </div>
    </div>
  )
}

export default DayTrade