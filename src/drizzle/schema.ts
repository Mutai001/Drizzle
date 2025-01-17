import { pgTable, serial, text, varchar, integer, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

//user table
export const UsersTable = pgTable("users", {
    id: serial("id").primaryKey(),
    fullname: text("full_name"),
    phone: varchar("phone", { length: 100 }),
    address: varchar("address", { length: 100 }),
    score: integer("score"),
})

