import { useState } from 'react'
import { UseCollection } from '../../Hooks/UseCollection'
import BaseCard from '../BaseCard/BaseCard'
import Modal from '../Modal/Modal'
import CreateProduct from '../CreateProduct/CreateProduct'

const BaseCards = ({ searchTerm, getBrendId, openBars, setOpenBars }) => {
    const {data: products} = UseCollection("products")
    const [openProductModal, setOpenProductModal] = useState(false)
    const [opneBrendXisob, setOpneBrendXisob] = useState(false)
    

    const filteredProducts = products
      ?.filter((product) => {
        // 1. Brend bo‘yicha filter
        if (!getBrendId) return true;
        return product.brendId === getBrendId;
      })
      ?.filter((product) => {
        // 2. Qidiruv bo‘yicha filter
        if (!searchTerm.trim()) return true;

        const search = searchTerm.toLowerCase();

        return (
          product.pName?.toLowerCase().includes(search) ||
          product.bName?.toLowerCase().includes(search)
        );
      });





  return (
    <div className='shadow relative'>
    <div className='brendCards flex flex-col '>

      

        {/* create product */}
        {openProductModal && <Modal 
         close={()=>setOpenProductModal(false)}
         title={"Yangi maxsulot qoshing"}>
         <CreateProduct setOpenProductModal={setOpenProductModal}/>
         </Modal>}


         {opneBrendXisob && (
  <Modal 
    close={() => setOpneBrendXisob(false)}
    title={getBrendId ? `${filteredProducts[0]?.bName || "Brend"} hisoboti` : "Umumiy hisobot"}
  >
    {/* Hisob-kitob mantiqi */}
    {(() => {
      // Faqat ekranda ko'rinib turgan (filtrdagi) mahsulotlarni hisoblash
      const stats = filteredProducts?.reduce((acc, product) => {
        const omborda = Number(product.omborda) || 0;
        const cPrice = Number(product.cPrice) || 0;
        const cAmount = Number(product.cAmount) || 0
        const soldAmount = Number(product.soldAmount) || 0
        // const soldProfit = Number(product.soldProfit) || 0

        
        acc.totalOmborda += omborda;
        acc.totalRealSums += omborda * cPrice;
        acc.totalcAmounts += cAmount
        acc.totalSoldAmounts +=soldAmount
        acc.tottalItogo += cAmount * cPrice
        // acc.tottalProfit += soldProfit
        acc.typesCount += 1;
        
        return acc;
      }, { totalOmborda: 0, totalRealSums: 0, typesCount: 0, totalcAmounts:0, totalSoldAmounts:0, tottalItogo:0,  });

      return (
        <div className="p-3 text-[#2D5F5D] bg-blue-50 mx-2 rounded-[15px] ">
          <div className="space-y-4 capitalize">

            <div className="p-4 bg-white rounded-xl flex justify-between items-center">
                    <p className="text-2xl text-blue-600 font-medium">maxsulot turlari:</p>
                    <h3 className="text-2xl font-bold text-blue-900">{stats?.typesCount} <small className="text-xs">xil</small></h3>
            </div>
            
            <div className="p-4 bg-white rounded-xl flex justify-between items-center">
              <span className="text-2xl text-blue-600 font-medium">Omborda dona:</span>
              <span className="text-2xl font-bold text-blue-900">{stats?.totalOmborda} <small className="text-xs">ta</small></span>
            </div>

            <div className="p-4 bg-white rounded-xl flex justify-between items-center ">
              <span  className="text-2xl text-blue-600 font-medium">hozirgi summa:</span>
              <span className="text-2xl font-bold text-blue-900">
                {stats?.totalRealSums.toLocaleString()} <small className="text-xs">$</small>
              </span>
            </div>


            <div className="p-4 bg-red-50 rounded-xl flex justify-between items-center mt-6 ">
              <span  className="text-2xl text-black/70 font-medium">jami kelgan soni:</span>
              <span className="text-2xl font-bold text-black/70">
                {stats?.totalcAmounts.toLocaleString()} <small className="text-xs">ta</small>
              </span>
            </div>

            <div className="p-4 bg-red-50 rounded-xl flex justify-between items-center mt-6 ">
              <span  className="text-2xl text-black/70 font-medium">jami sarflangan pul:</span>
              <span className="text-2xl font-bold text-black/70">
                {stats?.tottalItogo.toLocaleString()} <small className="text-xs">$</small>
              </span>
            </div>


             <div className="p-4 bg-red-50 rounded-xl flex justify-between items-center mt-6 ">
              <span  className="text-2xl text-black/70 font-medium">jami sotilgan soni:</span>
              <span className="text-2xl font-bold text-black/70">
                {stats?.totalSoldAmounts.toLocaleString()} <small className="text-xs">$</small>
              </span>
            </div>


          </div>

          <div className="mt-6">
            <button 
              className="btn w-full bg-[#2D5F5D] text-white"
              onClick={() => setOpneBrendXisob(false)}
            >
              Tushunarli
            </button>
          </div>
        </div>
      );
    })()}
  </Modal>
)}

        

        

    </div>

    <div className='products '>
      {openBars &&
        <div className="productsUp flex items-center justify-between p-2 my-2 lg:w-[50%] ">
            <button className='btn'
            onClick={()=> setOpneBrendXisob(true)}
            >hisobotlar</button>
        <div className="addNew pr-3">
          <button className="btn" onClick={()=>setOpenProductModal(true)} >maxsulot qoshing</button>
        </div>
        </div>
       }


        <div className="productsDown grid lg:grid-cols-2 gap-2">
        {filteredProducts?.map((product)=>(
            <BaseCard key={product.id} product={product} />
        ))}
        </div>
    </div>



    </div>
  )
}

export default BaseCards