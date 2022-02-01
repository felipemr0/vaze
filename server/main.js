"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var dotenv_1 = tslib_1.__importDefault(require("dotenv"));
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var cors_1 = tslib_1.__importDefault(require("cors"));
var mongoose_1 = tslib_1.__importDefault(require("mongoose"));
var api_1 = require("./routes/api");
var logger_1 = require("./logger");
dotenv_1.default.config();
var app = express_1.default();
var options = {
    origin: ['http://localhost:8080']
};
app.set('port', process.env.PORT || 3000);
app.use(cors_1.default(options));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', api_1.router);
mongoose_1.default.connect("" + process.env.MONGODB_URL);
app.listen(app.get('port'), function () {
    logger_1.logger.info("App is running at http://localhost:" + app.get('port') + " in " + app.get('env') + " mode");
    logger_1.logger.info('Press CTRL-C to stop');
});
exports.default = app;
//# sourceMappingURL=main.js.map