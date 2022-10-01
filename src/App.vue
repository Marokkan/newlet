<template>
  <nav>
    <div class="left">
      <img src="./assets/webign.png" class="logo" alt="LOGO">
    </div>
    <div class="right">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

  </nav>
  <router-view/>
</template>


<style>

ul,h1,h2,h3,a{
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}

body{
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0px 10%;
}



nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;
}

img.logo{
  width: 70px;
}

nav ul {
  display: flex;
  gap: 30px;
}

nav li {
  font-size: 23px;
  color: #898989;
  cursor: pointer;
}

nav li:hover{
  color: #20969B;
}


</style>
