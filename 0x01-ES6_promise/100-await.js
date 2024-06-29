import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let obj = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    obj = { photo, user };
  } catch (e) {
    obj = {
      photo: null,
      user: null,
    };
  }

  return obj;
}
