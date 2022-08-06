import { createSlice } from "@reduxjs/toolkit";

const name = "customer";
const initialState = {
  list: {
    customers: [],
    regions: [
      { id: 1, name: "South East" },
      { id: 2, name: "South East" },
      { id: 3, name: "Middle West" },
      { id: 4, name: "Middle East" },
    ],
  },
  form: {
    fields: {
      first_name: null,
      last_name: null,
      region: null,
      active: null,
    },
  },
  error: {
    message: "",
  },
};
const reducers = {
  createCustomer: (state) => {},
  createCustomerResult: (state, { payload }) => {
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
  },
  createCustomerError: (state, { payload }) => {
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },

  editCustomer: (state) => {},
  editCustomerResult: (state, { payload }) => {
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
  },
  editCustomerError: (state) => {
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },

  setForm: (state, { payload }) => {
    const customer = state.list.customers.find((c) => (c.id = payload));

    if (customer) {
      state.form.fields = customer;
    } else {
      state.error.message = `Customer not Found: ${payload}`;
    }
  },

  resetForm: (state) => {
    state.form.fields = initialState.form.fields;
  },

  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;
    const fields = {
      ...current,
      [field]: value,
    };
    state.form.fields = fields;
  },
  loadCustomers: (state) => {},

  loadResult: (state, { payload }) => {
    state.list.customers = payload;
  },
  clearCustomers: () => {},
  clearResult: (state) => {
    state.list.customers = [];
  },
};
const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  createCustomerError,
  createCustomerResult,
  editCustomer,
  editCustomerResult,
  editCustomerError,
  setFormField,
  setForm,
  resetForm,
  loadCustomers,
  loadResult,
  clearCustomers,
  clearResult,
} = slice.actions;
export default slice.reducer;
