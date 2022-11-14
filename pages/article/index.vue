<template>
  <section class="section bg-lightblue">
    <div class="container block has-text-centered">
      <h1 class="title is-3 patua">Articles</h1>
      <h2 class="subtitle heebo block pt-4 has-text-grey">Is a place where to read some random posts.</h2>
    </div>
  </section>

  <section class="section">
    <div class="container block">
      <div class="columns">
        <div class="tabs patua column">
          <ul>
            <li class="is-active"><a>All</a></li>
            <li><a>School</a></li>
            <li><a>Programming</a></li>
            <li><a>Associates</a></li>
          </ul>
        </div>
        <div class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd">
          <div class="control">
            <input class="input heebo" type="text" placeholder="Search for articles" />
            <button class="patua">Search</button>
          </div>
        </div>
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

<style scoped lang="scss">
$lime: #00e87c;

.tabs {
  > ul > li > a {
    color: gray;
  }
}
.is-active {
  > a {
    color: black !important;
    border-color: black !important;
  }
}
.control {
  position: relative;

  > button {
    position: absolute;
    right: 0;
    top: 0;
    height: 90%;
    padding-inline: 1.5rem;
    background-color: var(--lightblue);
    border: none;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: $lime;
    }
  }

  > input {
    outline: none !important;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    padding-right: 100px;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>
