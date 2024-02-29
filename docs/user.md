# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "rayhan",
  "password": "rahasia",
  "name": "Rayhan Alsauqi"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "rayhan",
    "name": "Rayhan Alsauqi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "rayhan",
  "password": "rahasia"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "rayhan",
    "name": "Rayhan Alsauqi",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "username or password wrong "
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "rayhan",
    "name": "Rayhan Alsauqi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "password": "rahasia", //not mandatory
  "name": "Rayhan Alsauqi" //not mandatory
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "rayhan",
    "name": "Rayhan Alsauqi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "ok"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```
