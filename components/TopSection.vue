<script>
export default {
  props: {
    title: String,
    sub: String,
  },
};
</script>

<template>
  <div class="container block has-text-centered">
    <h1 class="title is-3 patua">{{ title }}</h1>
    <div class="block">
      <h2 class="subtitle heebo pt-4 has-text-grey">{{ sub }}</h2>
    </div>
  </div>
</template>
