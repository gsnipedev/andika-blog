<template>
  <section class="bg-lightblue">
    <nav class="navbar container p-2 bg-none" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="title is-4 heebo-black">Andika W.</span>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="#mainNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNavbar" class="navbar-menu heebo">
        <div class="navbar-end">
          <a class="navbar-item is-active"> Home </a>
          <a class="navbar-item"> Contact </a>
          <a class="navbar-item"> About </a>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped lang="scss">
$lime: #00e87c;
.navbar-item:hover {
  background-color: $lime;
  border-radius: 5px;
  color: black;
  font-weight: 600;
}
</style>
