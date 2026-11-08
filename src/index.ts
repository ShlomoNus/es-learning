import express from "express";

import { esClient } from "./config/elasticsearch.js";
import { env } from "./config/env.js";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/health/es", async (_req, res) => {
  try {
    const info = await esClient.info();

    res.json({
      ok: true,
      clusterName: info.cluster_name,
      elasticsearchVersion: info.version.number,
      node: env.elasticsearchNode,
    });
  } catch (error) {
    res.status(503).json({
      ok: false,
      error: error instanceof Error ? error.message : "Unknown Elasticsearch error",
    });
  }
});

app.listen(env.port, () => {
  console.log(`API: http://localhost:${env.port}`);
  console.log(`Elasticsearch: ${env.elasticsearchNode}`);
  console.log("Kibana: http://localhost:4009");
});
