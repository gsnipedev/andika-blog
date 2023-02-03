<script>
import { article } from "assets/db.json";

export default {
  data() {
    const id = this.$route.params.id;

    if (article[id] == null) navigateTo("/");

    return {
      article: article[id],
    };
  },
};
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="title patua">{{ article.title }}</p>
      <div class="block">
        <span class="mainsubtitle subtitle heebo"> {{ article.subtitle }} </span>
      </div>
      <img :src="article.imgsource" alt="Article main image" class="block" />
      <div class="block heebo">
        <b>{{ article.title }}</b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a nostrum doloribus nisi sunt veniam ipsum earum,
        ipsam dolore dolorum quisquam libero repudiandae, nobis natus et quis illum accusamus hic.
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  height: 800px;
  object-fit: cover;
}
.mainsubtitle {
  font-size: 1.1em;
}
.container {
  @media (min-width: 992px) {
    max-width: 992px !important;
  }
}
</style>
