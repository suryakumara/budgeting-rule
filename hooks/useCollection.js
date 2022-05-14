import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";
import { db } from "../firebase/config";

const useCollection = (collectionName, _q) => {
  const [documents, setDocuments] = useState(null);
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, collectionName);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshots) => {
      let results = [];
      snapshots.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(results);
    });

    return () => unsub();
  }, [collectionName, q]);

  return { documents };
};

export default useCollection;
