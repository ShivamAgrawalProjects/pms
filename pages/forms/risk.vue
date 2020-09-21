<template>

    <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 20px 30px 260px">
        <nuxt-link to="" ><button type="button" class="btn btn-outline-secondary">Previous</button></nuxt-link>
          <form>
             
  <div class="form-row">
    <div class="form-group col-md-4">
         
         <label >Project Name:</label>
    <input type="text" class="form-control" id="Project Name" placeholder="Project Name"> 
      
    </div>
    <div class="form-group col-md-4">
       <label for="Project Type">Project Type:</label>
      <select id="Project Type" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select> 
    </div>
    
    
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
         
         <label for="RiskType">Risk Type:</label>
      <select id="RiskType" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select> 
      
    </div>
    
    
    
  </div>
      <div class="form-row">
    <div class="form-group col-md-8">
    <label for="inputAddress">Description:</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Description">
  </div>
  </div>
  <form>
  <div class="form-group">
  
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
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
.container1{
  
  box-shadow: 500px 500px 5px lightgrey;
  padding:40px;
    text-align: center;

}
</style>