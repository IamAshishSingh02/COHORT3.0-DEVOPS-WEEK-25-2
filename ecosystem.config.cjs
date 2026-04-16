module.exports = {
  apps: [
    {
      name: "http-server",
      cwd: "./apps/http-server",
      script: "./dist/index.js",
      env: {
        PORT: 3000,
        HTTP_PORT: 3000,
      },
    },
    {
      name: "ws-server",
      cwd: "./apps/ws-server",
      script: "./dist/index.js",
      env: {
        PORT: 3001,
        WS_PORT: 3001,
      },
    },
    {
      name: "next-js-fe",
      cwd: "./apps/web",
      script: "./node_modules/next/dist/bin/next",
      args: "start --port 3002 --hostname 0.0.0.0",
      env: {
        PORT: 3002,
      },
    },
  ],
};
