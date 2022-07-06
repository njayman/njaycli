import * as fs from "fs";
import * as path from "path";

const getCliInfo = () => {
  const packageJsonPath = path.resolve(__dirname, "../../package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  return packageJson;
};
export default getCliInfo;
