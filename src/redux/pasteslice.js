import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// ✅ Safely load pastes from localStorage
let storedPastes = [];

try {
  const raw = localStorage.getItem("pastes");
  if (raw) {
    storedPastes = JSON.parse(raw);
  }
} catch (error) {
  console.error("Invalid JSON in localStorage:", error);
  localStorage.removeItem("pastes"); // Optional: clear corrupted data
}
// key value pair meh stored
const initialState = {
  pastes: storedPastes
};

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    // ✅ Add a new paste
    addtopastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      // till centrailised stored meh ah agye now for local storage--->
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      // key value pair ke according
      toast.success("Paste created successfully!");
    },

    // ✅ Update an existing paste
    updatetopaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex(item => item.id === paste.id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully!");
      } else {
        toast.error("Paste not found!");
      }
    },

    // ✅ Reset all pastes
    resettopastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes have been reset!");
    },

    // ✅ Remove a paste by ID
    removefrompastes: (state, action) => {
      const pasteid = action.payload;
      const index = state.pastes.findIndex((item) =>
      item.id ===pasteid);
      if (index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("paste Deleted!")
      }
    },
  },
});

// ✅ Export actions and reducer
export const {
  addtopastes,
  updatetopaste,
  resettopastes,
  removefrompastes
} = pasteSlice.actions;

export default pasteSlice.reducer;
