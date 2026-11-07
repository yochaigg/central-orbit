// Only facts confirmed by Central Orbit. Do not add biography, qualifications,
// achievements or profile URLs here until they are supplied and verified.

export const AUTHORS = {
  "yochai-golan": {
    name: "Yochai Golan",
    jobTitle: "Managing Director",
    organization: "Central Orbit",
  },
} as const;

export type AuthorId = keyof typeof AUTHORS;
