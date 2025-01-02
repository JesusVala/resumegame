import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";

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

export default site;
