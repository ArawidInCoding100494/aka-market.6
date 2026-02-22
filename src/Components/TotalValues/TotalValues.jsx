import React from 'react'
import { UseCollection } from '../../Hooks/UseCollection';

const TotalValues = () => {
    const { data: allData } = UseCollection("products")

    // 1. Ma'lumotlar kelguncha "Yuklanmoqda..." ko'rsatish (Error'ni oldini oladi)
    if (!allData) {
        return <div className="p-4 text-gray-500">Hisoblanmoqda...</div>
    }

    // 2. Hisob-kitob funksiyasi
    const totals = allData.reduce((acc, product) => {
        const omborda = Number(product.omborda) || 0;
        const cPrice = Number(product.cPrice) || 0;
        const cAmount = Number(product.cAmount)

        // Jami dona soni
        acc.totalOmborda += omborda;
        
        // Jami sarmoya (ombordagi tovarning puli)
        acc.totalRealSums += Math.floor(omborda * cPrice) / 100;

        acc.totalCamounts += cAmount

        acc.totalInvest += Math.floor(cAmount * cPrice) / 100
        
        return acc;
    }, { totalOmborda: 0, totalRealSums: 0, totalCamounts:0, totalInvest:0, }); // Boshlang'ich qiymatlar

    return (
        <div className="bg-white p-4 mx-2 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700">
                Jami <span className="text-blue-600">{allData.length}</span> xil mahsulot bor
            </h2>
            
            <div className="mt-4 grid grid-cols-1  gap-4">

                <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-600 font-medium">Omborda qolgani:</p>
                    <h3 className="text-2xl font-bold text-blue-900">{totals.totalOmborda} ta</h3>
                </div>

                <div className="p-4 bg-green-50 rounded-xl">
                    <p className="text-sm text-green-600 font-medium">Umumiy sarmoya (tannarx, ombordagi):</p>
                    <h3 className="text-2xl font-bold text-green-900">
                        {totals.totalRealSums.toLocaleString()} $
                    </h3>
                </div>

                <div className="p-4 bg-green-50 rounded-xl">
                    <p className="text-sm text-green-600 font-medium">Umumiy kelgan soni:</p>
                    <h3 className="text-2xl font-bold text-green-900">
                        {totals.totalCamounts.toLocaleString()} ta
                    </h3>
                </div>

                <div className="p-4 bg-green-50 rounded-xl">
                    <p className="text-sm text-green-600 font-medium">Umumiy maxsulotlarga tikilga summa:</p>
                    <h3 className="text-2xl font-bold text-green-900">
                        {totals.totalInvest.toLocaleString()} $
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default TotalValues