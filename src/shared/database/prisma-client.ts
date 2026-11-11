import { PrismaClient } from "../../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { ShardId } from "../types/shared-types";


//Create seprate Prisma client for each shard using driver adapter
//Each client manages its own connection pool via mariaDb

const shard1Client: PrismaClient | null = null;
const shard2Client: PrismaClient | null = null;

