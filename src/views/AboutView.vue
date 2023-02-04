

<!--       

<template>
  <div class="app">
    <h2>SEND EMAIL TO ALL CONTACT </h2>
    <button @click="SendAll">Send emails</button>
    {{data}}
  </div>
</template>




<script>
import { SendEmail } from '../service/service'
import {LoadMail} from "../firestore"
import { onBeforeMount, ref } from 'vue'

export default {
  setup(){
    const data = ref([])

    const SendAll = ()=>{
      setTimeout(() => {
        LoadMail().then(res => {
          res.forEach(res => {
            SendEmail({email:"marrokkan6@gmail.com"})
          })
        })
      }, 1000);

    }



    return{
      data,
      SendAll

    }
  }
}
</script>



<style scoped>




</style>

-->



