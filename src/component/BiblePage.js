import React from 'react';
import './fontawesome/css/all.css';
import { useNavigate } from 'react-router-dom';

const BiblePage = () => {
    const navigate = useNavigate();
    const gotobooks = ()=>{
        navigate('/books')
    }
    const gotostudy = ()=>{
      navigate('/biblestudy')
  }
  return (
    <div className='flex justify-center h-screen w-screen items-center bg-gradient-to-t from-zinc-950 to-green-950'>
        <div className='flex flex-col gap-5'>
            <div onClick={gotobooks} className="flex active:text-zinc-700 gap-4 text-2xl items-center text-amber-600 font-bold"><div className="bg-amber-500 text-white text-2xl h-10 w-10 rounded-full flex justify-center items-center"><span className="fas fa-arrow-right text-green-950 font-bold text-3xl"></span></div><div>Bible</div></div>
            <div onClick={gotostudy} className="flex active:text-zinc-700 gap-4 text-2xl items-center text-cyan-400 font-bold"><div className="bg-cyan-500 text-white text-2xl h-10 w-10 rounded-full flex justify-center items-center"><span className="fas fa-arrow-right text-green-950 font-bold text-3xl"></span></div><div>Bible Study</div></div>
            <div className="flex active:text-zinc-700 gap-4 text-2xl items-center text-amber-600 font-bold"><div className="bg-amber-500 text-white text-2xl h-10 w-10 rounded-full flex justify-center items-center"><span className="fas fa-arrow-right text-green-950 font-bold text-3xl"></span></div><div>Daily Devotional</div></div>
            <div className="flex active:text-zinc-700 gap-4 text-2xl items-center text-cyan-400 font-bold"><div className="bg-cyan-500 text-white text-2xl h-10 w-10 rounded-full flex justify-center items-center"><span className="fas fa-arrow-right text-green-950 font-bold text-3xl"></span></div><div>Yearly Program</div></div>
        </div>
    </div>
  )
}

export default BiblePage;