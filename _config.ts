import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import sass from "lume/plugins/sass.ts";
//import terser from "lume/plugins/terser.ts";
import esbuild from "lume/plugins/esbuild.ts";
//import * as THREE from "npm:three";
//import {THREE} from "https://cdnjs.cloudflare.com/ajax/libs/three.js/99/three.min.js";

const site = lume(
  {
    src: "./src",
    dest: "./_site",
    server: {
      port: 8000,
    },
  },
);

site.use(nunjucks(/* Options */));
site.use(code_highlight(/* Options */));
site.use(sass(/* Options */));
site.use(esbuild(/* Options */));
/*
site.use(terser({
  options: {
    module: true,
  },
}));
*/
export default site;
