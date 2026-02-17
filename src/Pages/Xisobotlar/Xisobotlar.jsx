import  { useState } from 'react'
import ContentUp from '../../Components/ContentUp/ContentUp'
import {UseCollection } from "../../Hooks/UseCollection"

const Xisobotlar = () => {
       const { data: soldProducts } = UseCollection("soldProducts");
       const [searchTerm, setSearchTerm] = useState("");
       const [showXisobotText, setShowXisobotText] = useState(false)

      const now = new Date();
      const isToday = now.getDate();
      const isMonth = now.getMonth() + 1;
      const isYear = now.getFullYear();



        const filteredData = soldProducts?.filter((product) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch =
          product.soldPName?.toLowerCase().includes(search) ||
          product.soldBname?.toLowerCase().includes(search);

        if (searchTerm.trim() !== "") {
          return matchesSearch;
        }

        return (
          product.vaqt?.kun === isToday &&
          product.vaqt?.oy === isMonth &&
          product.vaqt?.yil === isYear
        );
      });

       const todaySold = soldProducts?.filter(item =>
          item.vaqt?.kun === isToday &&
          item.vaqt?.oy === isMonth &&
          item.vaqt?.yil === isYear
        );


       // today-------------------------------
        const todayAllAmounts = todaySold
        ? todaySold.reduce((acc, item) => acc + Number(item.soldAmount || 0), 0)
        : 0;

        const todayAllsums = todaySold
        ? todaySold.reduce((acc, item) => acc + Number(item.itogo || 0), 0)
        : 0;

        const todayAllProfits = todaySold
        ? todaySold.reduce((acc, item) => acc + Number(item.soldProfit || 0), 0)
        : 0;


          // -------------------------------------------------------------


          const allAmounts = soldProducts
          ? soldProducts.reduce((acc, item) => acc + Number(item.soldAmount || 0), 0)
          : 0;

          const allsums = soldProducts
          ? soldProducts.reduce((acc, item) => acc + Number(item.itogo || 0), 0)
          : 0;

            const allProfits = soldProducts
          ? soldProducts.reduce((acc, item) => acc + Number(item.soldProfit || 0), 0)
          : 0;


  return (
    <div>
      <div className=" w-[50%]">
      <ContentUp 
      title={"xisobotlar"}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      />
      </div>

      <div>
              {/* table */}
              <table className="responsive-table" >
                <caption></caption>
                <thead className="table-head">
                  <tr >
                    <th>brend</th>
                    <th>maxsulot</th>
                    <th>kelish soni</th>
                    <th>kelish narxi</th>
                    <th>sotilish narxi</th>
                    <th>sotilish soni</th>
                    <th>itogo</th>
                    <th>foyda</th>
                    <th>sana</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData?.length ? (
                    filteredData.map((product) => (
                      <tr key={product.id} className="table-card-row">
                      <td  data-label="Brend" className="table-card-cell" >{product.soldBname}</td>
                      <td  data-label="Maxsulot" className="table-card-cell" >{product.soldPName}</td>
                      <td  data-label="kelish soni" className="table-card-cell" >{product?.cAmount}</td>
                      <td  data-label="kelish narxi" className="table-card-cell" >{product.cPrice}</td>
                      <td  data-label="sotilish narxii" className="table-card-cell" >{product.soldPrice}</td>
                      <td  data-label="sotilish soni" className="table-card-cell" >{product.soldAmount}</td>
                      <td  data-label="itogo" className="table-card-cell" >{product.itogo}</td>
                      <td  data-label="foyda" className="table-card-cell" >{product.soldProfit}</td>
                      <td  data-label="sana" className="table-card-cell" >
                        {product.vaqt?.kun}.{product.vaqt?.oy}.{product.vaqt?.yil}
                        </td>
                    </tr> 
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center py-6">
                        {searchTerm ? "Hech narsa topilmadi" : "Bugun savdo yo‘q"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>


            <div className="today mt-5">
              <div>
              <h2 className="capitalize font-bold">bugungi jami xisobotlar</h2>
              <h3>bugun sotilgan maxsulotlar soni: {todayAllAmounts}ta</h3>
              <h3>bugun qilingan savdo: {todayAllsums}sum</h3>
              <h3>bugun qilingan jami foyda: {todayAllProfits}sum</h3>
              </div>
              <div className="kalendar"></div>
            </div>

            <div className="mt-10">
                  <div>
                    <button className="btn" onClick={()=>setShowXisobotText(true)}>jami xisobotlar</button>
                    <button className="btn" onClick={()=>setShowXisobotText(false)}>hide</button>
                  </div>

                  {showXisobotText && 
                  <div>
                  <h2 className="capitalize font-bold">shu kungacha jami xisobotlar</h2>
                  <h3>shu kungacha sotilgan maxsulotlar soni: {allAmounts}ta</h3>
                  <h3>shu kungacha qilingan savdo: {allsums}sum</h3>
                  <h3>shu kungacha qilingan jami foyda: {allProfits}sum</h3>
                  </div>
                  } 
            </div>

      </div>
    </div>
  )
}

             

export default Xisobotlar