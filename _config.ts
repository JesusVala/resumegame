import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import sass from "lume/plugins/sass.ts";

const site = lume(
  {
    src: './src',
    dest: './output',
    server: {
      port: 8000,
    },
  },
);

site.use(nunjucks(/* Options */));
site.use(code_highlight(/* Options */));
site.use(sass(/* Options */));

export default site;
