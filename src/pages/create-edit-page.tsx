import { db } from "@/config/firebase.config";
import { FormMockInterview } from "@/organisms";
import { Interview } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CreateEditPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);

  const fetchInterview = async () => {
    if (interviewId) {
      try {
        const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
        if (interviewDoc.exists()) {
          setInterview(interviewDoc.data() as Interview);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchInterview();
  }, [interviewId]);

  return (
    <div className="my-4 flex-col w-full">
      <FormMockInterview initialData={interview} />
    </div>
  );
};
