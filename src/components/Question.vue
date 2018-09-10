<template>
    <h1>"{{ quote[0].quote }}"</h1>
</template>

<script>
export default {
  name: 'Question',
  props: {
    sharedState: Object,
    quote: Array
  }
}
</script>
<style scoped>
h1 {
    width: 80%;
    display: block;
    margin: 30px auto;
}
</style>
