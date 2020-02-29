const uuid = require("uuid/v4");

exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: `Hello World (${uuid()})`
    });
}