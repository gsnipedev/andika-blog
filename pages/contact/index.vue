<script>
export default {
  methods: {
    HitWa() {
      window.location.href = "https://wa.me/6287720588638";
    },
    HitEmail() {
      window.location.href = "mailto:andikawpb200@gmail.com";
    },
    HitPhone() {
      window.open("tel:+6282382878591");
    },
    SubmitLetter(e) {
      e.preventDefault();
      this.ShowDrawer();
    },
    ShowDrawer() {
      this.$refs.drawer.toggleOn(this.firstname, this.lastname);
    },
  },

  data() {
    return {
      firstname: "",
      lastname: "",
      message: "",
    };
  },
};
</script>

<template>
  <BottomDrawer ref="drawer" />
  <section class="section bg-lightblue">
    <TopSection title="Contact" sub="Any question?" />
  </section>

  <section class="section">
    <div class="container letter-composer">
      <div class="columns is-multiline">
        <div class="column is-one-third-tablet is-half-desktop">
          <div class="block">
            <span class="title is-1 patua">Message Me</span>
          </div>
          <div class="block">
            <span class="heebo">
              Any questions regarding my blog, collaboration, or my site in general? Looking for web developer, and or
              another type of software development? Do not hesitate to compose a letter to me.
            </span>
          </div>
          <div class="block">
            <span class="heebo"> Or alternatively you could use my contacts below. </span>
          </div>
        </div>
        <div class="column">
          <form @submit="(e) => SubmitLetter(e)">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label l-required" aria-required="true">Firstname</label>
                  <div class="control">
                    <input class="input heebo" type="text" required aria-required="true" v-model="firstname" />
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Lastname</label>
                  <div class="control">
                    <input class="input heebo" type="text" v-model="lastname" />
                  </div>
                </div>
              </div>
            </div>
            <div class="control" style="width: 100%">
              <textarea
                name=""
                id=""
                rows="10"
                class="heebo"
                placeholder="What's up?"
                maxlength="1000"
                v-model="message"
              ></textarea>
              <div>
                <span :class="{ 'max-limit': message.length === 1000 }"> {{ message.length }}/1000 </span>
                <button type="submit" class="button patua">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third contact-image">
          <img src="/images/peace_square.jpg" alt="" class="is1by1" />
        </div>

        <div class="column">
          <div class="box" @click="HitWa">
            <table>
              <tbody>
                <tr>
                  <td>
                    <svg style="width: 52px; height: 52px" viewBox="0 0 24 24">
                      <path
                        fill="green"
                        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
                      />
                    </svg>
                  </td>
                  <td class="contact-info" style="width: 100%">
                    <span> Message me on whatsapp </span>
                    <br />
                    <span class="patua"> +62 877-2058-8638 </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="box" @click="HitEmail">
            <table>
              <tbody>
                <tr>
                  <td>
                    <svg style="width: 52px; height: 52px" viewBox="0 0 24 24">
                      <path
                        fill="#3b82f6"
                        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                      />
                    </svg>
                  </td>
                  <td class="contact-info" style="width: 100%">
                    <span> Write an email to me </span>
                    <br />
                    <span class="patua"> andikawpb200@gmail.com</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="column">
          <div class="box" @click="HitPhone">
            <table>
              <tbody>
                <tr>
                  <td>
                    <svg style="width: 52px; height: 52px" viewBox="0 0 24 24">
                      <path
                        fill="crimson"
                        d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                      />
                    </svg>
                  </td>
                  <td class="contact-info" style="width: 100%">
                    <span> Call me directly </span>
                    <br />
                    <span class="patua"> +62 823-8287-8591 </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$lime: #00e87c;

button {
  float: right;
  padding-inline: 2em;
  background-color: $lime;
}

input {
  box-shadow: none !important;
  border-color: gray;

  &::placeholder {
    color: gray;
  }
}

.max-limit {
  color: red;
}

textarea {
  min-width: 100%;
  min-height: 150px;
  padding: 1em;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  font-size: 16px;
  resize: vertical;
  overflow: visible;

  &:focus {
    border-color: blue;
  }
}
.l-required {
  &::after {
    content: "*";
    color: red;
  }
}
.contact-image {
  display: none;

  @media (min-width: 1215px) {
    display: block;
  }
}
.contact-info {
  padding-left: 1em;
}

.box {
  &:hover {
    cursor: pointer;
    background-color: var(--lightblue);
  }
}
</style>
