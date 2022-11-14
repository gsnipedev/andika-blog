<script>
export default {
  props: {
    textContent: String,
  },
  methods: {
    ReadArticle() {
      window.location.href = "article/1";
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by2">
        <img src="~/public/andikapeace.jpg" alt="Placeholder image" />
      </figure>
    </div>
    <div class="box bg-lightblue mt-2 bebas">#School</div>
    <div class="title is-5 patua">The Peace Out</div>
    <div class="card-content">
      <div class="content">
        {{ textContent }}
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <button class="button patua" @click="ReadArticle">Read More</button>
  </div>
</template>

<style lang="scss">
$lime: #00e87c;

.card {
  box-shadow: none;
}
.box {
  box-shadow: none;
  padding-block: 10px;
  letter-spacing: 2px;
  margin-bottom: 10px !important;
}

.card-content {
  padding-inline: 0;
  padding-block: 0.5rem;
}

.title {
  margin-bottom: 0.5rem !important;
}

.card-content {
  margin-bottom: 1rem;
}

.button {
  background-color: $lime;
}
</style>
