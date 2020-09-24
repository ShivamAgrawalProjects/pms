<template>
  <div>
<Myform  :form="test"></Myform>
  </div>
</template>

<script>
import{sellerForm} from '../formsss/form'
import Myform from '@/components/Myform.vue'
  export default {
    data(){
      return{
        test: sellerForm
      }
    }
  }
</script>

<style >

</style>













     <!-- <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 20px 30px 260px">
//       <div class="row">
//         <div class="col ">
//      <nuxt-link to="/sm/dashboard"><button type="button" class="btn btn-outline-secondary">Previous</button> </nuxt-link>
//      </div>
//       </div>
//           <form>
             
//   <div class="form-row">
//     <div class="form-group col-md-4">
         
//          <label >Project Name:</label>
//     <input type="text" class="form-control" id="Project Name" placeholder="Project Name"> 
      
//     </div>
//     <div class="form-group col-md-4">
//       <label >Project Type:</label>
//     <input type="text" class="form-control" id="Project Type" placeholder="Project Type">
//     </div>
    
    
//   </div>
//   <div class="form-row">
//     <div class="form-group col-md-4">
         
//          <label for="ProjectOwner">Project Owner:</label>
//       <select id="ProjectOwner" class="form-control">
//         <option selected>Choose...</option>
//         <option>Shivam</option>
//         <option>Rashi</option>
//         <option>Sumeet</option>
//       </select> 
      
//     </div>
//     <div class="form-group col-md-4">
//       <label for="TeamLead">Team Lead:</label>
//       <select id="TeamLead" class="form-control">
//         <option selected>Choose...</option>
//         <option>Shivam</option>
//         <option>Rashi</option>
//         <option>Sumeet</option>
//         <option>Ajay</option>
//         <option>Harshu</option>
//         <option>Deepak</option>

//       </select>
//     </div>
    
    
//   </div>
//       <div class="form-row">
//     <div class="form-group col-md-8">
//     <label for="inputAddress">Description:</label>
//     <input type="text" class="form-control" id="inputAddress" placeholder="Description">
//   </div>
//   </div>
//   <form>
//   <div class="form-group">
  
//     <input type="file" class="form-control-file" id="exampleFormControlFile1">
//   </div>
// </form>
  
  
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div> -->
<!-- // </template>

// <script>
//     // export default {
//     //     layout: 'scrummasterlayout',
        
//     }
// </script>

// <style >
// /* .container1{
  
//   box-shadow: 500px 500px 5px lightgrey;
//   padding:40px;
//     text-align: center;

// } */
// </style> -->