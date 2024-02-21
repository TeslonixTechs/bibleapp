import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import books from './JSON/Bibleverse.json'
const SearchVerse = () => {
    const navigate = useNavigate();
    const {book,mychapter,myverse} =useParams();
    const [data,setData]=useState([])
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [count,setcount]=useState(1)
    const fontsize = ['10px','12px','14px','16px','24px']
    const fetchData = () => {
        try {
            const bookSearch = books.books.find(b => b.book === book);

            if (bookSearch) {
                const chapterData = bookSearch.chapters.find(chap => chap.chapter ===mychapter);

                if (chapterData) {
                    const verseData = chapterData.verses.find(verse => verse.verse===myverse)
                    setData(verseData)
                } else {
                    console.error(`Chapter ${mychapter} not found in book ${book}.`);
                }
            } else {
                console.error(`Book ${book} not found.`);
            }
        } catch (error) {
            console.log('Error fetching chapter data:', error);
        }
    };
    const handlecountplus=()=>{
        if(count>4){
            return count<6
        }
        setcount(add=>add+1)

        if(count===5){
            return
        }
    }
    const handlecountminus=()=>{
        if(count<2){
            return
        }
        setcount(add=>add-1)
        if(count===1){
            return
        }
    }

    useEffect(() => {
        fetchData();
    }, [myverse,mychapter]);
    const navigateToChapter = (num) => {
        const nextverse = parseInt(mychapter, 10) + num;
        const getChapter = books.books.find(b => b.book === book);
        const totalChapters = getChapter.chapters.length;
        const firstChapter = getChapter.chapters[0].chapter
        console.log(nextverse)
        if (nextverse >= firstChapter && nextverse <= totalChapters) {
            navigate(`/${book}/${nextverse}`);
            setIsPreviousDisabled(false)
            setIsNextDisabled(false)
        }
        else if (nextverse < firstChapter) {
            setIsPreviousDisabled(true);
        }
        else if (nextverse > totalChapters) {
            setIsNextDisabled(true);
        }
    };
    console.log(data)
  return (
    <div>
        <div className="fixed bottom-0 bg-green-950 h-24 flex px-2 justify-between w-screen items-center">
            <div onClick={()=>navigate(`/${book}`)} className="h-12 w-12 flex justify-center items-center rounded-full bg-amber-500"><span className="fas fa-arrow-left text-4xl text-green-950"></span></div>
            <div onClick={()=>navigate('/page')}><span className="fas fa-home text-5xl text-amber-500"></span></div>
        </div>
        <div className="gap-5 flex justify-center bg-slate-100 items-center fixed bottom-24 h-20 w-screen">
            <div  onClick={handlecountminus}  className='text-center text-green-9550 items-center bg-amber-500 h-10 rounded-xl w-10 flex justify-center'> <span className="fas fa-minus text-2xl"></span></div>
            <div className="flex items-center h-full flex-col"><span className="text-md">Text-size</span><span className='text-2xl pl-2'>{count}</span></div>
			<div onClick={handlecountplus} className='text-center text-green-950 bg-amber-500 h-10 w-10 flex rounded-xl justify-center items-center'><span className="fas fa-plus text-2xl"></span></div> 		
		</div>
        <div className='flex w-screen py-10 bg-slate-100 justify-center fixed top-0 items-center'>
                    <div className='text-center'>    
                        <div onClick={()=>navigate('/books')} className="text-3xl font-semibold bg-green-950 h-14 w-64 rounded-xl flex justify-center items-center text-slate-200 text-center">{book}</div>
                
                    </div>
        </div>
            <div className="flex items-center py-7 w-full items-center fixed bg-slate-100 top-24 justify-center gap-6">
                
				<div className='bg-amber-500 w-9 h-9 justify-center flex items-center rounded-full '>
					<i
						className={`fas fa-arrow-left text-2xl ${isPreviousDisabled ? 'text-gray-500 cursor-not-allowed' : 'cursor-pointer text-green-950'}`}
						onClick={()=>navigateToChapter(-1)}
						disabled={isPreviousDisabled}
					></i>
				</div>
				<div className='text-3xl font-bold'>
                    Chapter {mychapter}
                </div>
				<div className='bg-green-950 w-9 h-9 justify-center flex items-center rounded-full '><i
					className={`fas fa-arrow-right text-2xl ${isNextDisabled ? 'text-gray-500 cursor-not-allowed' : 'cursor-pointer text-amber-500'}`}
					onClick={()=>navigateToChapter(+1)}
					disabled={isNextDisabled}
					></i>
				</div>
			</div>
			<div style={{fontSize:fontsize[count-1]}} className="pt-52 flex flex-col pb-48">
                <div className="bg-yellow-300 h-fit w-screen py-3">
                <span>{data.verse}.</span>
                <span>{data.text}</span>
                </div>
				{/* {data.map((item) => (
					<div key={item[0]}>
						<span className="font-bold mr-1">{item.verse}.</span>
						<span>{item.text}</span>
					</div>
				))} */}
			</div>
			
          
	</div>
  )
}

export default SearchVerse