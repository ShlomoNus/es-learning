# Step 7 — `match` vs `term`

## Main points
- `match` is a full-text query. It analyzes the query input and is normally used with `text` fields.
- `term` is a term-level query. It looks for an exact indexed term and is normally used with structured fields such as `keyword`, numbers, and booleans.
- A `term` query against a `text` field is a common bug because the field may have been tokenized during indexing.
- `_source` shows the original value; it does not show the actual indexed terms used for search.
- A `match` query with multiple terms uses `OR` behavior by default; `operator: "and"` can require all analyzed terms.

## Query shapes to remember
```http
GET /movies/_search
{
  "query": {
    "match": {
      "title": "matrix"
    }
  }
}
```

```http
GET /movies/_search
{
  "query": {
    "term": {
      "genre": "sci-fi"
    }
  }
}
```

## Rule of thumb
- Human language / relevance search → `match`.
- Exact structured value → `term`.
