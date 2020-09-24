<template>

    <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 20px 30px 260px">
       <!-- <a href="#">
        <i class="fa fa-link"></i>
        <span>Risk</span>
      </a> -->
       <button type="button" class="btn btn-outline-secondary"><i class="fa fa-caret-left"></i>  Back</button>
  <form>  <Myform  :form="test"></Myform>  </form>             
  <!-- <div class="form-row">
    <div class="form-group col-md-8">
      <label for="inputCity">Requirments:</label>
      <input type="text" class="form-control" id="inputReason">
    </div>
    
  </div>

  <div class="form-row">
    <div class="form-group col-md-4">
      <label >Start Date:</label>
      <input type="date" class="form-control" id="inputReason">
    </div>
     <div class="form-group col-md-4">
      <label > End Date:</label>
      <input type="date" class="form-control" id="inputReason">
    </div>
     </div>

  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Priority</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>


    
    
    <div class="form-group col-md-4">
      <label for="inputState">Description</label>
      <input type="text" class="form-control" id="inputReason">
    </div>
  </div>

  <form>
  <div class="form-group">
  
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form> -->
    </div>
</template>

<script>
   import{OwnerBacklog} from '../formsss/form'
import Myform from '@/components/Myform.vue'
  export default {
     layout: 'scrummasterlayout',
    data(){
      return{
        test: OwnerBacklog
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