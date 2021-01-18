<script>
    
    import { onMount } from 'svelte';
      import { createScene } from "./cleat.js";
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
            <div class="column is-one-third">
                <div class="tile">
                    <article class="tile is-child notification  is-danger">
                        <p class="title">Nanotechnology</p>
                        <p> Nanotechnology is an exciting new field in materials science. This field deals with things on the nanoscale which is anything from 1 to 100 nanometers. Scientists and engineers are using nanomaterials to enhance properties like increased strength and lighter weight. This could potentially be applied to athletic equipment, clothing, and footwear to enhance its performance.</p>
                        <p class="is-italic is-size-4 my-4"> A sheet of newspaper is about 100,000 nanometers thick.</p>
                        <p> Nanomaterials do not just appeal to athletes. Many common clothing issues can be solved. These characteristics include odor resistant, water repellent, self-cleaning, stain resistant, antistatic, UV blocking, and more.</p>
                        <p class="is-italic is-size-4 my-4">Nanotechnology is still in its infancy but imagine a world where you only have to wash your clothes a few times a year!</p>
                    </article>
                    </div>
            </div>
            <div class="column is-two-third">
                <canvas bind:this={el}></canvas>
            </div>
        </div>
    <!-- </div> -->
</div>

    

