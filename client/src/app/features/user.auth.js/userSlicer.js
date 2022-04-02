import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tryLogin } from "../../api/userAPI";

export const login = createAsyncThunk(
  "user/loginUser",
  async (loginCred, { getState, rejectWithValue }) => {
    const { isLoading } = getState().user;
    if (isLoading == "pending") return;

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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        if (state.isLoading === "") state.isLoading = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = "";
      });
  },
});

export const userState = (state) => state;
export default userSlicer.reducer;
