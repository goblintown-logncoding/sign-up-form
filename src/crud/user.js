import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../configs/firebase";

const userRef = collection(db, "user");

export const setUser = ({
    name,
    date,
    country,
    phone,
    email,
}) => {
    console.log(name);
    console.log(date);
    console.log(country);
    console.log(phone);
    console.log(email);
    setDoc(doc(userRef, "sign-up-user"), {
        name,
        date,
        country,
        phone,
        email
    });
}

export const getUser = async () => {
    const docRef = doc(db, "user", "sign-up-user");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    }
}