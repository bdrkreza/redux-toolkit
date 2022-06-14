import { createSlice } from "@reduxjs/toolkit";
import { contactList } from "../api/api";

const initialUser = {
  users: contactList,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUser,
  reducers: {
    showUser: (user) => user,
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, phone } = action.payload;
      let isUser = state.users.filter((user) => user.id === id);

      if (isUser) {
        isUser[0].name = name;
        isUser[0].email = email;
        isUser[0].phone = phone;
      }
    },
  },
});

export const { showUser, addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
