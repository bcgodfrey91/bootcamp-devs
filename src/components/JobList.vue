<template>
  <div id="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import firebase from '../firebase.js'

export default {
  name: 'JobList',
  data() {
    return {
      msg: 'These are the jobs.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header {
  height: 20rem;
  border: 1px solid black;
}

h1, h2 {
  font-weight: normal;
}
</style>
