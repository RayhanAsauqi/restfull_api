# Addres API Spec

## Create Address

Endpoint : POST /api/contacts/:idContacts/addresses

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "street name",
  "city": "city name",
  "province": "province name",
  "country": "country name",
  "postal_code": "87362"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "street name",
    "city": "city name",
    "province": "province name",
    "country": "country name",
    "postal_code": "87362"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required"
}
```

## Get Address

Endpoint : GET /api/contacts/:idContacts/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "street name",
  "city": "city name",
  "province": "province name",
  "country": "country name",
  "postal_code": "87362"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "street name",
    "city": "city name",
    "province": "province name",
    "country": "country name",
    "postal_code": "87362"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Addres is not found"
}
```

## Update Address

Endpoint : PUT /api/contacts/:idContacts/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "street name",
    "city": "city name",
    "province": "province name",
    "country": "country name",
    "postal_code": "87362"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Addres is not found"
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:idContacts/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found"
}
```

## List Address

Endpoint : GET /api/contacts/:idContacts/addresses

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "street name",
      "city": "city name",
      "province": "province name",
      "country": "country name",
      "postal_code": "87362"
    },
    {
      "id": 2,
      "street": "street name_1",
      "city": "city name_1",
      "province": "province name_1",
      "country": "country name_1",
      "postal_code": "12344"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "contact is not found"
}
```
