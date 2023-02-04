import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

// Define a type for the slice state
interface PasswordState {
  passwordValue: number | string | undefined;
  copied: boolean;
  characterLength: number;
}

// Define the initial state using that type
const initialState: PasswordState = {
  passwordValue: '',
  copied: false,
  characterLength: 10,
};

export const passwordSlice = createSlice({
  name: 'password',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<number | string>) => {
      state.passwordValue = action.payload;
    },

    setCopied: (state, action: PayloadAction<boolean>) => {
      state.copied = action.payload;
    },

    setCharacterLength: (state, action: PayloadAction<number>) => {
      state.characterLength = action.payload;
    },
  },
});

export const { setPassword, setCopied, setCharacterLength } =
  passwordSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default passwordSlice.reducer;
