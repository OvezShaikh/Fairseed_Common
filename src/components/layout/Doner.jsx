import React from 'react'
import images from '../../constants/images'
let User = [

  {
    Img:images.Airlogo,
    userName:'Yasin Ansari',
    amountDonet:' 1500',
    donetionDate:'21 Feb 2023'
  }
  ,{
    Img:images.Airlogo,
    userName:'Yasin Ansari',
    amountDonet:' 1500',
    donetionDate:'21 Feb 2023'
  },
  {
    Img:images.Airlogo,
    userName:'Yasin Ansari',
    amountDonet:' 1500',
    donetionDate:'21 Feb 2023'
  },
  {
    Img:images.Airlogo,
    userName:'Yasin Ansari',
    amountDonet:' 1500',
    donetionDate:'21 Feb 2023'
  },
  {
    Img:images.Airlogo,
    userName:'Yasin Ansari',
    amountDonet:' 1500',
    donetionDate:'21 Feb 2023'
  },
  {
    Img:images.Airlogo,
    userName:'Yasin Ansari',
    amountDonet:' 1500',
    donetionDate:'21 Feb 2023'
  },
  {
    Img:images.Airlogo,
    userName:'Yasin Ansari',
    amountDonet:' 1500',
    donetionDate:'21 Feb 2023'
  }
]

function Doner() {
 

  return (
    <>
    {
      User.map((items) => {
        return (
        <div className='grid grid-cols-10  pt-3 '>
        <div className="col-span-8 pb-2">
          <div className="grid grid-cols-7">
            <img className='rounded-full col-span-1 w-[100%]' src={items.Img} alt="" />
            <h1 className=' font-bold col-span-6 flex items-center pl-2 ' style={{fontFamily:'satoshi',fontWeight:700,fontSize:24}}>{items.userName}</h1>
          </div>  

        </div>

        <div className=' col-span-2'>
          <div className="grid grid-cols-2 ">
          <h1 className='text-xl text-[#1ABD54] col-span-2'>+ {items.amountDonet}</h1>
          <p className='text-black/40 col-span-2'>{items.donetionDate}</p>
          </div>
        </div>
        <hr className='col-span-10 '></hr>
      
    </div>
    )
      })
    }
    </>

  )
}

export default Doner
