<script lang="ts">
export default {
  data() {
    return {
      isShow: false,
      firstname: "",
      lastname: "",
    };
  },
  methods: {
    toggleOn(firstname: string, lastname: string) {
      this.isShow = true;

      this.firstname = firstname;
      this.lastname = lastname;
    },
    toggleOff() {
      this.isShow = false;
    },
  },
};
</script>

<template>
  <section class="section" :class="{ active: isShow }">
    <div class="container">
      <button @click="toggleOff" class="CloserButton">
        <svg style="width: 25px; height: 25px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
          />
        </svg>
      </button>

      <div class="block has-text-centered">
        <span class="title is-2 patua">Thank You!</span>
      </div>
      <div class="block has-text-centered">
        <span class="subtitle heebo">Thanks for reaching me, {{ firstname }} {{ lastname }}.</span>
      </div>

      <div class="block has-text-centered gif-container">
        <img src="https://media.tenor.com/5iyMxIjFxhcAAAAM/hug-k-on.gif" alt="" width="300" />
      </div>

      <div class="block has-text-centered gif-container">
        <button class="confirmButton button patua" @click="toggleOff">I Know</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$lime: #00e87c;
.confirmButton {
  padding-inline: 2em;
  transition: 0.2s;
  border: none;
  background-color: var(--lightblue);

  &:hover {
    background-color: $lime;
  }
}
.CloserButton {
  position: absolute;
  top: 0px;
  right: 10px;
  display: grid;
  place-items: center;
  border-radius: 9999px;
  aspect-ratio: 1;
  outline: none;
  border: none;
  color: gray;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: black;
  }
}
.section {
  height: 100vh;
  width: 100%;
  z-index: 9999;

  background-color: white;
  position: absolute;
  transition: 0.2s;
  display: none;
}

.active {
  top: 0;
  display: block;
  visibility: visible;
  position: sticky;
}
</style>
