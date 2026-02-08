import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { updatetopaste } from '../redux/pasteslice';
import { addtopastes } from '../redux/pasteslice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
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
    if(!title.trim() && !value.trim()){
      toast.error("Title and content cannot be empty!");
      return;
    }
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
      <input type="text" className="w-full sm:w-3/4 lg:w-2/3 bg-gray-100 border border-gray-500 rounded-lg p-3 mt-2 ml-2 focus:outline-none focus:ring-1 focus:ring-black dark:bg-white dark:text-black"
      placeholder='Enter Title' 
      value={title} 
      onChange={(e)=>
        setTitile(e.target.value)
      }/>
      <button className='px-4 py-3 ml-3 
             bg-white text-black 
             border border-gray-700 
             rounded-lg 
             hover:bg-blue-500 transition 
             dark:bg-white dark:text-black dark:hover:bg-gray-300"
"
      ' onClick={createpaste}>
        {
        pasteid ? "Update Paste" : "Create My Paste"
        }
      </button>
      </div>
      <div className='mt-4 ml-1 '>
        <textarea className="w-full sm:w-3/4 lg:w-2/3 bg-gray-100 text-black border border-gray-500 rounded-lg p-3 mt-2 ml-1 focus:outline-none focus:ring-1 focus:ring-black dark:bg-white dark:text-black"
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
