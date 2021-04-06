import {ResponseModel} from "./response"
export interface ListResponse<T> extends ResponseModel {
    data : T[]
}