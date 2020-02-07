## Schema

#### roles

| column |  type  |     default    | required |
|:------:|:------:|:--------------:|:--------:|
|   _id  |  long  | auto_increment |    yes   |
|  name  | string |      null      |    yes   |


#### users

|  column |  type  |     default    | required |
|:-------:|:------:|:--------------:|:--------:|
|   _id   |  long  | auto_increment |    yes   |
| role_id |  long  |      null      |    yes   |
|   name  | string |      null      |    yes   |
|  email  | string |      null      |    no    |


#### locations

|    column    |  type  |     default    | required |
|:------------:|:------:|:--------------:|:--------:|
|      _id     |  long  | auto_increment |    yes   |
|     name     | string |      null      |    yes   |
|  description | string |      null      |    yes   |
|    address   | string |      null      |    yes   |


#### conditions

| column |  type  |     default    | required |
|:------:|:------:|:--------------:|:--------:|
|   _id  |  long  | auto_increment |    yes   |
|  name  | string |      null      |    yes   |


#### item_types

| column |  type  |     default    | required |
|:------:|:------:|:--------------:|:--------:|
|   _id  |  long  | auto_increment |    yes   |
|  name  | string |      null      |    yes   |


#### items

|    column    |  type  |     default    | required |
|:------------:|:------:|:--------------:|:--------:|
|      _id     |  long  | auto_increment |    yes   |
| item_type_id |  long  |      null      |    yes   |
|     name     | string |      null      |    yes   |
|  description | string |      null      |    no    |
| retail_value | number |      null      |    yes   |
|     notes    | string |      null      |    no    |


#### current_items

|    column    |  type  | default | required |
|:------------:|:------:|:-------:|:--------:|
|    item_id   |  long  |   null  |    yes   |
|  donation_id |  long  |   null  |    yes   |
|  location_id |  long  |   null  |    yes   |
| condition_id |  long  |   null  |    yes   |
|    quality   |   int  |    0    |    yes   |
|     notes    | string |   null  |    no    |


#### donations

|      column     |  type  |     default    | required |
|:---------------:|:------:|:--------------:|:--------:|
|       _id       |  long  | auto_increment |    yes   |
|     user_id     |  long  |      null      |    yes   |
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
|       title      | string |      null      |    yes   |
|    description   | string |      null      |    no    |
| requisition_date |  date  |      null      |    yes   |
|       notes      | string |      null      |    no    |


#### donation_items

|    column   |   type   | default | required |
|:-----------:|:--------:|:-------:|:--------:|
| donation_id |   long   |   null  |    yes   |
|   item_id   |   long   |   null  |    yes   |


#### requisition_items

|     column     |   type   | default | required |
|:--------------:|:--------:|:-------:|:--------:|
| requisition_id |   long   |   null  |    yes   |
|     item_id    |   long   |   null  |    yes   |
