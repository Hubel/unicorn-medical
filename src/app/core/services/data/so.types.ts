export interface SoResponse<T> {
  error_id?: string;
  error_message?: string;
  error_name?: string;
  has_more: boolean;
  items?: T[];
  quota_max: number;
  quota_remaining: number;
}

export type SoHttpParams = { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> };
