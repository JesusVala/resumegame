import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import sass from "lume/plugins/sass.ts";
import esbuild from "lume/plugins/esbuild.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume(
  {
    src: "./src",
    dest: "./_site",
    server: {
      port: 8000,
    },
  },
);

site.copy("images");
site.use(nunjucks(/* Options */));
site.use(code_highlight(/* Options */));
site.use(sass(/* Options */));
site.use(esbuild(/* Options */));
site.use(favicon({
  input: "/images/icons8-console-50.png",
}));

export default site;
