## Schema

#### users

|  column |  type  |     default    | required |
|:-------:|:------:|:--------------:|:--------:|
|   _id   |  long  | auto_increment |    yes   |
|   role  | string |      null      |    yes   |
|   name  | string |      null      |    yes   |
|  email  | string |      null      |    no    |


#### locations

|    column    |  type  |     default    | required |
|:------------:|:------:|:--------------:|:--------:|
|      _id     |  long  | auto_increment |    yes   |
|     name     | string |      null      |    yes   |
|  description | string |      null      |    yes   |
|    address   | string |      null      |    yes   |


#### items

|    column    |  type  |     default    | required |
|:------------:|:------:|:--------------:|:--------:|
|      _id     |  long  | auto_increment |    yes   |
|   item_type  | string |      null      |    yes   |
|     name     | string |      null      |    yes   |
|  description | string |      null      |    no    |
| retail_value |   int  |      null      |    yes   |
|   locations  | array  |      null      |    yes   |
|     notes    | string |      null      |    no    |

Locations Structure
```
[
  {
      location_id: long,
      quantity: int,
      condition: string,
  }
]
```


#### donations

|      column     |  type  |     default    | required |
|:---------------:|:------:|:--------------:|:--------:|
|       _id       |  long  | auto_increment |    yes   |
|     user_id     |  long  |      null      |    yes   |
|     item_ids    | array  |      null      |    no    |
|      title      | string |      null      |    yes   |
|   description   | string |      null      |    no    |
|  donation_date  |  date  |      null      |    yes   |
| expiration_date |  date  |      null      |    yes   |
|      notes      | string |      null      |    no    |


#### requisitions

|      column      |  type  |     default    | required |
|:----------------:|:------:|:--------------:|:--------:|
|        _id       |  long  | auto_increment |    yes   |
|      user_id     |  long  |      null      |    yes   |
|      item_ids    | array  |      null      |    no    |
|       title      | string |      null      |    yes   |
|    description   | string |      null      |    no    |
| requisition_date |  date  |      null      |    yes   |
|       notes      | string |      null      |    no    |
