# Step 4 — Search Basics

## Main points
- `_doc/{id}` is a direct lookup by Elasticsearch `_id`.
- `_search` finds documents by query.
- `match_all` matches every document.
- `hits.total.value` is the number of matched documents; `hits.hits` is the returned page of hits.
- `_source` filtering controls which source fields are returned.
- `from` + `size` provide basic pagination.
- `_count` returns only a count.

## Endpoints to remember
```http
GET /movies/_search
GET /movies/_count
```

## Request properties to remember
```json
{
  "_source": ["title", "year"],
  "from": 0,
  "size": 10,
  "query": {
    "match_all": {}
  }
}
```
