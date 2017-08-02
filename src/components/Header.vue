<template>
  <div id="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'This is the header.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header {
  height: 10rem;
  border: 1px solid black;
}

h1, h2 {
  font-weight: normal;
}
</style>
