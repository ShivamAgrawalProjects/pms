const app = require('express')()
module.exports = {path: '/api', handler: app}
var azure = require('azure-storage')
app.get('/createtable',(req, res) => {
  var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
    
    tableService.createTableIfNotExists('Shivam', function(error, result, response) {
    if (!error) {
        console.log(result)
    // result contains true if created; false if already exists
  }
});
})
app.get('/insertdata',(req, res) => {
    
    var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
    var entGen = azure.TableUtilities.entityGenerator;
    var entity = {
      PartitionKey: entGen.String('No2'),
      RowKey: entGen.String('A'),
      boolValueTrue: entGen.Boolean(false),
      boolValueFalse: entGen.Boolean(true),
      Age: entGen.Int32(42),
      Date: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
      complexDateValue: entGen.DateTime(new Date(Date.UTC(2013, 02, 16, 01, 46, 20)))
      
    };
    tableService.insertEntity('Shivam', entity, function(error, result, response) {
      if (!error) {
        console.log(result)
        // result contains the ETag for the new entity
      }
    });
  })
  app.get('/updatedata',(req, res) => {
    
    var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
    var entGen = azure.TableUtilities.entityGenerator;
    var entity = {
      PartitionKey: entGen.String('No2'),
      RowKey: entGen.String('A'),
      boolValueTrue: entGen.Boolean(true),
      boolValueFalse: entGen.Boolean(false),
      Age: entGen.Int32(81001),
      Date: entGen.DateTime(new Date(Date.UTC(2020, 10, 25))),
      complexDateValue: entGen.DateTime(new Date(Date.UTC(2083, 02, 16, 01, 46, 20)))
       };
    
    tableService.insertOrReplaceEntity('Shivam', entity, function(error, result, response) {
      if (!error) {
        console.log(result)
        // result contains the entity with field 'taskDone' set to `true`
      }
    });
})