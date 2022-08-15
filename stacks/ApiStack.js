import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const { table } = use(StorageStack);

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
        },
      },
    },
    routes: {
      "GET /notes": "functions/list.main",
      "POST /notes": "functions/create.main",
      "GET /notes/{id}": "functions/get.main",
      "PUT /notes/{id}": "functions/update.main",
    },
  });

  stack.addOutputs({
    ApiEndpoints: api.url,
  });

  return {
    api,
  };
}
