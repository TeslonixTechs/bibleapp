import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Biblestudy from './JSON/biblestudy2024.json'
const BibleTopic = () => {
    const navigate=useNavigate();
    const {date} = useParams();
    console.log(date)
    const [bibledata,setbibledata] = useState(Biblestudy)
    const [data,setdata] = useState([])
    const handlebibledata = ()=>{
      const getmydata = bibledata.filter((item)=>(
        item.DATE===date
      ))
      setdata(getmydata)
    }
    useEffect(()=>{
      handlebibledata()
    },[date])
    const aims = data.map((item)=>(item.AIMS))
    const aimdata = aims.toString()
    console.log(aimdata)
    const finalaimdata = aimdata.split(";")
    console.log(finalaimdata)
 console.log(data)
  return (
    <div clasName="h-screen w-screen bg-slate-100">
      <div className='fixed bg-slate-100 top-0 w-screen py-3 h-fit'>
      <div className='bg-slate-100 flex fixed justify-center w-full'>
        {data.map((item)=>(
          <div className='w-screen flex justify-center items-center gap-2 flex-col px-1'>
            <div className='text-3xl font-semibold bg-green-950 mb-5 h-16 py-2 w-64 rounded-xl flex justify-center items-center text-slate-200 text-center'>{item.DATE}</div>
            <div className='text-xl'>{item.TOPIC.toUpperCase()}</div>
            <div className='text-xl'>{item.TEXTS.toUpperCase()}</div>
          </div>
        ))}
      </div>
      
      </div>
      <div className='flex flex-col gap-2 justify-center w-screen pt-44 pb-36 bg-slate-100 px-1'>
      <div className='h-fit px-2'>
        <div className='flex gap-2'>
          <div>AIMS:</div>
          <div>
          {finalaimdata.map((item)=>(
          <div>{item}</div>
        ))
       }
          </div>
      </div>
      <div></div>
       
        </div>
      {data.map((item,index)=>(
          <div className='flex flex-col gap-4'>
            <div>INTRODUCTION: {item.INTRODUCTION}</div>
            <div>STUDY GUIDES: {item.STUDYGUIDES}</div>
            <div>FOOD FOR THOUGHTS: {item.FOODFORTHOUGHTS}</div>
            <div>MEMORY VERSE: {item.MEMORYVERSE}</div>
            <div>CONCLUSION: {item.CONCLUSION}</div>
          </div>
    
        ))}
      </div>
         <div className="fixed bottom-0 bg-green-950 h-24 flex px-2 justify-between w-screen items-center">
            <div onClick={()=>navigate('/biblestudy')} className="h-12 w-12 flex justify-center items-center rounded-full bg-amber-500"><span className="fas fa-arrow-left text-4xl text-green-950"></span></div>
            <div onClick={()=>navigate('/page')}><span className="fas fa-home text-5xl text-amber-500"></span></div>
        </div>
    </div>
  )
}

export default BibleTopic;