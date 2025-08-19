
// backend
export interface ApiLogs {
  path: string;
  error: Error;
  dated: string;
}

// frontend
export interface AppLogs {
  path: string;
  error: Error;
  dated: string;
}
