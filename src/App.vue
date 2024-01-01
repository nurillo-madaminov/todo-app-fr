<template>
  <!--hello 2024-->
  <h1 class="bg-text">stuff i need to do</h1>
  <div>
    <sidebar/>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components: {
    "sidebar": Sidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 700px;
  margin: auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style:none;
}
body {
  background-color: #306FCD;
}
.bg-text {
  font-size:  60px;
  font-weight: 900;
  color: rgba(0, 0, 0, .1);
  text-transform: uppercase;
  margin-bottom: 50px;
}
</style>
