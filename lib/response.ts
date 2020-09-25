// You should place all the shared code under /lib

export const addCorsHeaders = (response: any) => {
  if (!response.headers) response.headers = {};
  response.headers['Access-Control-Allow-Origin'] = '*';
  response.headers['Access-Control-Allow-Credentials'] = true;
  response.headers['Access-Control-Allow-Headers'] = 'Authorization';
};
