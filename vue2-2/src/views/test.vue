<template>
  <div class="about">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
export default {
  name: 'test',
  components: {
    HelloWorld: () => import('vue2/HelloWorld')
  }
}
</script>
