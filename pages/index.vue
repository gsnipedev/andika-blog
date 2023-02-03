<script>
import { article } from "assets/db.json";

export default {
  data() {
    return {
      article,
    };
  },
};
</script>

<template>
  <section class="section bg-lightblue">
    <TopSection title="Andika's Dungeon" sub="Just a random blog with random posts from a random guy." />
  </section>

  <section class="section" style="padding-bottom: 0 !important">
    <div class="container block">
      <div class="columns">
        <div class="column is-half-tablet is-one-quarter-fullhd">
          <img src="/images/andikahang.jpg" alt="" class="is3by2" />
        </div>
        <div class="column">
          <div class="block patua title is-4">Andika : Software Engineer</div>
          <div class="block heebo">
            <b> Software Engineer /`sôf(t)wer ˌenjə`nir/, </b>
            <span>
              adalah ahli yang bertugas merancang, mengembangkan, mengelola, menguji, hingga mengevaluasi perangkat
              lunak komputer (software).
            </span>
          </div>
          <div class="block heebo">
            <ul class="list">
              <li>Mengembangkan sistem informasi dengan merancang, memgembangkan, dan menginstal perangkat lunak.</li>
              <li>
                Mengembangkan perangkat lunak sesuai kebutuhan pengguna dengan mempelajari proses kerja dan pengguna
                data.
              </li>
              <li>Mengidentifikasi masalah di perangkat lunak dan melakukan perbaikan sistem.</li>
            </ul>
          </div>
        </div>
      </div>
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
        <div class="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet" v-for="(data, index) in article">
          <Card :id="index" :textContent="data.subtitle" :cTag="data.tag" :title="data.title" :img="data.imgsource" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$lime: #00e87c;
$grey: #cdcdcd;

.list {
  list-style-type: disc;
  padding-left: 2rem;
}

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
    transition: 0.3s all;
    &:hover {
      cursor: pointer;
      background-color: $lime;
    }
  }

  > input {
    outline: none !important;
    border: none;
    border-bottom: 1px solid $grey;
    padding-right: 100px;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>
