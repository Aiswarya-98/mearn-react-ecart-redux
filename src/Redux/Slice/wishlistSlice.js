import { createSlice } from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
  name: "wishlistslice",
  initialState: [],
  reducers: {
    addtoWishlist: (state, action) => {
      state.push(action.payload)
    },
    removeFromWishlist: (state, action) => {
      return state.filter((item) => item.id != action.payload)
    },
  },
})

export const { addtoWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
