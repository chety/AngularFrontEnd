import {Response} from "./response"
export interface ListResponse<T> extends Response {
    data : T[]
}