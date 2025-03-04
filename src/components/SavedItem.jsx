import React from 'react'
import './SavedItem.css'

const SavedItem = ({savedQuotes,deleteItem}) => {
  return (
     <>
   
     <div className="container ">
      <div className="row banner" >
      <div className="col-12 justify-content-center align-items-center">
        <h2 className='mt-3 display-5'>Saved Quotes</h2> 
      </div>
      <div className="col-12">
        {savedQuotes.length!=0?<table className='table table-striped table-dark '>
       
       <thead>
         <tr>
           <th>Quote</th>
           <th>Author</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
       {savedQuotes.map((item,index)=>(
         
        <tr key={index}>
        <td>{item.quotes}</td>
        <td>{item.author}</td>
        <td onClick={()=>deleteItem(`${item.quotes}`)} className='cursor-pointer'>{item.author?<i className="fa-solid fa-trash"></i>:<></>}</td>
      </tr>
 ))}
        
       </tbody>
     </table>:<h4 className="text-white bg-warning bg-gradient p-3 rounded-4 mt-3" >No items in the saved list</h4>    }
        
      </div>
      </div>
     </div>
     </>
    
    
  )
}

export default SavedItem