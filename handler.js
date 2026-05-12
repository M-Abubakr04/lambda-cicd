module.exports.hello = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Serverless App",
    }),
  };
};

module.exports.status = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "Application is healthy",
    }),
  };
};

module.exports.time = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      currentTime: new Date(),
    }),
  };
};

#Test it
