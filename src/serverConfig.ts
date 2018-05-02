export default {
  port: 3000,
  onServerStart: serverConfig =>
    console.log(
      '\x1b[36m%s\x1b[0m',
      `[Nest] listening on port ${serverConfig.port}`,
    ),
}
