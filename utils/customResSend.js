/**
 * @function customResSend -> Intercepts res.send to append diagnostic data (dev only) and format the API response
 * @param req  -> Holds the request data
 * @param res  -> Holds the response data
 * @param next -> Acts as the callback function to the next chained function (Express.js handles the function chaining internally)
 * @returns nothing
 *
 * TODO: Make diag object only reflect only in Dev environments
 */

module.exports = function(req, res, next) {
  // / Set the res.send function to a temporary variable so we can override the function
  const oldSend = res.send;

  // / Over-riding Express.js res.send
  res.send = function(data) {
    // / Temporary JSON object that will be sent
    parsedResponse = {};

    parsedResponse.data = data;

    // / Create a diag object to hold useful diagnostic data
    parsedResponse.diag = {
      time: Date.now(),
      formatT: new Date().toISOString(),
      sentBody: req.body,
    };

    // / Reassign the original res.send
    res.send = oldSend;

    // / Apply the newly parsed response to the old res.send
    oldSend.apply(res, [parsedResponse]);
  };

  // / Continue the function chain
  next();
};
