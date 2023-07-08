import { HydratedDocument, Query, UpdateWriteOpResult } from 'mongoose'

export type CreateResult<T> = HydratedDocument<T>

export type FindAllResult<T> = Query<HydratedDocument<T>[], HydratedDocument<T>>

export type FindResult<T> = Query<HydratedDocument<T> | null, HydratedDocument<T>, {}, T>

export type UpdateResult<T> = Query<UpdateWriteOpResult, HydratedDocument<T>, {}, T>

export type DeleteResult<T> = Query<
  { ok?: number | undefined; n?: number | undefined } & {
    deletedCount?: number | undefined
  },
  HydratedDocument<T>,
  {},
  T
>
