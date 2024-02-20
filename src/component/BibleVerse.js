import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import books from './JSON/Bibleverse.json';
import './fontawesome/css/all.css';
import Chapters from './Chapters';

const Bibleverse = () => {
    const { book, verse} = useParams();
    const [data, setData] = useState([]);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    console.log(data)
    const [count,setcount]=useState(1)
    const navigate = useNavigate();

    const fetchData = () => {
        try {
            const bookSearch = books.books.find(b => b.book === book);

            if (bookSearch) {
                const chapterData = bookSearch.chapters.find(chap => chap.chapter === verse);

                if (chapterData) {
                    setData(chapterData.verses);
                } else {
                    console.error(`Chapter ${verse} not found in book ${book}.`);
                }
            } else {
                console.error(`Book ${book} not found.`);
            }
        } catch (error) {
            console.error('Error fetching chapter data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [verse,book]);

    const navigateToChapter = (num) => {
        const nextverse = parseInt(verse, 10) + num;
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
    //const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const fontsize = ['10px','12px','14px','16px','24px']
    // const prevchap = ()=>{
    //     if (currentBookIndex !== 0) {
    //         const newIndex = (currentBookIndex === books.books.chapters.chapter.length - 1) ? 0 : currentBookIndex - 1;
    //     setCurrentBookIndex(newIndex)
    //     console.log(currentBookIndex)
    //     const newbook = books.books.chapters[newIndex].chapter
    //     try {
    //         const bookSearch = books.books.find(b => b.book === book);

    //         if (bookSearch) {
    //             const chapterData = bookSearch.chapters.find(chap => chap.chapter === newbook);

    //             if (chapterData) {
    //                 setData(chapterData.verses);
    //             } else {
    //                 console.error(`Chapter ${verse} not found in book ${book}.`);
    //             }
    //         } else {
    //             console.error(`Book ${book} not found.`);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching chapter data:', error);
    //     }
    //     }
    // }
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

    const gotohome = ()=>{
        navigate("/page")
    }
    const gotochapter = ()=>{
        navigate(`/${book}`);
    }
    // const nexchap=()=>{
    //     if (currentBookIndex !== 0) {
    //         const newIndex = (currentBookIndex === books.books.chapters.chapter.length - 1) ? 0 : currentBookIndex + 1;
    //     setCurrentBookIndex(newIndex)
    //     console.log(currentBookIndex)
    //     const newbook = books.books.chapters[newIndex].chapter
    //     try {
    //         const bookSearch = books.books.find(b => b.book === book);

    //         if (bookSearch) {
    //             const chapterData = bookSearch.chapters.find(chap => chap.chapter === newbook);

    //             if (chapterData) {
    //                 setData(chapterData.verses);
    //             } else {
    //                 console.error(`Chapter ${verse} not found in book ${book}.`);
    //             }
    //         } else {
    //             console.error(`Book ${book} not found.`);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching chapter data:', error);
    //     }
    //     }
    // }


    return (
        <div className='flex h-screen w-full bg-slate-100'>
        <div className="container w-full mx-auto pt-16 pb-5">
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
                    Chapter {verse}
                </div>
				<div className='bg-green-950 w-9 h-9 justify-center flex items-center rounded-full '><i
					className={`fas fa-arrow-right text-2xl ${isNextDisabled ? 'text-gray-500 cursor-not-allowed' : 'cursor-pointer text-amber-500'}`}
					onClick={()=>navigateToChapter(+1)}
					disabled={isNextDisabled}
					></i>
				</div>
			</div>
			<div style={{fontSize:fontsize[count-1]}} className="pt-32 flex flex-col pb-48">
				{data.map((verse) => (
					<div key={verse.verse}>
						<span className="font-bold mr-1">{verse.verse}.</span>
						<span>{verse.text}</span>
					</div>
				))}
			</div>
			
          
		</div>
       
        <div className="gap-5 flex justify-center bg-slate-100 items-center fixed bottom-24 h-20 w-screen">
            <div  onClick={handlecountminus}  className='text-center text-green-9550 items-center bg-amber-500 h-10 rounded-xl w-10 flex justify-center'> <span className="fas fa-minus text-2xl"></span></div>
        <div className="flex items-center h-full flex-col"><span className="text-md">Text-size</span><span className='text-2xl pl-2'>{count}</span></div>
				<div onClick={handlecountplus} className='text-center text-green-950 bg-amber-500 h-10 w-10 flex rounded-xl justify-center items-center'><span className="fas fa-plus text-2xl"></span></div> 
				
				
		</div>
        <div className="fixed bottom-0 bg-green-950 h-24 flex px-2 justify-between w-screen items-center">
                    <div onClick={gotochapter} className="h-12 w-12 flex justify-center items-center rounded-full bg-amber-500"><span className="fas fa-arrow-left text-4xl text-green-950"></span></div>
                    <div onClick={gotohome}><span className="fas fa-home text-5xl text-amber-500"></span></div>
        </div>
        
    </div>
    );
};

export default Bibleverse;
