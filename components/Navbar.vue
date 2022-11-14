<template>
  <section class="bg-lightblue">
    <nav class="navbar container p-2 bg-none" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="title is-4 patua">Andika W.</span>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="#mainNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNavbar" class="navbar-menu heebo">
        <div class="navbar-end">
          <a class="navbar-item" href="/"> Home </a>
          <a class="navbar-item" href="article"> Article </a>
          <a class="navbar-item" href="contact"> Contact </a>
          <a class="navbar-item" href="about"> About </a>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped lang="scss">
$lime: #00e87c;

.navbar-end {
  padding-block: 10px;
}
.navbar-item {
  font-weight: 600;
  color: gray;
  padding-inline: 20px;
  border-radius: 5px;

  &:hover {
    background-color: $lime;
    color: black;
  }
}
</style>
