<template>
  <div id="app">
    <div class="Welcome to library">
      <h1>Librería Patito</h1>
      <amplify-sign-out></amplify-sign-out>
    </div>
    <amplify-authenticator>
      <div class="card mt-4 mb-3">
        <div>Libros</div>
      </div>

      <div
        class="card"
        style="width: 18rem;"
        v-for="libro of libros"
        :key="libro.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ libro.name }}</h5>
          <p class="card-text">{{ libro.descripcion }}.</p>
          <a href="#" class="card-link">Pedir préstamo</a>
        </div>
      </div>
    </amplify-authenticator>
  </div>
</template>

<script>
///import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "./graphql/queries";

export default {
  name: "App",
  data() {
    return {
      libros: [],
      //User: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await API.graphql(graphqlOperation(listTodos));
        this.libros = response.data.listTodos.items;

        console.log(this.libros);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
