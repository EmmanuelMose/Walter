import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  boolean,
  uniqueIndex,
  index
} from "drizzle-orm/pg-core";


export const systemUsers = pgTable("system_users", {
  systemUserId: uuid("system_user_id").defaultRandom().primaryKey(),
  fullName: varchar("full_name", { length: 150 }).notNull(),
  email: varchar("email", { length: 150 }).notNull().unique(),
  registrationNumber: varchar("registration_number", { length: 50 }),
  role: varchar("role", { length: 30 }).notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
