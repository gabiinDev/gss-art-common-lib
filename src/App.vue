<script setup lang="ts">
//import { MyButton } from "gss-art-common";
import { HTTPBaseService } from "gss-art-common";
import { IVueComponent } from "gss-art-common";
import NF from "gss-art-common";
//import "/node_modules/gss-art-common/dist/style.css";

class apiHelper extends HTTPBaseService {
  constructor() {
    super("api");
  }
}

class MiComponent implements IVueComponent {
  template: string;
  busEvents?: Record<string, Function> | undefined;
  methods?: Record<string, Function> | undefined;
  created?: (() => void) | (() => Promise<void>) | undefined;
  computed?: Record<string, () => Object> | undefined;
  data?: (() => Object) | undefined;
  beforeCreated?: (() => void | undefined) | undefined;
  mounted?: (() => void) | (() => Promise<void>) | undefined;

  constructor() {
    this.template = "#test-component-template";
    this.created = function () {
      console.log("hola");
    };
  }
}

//() => new NF(new MiComponent());
</script>

<template id="test-component-template">
  <!-- <div><MyButton>Click me</MyButton></div> -->
  <div></div>
</template>

<!-- <style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style> -->
