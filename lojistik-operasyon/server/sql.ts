import { readdir, readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PGlite } from '@electric-sql/pglite'
import pg from 'pg'

const databaseUrl = process.env.DATABASE_URL?.trim() ?? ''
let pool: pg.Pool | undefined
let local: Promise<PGlite> | undefined

export async function sql<T = Record<string, unknown>>(
  text: string,
  params: unknown[] = [],
): Promise<T[]> {
  if (databaseUrl !== '') {
    pool ??= new pg.Pool({ connectionString: databaseUrl, max: 5 })
    return (await pool.query(text, params)).rows as T[]
  }
  local ??= startLocal().catch((error: unknown) => {
    local = undefined
    throw error
  })
  return (await (await local).query<T>(text, params)).rows
}

async function startLocal(): Promise<PGlite> {
  const db = new PGlite()
  const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'migrations')
  const names = (await readdir(dir).catch(() => [] as string[]))
    .filter((f) => f.endsWith('.sql'))
    .sort()
  for (const file of names) {
    await db.exec(await readFile(join(dir, file), 'utf8'))
  }
  return db
}

export async function sqlOne<T = Record<string, unknown>>(
  text: string,
  params: unknown[] = [],
): Promise<T | undefined> {
  const rows = await sql<T>(text, params)
  return rows[0]
}
