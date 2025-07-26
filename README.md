# Caesar Cipher Backend

This is a simple Express.js backend to encode and decode messages using the Caesar Cipher technique.

## Endpoints

### POST /encode
- Body:
```json
{
  "message": "Hello",
  "shift": 3
}


