"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var winston_1 = require("winston");
var consoleFormat = winston_1.format.combine(winston_1.format.timestamp({
    format: 'YY-MM-DD HH:MM:SS'
}), winston_1.format.printf(function (info) {
    return info.timestamp + " - [" + info.level.toUpperCase().padEnd(5) + "] - " + info.message;
}), winston_1.format.colorize({
    all: true
}));
var fileFormat = winston_1.format.combine(winston_1.format.timestamp({
    format: 'YY-MM-DD HH:MM:SS'
}), winston_1.format.printf(function (info) {
    return info.timestamp + " - [" + info.level.toUpperCase().padEnd(5) + "] - " + info.message;
}));
var logger = winston_1.createLogger({
    transports: [
        new winston_1.transports.Console({ level: 'silly', format: consoleFormat }),
        new winston_1.transports.File({ filename: 'src/server/log/server.log ', level: 'warn', format: fileFormat })
    ]
});
exports.logger = logger;
//# sourceMappingURL=logger.js.map