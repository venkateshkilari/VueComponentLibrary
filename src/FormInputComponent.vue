<template>
   <div>
       <b-form-input v-model="text" :type="inputType" @input="$emit('input',text)"></b-form-input>
   </div>
</template>
<script>
export  default {
    name: 'FormInputComponent',
    props:{
     inputType: {
         type: String,
         default: "text"
     }
    },
    data(){
        return {
            text:''
        }
    }
};
</script>
<style scoped>

</style>

