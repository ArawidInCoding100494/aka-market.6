import ContentUp from "../../Components/ContentUp/ContentUp";
import BaseCards from "../../Components/BaseCards/BaseCards";
import { useState } from "react";
import CreateBrand from "../../Components/CreateBrand/CreateBrand";
import Modal from "../../Components/Modal/Modal";
import { UseCollection } from "../../Hooks/UseCollection";

const MainBase = () => {
         const {data: brends} = UseCollection("brends")
         const [searchTerm, setSearchTerm] = useState("");
         const [openBrendModal, setOpenBrendModal] = useState(false)
         const [openBrends, setOpenBrends] = useState(false)
         const [getBrendId, setGetBrendId] = useState(null)
         const [activCards, setActiveCards] = useState("")


  


  return (
    <div>
      <div className="baseUp flex items-center justify-between px-3 shadow">

      

      <div className=" w-full lg:w-[50%]">
      <ContentUp 
      title={"baza"}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
       />
      </div>

      </div>



      <div className="baseMain">

        <div className="flex items-center justify-between px-3 lg:px-6 py-3">
        <h2 className="capitalize text-2xl font-bold cursor-pointer"
        onClick={()=>setOpenBrends(true)}
        >brendlar</h2>

        <div className=''>
            <button className="btn " onClick={()=>setOpenBrendModal(true)}>brend yaratish</button>
        </div>
        </div>

      
        {openBrends && <Modal
        close={()=>setOpenBrends(false)}
        title={"brendlar ro'yxati"}>

        <div className=' pl-4 '>
          {brends && brends.map((brend)=>(

            <div className='brendCard  ' key={brend.id}
              onClick={()=>{setGetBrendId(brend.id), setOpenBrends(false)}}>
              <h2 className='lg:text-2xl font-bold capitalize'>{brend.bName}</h2>
            </div>
        ))}
        </div>
        </Modal>}



        <div className="main_contents shadow">
            <BaseCards searchTerm={searchTerm} getBrendId={getBrendId}/>
        </div>



          {/* create brend */}
        {openBrendModal && <Modal
        close={()=>setOpenBrendModal(false)}
        title={"Yangi brend qo'shing"}>
            <CreateBrand setOpenBrendModal={setOpenBrendModal}/>
        </Modal>}
      </div>
    </div>
  )
}

export default MainBase