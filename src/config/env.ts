import "dotenv/config";

import { cleanEnv, port, url } from "envalid";

const validatedEnv = cleanEnv(process.env, {
  PORT: port({
    default: 3000,
    desc: "HTTP port for the local Node API",
  }),
  ELASTICSEARCH_NODE: url({
    default: "http://localhost:8200",
    desc: "Elasticsearch node URL",
  }),
});

export const env = {
  port: validatedEnv.PORT,
  elasticsearchNode: validatedEnv.ELASTICSEARCH_NODE,
} as const;
