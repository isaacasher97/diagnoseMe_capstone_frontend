<template>
<div id="app">
<nav>
  <ul id="nav-container" class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://book.zocdoc.com/get-started?utm_source=google&utm_medium=cpc_brand&utm_campaign=10439133071&utm_term=zocdoc_e&utm_content=102297848623&gclid=Cj0KCQjwm66pBhDQARIsALIR2zADJLNP-jUChyWpkkpcDKEWVmzfmfxTd3ymfKexB9whj9iQDSuqGbcaAkWcEALw_wcB" target="_blank">Find A Doctor</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/diagnoseme">Diagnose Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/blog">Diagnoses ➕</a>
    </li>
  </ul>
</nav>
  <router-view/>
  </div>
</template>

<style>
body {
  background-color: #0beef9;
  background-image: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  font-size: 1.25em;
}

nav a {
  font-weight: bold;
  color: white;
}

#addLogo {
  max-width: 30px;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
