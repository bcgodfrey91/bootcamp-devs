<template>
  <div class="hello">
    <Header></Header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
  name: 'hello',
  data() {
    return {
      msg: 'Butts. Lots of Butts.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
