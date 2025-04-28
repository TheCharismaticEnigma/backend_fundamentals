export const DB_NAME = "backend_fundamentals_database";

export const PAYLOAD_LIMITS = {
  DEFAULT: "16kb", // Standard for JSON/URL-encoded
  API: "1mb", // Larger for APIs (e.g., file metadata)
  STRICT: "1kb", // For sensitive endpoints (e.g., login)
  FILE_UPLOAD: "10mb", // For multipart forms (via `multer`)
};
