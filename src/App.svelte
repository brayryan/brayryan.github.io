

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
import Resume from './resume.svelte'
import Sneaker from './sneaker.svelte';
import Tshirt from './tshirt.svelte';
import Cleat from './cleat.svelte';
import Particles from "svelte-particles";



  let particlesConfig = {
    background: {
      color: "#0a0a0a"
    },
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        enable: true,
        color: "#fff",
      },
      move: {
        enable: true,
      },
    },
  };
 
  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
 
    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

</script>

<style>
/* #particle-container {
  position: absolute;
  width: 100%;
  height: 100%;
} */
:global(#particles-js canvas) {
  position: absolute;
  height: 100vh;
  z-index: -1;
}

.hero.is-black {
  background: transparent;
}

.background {
  background-image: linear-gradient(165deg,#1b293a 33%, #4592a0 33%,#4592a0 66%, #000000 66%);
}
/* 4592a0 */
.background1 {
  background: #8bc8cb;
}

.background2 {
  background: #e3d1ad;
}

.background3 {
  background: red;
}

.background4 {
  background: #3b4b64;
}

p1 {
		color: white;
		font-family: 'Brush Script MT', cursive;
		font-size: 3em;
	}
</style> 

  <Particles
  id="particles-js"
  options="{particlesConfig}"
  on:particlesLoaded="{onParticlesLoaded}"
/>


<section class="hero is-black is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <p1>
            Ryan Bray
          </p1>
          <!-- <span class="is-family-cursive is-size-5">
            Ryan Bray
          </span> -->
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a href="/" class="navbar-item">
              Home
            </a>

            <span class="navbar-item">
              <a href="build/images/Bray_Ryan_Resume_15-Nov-2020.pdf" target="_blank" class="button is-info is-inverted">
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
      <p class="is-size-1">
        Material Technologies of the Future
      </p>
      <p class="subtitle">
        The latest innovation in athletics, fashion, and footwear
      </p>
    </div>
  </div>

</section>

<div class="background4">
  <p>&nbsp;</p>
  <p>&nbsp;</p>
</div>

<!-- <div class="background1">
  <Sneaker/>
</div>
<div class="background2">
  <Tshirt/>
</div>
<div class="background3">
  <Cleat/>
</div> -->
<div class="background">
  <Sneaker/>
  <Tshirt/>
  <Cleat/>
</div>

  

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