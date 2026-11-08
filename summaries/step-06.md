# Step 6 — Analyzers

## Main points
- `text` fields are analyzed into tokens before being indexed.
- An analyzer conceptually consists of character filters, a tokenizer, and token filters.
- Analysis happens at index time and usually also to full-text query input at search time.
- The standard analyzer typically tokenizes words and lowercases them.
- Elasticsearch searches indexed terms via an inverted index rather than scanning `_source` text.
- Multi-fields let one source field have multiple indexed representations, such as `title` and `title.keyword`.

## Endpoint to remember
```http
POST /_analyze
```

## Debugging habit
When text search surprises you, inspect the analyzer output instead of guessing.
