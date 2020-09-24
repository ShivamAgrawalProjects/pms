<template>
  <div>
    <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 20px 30px 260px">
       <div class="row">         <div class="col ">
     
      <nuxt-link to="#"><button type="button" class="btn btn-outline-secondary">Previous</button> </nuxt-link>
      </div>
       </div>
           <form>
             
  
               <Myform  :form="test"></Myform>

     
     </form>
     </div>
     </div>
  
</template>

<script>

import{MOM} from '../formsss/form'
import Myform from '@/components/Myform.vue'
  export default {
     layout: 'scrummasterlayout',
    data(){
      return{
        test: ProjForm
      }
    }
  }
</script>

<style >
.container1{
  
   box-shadow: 500px 500px 5px lightgrey;
   padding:40px;
     text-align: center;

 } 
</style>

























<!--<template>

    <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 20px 30px 260px">
       <!-- <a href="#">
        <i class="fa fa-link"></i>
        <span>Risk</span>
      </a> -->
      <!--<nuxt-link to="/sm/meeting">  <button type="button" class="btn btn-outline-secondary "><i class="fa fa-caret-left"></i>  Previous</button></nuxt-link>
          <form>
             
  <div class="form-row">
    <div class="form-group col-md-8">
      <label for="inputCity">Discuss: </label>
      <input type="text" class="form-control" id="inputReason">
    </div>
    
  </div>

  <div class="form-row">
    <div class="form-group col-md-4">
      <label >Start Date:</label>
      <input type="date" class="form-control" id="inputReason">
    </div>
     <div class="form-group col-md-4">
    <label>End Date: </label>
      <input type="date" class="form-control" id="inputReason">
     </div>
  </div>
 

  <div class="form-row">
    <div class="form-group col-md-4">
      <label >Remark: </label>
    <input type="text" class="form-control" id="Remark" placeholder="Add any remark">
   
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-8">
      <label >Description: </label>
    <input type="text" class="form-control" id="Description" placeholder="Add some description">
    </div>
  </div>
  
 <form>
  <div class="form-group">
    <input type="file" class="form-control-file " id="exampleFormControlFile1">
  </div>
</form>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>
<script>
    export default {
        layout: 'scrummasterlayout',
    }
</script>
<style >
.container1
{
    box-shadow: 500px 500px 5px lightgrey;
    padding:40px;
    text-align: center;
}
</style>-->