import Database from "better-sqlite3";

// Get number of rows in a table
export const getRows = (db: Database.Database, table: string) => {
  // Get number of rows in a table just a number
  const result = db.prepare(`SELECT COUNT(*) as count FROM ${table}`).get() as {
    count: number;
  };
  return result.count;
};
