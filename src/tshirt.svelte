<script>
    
    import { onMount } from 'svelte';
      import { createScene } from "./tshirt";
      let el;
      onMount(() => {
        createScene(el);
      });
    </script>

<style>

</style>
<div class="container">
    <!-- <div class="has-background-danger"> -->
        <div class="columns is-vcentered">
            <div class="column is-two-third">
                <canvas bind:this={el}></canvas>
            </div>
            <div class="column is-one-third">
                <div class="tile">
                    <article class="tile is-child notification  is-warning">
                        <div class="content">
                            <p class="title">E-Textiles and Smart Textiles</p>
                            <p>Some of the more recent innovations in the material industry are combining electronics and textiles. Conductive materials are manufactured into the fibers that can be used to transmit data. This combination could create unique abilities like collection of biometric and external data.</p>
                            <p class="has-text-weight-bold">Potential Applications</p>
                            <ul>
                                <li>Jacket that pairs with smartphone app</li>
                                <li>Shirt that measures heart rate</li>
                                <li>Shorts that give feedback on proper form during sports</li>
                            </ul>
                            <p>Smart materials are materials of the future. Smart materials are intelligent materials that react when applied to environmental stimuli. Properties can change by things like stress, moisture, electricity, light, temperature, and more. The materials have amazing capabilities and smart textiles are one of the ways we can harness them.</p>
                            <p class="has-text-weight-bold">Potential Applications</p>
                            <ul>
                                <li>Clothing that changes color based on the season</li>
                                <li>Body temperature control</li>
                            </ul>
                        </div>
                        
                    </article>
                    </div>
            </div>


        </div>
    <!-- </div> -->
</div>



<!-- /* canvas {
    width: 100%;
}
</style>
<div class="tile">
    <div class="model-column">
        <canvas bind:this={el}></canvas>
    </div>
    <div class="text-column">
        <h1>   
            <center>E-Textiles and Smart Textiles</center>
        </h1>
        <p>
            Some of the more recent innovations in the material industry are combining electronics and textiles. Conductive materials are manufactured into the fibers that can be used to transmit data. This combination could create unique abilities like collection of biometric and external data.          </p>
            <h1>   
                Potential Applications
            </h1>  
            <p>Jacket that pairs with smartphone app</p>
            <p>Shirt that measures heart rate</p>
            <p>Shorts that give feedback on proper form during sports</p>
            <p>Smart materials are materials of the future. Smart materials are intelligent materials that react when applied to environmental stimuli. Properties can change by things like stress, moisture, electricity, light, temperature, and more. The materials have amazing capabilities and smart textiles are one of the ways we can harness them.</p>
            <h1>   
                Potential Applications
            </h1>  
            <p>Clothing that changes color based on the season</p>
            <p>Body temperature control</p>
    </div>
    
    
</div> */ -->
