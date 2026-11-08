# Step 3 — CRUD Documents

## Main points
- `PUT /index/_doc/id` indexes a document with an explicit `_id`; it can create or replace the document.
- `POST /index/_doc` lets Elasticsearch generate `_id`.
- `POST /index/_update/id` with `doc` performs a partial update.
- `PUT /index/_create/id` is create-only and fails if the `_id` already exists.
- `DELETE /index/_doc/id` deletes one document, not the index.

## Endpoints to remember
```http
PUT /movies/_doc/1
POST /movies/_doc
GET /movies/_doc/1
POST /movies/_update/1
PUT /movies/_create/1
DELETE /movies/_doc/1
```
