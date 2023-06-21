({
  baseUrl: ".",
  paths: {
    text: "scripts/text",
    app: "scripts/app",
  },
  name: "scripts/main",
  out: "build/scripts/main-built.js",
  optimize: "none", // or "uglify2", if you want to minify your code
  // include: ["requireLib"], // to include RequireJS library in the output file
  findNestedDependencies: true, // to find and include nested dependencies
  wrap: true, // to wrap the output in an anonymous function to avoid global scope pollution
});
