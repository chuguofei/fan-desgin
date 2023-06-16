import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";
import path from "path";
import fs from "fs";
import consola from "consola";
import chalk from "chalk";

const localMd = MarkdownIt();

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        let source = "";
        const sourceFile = sourceFileToken.children?.[0].content ?? "";

        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(
            path.resolve("../docs/", "examples", `${sourceFile}.vue`),
            "utf-8"
          );
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

        consola.log(chalk.green(description))

        return `
            <Demo :demos="demos"
            source="${encodeURIComponent(source)}" 
            path="${sourceFile}" 
            raw-source="${encodeURIComponent(source)}" 
            description="${encodeURIComponent(localMd.render(description))}">
        `;
      } else {
        return "</Demo>";
      }
    },
  });
};
