<template>
  <div class="app">
    <main>
      <div class="left-main">
        <h1>
          <span>WEBIGN</span>, perfectely agency for your website
        </h1>
        <form @submit.prevent="AddMailDB()" >
          <input type="email" v-model="mail" placeholder="e.g mymail@gmail.com" class="input-mail">
          <input type="submit" class="submit" value="SUBSCRIBE">
        </form>
      </div>
      <div class="right-main">
        <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.790635230.1663525066" alt="">
      </div>
    </main>
  </div>
</template>

<script>
import {ref} from "vue"
import {AddMail} from "../firestore"
import {SendEmail} from "../service/service"
import axios from "axios"


export default {
  setup(){


    fetch("/.netlify/functions/products").then(res => res.json()).then(res => console.log(res))



    
    const mail = ref("")

    const AddMailDB = ()=>{
      //
      if(mail.value){
        AddMail({mail:mail.value}).then(data => console.log(data))
        mail.value = ""
        
      }


    }



    return{
      mail,
      AddMailDB
    }

  },

  

  



}

</script>



<style scoped>

main{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

h1{
  color: rgb(20, 20, 20);
  font-size:3em;
}

h1 span{
  color:#20969B ;
}

form{
  display: flex;
  gap: 5px;
  margin: 60px 0px;
}

.input-mail{
  background-color: #a1a1a120;
  width: 200px;
}

.submit{
  background-color: #20969B;
  color: white;
}

form input{
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
}

</style>