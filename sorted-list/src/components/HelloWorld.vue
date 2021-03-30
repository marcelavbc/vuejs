<template>
  <div class="hello">
    <h1>Skills</h1>
    <draggable v-model="myArray" ghost-class="ghost" @end="onEnd">
      <transition-group type="transition" name="flip-list">
        <div
          class="sortable"
          :id="element.id"
          v-for="element in myArray"
          :key="element.id"
        >
          <strong>{{ element.name }}</strong>
          <span>{{ element.id }}</span>
        </div>
      </transition-group>
    </draggable>

    <p><strong>Previous Index:</strong>{{ oldIndex }}</p>
    <p><strong>New Index:</strong>{{ newIndex }}</p>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "HelloWorld",
  components: { draggable },
  data() {
    return {
      myArray: [
        { name: "Angular", id: 0 },
        { name: "React", id: 1 },
        { name: "Vue", id: 3 },
        { name: "HTML", id: 4 },
        { name: "CSS", id: 5 },
        { name: "Sass", id: 6 },
      ],
      oldIndex: "",
      newIndex: "",
    };
  },
  methods: {
    onEnd: function (event) {
      console.log(event);
      this.oldIndex = event.oldIndex;
      this.newIndex = event.newIndex;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
strong {
  display: inline-block;
}

.sortable {
  width: 100%;
  background: white;
  padding: 1em;
  cursor: pointer;
  margin-bottom: 2px;

  span {
    float: right;
  }
}

.hello .sortable-drag {
  opacity: 0;
}

.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  border-left: 6px solid red;
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
  opacity: .7;

  &::before{
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -50px;
    background-image: url('../assets/shuffle.svg');

  }
}
</style>
