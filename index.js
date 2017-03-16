'use strict';

var admin = require("firebase-admin");

var serviceAccount = require("../srb-coasters-firebase-adminsdk-0s0i5-b7cac8c4d0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://srb-coasters.firebaseio.com"
});

let coastersRef = admin.database().ref('data/coasters')
let listRef = coastersRef.orderByChild('date').limitToLast(10)

let testRef = admin.database().ref('test')
let fooRef = testRef.child('foo')

fooRef.set({foo: 'bar'})

//let payload = {}
testRef.on('child_added', (snap) => {
  console.log(snap.val())
})

// var test = testRef.push()

// testRef.update({myfoo: {bar: null}})
