import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BibleApp from './component/BibleApp';
import BibleList from './component/BibleList';
import BiblePage from './component/BiblePage';
import Chapters from './component/Chapters';
import BibleVerse from './component/BibleVerse';
import BibleStudy from './component/BibleStudy';
import BibleTopic from './component/BibleTopic';
import SearchVerse from './component/SearchVerse';


function App() {
  return (
    <Router>
        <Routes>
           <Route exact path='/' element={<BibleApp/>}/>
           <Route exact path='/page' element={<BiblePage/>}/>
           <Route path='/books' element={<BibleList/>}/>
           <Route path='/:book' element={<Chapters/>}/>   
           <Route path='/:book/:verse' element={<BibleVerse/>}/>   
           <Route path='chapter/:book/:nextChapter' element={<BibleVerse/>}/>
           <Route path='/:book/:mychapter/:myverse' element={<SearchVerse/>}/>
           <Route path='/biblestudy' element={<BibleStudy/>}/>
           <Route path='/Biblestudy/:date' element={<BibleTopic/>}/>
        </Routes>
    </Router>
  );
}

export default App;
