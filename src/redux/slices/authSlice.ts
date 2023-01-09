import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { IAuthUser, IInitialStateAuth, IUserDataSend } from "../../types";

const initialState: IInitialStateAuth = {
    data: null,
    status: null,
    isLoading: false,
    message: null,
};

export const authUser = createAsyncThunk(
    "auth/authUser",
    async ({ email, password }: IUserDataSend) => {
        try {
            const { data } = await axios.post("/auth", { email, password });
            if (data.token) {
                window.localStorage.setItem("token", data.token);
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state: any) => {
            state.data = null;
            state.isLoading = false;
            state.status = null;
            window.localStorage.removeItem("token");
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.isLoading = true;
                state.status = "loading";
                state.message = null;
            })
            .addCase(authUser.fulfilled, (state, action: PayloadAction<IAuthUser>) => {
                state.isLoading = false;
                state.status = "resolved";
                state.data = action.payload;
            })
            .addCase(authUser.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.status = "rejected";
                state.message = action.payload.message;
            })
    }
});

export const checkIsAuth = (state: any) => Boolean(state.auth.data?.token);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
