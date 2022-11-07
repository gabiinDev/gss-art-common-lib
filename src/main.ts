// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { Api } from "@vite-lib-ts-base/my-test-lib/dist/classes/api"
import { CustomEnum } from "@vite-lib-ts-base/my-test-lib/dist/util/enums"
import { Something } from "@vite-lib-ts-base/my-test-lib/dist/util/types"

const api = new Api();
console.log("enums:", CustomEnum)

const algo: Something = "SOMETHING_1"

console.log("algo:", algo)


export {}