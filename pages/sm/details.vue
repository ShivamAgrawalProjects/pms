<template>
  <div>
    <form class="form-inline hello bg-light">
           <div class="row">
               <div class="col">
             <ul class="nav nav-tabs hi" id="myTab" role="tablist">
  <li class="nav-item hi1" role="presentation">
    <a class="nav-link  active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Backlog</a>
  </li>
  <li class="nav-item hi1" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Boards</a>
  </li>
  <li class="nav-item hi1" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reports</a>
  </li>
  <li>
 <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
  </li>
  <li>
            <nuxt-link to="/forms/createproject" > <button class="btn btn-primary createproject">Create Projects</button></nuxt-link>
  </li>    
</ul>
               </div>
            <!-- <div class="col-md-2">
                <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search">
            </div> -->
           <!-- <div class="col-md-2">
          <nuxt-link to="/forms/createproject" > <button class="btn btn-primary createproject">Create Projects</button></nuxt-link>
           </div> -->
           </div>
        </form>
    </div>
</template>

<script>
    export default {
        layout: 'scrummasterlayout',
    }
</script>
<style>
.search {
  margin-left: 180px;
  padding-left: 10px;

}
.createproject{
    margin-left: 20px;
    width: 150px;
}
.hello {
   background-color: rgba(17, 24, 24, 0.541);
   padding: 8px;
   margin-top: -25px;
   z-index: auto;
}
.hi1{
    padding-left: 100px;
}
.hi{
    padding-left: 200px;
}

</style>