<template>
  <div>
   <button @click="createtable()">Create Table</button>
   <button @click="insertdata()">Insert Data</button>
   <button @click="deletedata()">Delete Data</button>
   <button @click="updatedata()">Update or Edit Data</button>
   <button @click="deletetable()">Delete Table</button>

  </div>
</template>

<script>
import axios from "axios"
export default {
  methods:{

    async createtable(){
      let res= await this.$axios.get('http://localhost:3000/api/createtable');
      console.log(res);
    },
    async deletetable(){
      let res= await this.$axios.get('http://localhost:3000/api/deletetable');
      console.log(res);
    },
    async deletedata(){
      let res= await this.$axios.get('http://localhost:3000/api/deletedata');
      console.log(res);
    },
    async updatedata(){
      let res= await this.$axios.get('http://localhost:3000/api/updatedata');
      console.log(res);
    },
    async insertdata(){
      let res= await this.$axios.get('http://localhost:3000/api/insertdata');
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>