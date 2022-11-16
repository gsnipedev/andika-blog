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
      <div class="block has-text-centered">
        <p class="title is-4 patua">Checks my other projects</p>
      </div>
    </div>
  </section>
</template>

<style>
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
