import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (_evt) => {
  console.log("Hello.Nice to meet you.")
  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
});
