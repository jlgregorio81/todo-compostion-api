<template>
  <div class="container">      
    <div class="" >
      <div class="col-sm-12">
          <p>Created by</p>
          <img :src="picture" id="picture"/>
          <h2 class="text-secondary">Prof. Me. Jorge Luís Gregório</h2>
          <p><a target="_blank" href="https://www.jlgregorio.com.br">www.jlgregorio.com.br</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
      return {
          picture : require("../assets/me.jpg")
      }
  }  
}
</script>

<style scoped>

#picture{
    width: 128px;
    margin: 0 auto;
    border-radius: 128px;
    box-shadow: gray 3px 3px 3px;
    border: white medium solid;  
}

</style>


