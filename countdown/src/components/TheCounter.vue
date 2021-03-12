<template>
  <div v-if="loaded">
    <section
      class="text-3xl flex justify-center content-center flex-col mx-auto text-center my-5"
    >
      <h5 v-if="!isExpired">Time left:</h5>
      <h5 v-else>Time is over!</h5>
    </section>
    <section class="flex text-6xl justify-center content-center mt-5">
      <div class="days mr-2 relative">
        {{ displayDays }}
        <div class="label text-sm absolute">days</div>
      </div>
      <span class="">:</span>
      <div class="hours mx-2 relative">
        {{ displayHours }}
        <div class="label text-sm absolute">hours</div>
      </div>
      <span class="">:</span>
      <div class="minutes mx-2 relative">
        {{ displayMinutes }}
        <div class="label text-sm absolute">minutes</div>
      </div>
      <span class="">:</span>
      <div class="seconds ml-2 relative">
        {{ displaySeconds }}
        <div class="label text-sm absolute">seconds</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      loaded: false,
      isExpired: false,
    };
  },
  mounted() {
    this.showRemaining();
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.hour,
        this.date,
        this.minute,
        this.second,
        this.millisecond
      );
    },
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();

        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.isExpired = true;
          this.loaded = true
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.seconds {
  max-width: 60px;
}
</style>