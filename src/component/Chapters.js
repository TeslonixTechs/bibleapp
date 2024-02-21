import React from 'react'
import { useState, useEffect } from 'react'
import Biblelist from './JSON/Biblelist.json'
import { useNavigate, useParams } from 'react-router-dom'
import bar from './Images/download (1).png'
import Bibleverse from './JSON/Bibleverse.json'
const Chapters = () => {
    /*
    import React, { useState, useEffect } from 'react';
import Biblelist from './JSON/Biblelist.json';
import { useNavigate, useParams } from 'react-router-dom';

const Chapters = () => {
    const { book } = useParams();
    const navigate = useNavigate();
    const [currentBookIndex, setCurrentBookIndex] = useState(0);

    // Find the index of the current book in the Biblelist
    

    const handleLeftArrowClick = () => {
        const newIndex = (currentBookIndex === 0) ? Biblelist.books.length - 1 : currentBookIndex - 1;
        navigate(`/Chapters/${Biblelist.books[newIndex].book}`);
    };

    const handleRightArrowClick = () => {
        const newIndex = (currentBookIndex === Biblelist.books.length - 1) ? 0 : currentBookIndex + 1;
        navigate(`/Chapters/${Biblelist.books[newIndex].book}`);
    };

    return (
        <div>
            <h1>Chapters of {book}</h1>
            <div>
                <button onClick={handleLeftArrowClick}>Previous Book</button>
                <button onClick={handleRightArrowClick}>Next Book</button>
            </div>
        </div>
    );
};

export default Chapters;
*/
    const {book} = useParams()
    const navigate = useNavigate()
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const [nochapters,setnochapters] = useState("")
    const [getarraychap,setgetarraycap]= useState([])
    const [getvalue,setgetvalue] = useState("")
    const getmydata=()=>{
        const data = Biblelist.books.filter((item)=>(
            item.book===book
        ))
        const getchapter=data[0].chapters
        let array = []
        for(let index = 1; index<=getchapter; index++){
            array.push(index)
        }
        setnochapters(getchapter)
        setgetarraycap(array)
 
    }
    useEffect(()=>{
        getmydata()
    },[])
    useEffect(() => {
        const index = Biblelist.books.findIndex(item => item.book === book);
        setCurrentBookIndex(index);
    }, [book]);
    const backpage = ()=>{
        navigate('/books')
    }
    const handlechapter =(chapter)=>{
        navigate(`/${book}/${chapter}`)
    }
    const handleLeftArrowClick = ()=>{
        if (currentBookIndex!==0) {
            const newIndex = (currentBookIndex === Biblelist.books.length - 1) ? 0 : currentBookIndex - 1;
            setCurrentBookIndex(newIndex)
            const book = Biblelist.books[newIndex].book
            navigate(`/${book}`)
            const data = Biblelist.books.filter((item)=>(
                item.book===book
            ))
            const getchapter=data[0].chapters
            let array = []
            for(let index = 1; index<=getchapter; index++){
                array.push(index)
            }
            setnochapters(getchapter)
            setgetarraycap(array)
        }
        
       
    }
    const handleRightArrowClick = ()=>{
        if (currentBookIndex!==63) {
            const newIndex = (currentBookIndex === Biblelist.books.length - 1) ? 0 : currentBookIndex + 1;
            setCurrentBookIndex(newIndex)
            const book = Biblelist.books[newIndex].book
            navigate(`/${book}`)
            const data = Biblelist.books.filter((item)=>(
                item.book===book
            ))
            const getchapter=data[0].chapters
            let array = []
            for(let index = 1; index<=getchapter; index++){
                array.push(index)
            }
            setnochapters(getchapter)
            setgetarraycap(array)
        }
        
        
        
    }
    const getsearch = (e)=>{
        const value = e.target.value
        setgetvalue(value)
    }
    const [fetchchapter,setfetchapter]=useState([])
    const fetchData = () => {
       const fetchmydata = Bibleverse.books.filter((item)=>(
        item.book===book
       ))
       const fetchchapter = fetchmydata[0].chapters.verses
       setfetchapter([fetchchapter])
    };
    useEffect(()=>{
        fetchData()
    },[])
    const [message,setmessage] = useState("e.g 12vs1")
    const startsearch = ()=>{
        const searchdata = getvalue.split("vs")
        console.log(searchdata)
        const mychapter = searchdata[0]
        const myverse = searchdata[1]
        // localStorage.setItem('searchchapter',JSON.stringify(searchdata[0]))
        // localStorage.setItem('')
        // if (isNaN,mychapter){
        //     setmessage("Invalid search Enter search in format 12vs1")
        //     return
        // }
        // else if(!isNaN,mychapter){
        //     if(searchdata.length>1){
        //         navigate(`/${book}/${mychapter}/${myverse}`)
        //     }
        //     else{
        //         setmessage("Enter search in format 12vs1")
        //     }
        // }
       if(searchdata.length>1){
        if(!isNaN(mychapter)){
           if(mychapter>nochapters){
                setmessage("Chapter does not exist")
           }
           else{
            if(!isNaN(myverse)){
                if(myverse>fetchchapter.length){
                    setmessage("Verse does not exist")
                }
                else{
                    navigate(`/${book}/${mychapter}/${myverse}`)
                }
            }
            else{
                setmessage("Invalid Verse")
            }
           }
        }
        else{
            setmessage("Invalid Chapter")
        }
       }
       else{
        setmessage("Enter search in format 12vs1")
       }
       
    }

  return (
    <div className='bg-slate-100 h-screen w-screen'>
        <div className='w-screen flex justify-center'>
        <div className='flex flex-wrap justify-center w-72 gap-5 bg-slate-100 h-fit pt-56 pb-36'>
            {getarraychap.map((item,index)=>(
                <div onClick={()=>handlechapter(item)} className={`flex justify-center h-12 rounded-2xl flex justify-center items-center w-12 text-2xl text-white ${index % 2 === 0 ? 'bg-amber-500' : 'bg-green-950'}`}>{item}</div>
            ))}
        </div>
        <div className="fixed bottom-0 bg-green-950 h-24 flex px-2 justify-between w-screen items-center">
            <div onClick={backpage} className="h-12 w-12 flex justify-center items-center rounded-full bg-amber-500"><span className="fas fa-arrow-left text-4xl text-green-950"></span></div>
            <div onClick={()=>navigate('/page')}><span className="fas fa-home text-5xl text-amber-500"></span></div>
        </div>
        <div className='text-center text-xl fixed w-screen h-10 flex justify-center items-center bg-slate-100 bottom-24'>{nochapters} Chapter(s)</div>
        </div>
        <div className='w-screen fixed top-0 h-48 bg-slate-100'>
            <div className='flex justify-center gap-3 w-screen items-center pt-5 pb-3'>
                <div onClick={handleLeftArrowClick}  className='bg-amber-500 h-8 active:bg-green-950 rounded-full w-8 flex justify-center items-center'><span className='fas fa-arrow-left text-2xl text-slate-100'></span></div>
                <div className='text-4xl'>{book}</div>
                <div onClick={handleRightArrowClick} className='bg-green-950 h-8 active:bg-amber-500 rounded-full w-8 flex justify-center items-center'><span className='fas fa-arrow-right text-2xl text-slate-100'></span></div>
            </div>
            <div className='text-3xl pl-5 flex items-center w-screen'><img src={bar} className='h-8 w-8' />List of Chapter</div>
            <div className='text-red-500 pl-4'>{message}</div>
            <div className='flex justify-center w-screen gap-2'><input onChange={getsearch} placeholder={`Search in ${book} for chapter and verse`} className="border focus:placeholder:invisible pl-1 outline-0 bg-slate-100 h-10 rounded-lg w-64 border-black"/><div onClick={startsearch} className='bg-orange-500 rounded-md flex justify-center items-center w-16 h-10'><span className='bg-white rounded-full flex justify-center items-center h-6 w-6'><span className='fas fa-arrow-right text-orange-500 text-lg'></span></span></div></div>
        </div>
           </div>
  )
}

export default Chapters