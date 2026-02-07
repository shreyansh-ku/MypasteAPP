
// home compoent jaisa
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { updatetopaste } from '../redux/pasteslice';
import { addtopastes } from '../redux/pasteslice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Paste from './paste';
const Viewpaste = () => {
  const {id}=useParams();
  const allpaste=useSelector((state)=> state.paste.pastes);
  const paste=allpaste.filter((p)=>p.id===id)[0];
  return (
    <div>
      <div>
      <input type="text" className="w-[62rem] bg-gray-100 border border-gray-500 rounded-lg p-3 mt-2 ml-2 focus:outline-none focus:ring-1 focus:ring-black"
      placeholder='Enter Title' 
      value={paste.title} disabled 
      onChange={(e)=>
        setTitile(e.target.value)
      }/>
      {/* <button className='px-4 py-3 ml-3 bg-black text-white rounded-lg hover:bg-blue-900 transition' onClick={createpaste}>
        {
        pasteid ? "Update Paste" : "Create My Paste"
        }
      </button> */}
      </div>
      <div className='mt-4 ml-1 '>
        <textarea className="w-3/4 bg-gray-100 text-black border border-gray-800 rounded-lg p-3 mt-2 ml-1 focus:outline-none focus:ring-1 focus:ring-black"
        value={paste.content} 
        placeholder='enter your text here' disabled
        onChange={(e)=>
          setvalue(e.target.value)
        }
        rows={20}></textarea>
      </div>
    </div>
  )
}

export default Viewpaste
