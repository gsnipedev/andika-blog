<template>
  <section class="bg-lightblue">
    <nav class="navbar container p-2 bg-none" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="title is-4 patua">Andika W.</span>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="#mainNavbar">
          <svg style="width: 32px; height: 32px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
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

.navbar-burger {
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1023px) {
    display: none;
  }
}
.navbar-end {
  padding-block: 10px;
}
.navbar-item {
  font-weight: 600;
  color: gray;
  padding-inline: 20px;
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    background-color: $lime;
    color: black;
  }

  &:focus {
    background-color: $lime;
    color: black;
    outline: 2px solid black;
  }
}
</style>
