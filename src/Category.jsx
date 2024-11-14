import React from 'react'

export default function Category({finalcategory,setCatname}) {

    let cat = finalcategory.map((v,i)=>{
        return(
            <li onClick={()=>setCatname(v)} key={i} className='bg-[#f0eea8] mx-3  p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2 break-words'>
            {v.name}
            </li>
        )
    })
  return (
    <div>
        <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
        <ul>
            {cat}
        </ul>
    </div>
  )
}
