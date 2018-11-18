import { ON_SELECTED_IMAGE_CHANGE, SET_LOADING } from "./";

export const onSelectedImageChange = (id, url) => ({
  type: ON_SELECTED_IMAGE_CHANGE,
  payload: {
    id,
    url
  }
});

export const setLoading = (product, loading) => ({
  type: SET_LOADING,
  payload: {
    product,
    loading
  }
});
