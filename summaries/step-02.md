# Step 2 — Cluster, Node, Index, Document

## Main points
- A cluster contains one or more Elasticsearch nodes.
- An index stores documents.
- A document is JSON plus Elasticsearch metadata such as `_id` and `_index`.
- `_source` contains the original JSON document.
- Elasticsearch `_id` is metadata and is different from a normal `id` field inside `_source`.

## Endpoints to remember
```http
GET /_nodes
PUT /movies
GET /_cat/indices?v
PUT /movies/_doc/1
GET /movies/_doc/1
```
