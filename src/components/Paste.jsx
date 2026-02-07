import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removefrompastes } from '../redux/pasteslice'; // Adjust path if needed
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Paste = () => {
  // useSelector SE read from redux 
  const pastes = useSelector((state) => state.paste.pastes || []);
  // search bar meh joh data aya woh searchTerm
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  // filter kro data ko on basis of TITILE then include se match kro ki searchbar meh hai ya nahi
  const filteredData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removefrompastes(pasteId));
  };


  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 transition hover:border-black"

        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* cards show karege all pastes joh banayaee */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredData.length > 0 && (
          filteredData.map((paste) => (
            <div key={paste.id} className="p-6 bg-slate-800 rounded-xl text-white shadow-lg hover:shadow-blue-glow transform hover:scale-105 transition duration-300 ease-in-out"
>
              <div className="text-3xl font-semibold">{paste.title}</div> 
              <div className="mt-2 mb-4 text-sm ">{paste.content}</div>
              {/* BUTTONS-----------------> */}
              <div className="flex flex-row gap-2 place-content-evenly mt-2 ">
                <button className="bg-blue-500 text-white px-2 py-1 rounded transform hover:scale-105 transition duration-300 ease-in-out"
>
                  {/* URL meh ?pasteid= hga uske accodring ham edit */}
                  <a href={`/?pasteid=${paste?.id}`}>
                  {/* backtilts lagana thaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!! */}
                    Edit
                    </a>
                    </button>
                <button className="bg-green-500 text-white px-2 py-1 rounded transform hover:scale-105 transition duration-300 ease-in-out">
                  <a href={`/pastes/${paste?.id}`}>
                    view
                    </a>
                    </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded transform hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => handleDelete(paste.id)}
                >
                  Delete
                </button>
                <button className="bg-yellow-500 text-black px-2 py-1 rounded transform hover:scale-105 transition duration-300 ease-in-out" onClick={() =>{
                  navigator.clipboard.writeText(paste?.content)
                  toast.success("Copied To Clipboard :)")
                }
                }>Copy</button>
                <button className="bg-purple-500 text-white px-2 py-1 rounded transform hover:scale-105 transition duration-300 ease-in-out" onClick={() =>{
                  const shareit=`${window.location.origin}/pastes/${paste.id}`;
                   navigator.clipboard.writeText(shareit);
                   toast.success("Shareable link copied 🚀");
                }}>Share</button>
              </div>
              {/* DATE */}
              <div className="text-xs text-blue-300 mt-2 text-center"> {new Date(paste.createdAt).toLocaleString()}
</div>
            </div>
          ))
        )
        }
      </div>
    </div>
  );
};

export default Paste;


