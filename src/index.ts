import db from "./drizzle/db";
import { eq,gt,like } from "drizzle-orm";
import {  UsersTable } from "./drizzle/schema";

//query
const getUsers = async (): Promise<TSUser[] | null> => {
    return await db.query.UsersTable.findMany();
}





