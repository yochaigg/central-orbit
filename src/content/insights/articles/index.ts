import type { Article } from "../types";

// Register each article here with an explicit import so every addition is a
// reviewable diff. Nothing is published until status is "published" AND an
// editorialReview record is present. See ../README.md.
export const articles: Article[] = [];
