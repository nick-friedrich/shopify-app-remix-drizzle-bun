import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { text, integer, pgTable, bigserial, boolean, timestamp } from 'drizzle-orm/pg-core';

export const sessions = pgTable('sessions', {
  id: text('id').primaryKey(),
  shop: text('shop').notNull(),
  state: text('state').notNull(),
  isOnline: boolean('isOnline').notNull().default(false),
  scope: text('scope'),
  expires: timestamp('expires'),
  accessToken: text('accessToken').notNull(),
  userId: bigserial('userId', { mode: 'number' })
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);