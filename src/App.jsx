import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import axios from 'axios'
import SavedItem from './components/SavedItem'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  const [quotes,setQuotes]=useState([])
  const [savedQuotes,setSavedQuotes]=useState([])
  const [addalert,setAddalert]=useState(null);
  const [unsuccess,setUnsuccess]=useState(null)
 
  const fetchData = async () => {
    const {data}=await axios.get('https://dummyjson.com/quotes')
    console.log(data);
    setQuotes([data.quotes[Math.floor(data.quotes.length*(Math.random()))]]);
  }
  const savedata=(item1,item2)=>{
    if(!savedQuotes.some((item)=>item.quotes==item1)){
      setSavedQuotes([...savedQuotes,{quotes:item1,author:item2}])
      setTimeout(()=>{
        setAddalert(false)
      },1000)
      setAddalert(true)
    }
    else{
      setTimeout(()=>{
        setUnsuccess(false)
      },1000)
      setUnsuccess(true)
    }
    
  }
 const deleteItem=(item1)=>{
  const Quotes=savedQuotes.filter((item)=>item.quotes!==item1);
  setSavedQuotes(Quotes);
 }
  useEffect(()=>{
    fetchData();
  },[])
  // if(quotes){
  //   console.log(quotes);
  // }

  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero quotes={quotes} fetchData={fetchData} savedata={savedata} addalert={addalert} unsuccess={unsuccess}/>}></Route>
      <Route path='/saved' element={<SavedItem  savedQuotes={savedQuotes} deleteItem={deleteItem}/>}></Route>
   
    </Routes>
    </BrowserRouter>

     {/* <Navbar/>
    <Hero quotes={quotes} fetchData={fetchData}/>
    <SavedItem/> */}
    </>
   
  );
}

export default App