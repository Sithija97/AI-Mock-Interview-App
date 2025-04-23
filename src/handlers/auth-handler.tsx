import { db } from "@/config/firebase.config";
import { LoaderPage } from "@/pages";
import { IUser } from "@/types";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const storeUserData = async () => {
    if (isSignedIn && user) {
      setLoading(true);

      try {
        const userSnapshot = await getDoc(doc(db, "users", user.id));
        if (!userSnapshot.exists()) {
          // store user
          const userData: IUser = {
            id: user.id,
            name: user.fullName || user.firstName || "Unknown",
            email: user.primaryEmailAddress?.emailAddress || "N/A",
            imageUrl: user.imageUrl,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };

          await setDoc(doc(db, "users", user.id), userData);
        }
      } catch (error) {
        console.log("Error on storing user data : ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    storeUserData();
  }, [isSignedIn, user, pathname, navigate]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
};
