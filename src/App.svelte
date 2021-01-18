

<!--
<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scene";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>
-->
<script>
import Navbar from './Navbar.svelte'
import Home from './home.svelte'
import Sneaker from './sneaker.svelte';
import Tshirt from './tshirt.svelte';
import Cleat from './cleat.svelte';

</script>

<style>

</style>

<section class="hero is-info is-large">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="is-family-monospace">RYAN BRAY</span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item is-active">
              Home
            </span>
            <span class="navbar-item is-active">
              About
            </span>

            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Resume</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        The Future of the Shoe
      </p>
      <p class="subtitle">
        Material Science
      </p>
    </div>
  </div>

</section>


  <Sneaker/>
  <Tshirt/>
  <Cleat/>

<svelte:head>
	<link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  />
  
</svelte:head>