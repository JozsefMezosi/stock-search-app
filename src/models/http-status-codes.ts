export const HTTP_STATUS_CODES = {
  OK: 200,
  "Bad Request": 400,
  "Internal Server Error": 500,
} as const;

export type HTTP_STATUS_CODES_TYPE = keyof typeof HTTP_STATUS_CODES;
