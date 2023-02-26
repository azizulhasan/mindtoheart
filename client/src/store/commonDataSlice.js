import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    showModal: false,
    isRowAdded: false,
    addNew: false,
    status: 'idle',
    showNotice: false,
    noticeMessage: '',
    noticeDelay: 2000,
    themeColor: 'rgb(103, 147, 75)',
};

export const commonDataSlice = createSlice({
    name: 'common',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {},
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(openModal.pending, (state) => {})
            .addCase(openModal.fulfilled, (state, action) => {
                state.status = 'idle';
                state.showModal = action.payload.displayModal;
                console.log(action.payload);
                if (action.payload.hasOwnProperty('addNew')) {
                    state.addNew = action.payload.addNew;
                }
            });
        builder
            .addCase(displayNotice.pending, (state) => {})
            .addCase(displayNotice.fulfilled, (state, action) => {
                state.showNotice = !!action.payload;
                state.noticeMessage = action.payload;
            });
        builder
            .addCase(rowAdded.pending, (state) => {})
            .addCase(rowAdded.fulfilled, (state, action) => {
                state.isRowAdded = action.payload;
            });
    },
});

export const openModal = createAsyncThunk('openModal', async (payload) => {
    return await payload;
});

export const displayNotice = createAsyncThunk('showNotice', async (payload) => {
    return await payload;
});

export const rowAdded = createAsyncThunk('rowAdded', async (payload) => {
    return await payload;
});

export default commonDataSlice.reducer;
