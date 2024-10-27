import dotenv from "dotenv";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const envConfig = () => {
  if (process.env.NODE_ENV !== "production") {
    dotenv.config({ path: path.resolve(__dirname, "../../.env") });
  } else {
    dotenv.config({ path: path.resolve(__dirname, "../../prod.env") });
  }
};

const isBoolean = (value) =>
  ["true", "false"].includes(value) ? JSON.parse(value) : value;

const getEnv = (name) => {
  const value = process.env[name];
  if (value === undefined) {
    return undefined;
  }
  return isBoolean(value) ? JSON.parse(value) : value;
};

export { getEnv, envConfig };
