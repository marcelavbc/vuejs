<template>
  <div :id="id" class="board" @dragover.prevent @drop.prevent="drop">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    drop: (e) => {
        console.log(e)
        const card_id = e.dataTransfer.getData('id');
        console.log('card_id', card_id)
        const card = document.getElementById(card_id);
        card.style.display = "block";
        e.target.appendChild(card)
    },
  },
};
</script>

<style>

</style>