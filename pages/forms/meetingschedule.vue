<template>

<<<<<<< HEAD
     <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 20px 30px 260px">
       <nuxt-link to="/sm/meeting"> <button type="button" class="btn btn-outline-secondary ">Previous</button></nuxt-link>
=======

    <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 20px 30px 260px">
>>>>>>> 29e019486bcc631cb152bec28b9094176c6e36dd
       <!-- <a href="#">
        <i class="fa fa-link"></i>
        <span>Risk</span>
      </a> -->
          <form>
             <Myform  :form="test"></Myform>
          </form>
  <!-- <div class="form-row">
    <div class="form-group col-md-8">
      <label for="inputCity">Reason</label>
      <input type="text" class="form-control" id="inputReason">
    </div> --> 
    
  <!-- </div>

  <div class="form-row">
    <div class="form-group col-md-4">
      <label >Date:</label>
      <input type="date" class="form-control" id="inputReason">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Time</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Shivam</option>
        <option>Rashi</option>
        <option>Sumeet</option>
      </select>
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Sprint</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Shivam</option>
        <option>Rashi</option>
        <option>Sumeet</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Duration</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>-->
    </div> 
</template>

<script>
import{SchedMeeting} from '../formsss/form'
import Myform from '@/components/Myform.vue'

     export default {
     layout: 'scrummasterlayout',
    data(){
      return{
        test: SchedMeeting
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