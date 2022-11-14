<template>
  <section class="section bg-lightblue">
    <div class="container block has-text-centered">
      <h1 class="title is-3 patua">Andika's Dungeon</h1>
      <h2 class="subtitle heebo block pt-4 has-text-grey">Just a random blog with random posts from a random guy.</h2>
    </div>
  </section>

  <section class="section">
    <div class="container block">
      <div class="tabs heebo">
        <ul>
          <li class="is-active"><a>All</a></li>
          <li><a>School</a></li>
          <li><a>Programming</a></li>
          <li><a>Associates</a></li>
        </ul>
      </div>
    </div>

    <div class="container block">
      <div class="columns is-multiline">
        <div class="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet" v-for="i in 4">
          <Card textContent="Lorem ipsum dolor sit amet, adipsicing elit consectetur" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
