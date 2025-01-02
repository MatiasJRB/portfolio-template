import Vue from "vue";

const emitter = require("tiny-emitter/instance");

Vue.prototype.$emitter = emitter;

export { emitter };
