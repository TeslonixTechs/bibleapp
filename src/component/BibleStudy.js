import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Biblestudy from './JSON/biblestudy2024.json'
import bars from './Images/download (1).png'

const BibleStudy = () => {
    const navigate = useNavigate();
    const [data,setdata] = useState(Biblestudy)
    const [getvalue,setgetvalue] = useState("")
    const handleshowbook=(e)=>{
        const getmydata = Biblestudy.filter(
            (item,index) => {
                const date = item.DATE || ""
                return(
                    date.toLowerCase().includes(getvalue.toLowerCase()) 
                )
                
            });

       setdata(getmydata);
    }

    const handlesearch = (e) => {
        const value = e.target.value
        console.log(value)
        setgetvalue(value)
    };
    useEffect(()=>{
        handleshowbook()
    },[getvalue])
    const handlestudy = (date)=>{
        navigate(`/Biblestudy/${date}`)
    }
  return (
    <div>
        <div className='w-screen flex bg-slate-100 flex-col justify-center gap-4 py-3 px-2 py-36 h-fit pb-36'>
            {data.map((item,index)=>(
                <div onClick={()=>handlestudy(item.DATE)} className={`h-33 w-88 pl-3 rounded-xl border text-white flex flex-col gap-1 py-8 text-2xl px-2rounded-lg ${index % 2 === 0 ? 'bg-amber-500' : 'bg-green-950'}`}>
                    <div>DATE: {item.DATE}</div>
                    TOPIC: {item.TOPIC}
                </div>
            ))}
        </div>
        <div className="fixed bottom-0 bg-green-950 h-24 flex px-2 justify-between w-screen items-center">
            <div onClick={()=>navigate('/page')} className="h-12 w-12 flex justify-center items-center rounded-full bg-amber-500"><span className="fas fa-arrow-left text-4xl text-green-950"></span></div>
            <div onClick={()=>navigate('/page')}><span className="fas fa-home text-5xl text-amber-500"></span></div>
        </div>
        <div className="fixed top-0 h-32 gap-4 pt-3 bg-slate-100 justify-start flex flex-col w-screen">
                    <div className="flex gap-1 pl-8 text-3xl font-normal items-center"><img src={bars} className="h-8 bg-slate-100 w-8"/>{Biblestudy[0].THEME}</div>
                    <div className="flex w-screen justify-center"><input onChange={handlesearch} placeholder="Search for Month" className="focus:placeholder:invisible border pl-1 outline-0 bg-slate-100 py-2 rounded-lg w-80 border-black"/></div>
                </div>
    </div>
  )
}

export default BibleStudy