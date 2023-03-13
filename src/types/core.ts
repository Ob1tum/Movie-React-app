export type RequestMethods = 'POST' | 'GET' | 'DELETE' | 'PUT';

export type ReleaseDate = Date | number;

export type RequestOptions = {
  method: RequestMethods;
  body?: ReturnType<typeof JSON.stringify>;
  [key: string]: any;
};

export type BaseResponse = {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
};
