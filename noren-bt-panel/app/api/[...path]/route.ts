import { dispatch } from '../../../server/dispatch'

export const runtime = 'nodejs'

async function handle(request: Request) {
  return dispatch(request)
}

export const GET = handle
export const POST = handle
