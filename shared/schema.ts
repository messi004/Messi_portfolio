import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Note: We are using SQLite, but defining schemas with generic types that Drizzle maps correctly.
// However, for strict SQLite usage with Drizzle, we usually use 'drizzle-orm/sqlite-core'.
// But to keep compatibility with the shared module structure and potential future migrations, 
// we will use standard types and adapt the db connection. 
// ACTUALLY, strict SQLite types are better for "SQLite only" requirement. 
// Let's use sqlite-core definitions to be precise.

import { sqliteTable, text as textSqlite, integer as integerSqlite } from "drizzle-orm/sqlite-core";

// === TABLE DEFINITIONS ===

export const projects = sqliteTable("projects", {
  id: integerSqlite("id").primaryKey({ autoIncrement: true }),
  title: textSqlite("title").notNull(),
  description: textSqlite("description").notNull(),
  image: textSqlite("image").notNull(),
  link: textSqlite("link").notNull(),
  createdAt: integerSqlite("created_at", { mode: "timestamp" }).default(new Date()), // SQLite stores dates as numbers/text
});

export const contactMessages = sqliteTable("contact_messages", {
  id: integerSqlite("id").primaryKey({ autoIncrement: true }),
  name: textSqlite("name").notNull(),
  email: textSqlite("email").notNull(),
  message: textSqlite("message").notNull(),
  createdAt: integerSqlite("created_at", { mode: "timestamp" }).default(new Date()),
});

// === BASE SCHEMAS ===

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true, createdAt: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });

// === EXPLICIT API CONTRACT TYPES ===

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// Auth types (even though we don't have a users table, we need types for the login form)
export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export type LoginRequest = z.infer<typeof loginSchema>;
