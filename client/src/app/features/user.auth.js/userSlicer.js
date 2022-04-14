import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tryLogin } from "../../api/userAPI";

export const login = createAsyncThunk(
  "user/loginUser",
  async (loginCred, { rejectWithValue }) => {
    const loginFormData = new FormData();
    loginFormData.append("username", loginCred.username);
    loginFormData.append("password", loginCred.password);

    try {
      return await tryLogin(loginFormData);
    } catch (error) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);

export const userSlicer = createSlice({
  name: "user",
  initialState: {
    user: {
      username: "",
      first_name: "",
      last_name: "",
      role: "",
    },
    error: "",
    isLoading: "",
    loggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = "loading";
        state.error = "";
        state.loggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = "";
        state.error = "";
        state.loggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = "";
        state.loggedIn = false;
      });
  },
});

export const userState = (state) => state;
export default userSlicer.reducer;
