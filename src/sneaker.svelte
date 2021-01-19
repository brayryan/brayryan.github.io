<script>
    
    import { onMount } from 'svelte';
      import { createScene } from "./sneaker";
      let el;
      onMount(() => {
        createScene(el);
      });
    </script>

<style>

.notification {
    background-color: transparent;
    border-radius: 4px;
    position: relative;
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
}
canvas {
    width: auto !important;
}
/* .card {
  background-image: url("images/carbon_texture1872.jpg");
} */

</style>

<div class="container">
    <!-- <div class="has-background-success"> -->
        <div class="columns is-vcentered">
            <div class="column is-two-fifths">
                <div class="tile">
                    <article class="tile is-child notification has-text-white">
                        <p class="title">Sustainability</p>
                        <p>Every year millions of pairs of shoes are purchased and eventually piled in landfills. Although traditional materials used to make shoes like EVA (ethylene-vinyl acetate) provide proper cushioning and support, it can take hundreds of years to degrade. One of the ways the footwear industry is reducing its “footprint” is by recycling the materials. Shoes can be created by grinding up old shoes or by reusing plastics like water bottles and fishing nets.           </p>
                        <p class="is-italic is-size-4 my-4">EVA can take hundreds to thousands of years to naturally degrade.</p>
                        <p>Another aspect that is often overlooked by the general consumer is the amount of waste and carbon emissions produced from the manufacturing process. Cotton used in clothing and footwear uses enormous amounts of water and pesticides. Petroleum based products like polyurethane, polyester, and EVA release large amounts of greenhouse gases. Initiatives are already underway to step away from petroleum-based products and to reduce emissions and waste.  </p>
                        <p class="is-italic is-size-4 mt-4">Sustainability is a key initiative for identifying cleaner, natural solutions.</p>
                    </article>
<!-- 
                        <figure class = "image is-2by1">
                           <img src = "images/carbon_texture1872.jpg">
                        </figure>     -->

                </div>
            </div>
            <div class="column is-three-fifths">
                <canvas bind:this={el}></canvas>
            </div>
        </div>
    <!-- </div> -->
</div>

<!-- <div class="tile">
    <div class="text-column">
        <h1>
            <center>Sustainability</center>
        </h1>
        <p>
            Every year millions of pairs of shoes are purchased and eventually piled in landfills. Although traditional materials used to make shoes like EVA (ethylene-vinyl acetate) provide proper cushioning and support, it can take hundreds of years to degrade. One of the ways the footwear industry is reducing its “footprint” is by recycling the materials. Shoes can be created by grinding up old shoes or by reusing plastics like water bottles and fishing nets.           </p>
            <h1>
                EVA can take hundreds to thousands of years to naturally degrade.
            </h1>
            <p>
                Another aspect that is often overlooked by the general consumer is the amount of waste and carbon emissions produced from the manufacturing process. Cotton used in clothing and footwear uses enormous amounts of water and pesticides. Petroleum based products like polyurethane, polyester, and EVA release large amounts of greenhouse gases. Initiatives are already underway to step away from petroleum-based products and to reduce emissions and waste.  
            </p>
            <h1>
                Sustainability is a key initiative for identifying cleaner, natural solutions.
            </h1>
    </div>
    <div class="model-column">
        <canvas bind:this={el}></canvas>
    </div>
    
</div> -->
