import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login: (state, action) => {
      const userInfo = action.payload;

      state.user = userInfo;
      state.user.authUser = true;
      const saveState = JSON.stringify(userInfo);
      sessionStorage.setItem("authUser", saveState);
    },
    logout: (state, action) => {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
      sessionStorage.clear("authUser");
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
