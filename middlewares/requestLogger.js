// Log all APi request

const requestLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(
    `Date - ${timeStamp} | Method - ${req.method} | URL - ${req.url} | IP - ${req.ip}`,
  );
  // console.log("Logging request");

  next();
};

module.exports = requestLogger;
 