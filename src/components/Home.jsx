import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { updatetopaste } from '../redux/pasteslice';
import { addtopastes } from '../redux/pasteslice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Paste from './paste';
const Home = () => {
  const [title,setTitile] = useState('');
  const [value,setvalue] =useState('');
  // id ke lye it fetches url ka ? wala part
  const[searchParam,setSearchParam]=useSearchParams()
  const pasteid =searchParam.get("pasteid")
  // redux se local store meh store kiya
  // dispatch se action when any change is occured
  const dispatch = useDispatch();
  const allpaste = useSelector((state) => state.paste.pastes);
// edit button ke karaan pasteid change hone par action perform karma===========>
  useEffect(() => {
  if (pasteid) {
     const paste = allpaste.find((p) => p.id === pasteid);
      console.log("paste found:", paste);
      setTitile(paste.title);
      setvalue(paste.content);
      }
      else {
      console.log("paste not found for id:", pasteid);
    }
  }
, [pasteid, allpaste])


  function createpaste(){
    // object ke form meh
    const paste ={
      title:title,
      content:value,
      id: pasteid || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

    if(pasteid){
      //update karo in local storage through redux
      dispatch(updatetopaste(paste));
    }
    else{
      dispatch(addtopastes(paste));
    }
    // afteer creationnor updation blanck ho jayr UI meh
    setTitile('');
    setvalue('');
    setSearchParam({});
  }
  return (
    <div>
      <div>
      <input type="text" className="w-[62rem] bg-gray-100 border border-gray-500 rounded-lg p-3 mt-2 ml-2 focus:outline-none focus:ring-1 focus:ring-black"
      placeholder='Enter Title' 
      value={title} 
      onChange={(e)=>
        setTitile(e.target.value)
      }/>
      <button className='px-4 py-3 ml-3 bg-black text-white rounded-lg hover:bg-blue-900 transition' onClick={createpaste}>
        {
        pasteid ? "Update Paste" : "Create My Paste"
        }
      </button>
      </div>
      <div className='mt-4 ml-1 '>
        <textarea className="w-3/4 bg-gray-100 text-black border border-gray-800 rounded-lg p-3 mt-2 ml-1 focus:outline-none focus:ring-1 focus:ring-black"
        value={value} 
        placeholder='enter your text here'
        onChange={(e)=>
          setvalue(e.target.value)
        }
        rows={20}></textarea>
      </div>
    </div>
  )
}

export default Home
