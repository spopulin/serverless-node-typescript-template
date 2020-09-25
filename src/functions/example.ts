import {
  APIGatewayEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import {addCorsHeaders} from '../../lib/response';

export const example: APIGatewayProxyHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const body: any = event.body ? JSON.parse(event.body) : undefined;

  if (!body) {
    throw new Error("There's no body");
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Testing example function with TypeScript',
      body: body,
    }),
  };

  addCorsHeaders(response);
  return response;
};
