import Biblestudy from './JSON/biblestudy2024.json'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const BibleGuide = ()=>{
const date = useParams()
console.log(date)
const [bibleData, setBibleData] = useState(Biblestudy);
const [data, setData] = useState([]);
const navigate = useNavigate();



const handleBibleData = () => {
    const filteredData = bibleData.filter(item => item.DATE === date);
    setData(filteredData);
};
useEffect(() => {
handleBibleData();
}, [date]);

const fontsize = [10,12,14,16,24]
const [count,setcount] = useState(1)
console.log(data)
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
    return( 
        <div className="h-full w-screen flex flex-col bg-green-900">
            <div className="bg-yellow-500 h-20  w-screen flex justify-end pb-2">
                <span className="text-green-900 font-bold text-3xl text-center">The Christain Race</span>
           </div>
           <scroll className="flex-1 py-5 pl-1.5">
            <div>
            {data.length === 0 ? (
                <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <span>No Bible study data available for this date.</span>
                </div>
            ) : (
                <div style={{ flex: 1, paddingBottom: 45 }}>
                    {data.map((item, index) => (
                        <div key={index} className="justify-center flex gap-4 w-screen items-center">
                          <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">{item['DATE']}</span></div>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">TOPIC</span></div>
                            <div className="w-72 h-16 bg-white rounded-xl flex items-center justify-center"><span className="text-xl">{item['TOPIC'].toUpperCase()}</span></div>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-xl font-bold">TEXT</span></div>
                            <div className="w-72 h-16 bg-white rounded-2xl flex items-center justify-center"><span className="text-xl">{item['TEXTS']}</span></div>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">AIMS</span></div>
                            <scroll className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><span style={{fontSize:fontsize[count-1]}}>{item['AIMS']}</span></scroll>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">INTRODUCTION</span></div>
                            <scroll className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><span style={{fontSize:fontsize[count-1]}}>{item['INTRODUCTION']}</span></scroll>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">STUDY GUIDES</span></div>
                            <scroll className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><span style={{fontSize:fontsize[count-1]}}>{item['STUDY GUIDES']}</span></scroll>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">FOOD FOR THOUGHTS</span></div>
                            <scroll className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><span style={{fontSize:fontsize[count-1]}}>{item['FOOD FOR THOUGHTS']}</span></scroll>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">CONCLUSION</span></div>
                            <scroll className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><span style={{fontSize:fontsize[count-1]}}>{item['CONCLUSION']}</span></scroll>
                            <div className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><span className="text-2xl font-bold">MEMORYVERSE</span></div>
                            <scroll className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><span style={{fontSize:fontsize[count-1]}}>{item['MEMORY VERSE']}</span></scroll>
                            
                        </div>
                    ))}
                </div>
            )}
            </div>
           </scroll>
           <div className="flex flex-row gap-3 w-screen h-fit py-2 bg-green-900 items-center justify-center ">
            <button className=" items-center bg-amber-500 h-10 rounded-xl w-10 flex justify-center" onPress={handlecountminus}><span  className="text-black text-[30px]"></span></button>
            <div className="flex justify-center w-fit items-center h-fit gap-1"><span className="text-lg">fontsize</span><span className="text-3xl">{count}</span></div>
            <button onPress={handlecountplus} className=" items-center bg-amber-500 h-10 rounded-xl w-10 flex justify-center"><span  className="text-black text-[30px]"></span></button>
          </div>
           <div className="h-24 w-screen flex flex-row bg-green-950 py-5 px-3 justify-between">
                <button onPress={() => navigate("Study")} className="h-12 w-12 rounded-full bg-amber-500 flex justify-center items-center">
                    <span className="fas fa-arrow-left fa-2x"></span>
                </button>
                <span onPress={() =>{navigate("/page")}} className="fas fa-home"></span>
          </div>
        </div>
    )
}
export default BibleGuide;