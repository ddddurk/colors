import black from "../colors/black.json";
import blue from "../colors/blue.json";
import cyan from "../colors/cyan.json";
import gray from "../colors/cyan.json";
import green from "../colors/blue.json";
import indigo from "../colors/cyan.json";
import orange from "../colors/blue.json";
import pink from "../colors/cyan.json";
import purple from "../colors/blue.json";
import red from "../colors/cyan.json";
import teal from "../colors/blue.json";
import white from "../colors/cyan.json";
import yellow from "../colors/blue.json";
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
