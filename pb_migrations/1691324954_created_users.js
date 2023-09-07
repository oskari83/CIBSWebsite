/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xbzqw5bgihzvm42",
    "created": "2023-08-06 12:29:14.690Z",
    "updated": "2023-08-06 12:29:14.690Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ejwcsyrw",
        "name": "crsid",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xbzqw5bgihzvm42");

  return dao.deleteCollection(collection);
})
