const app = require('express')()
module.exports = {path: '/api', handler: app}
var azure = require('azure-storage')
app.get('/createtable',(req, res) => {
  var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
    
    tableService.createTableIfNotExists('rashi11', function(error, result, response) {
    if (!error) {
        console.log(result)
    // result contains true if created; false if already exists
  }
});
})
app.get('/deletetable',(req, res) => {
  var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
    tableService.deleteTable('rashi11', function(error, response) {
    if (!error) {
        console.log(response)
    // result contains true if created; false if already exists
  }
});
})
app.get('/deletedata',(req, res) => {
  var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
  var entGen = azure.TableUtilities.entityGenerator;
  var entity = {
    PartitionKey: entGen.String('No2'),
    RowKey: entGen.String('A'),
  };
  tableService.deleteEntity('Shivam', entity,function(error, response) {
    if (!error) {
        console.log(response)
    // result contains true if created; false if already exists
  }
});
})
app.get('/insertdata',(req, res) => {
    
    var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
    var entGen = azure.TableUtilities.entityGenerator;
    var entity = {
      PartitionKey: entGen.String('mNopqrst'),
      RowKey: entGen.String('Abcdefghijl'),
      boolValueTrue: entGen.Boolean(false),
      boolValueFalse: entGen.Boolean(true),
      Age: entGen.Int32(4200000),
      Date: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
      complexDateValue: entGen.DateTime(new Date(Date.UTC(2013, 02, 16, 01, 46, 20)))
      
    };
    tableService.insertEntity('rashi', entity, function(error, result, response) {
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
      RowKey: entGen.String('B'),
      boolValueTrue: entGen.Boolean(true),
      boolValueFalse: entGen.Boolean(true),
      Age: entGen.Int32(239),
      Date: entGen.DateTime(new Date(Date.UTC(2020, 10, 25))),
      complexDateValue: entGen.DateTime(new Date(Date.UTC(20000, 02, 16, 01, 46, 20)))
       };
    
    tableService.insertOrReplaceEntity('rashi', entity, function(error, result, response) {
      if (!error) {
        console.log(result)
        // result contains the entity with field 'taskDone' set to `true`
      }
    });
})