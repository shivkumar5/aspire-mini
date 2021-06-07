<template>
  <div class="card-scroller">
    <div class="card-scroller--content" v-for="i in 3" :key="i"></div>
  </div>
</template>

<script>
export default{
  name:'CardScroller'
}
</script>