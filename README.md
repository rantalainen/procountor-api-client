# procountor-api-client

**ProcountorApiClient** is a third party [Procountor API](https://dev.procountor.com/api-reference/) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://api-test.procountor.com/api/openapi.json) provided by Procountor.

## Installation

Add to project's package.json:

```
npm install @rantalainen/procountor-api-client
```

### Import to NodeJS project

```javascript
const { ProcountorApiClient } = require('@rantalainen/procountor-api-client');
```

### Import to TypeScript project

```javascript
import { ProcountorApiClient } from '@rantalainen/procountor-api-client';
```

## Setup client with options

In order to obtain an API key, please contact Procountor Support. An API key is needed to access all API functions.

```javascript
const procountor = new ProcountorApiClient(
  {
    clientId: 'client_id',
    clientSecret: 'client_secret',
    apiKey: 'api_key'
  },
  {
    baseURL: 'https://api.procountor.com/api'
  }
);
```

Available methods can be found in the [API documentation](https://procountor.com/docs/).

## Resources

- Procountor: https://secure.procountor.com/procountor/com/
- Procountor Developer Guide: https://dev.procountor.com/
