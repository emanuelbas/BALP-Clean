export const environment = {
  production: true,
  backendUrl: window["env"]["apiUrl"],
  frontendUrl: "http://localhost:4200",
  debug: window["env"]["debug"] || false
};
