<template>
  <div>
 <button type="submit" class="btn btn-primary" @click="create">create table</button>
 <button type="submit" class="btn btn-primary" @click="insert">insert </button>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    methods:{
       async create() {
     let res = await this.$axios.get('http://localhost:3000/api/createtable');
     },
   async insert() {
     let res = await this.$axios.get('http://localhost:3000/api/createtable');
    }
    }

  }
</script>

<style lang="scss" scoped>

</style>