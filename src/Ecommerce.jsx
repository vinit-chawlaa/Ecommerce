import React, { useEffect, useState } from 'react';
import Category from './Category';
import axios from 'axios';

const Ecommerce = () => {

    const [finalcategory,setFinalcategory] = useState([])
    const [finalproducts,setFinalproducts] = useState([])
    const [catname,setCatname] = useState('')

    let getcategory = () =>{
        axios.get("https://dummyjson.com/products/categories")
        .then((res) => res.data)
        .then((finalres) => {
            setFinalcategory(finalres)
        })
    }
    
    let getproducts = () =>{
        axios.get("https://dummyjson.com/products")
        .then((prores) => prores.data)
        .then((finalres) => {
            setFinalproducts(finalres.products)
        })
    }
 useEffect(()=>{
    getcategory()
    getproducts()
 },[])

 useEffect(()=>{
    // console.log(catname.name)
    if(catname !== '')
    {
        axios.get(`https://dummyjson.com/products/category/${catname.name}`)
        .then((prores) => prores.data)
        .then((finalres) => {
            setFinalproducts(finalres.products)
        })
    }
    },[catname])


 let pitems = finalproducts.map((products,index)=>{
    return(
        <Productitems key={index} pdata={products}/>
    )
 })

    return (
        <div className='py-[40px] bg-yellow-300'>
            <div className='max-w-7xl px-4 mx-auto'>
                <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
                <div className='grid grid-cols-1 lg:grid-cols-[30%_auto] gap-[20px] m-1'>
                    <div className='bg-white shadow-md p-4 rounded-md'>
                        <Category finalcategory={finalcategory} setCatname={setCatname}/>
                    </div>

                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                          {finalproducts.length>=1 
                          ? 
                          pitems
                          :
                          <div className='text-center'>No Product Found</div>
                          }
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce;

function Productitems({pdata}){
return(
<div className='shadow-lg text-center pb-4 bg-white rounded-md'>
<img src={pdata.thumbnail} className='w-auto h-[250px] cursor-pointer object-cover mx-auto' alt="thumbnail" />
<h4 className='font-semibold text-lg text-gray-800 break-words'>{pdata.title}</h4>
<p>{pdata.price}</p>
</div>
)
}

