const app = require('express')()
module.exports = { path: '/api', handler: app}
var azure = require('azure-storage');

app.get('/createtable', (req, res) => { 
     var tableService = azure.createTableService('projmgt','z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA==');
     tableService.createTableIfNotExists('rashi111', function(error, result, response) {
      if (!error) {
      console.log(result)
      // result contains true if created; false if already exists
     }
});
tableService.deleteTable('rashi11', function(error,  response) {
  if (!error) {
  console.log(response)
  // table deleted
 }
});

var entGen = azure.TableUtilities.entityGenerator;
var entity = {
  PartitionKey: entGen.String('part2222'),
  RowKey: entGen.String('row11111'),
  boolValueTrue: entGen.Boolean(true),
  boolValueFalse: entGen.Boolean(false),
  intValue: entGen.Int32(42),
  dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
  complexDateValue: entGen.DateTime(new Date(Date.UTC(2013, 02, 16, 01, 46, 20)))
};
tableService.insertEntity('mytable', entity, function(error, result, response) {
  if (!error) {
    // result contains the ETag for the new entity
  }
});
     
})