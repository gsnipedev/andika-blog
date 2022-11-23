<script>
import { project } from "assets/db.json";

export default {
  data() {
    return {
      projects: project,
    };
  },
  methods: {
    VisitWeb(url) {
      window.open(url);
    },
  },
};
</script>

<template>
  <section class="section bg-lightblue">
    <TopSection title="About" sub="Guess you curious about this site, did'nt you?" />
  </section>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half-tablet is-one-third-desktop">
          <img src="/images/peace_square.jpg" alt="" />
        </div>
        <div class="column">
          <p class="heebo-bold is-5">-Hi, I'm andika</p>
          <div class="block">
            <p class="title patua">
              Based in indonesia, <br />
              I'm software engineer.
            </p>
          </div>
          <div class="block">
            <span>
              It's certainly no way to get notice today's marketplace.
              <br />
              quality content and proof is what it takes to make a developer shine.
            </span>
          </div>
          <div class="block">
            <span>
              This site is one of my proof,
              <br />
              and i made it because its fun.
            </span>
          </div>
          <client-only>
            <div class="block exp">
              <table>
                <tbody>
                  <tr>
                    <td rowspan="2">
                      <span class="title is-1 patua">3+</span>
                    </td>
                    <td>
                      <b>
                        <span class="heebo">Years of</span>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>
                        <span class="heebo">Programming Experience</span>
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </client-only>
        </div>
      </div>
      <hr />
      <div class="has-text-centered">
        <p class="title is-4 patua">Checks my other projects</p>
      </div>
      <div class="columns is-multiline mt-4">
        <div class="column is-half-tablet is-one-third-desktop" v-for="data in projects">
          <div class="card project-card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://picsum.photos/400/300" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="card-text heebo has-text-centered">
                {{ data.desc }}
              </div>
              <div class="has-text-centered pt-4">
                <button class="p-button patua" @click="(e) => VisitWeb(data.url)">Visit Website</button>
              </div>
            </div>
            <div class="status heebo">
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
              </svg>
              <span>on Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$lime: #00e87c;
$yellow: #f4d35e;

.status {
  transition: 0.2s;
  opacity: 0;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 1em;
  left: 1em;
  color: white;
  border: 2px solid $yellow;
  border-radius: 5px;
  padding-right: 1em;
  background-color: transparent;

  > svg {
    color: $yellow;
  }

  > span {
    font-size: 14px;
  }
}

.p-button {
  border-radius: 9999px;
  background-color: transparent;
  color: white;
  padding-block: 0.75em;
  padding-inline: 1.5em;
  border: 2px solid $lime;
  font-size: 1rem;
  transition: 0.2s;

  &:hover {
    background-color: $lime;
    cursor: pointer;
    color: black;
  }
}

.project-card {
  overflow: hidden;

  &:hover {
    img {
      scale: 1.1;
      filter: brightness(0) blur(3px);
    }

    > .card-content {
      opacity: 1;
    }

    > .status {
      opacity: 1;
    }
  }

  img {
    transition: 0.4s;
  }
}

.card-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  opacity: 0;
  transition: 0.2s;
  width: 100%;
  align-items: center;

  > .card-text {
    color: white;
    font-size: 20px;
  }
}

.exp {
  border: 3px solid var(--lightblue);
  width: fit-content;
  padding-right: 10px;
  padding-block: 5px;
  border-radius: 5px;
}

td {
  padding-left: 10px;
}
</style>
