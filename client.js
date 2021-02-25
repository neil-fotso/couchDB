var CouchDB = require("couchdb-client");
var db = new CouchDB("mydb", {
  host: "127.0.0.1",
  port: 5984,
  user: "root",
  passwd: "root",
});

db.createDB("pal", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log("Success:", data);
  }
});

db.getDB("pal", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    rev = data.rev;
    console.log(data);
  }
});

var doc;

db.getDoc("pal", "bar", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    doc = data;
  }
});

db.addView(
  "test",
  "stuff",
  { all: { map: "function (doc){emit(null,doc)}" } },
  function (err, data) {
    if (err) {
      console.error(err);
    } else {
      rev = data.rev;
      console.log(data);
    }
  }
);
