# API

Contents...

## Locations

##### POST - /api/locations

Implemented, documentation coming soon...

##### PUT - /api/locations/:id

Implemented, documentation coming soon...

##### GET - /api/locations/:id

Implemented, documentation coming soon...

##### GET - /api/locations

Implemented, documentation coming soon...

##### DELETE - /api/locations/:id

Implemented, documentation coming soon...


## Users
  
##### POST - /api/users

##### Request
```json
{
  "role": "donor",
  "name": "Name",
  "email": "donations@organization.com"
}
```
  
##### Response
```json
{
  "_id": 1,
  "role": "donor",
  "name": "Name",
  "email": "donations@organization.com"
}
```
  
##### PUT - /api/users/:id
  
##### Request
```json
{
  "name": "New Name",
  "email": "new@email.com"
}
```

##### Response
```json
{
  "_id": 1,
  "role": "donor",
  "name": "New Name",
  "email": "new@email.com"
}
```


##### GET - /api/users
  
##### Params
| query |  type  | default | min | max | optional |
|:-----:|:------:|:-------:|:---:|:---:|:--------:|
| limit | number |    25   |  10 | 100 |     X    |
|  page | number |    1    |  1  |  -  |     X    |
|  ids  | string |    -    |  -  |  -  |     X    |
|  role | string |  donor  |  -  |  -  |     X    |  
  
##### Response
```json
[
  {
    "_id": 1,
    "role": "donor",
    "name": "Name",
    "email": "donations@organization.com"
  }
]
```


##### GET - /api/users/:id
  
##### Response
```json
{
  "_id": 1,
  "role": "donor",
  "name": "Name",
  "email": "donations@organization.com"
}
```


## Donations

##### POST - /api/donations

##### New Item Request
```json
{
  "item_id": null,
  "item_type": "food",
  "name": "Strawberries",
  "description": "Tasty Fruit",
  "retail_value": 6.99,
  "locations": [
    {
      "location_id": 1,
      "condition": "Great",
      "quantity": 5
    },
    {
      "location_id": 2,
      "condition": "Good",
      "quantity": 10,
      "notes": "Overflow from Fridge 1"
    }
  ],
  "notes": "Received due to bad labeling, nothing wrong with any of the packages."
}
```

##### Response
```json
{
  "item_id": 1,
  "locations": [
    {
      "location_id": 1,
      "condition": "Great",
      "quantity": 5,
    },
    {
      "location_id": 2,
      "condition": "Good",
      "quantity": 10,
      "notes": "Overflow from Fridge 1"
    }
  ],
  "notes": "Received due to bad labeling, nothing wrong with any of the packages."
}
```
  
##### Existing Item Request
```json
{
  "item_id": 1,
  "locations": [
    {
      "location_id": 2,
      "condition": "Great",
      "quantity": 10
    }
  ]
}
```

##### Response
```json
{
  "item_id": 1,
  "locations": [
    {
      "location_id": 2,
      "condition": "Great",
      "quantity": 10
    }
  ]
}
```


##### PUT - /api/donations/:id

Coming Soon...


##### GET - /api/donations

Coming Soon...


##### GET - /api/donations/:id

Coming Soon...


## Requisitions

##### POST - /api/requisitions
  
##### Single Location Requisition
```json
{
  "item_id": 1,
  "locations": [
    {
      "location_id": 1,
      "quantity": 5
    }
  ]
}
```


##### PUT - /api/requisitions/:id

Coming Soon...


##### GET - /api/requisitions

Coming Soon...


##### GET - /api/requisitions/:id

Coming Soon...
