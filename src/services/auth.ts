import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user.providerData[0];
  } catch (error) {
    console.log(error);
  }
};

export const AuthService = {
  signInWithGoogle,
};
