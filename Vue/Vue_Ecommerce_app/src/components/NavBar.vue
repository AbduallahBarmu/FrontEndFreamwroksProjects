<template>
  <div>
    <nav class="nav-container">
      <div class="logo">logo</div>
      <div class="nav-content">
        <ul>
          <li>
            <router-link :to="{ name: 'HomeView' }">Home</router-link>
          </li>
        </ul>
      </div>
      <div class="search__bar">
        <input class="search-bar-itme" type="text" placeholder="Search" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: rebeccapurple;
}

.nav-container {
  padding: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;
  /* float: left; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #cdb4db;
}
.logo {
  text-align: center;
  font-weight: 700;
  color: rebeccapurple;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.6s;
}
.nav-content ul {
}
.nav-container ul li {
  list-style: none;
}
.search__bar {
}
.search-bar-itme {
  padding: 0.75rem;
  border: 1px solid rebeccapurple;
  border-radius: 0.25rem;
}
</style>
