import black from "../colors/black.json";
import blue from "../colors/blue.json";
import cyan from "../colors/cyan.json";
import gray from "../colors/gray.json";
import green from "../colors/green.json";
import indigo from "../colors/indigo.json";
import orange from "../colors/orange.json";
import pink from "../colors/pink.json";
import purple from "../colors/purple.json";
import red from "../colors/red.json";
import teal from "../colors/teal.json";
import white from "../colors/white.json";
import yellow from "../colors/yellow.json";
import { writeFileSync } from "fs";
import { join } from "path";

if (require.main === module) {
  console.log(__dirname);
  writeFileSync(
    join(__dirname, "..", "colors", "colors.json"),
    JSON.stringify({
      black,
      blue,
      cyan,
      gray,
      green,
      indigo,
      orange,
      pink,
      purple,
      red,
      teal,
      white,
      yellow
    })
  );
}
