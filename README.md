# SAP_DEV_EINDWERK_FIORI
Eindwerk voor het vak SAP Development, 3e jaar TI AP Hogeschool

## Inhoud

- **Master-detail application**
- Values: ProductSet
- Functions:
  - Update
  - Create
  - Delete

## ProductSet

- **ProductId [KEY]**
- Category
- TaxCode
- SupplierId
- Weight
- WeightUnit
- Description
- Name
- Uom
- Price
- Currency
- Width
- Depth
- Height
- DimUnit
- Status

## Functions
### Create

When the "create"-button is pressed, a new record will be initialised in the product database. 
A custom product id will also be generated. 
The app will automatically redirect to the newly created product id, which allows the user to complete the product object.
The user can save all added data by clicking a save button which uses the update functionality.

### Update

The update method will allow users to change data of an object by clicking an "Edit" button. 
The changed data will be saved in the database when "Save" is clicked, or the object will reset to its previous values by clicking "Cancel".

### Delete

When the "Delete"-button is clicked, the status of the selected product will be changed to "Obsolete".
