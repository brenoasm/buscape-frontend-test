import { ON_SELECTED_IMAGE_CHANGE } from './';

export const onSelectedImageChange = (id, url) => ({
  type: ON_SELECTED_IMAGE_CHANGE,
  payload: {
    id, url
  }
});
