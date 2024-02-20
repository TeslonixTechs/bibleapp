import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BibleApp = () => {
  const navigate = useNavigate();
  const gotopage = ()=>{
    setTimeout(()=>{
      navigate('/page')
    },3000)
  }
  useEffect(()=>{
    gotopage()
  },[])
  return (
    <div className='bg-mybg h-screen w-screen bg-contain bg-no-repeat flex justify-center items-center'>
        {/* <div>
            <div className='text-3xl text-cyan-400 font-bold'>KJV BIBLE</div>
            <div>
              <div className='text-lg text-cyan-400'>Powered by:</div>
              <div className='text-white pl-2 text-sm'>Christ Apostolic Church</div>
              <div className='text-white text-xs pl-2'>One fold one sheperd</div>
            </div>
        </div> */}
    </div>
  )
}

export default BibleApp