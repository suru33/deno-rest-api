import { Client } from "https://deno.land/x/postgres/mod.ts";

const config = {
  applicationName: "deno-rest-api-books",
  database: "books",
  hostname: "localhost",
  port: 5432,
  user: "suru",
  password: "password",
  tls: {
    enforce: false,
  }
};

// const POOL_CONNECTIONS = 20;
// const dbPool = new Pool(config, POOL_CONNECTIONS);

class Database {

  async connect() {
    const client = new Client(config);
    return await client.connect();
  }
}

export default new Database().connect();