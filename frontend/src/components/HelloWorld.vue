<template>
  <div class="hello">
        <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a>.
    </p>
    <h3>Vue.js</h3>
    <input v-model="message" style="width: 300px; margin:10px" /><br/>
    <span>{{ message }}</span>
    <button style="width: 100px; margin-left: 20px" @click="increment">
      {{ count }}
    </button>
    <button style="width: 100px; margin-left:20px;" @click="increment">{{ count }}</button>
    <h3>API</h3>
    <ul>
      <li><a href="http://localhost:8000/api" target="_blank">/api</a></li>
      <li><a href="http://localhost:8000/api/message" target="_blank">/api/message</a></li>
      <li><a href="http://localhost:8000/api/blabla" target="_blank">/api/blabla</a></li>
    </ul>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import http from "../http-common"

export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  },
  data: function() {
    return {
      count: 0,
      message: 'Error: API is unreachable'
    }
  },
  mounted: function() {
    http.get("/message").
        then(res => {
          console.info(res.data.data.nessage);
          this.message = res.data.data.message;
          }).
        catch(err => "API-E-GET, " + err)
  },
  methods: {
    increment() {
      this.count += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
