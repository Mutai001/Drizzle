"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTable = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
//user table
exports.UsersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    fullname: (0, pg_core_1.text)("full_name"),
    phone: (0, pg_core_1.varchar)("phone", { length: 100 }),
    address: (0, pg_core_1.varchar)("address", { length: 100 }),
    score: (0, pg_core_1.integer)("score"),
});
