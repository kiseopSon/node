const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',//error,warn,info,verbose,debug,silly가 있음.
  format: format.json(),//lavel,timstamp,printf,simple,combine등등있음.
  transports: [
    new transports.File({ filename: 'combined.log' }),//로그 저장방식 설정
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({ format: format.simple() }));
}

module.exports = logger;
