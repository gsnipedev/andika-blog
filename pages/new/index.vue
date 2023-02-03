<script setup></script>

<script>
export default {
  data() {
    return {
      textWatcher: "",
    };
  },
  setup: {},
};
</script>

<template>
  <section class="section bg-lightblue">
    <TopSection title="New Article" sub="Make sure your title is to the point" />
  </section>

  <legend>aawd</legend>

  <section class="section mb-5">
    <div class="container">
      <div class="control has-text-centered is-centered columns">
        <div class="fcontainer">
          <form action="">
            <input class="input mb-2 heebo" type="text" placeholder="Title" />

            <div class="mb-4 heebo select-container" style="width: 100%">
              <select class="g-select" style="width: 100%">
                <option value="1">School</option>
                <option value="2">Programming</option>
                <option value="3">Associate</option>
              </select>
              <span class="patua">Category</span>
            </div>

            <textarea
              class="textarea mb-2 heebo"
              maxlength="5000"
              v-model="textWatcher"
              placeholder="e.g. Hello there, I'm using andika's blog"
              rows="10"
            ></textarea>
            <span style="float: left" :class="{ red: textWatcher.length === 5000 }">{{ textWatcher.length }}/5000</span>
            <button class="button btn-submit patua" type="submit">Submit</button>
            <button class="button mr-2 patua" type="reset">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$lime: #00e87c;

.select-container {
  position: relative;
  > span {
    position: absolute;
    right: 10px;
    top: 20%;
    color: gray;
    border-left: 1px solid gray;
    padding-left: 10px;
  }
}

.button {
  box-shadow: none !important;
}

.red {
  color: crimson;
}

.btn-submit {
  background-color: $lime;
}

.button {
  padding-inline: 1.5em;
  float: right;
}

.fcontainer {
  max-width: 768px;
  width: 100%;
}

.g-select {
  background-color: #f6f8fa;
  border-width: 1px;
  border-radius: 4px;
  border-color: hsl(0deg, 0%, 86%);

  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);

  line-height: 1.5;
  font-size: 1em;

  &:focus {
    box-shadow: none;
    background-color: white;
    border-color: transparent;
    outline: 2px solid #2da44e;
  }

  &::placeholder {
    color: gray;
  }

  appearance: none;
}

.input {
  background-color: #f6f8fa;
  border-width: 1px;

  &:focus {
    box-shadow: none;
    background-color: white;
    border-color: transparent;
    outline: 2px solid #2da44e;
  }

  &::placeholder {
    color: gray;
  }
}

.textarea {
  background-color: #f6f8fa;
  border-width: 1px;
  box-shadow: none !important;

  &:focus {
    background-color: white;
    border-color: transparent !important;
    outline: 2px solid #2da44e;
  }

  &::placeholder {
    color: gray;
  }
}
</style>
