import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '13435442',
  name: 'Mohammed Ajmal',
  email: 'mdajmalmt@gmail.com',
  country_code: '+91',
  phone: '9605745465',
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateUser: (state, action) => {
      const { id, name, email, country_code, phone } = action.payload
      const user = state
      if (user) {
        user.name = name
        user.email = email
        user.country_code = country_code
        user.phone = phone
      }
    },
  }
})


export const { updateUser } = userSlice.actions
export default userSlice.reducer