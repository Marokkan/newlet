// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import {ref} from "vue"
import { collection, addDoc, getDocs } from "firebase/firestore"; 



const firebaseConfig = {
    apiKey: "AIzaSyAN4COaO5lJ4NtnSrnLPrKbpHnWgzrenBk",
    authDomain: "newletters-test.firebaseapp.com",
    projectId: "newletters-test",
    storageBucket: "newletters-test.appspot.com",
    messagingSenderId: "129498839732",
    appId: "1:129498839732:web:079bbe2900fb6968a4b5e1"
};



const config = firebase.initializeApp(firebaseConfig)


export const db = getFirestore(config) //on va dans firestore



//export const MailCollection = db.collection("mail")







/*----------PRODUCTS COLLECTION--------------*/


export const AddMail = async(mail) =>{
    //return MailCollection.add(mail)
    console.log(mail);
    return await addDoc(collection(db, "mail"), mail);
}


export const GetMail = async (id) => {
    const mail = await MailCollection.doc(id).get()
    return  mail.exists ?  mail.data() : null

}


export const Delete = (id)=>{
    return MailCollection.doc(id).delete()

}


export const Upload = (id,mail)=>{
    return MailCollection.doc(id).update(mail)

}


export const LoadMail = async()=>{
    const snapshot = ref()
    const querySnapshot = await getDocs(collection(db, "mail"));
    

    return querySnapshot

    /*
    const close =  ProductCollection.onSnapshot(snapshot => {
        Events.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }) )
          
    })*/
        
    

}










