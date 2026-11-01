export default () => ({
  port: parseInt(process.env.PORT ?? "", 10) || 7777,
  whiteList: (process.env.WHITE_LIST || "").split(","),
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT ?? "", 10) || 5432,
    user: process.env.POSTGRES_USER,
    name: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  },
});
