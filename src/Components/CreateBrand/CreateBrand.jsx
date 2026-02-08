import React, { useState } from 'react'
import { UseFireStore } from '../../Hooks/UseFireStore'

const CreateBrand = ({setOpenBrendModal}) => {
    const {addDocument: createNewBren} = UseFireStore("brends")
    const [bName, setBname] = useState("")

    const hanleSubmit = (e) => {
        e.preventDefault()
        createNewBren({bName})
        .then(()=>alert("yangi brend qo'shildi!"))
        .catch((error)=>alert(error.message))

        setBname("")
        setOpenBrendModal(false)
    }
    
  return (
    <div className='px-2'>
         <form className='forma'onSubmit={hanleSubmit} >
            <label className='formLabel'>
                <span>brend nomi:</span>
                <input 
                className="inp" 
                placeholder='brend nomi...'
                required
                type="text" 
                value={bName}
                onChange={(e)=>setBname(e.target.value)}
                />
            </label>

            
            <div className="btns">
                <button className="btn" onClick={()=>setOpenBrendModal(false)} type='button'
                >bekor qilish</button>
                <button className="btn">saqlash</button>
            </div>
        </form>
    </div>
  )
}

export default CreateBrand