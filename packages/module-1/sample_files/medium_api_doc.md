# User API Documentation

## Overview
This document describes the RESTful API for managing user accounts. All endpoints are accessible via `https://api.example.com/v1/users`.

## Authentication
All requests require an API key passed in the `X-API-Key` header.

## Endpoints

### `GET /users`
Retrieves a list of all users.

#### Request
No parameters.

#### Response (200 OK)
```json
[
  {
    "id": "user123",
    "username": "john.doe",
    "email": "john.doe@example.com",
    "createdAt": "2023-01-01T10:00:00Z"
  },
  {
    "id": "user456",
    "username": "jane.smith",
    "email": "jane.smith@example.com",
    "createdAt": "2023-01-05T14:30:00Z"
  }
]
```

### `GET /users/{id}`
Retrieves details for a specific user.

#### Request
- `id` (path parameter): The unique identifier of the user.

#### Response (200 OK)
```json
{
  "id": "user123",
  "username": "john.doe",
  "email": "john.doe@example.com",
  "createdAt": "2023-01-01T10:00:00Z",
  "lastLogin": "2023-07-20T08:15:00Z"
}
```

#### Error Responses
- `404 Not Found`: If the user with the specified ID does not exist.

### `POST /users`
Creates a new user.

#### Request
```json
{
  "username": "new.user",
  "email": "new.user@example.com",
  "password": "securepassword123"
}
```

#### Response (201 Created)
```json
{
  "id": "user789",
  "username": "new.user",
  "email": "new.user@example.com"
}
```

#### Error Responses
- `400 Bad Request`: If required fields are missing or invalid.
- `409 Conflict`: If a user with the provided email or username already exists.

### `PUT /users/{id}`
Updates an existing user.

#### Request
- `id` (path parameter): The unique identifier of the user.
```json
{
  "username": "updated.user",
  "email": "updated.user@example.com"
}
```

#### Response (200 OK)
```json
{
  "id": "user123",
  "username": "updated.user",
  "email": "updated.user@example.com"
}
```

### `DELETE /users/{id}`
Deletes a user.

#### Request
- `id` (path parameter): The unique identifier of the user.

#### Response (204 No Content)

## Rate Limiting
- 100 requests per minute per IP address.

## Error Handling
- Standard HTTP status codes are used.
- Error responses include a `code` and `message` field.

## Versioning
- API version is indicated in the URL (e.g., `/v1`).

## Changelog
- **v1.0.0 (2023-01-01):** Initial release.
- **v1.1.0 (2023-07-15):** Added `lastLogin` field to user details.
