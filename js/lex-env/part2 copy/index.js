function createLogger() {
  const logger = [];
  function warn(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  }
  function error(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }
  function log(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }
  function getRecords(type) {
    let sorted = logger.sort((a, b) => a.dateTime < b.dateTime);
    return type ? sorted.filter(item => item.type === type) : sorted;
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogger();

logger1.error('we have a problem');

logger1.error('error');
logger1.log('hello');

console.log(logger1.getRecords());

// const logger2 = createLogger();

// logger2.log('hello');

// console.log(logger2.getRecords());
