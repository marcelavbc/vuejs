<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <slot />
  </transition>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 500,
    },
    delay: {
      type: Number,
      default: 100,
    },
    translate: Array,
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      if (this.translate)
        el.style.transform = "translate(" + this.translate.join(",") + ")";
    },
    enter(el) {
      let transitions =
        "opacity " + this.duration + "ms ease-in-out " + this.delay + "ms";
      if (this.translate)
        transitions +=
          ", transform " +
          this.duration +
          "ms ease-in-out " +
          this.delay +
          "ms";
      el.style.transition = transitions;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.opacity = 1;
        if (this.translate) el.style.transform = "initial";
      });
    },
  },
};
</script>