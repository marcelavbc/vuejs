<template>
  <div
    class="card"
    :id="id"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
  >
    <slot />
  </div>
</template>

<script>
export default {
    props: ["id", "draggable"],
    methods: {
        dragStart: e => {
            const target = e.target;
            console.log('event in card', e)
            e.dataTransfer.setData("id", target.id);
            setTimeout(() => {
                target.style.display = "none"
            }, 0)
        }
    }
};
</script>

<style>
</style>