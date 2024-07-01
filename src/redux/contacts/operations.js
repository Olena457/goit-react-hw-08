import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66752437a8d2b4d072eeda49.mockapi.io';

export const fetchContacts = createAsyncThunk(
  ' contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (items, thunkAPI) => {
    try {
      const resp = await axios.post('/contacts', items);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (itemId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/contacts/${itemId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async (updatedContact, thunkAPI) => {
    const { id, name, number } = updatedContact;
    try {
      const response = await axios.patch(`contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
