// Common configuration for webpacker loaded from config/webpacker.yml

const { join, resolve } = require("path");
const { env } = require("process");
const { safeLoad } = require("js-yaml");
const { readFileSync } = require("fs");

// Load the Webpacker configuration
const configPath = resolve("config", "webpacker.yml");
const loadersDir = join(__dirname, "loaders");

// Parse the YAML configuration with aliases enabled
const settings = safeLoad(readFileSync(configPath, "utf8"), { alias: true })[
  env.NODE_ENV
];

function removeOuterSlashes(string) {
  return string.replace(/^\/*/, "").replace(/\/*$/, "");
}

function formatPublicPath(host = "", path = "") {
  let formattedHost = removeOuterSlashes(host);
  if (formattedHost && !/^http/i.test(formattedHost)) {
    formattedHost = `//${formattedHost}`;
  }
  const formattedPath = removeOuterSlashes(path);
  return `${formattedHost}/${formattedPath}/`;
}

const output = {
  path: resolve("public", settings.public_output_path),
  publicPath: formatPublicPath(env.ASSET_HOST, settings.public_output_path),
};

module.exports = {
  settings,
  env,
  loadersDir,
  output,
};
