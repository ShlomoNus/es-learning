# Step 5 — Mapping and Field Types

## Main points
- A mapping controls how fields are interpreted and indexed.
- Dynamic mapping lets Elasticsearch infer field types; explicit mapping is safer for intentional schemas.
- `text` is for analyzed full-text search.
- `keyword` is for exact structured values, sorting, filtering, and aggregations.
- Common scalar types include `integer`, `long`, `float`, `boolean`, and `date`.
- Elasticsearch fields can naturally contain multiple values; there is no normal `array` mapping type.
- Existing field types generally cannot be changed in place; create a correctly mapped index and reindex when necessary.

## Endpoints to remember
```http
GET /movies/_mapping
PUT /movies
PUT /movies/_mapping
```
