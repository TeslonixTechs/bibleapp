import React, { useEffect, useState } from "react";
import Biblelist from "./JSON/Biblelist.json";
import bars from './Images/download (1).png'
import './fontawesome/css/all.css'
import { useNavigate } from "react-router-dom";
const BibleList = () => {
    const [data, setdata] = useState(Biblelist.books);
    const [getvalue,setgetvalue] = useState("")
    const navigate = useNavigate();
    const backpage = ()=>{
        navigate('/page')
    }
    const handleshowbook=(e)=>{
        const getmydata = Biblelist.books.filter(
            (item,index) => {
                const book = item.book || ""
                return(
                    book.toLowerCase().includes(getvalue.toLowerCase()) 
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
    const handlechapter = (book)=>{
        navigate(`/${book}`)
    }
    console.log(data);
    return (
        <div className="h-screen w-screen bg-slate-100">
            <div className="bg-slate-100 flex justify-center pt-36 pb-28 h-fit w-screen">
                <div className="flex flex-col gap-4 md:gap-6">
                    {data.map((item,index) => (
                        <div onClick={()=>handlechapter(item.book)} className={`rounded-2xl w-72 py-1 md:h-12 md:w-96 flex justify-center text-2xl  items-center bg-amber-500 text-white ${index % 2 === 0 ? 'bg-amber-500' : 'bg-green-950'}`}>{item.book}</div>
                    ))}
                </div>
                <div className="fixed bottom-0 bg-green-950 h-24 flex px-2 justify-between w-screen items-center">
                    <div onClick={backpage} className="h-12 w-12 flex justify-center items-center rounded-full bg-amber-500"><span className="fas fa-arrow-left text-4xl text-green-950"></span></div>
                    <div onClick={()=>navigate('/page')}><span className="fas fa-home text-5xl text-amber-500"></span></div>
                </div>
                <div className="fixed top-0 h-32 gap-4 pt-3 bg-slate-100 justify-start flex flex-col w-screen">
                    <div className="flex gap-1 pl-8 text-3xl font-normal items-center"><img src={bars} className="h-8 bg-slate-100 w-8"/>List Of Books</div>
                    <div className="flex w-screen justify-center"><input onChange={handlesearch} placeholder="Search for Books" className="focus:placeholder:invisible border pl-1 outline-0 bg-slate-100 py-2 rounded-lg w-72 border-black"/></div>
                </div>
            </div>
        </div>
    );
};

export default BibleList;
