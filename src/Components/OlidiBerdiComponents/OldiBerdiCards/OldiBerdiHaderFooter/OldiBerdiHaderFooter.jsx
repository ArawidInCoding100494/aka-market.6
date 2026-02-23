import React, { useRef, useState } from 'react'
import Modal from "../../../Modal/Modal"
import OldiBerdiCreateForm from '../../OldiBerdiCreateForm/OldiBerdiCreateForm'

const OldiBerdiHaderFooter = ({getBrendId, setCallForm, callForm}) => {
    const [openCreateOldiBerdi, setOpenCreateOldiBerdi] = useState(null)

    const day = useRef()
    const month = useRef()
    const year = useRef()
  return (
    <div className='mx-2 p-1'>
        <form className='forma'>
            <h3 className='capitalize'>brend: {getBrendId.bName}</h3>
            <label className='formLabel'>
                <span>kelgan max nomi:</span>
                <input className='inp'
                 type="text" placeholder='max nomi...' />
            </label>

            <label className='formLabel'>
                <span>kelgan max soni:</span>
                <input className='inp'
                 type="number" placeholder='max soni...' />
            </label>

            <label className='formLabel'>
                <span>kelgan max narxi:</span>
                <input className='inp'
                 type="number" placeholder='max narxi...' />
            </label>

            <label className='formLabel'>
                <span>berilgan summa:</span>
                <input className='inp'
                 type="number" placeholder='berilgan summa...' />
            </label>

            <div className='formLabel'>
                <h3>eski qarzim</h3>
                <span className='inp'>0</span>
            </div>

            <div className='formLabel'>
                <h3>hozirgi qarzim</h3>
                <span className='inp'>0</span>
            </div>

            <div className='times grid grid-cols-3 gap-2'>
                    <label className='formLabel mt-1'>
                        <span>kun:</span>
                        <input className='inp' type="text" 
                        // defaultValue={product.time.day}
                        ref={day} />
                    </label>

                    <label className='formLabel mt-1'>
                        <span>oy:</span>
                        <input className='inp' type="text" 
                        // defaultValue={product.time.month}
                        ref={month} />
                    </label>

                    <label className='formLabel mt-1'>
                        <span>yil:</span>
                        <input className='inp' type="text" 
                        // defaultValue={product.time.year}
                        ref={year} />
                    </label>
            </div>
        </form>   
    </div>
  )
}

export default OldiBerdiHaderFooter