<template>
  <div id="app">
    <main class="flexbox">
      <Board id="board-1">
        <Card v-for="card in cards" :key="card.id" :id="card.id" draggable="true">
          <p>{{card.title}}</p>
        </Card>
      </Board>

      <Board id="board-2">
        <!-- <Card id="card-2" draggable="true">
          <p>Card two</p>
        </Card> -->
      </Board>
    </main>
  </div>
</template>

<script>
import Board from "./components/Board";
import Card from "./components/Card";

export default {
  name: "App",
  components: { Board, Card },
  data(){
    return {
      cards: [{id: 1, title: 'apple'}, {id: 2, title: 'banana'}, {id: 3, title: 'pear'}, {id: 4, title: 'kiwi'}]
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.flexbox {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 768px;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
}

.flexbox .board {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background-color: rgb(155, 216, 216);
  padding: 15px;
}

.flexbox .board .card {
  padding: 15px 25px;
  background-color: rebeccapurple;
  cursor: pointer;
  margin-bottom: 15px;
  color: white;
}
</style>
