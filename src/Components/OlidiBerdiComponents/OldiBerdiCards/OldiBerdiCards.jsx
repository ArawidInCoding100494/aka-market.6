import { useState } from 'react'
import {UseCollection} from "../../../Hooks/UseCollection"
import OldiBerdiHaderFooter from './OldiBerdiHaderFooter/OldiBerdiHaderFooter'
import Modal from '../../Modal/Modal'

const OldiBerdiCards = ({getBrendId, setGetBrendId}) => {
    const {data: brends} = UseCollection("brends")
    const [callForm, setCallForm] = useState(false)
    
    

  return (
    <div>
        <div className='brend h-screen flex flex-col'>
                
               <div className='brendTop hidden lg:flex items-center justify-between ' >
                    <h3 className='title text-2xl font-bold capitalize'>{getBrendId?.bName}</h3>


                     <button className='btn'
                        onClick={()=> setCallForm(true)}>
                            xisobot qoshish
                     </button>
                    
                    <button className='btn px-3'
                    onClick={()=> setGetBrendId(null)}
                    >x</button>
                </div>





                <main className='flex-1'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus harum odit aut. Quo, architecto. Itaque nulla ex fuga ea reprehenderit ullam quod et pariatur! Magni sint in consequuntur ullam, non ea assumenda qui illum eum sapiente quos sequi dignissimos animi nam eos dolorum vero incidunt. Neque accusantium soluta reprehenderit.</p>
                </main>





            <div className='brendBottom flex items-center justify-between sticky bottom-0 lg:hidden p-2 shadow-lg ' >
                    <h3 className='title text-2xl font-bold capitalize'>{getBrendId?.bName}</h3>


                     <button className='btn'
                        onClick={()=>setCallForm(true)}
                        >xisobot qoshish</button>


                    <button className='btn px-3'
                    onClick={()=> setGetBrendId(null)}
                    >x</button>
                </div>

                {callForm &&  
                <Modal 
                close={()=>setCallForm(null)}
                title={"Oldi berdi ma'lumotlarini kiriting"}>
                <OldiBerdiHaderFooter getBrendId={getBrendId} setCallForm={setCallForm} />
                </Modal>
                }
        </div>
    </div>
  )
}

export default OldiBerdiCards