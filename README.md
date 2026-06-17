# shared-contracts

Shared API and event contracts for SDLC demo services.

## Available schemas

### Event schemas

- `contracts/events/order-created.v1.schema.json`
- `contracts/events/order-created.v2.schema.json`

### Model schemas

- `contracts/models/order.v1.schema.json`

### Response schemas

- `contracts/responses/order-list-response.v1.schema.json`

## Validation

Run the contract validator before opening a PR:

```bash
npm install
npm run validate
```
