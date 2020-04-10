## Schema

#### donors

|  column |  type  |     default    | required |
|:-------:|:------:|:--------------:|:--------:|
|    id   |  long  | auto_increment |    yes   |
|   role  | string |      null      |    yes   |
|   name  | string |      null      |    yes   |
|  email  | string |      null      |    no    |


#### locations

|    column    |  type  |     default    | required |
|:------------:|:------:|:--------------:|:--------:|
|      id      |  long  | auto_increment |    yes   |
|     name     | string |      null      |    yes   |
|  description | string |      null      |    yes   |
|    address   | string |      null      |    yes   |


#### items

|    column    |  type  |     default    | required |
|:------------:|:------:|:--------------:|:--------:|
|      id      |  long  | auto_increment |    yes   |
|   item_type  | string |      null      |    yes   |
|     name     | string |      null      |    yes   |
|  description | string |      null      |    no    |
| retail_value |   int  |      null      |    yes   |
|     notes    | string |      null      |    no    |


#### line_items

|      column     |  type  |     default    | required |
|:---------------:|:------:|:--------------:|:--------:|
|       id        |  long  | auto_increment |    yes   |
|     item_id     |  long  |      null      |    yes   |
|   donation_id   |  long  |      null      |    yes   |
|   location_id   |  long  |      null      |    yes   |
|     quantity    |   int  |      null      |    no    |
|  retail_value   |   int  |      null      |    yes   |
| expiration_date |   int  |      null      |    yes   |
|      notes      | string |      null      |    no    |


#### donations

|      column     |  type  |     default    | required |
|:---------------:|:------:|:--------------:|:--------:|
|       id        |  long  | auto_increment |    yes   |
|    donor_id     |  long  |      null      |    yes   |
|      title      | string |      null      |    yes   |
|   description   | string |      null      |    no    |
|  donation_date  |  date  |      null      |    yes   |
| expiration_date |  date  |      null      |    yes   |
|      notes      | string |      null      |    no    |


#### requisitions

|      column      |  type  |     default    | required |
|:----------------:|:------:|:--------------:|:--------:|
|        id        |  long  | auto_increment |    yes   |
|     donor_id     |  long  |      null      |    yes   |
|       title      | string |      null      |    yes   |
|    description   | string |      null      |    no    |
| requisition_date |  date  |      null      |    yes   |
|       notes      | string |      null      |    no    |
