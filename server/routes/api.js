"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var regist_1 = require("../MongooseModels/regist");
var logger_1 = require("../logger");
var router = express_1.default.Router();
exports.router = router;
router.get('/', function (_, res) {
    logger_1.logger.info('Hey');
    res.send('Test');
});
router.post('/form', function (req, res) {
    var regist = new regist_1.Regist({
        vaseId: req.body.vaseId,
        country: req.body.country,
        city: req.body.city,
        text: req.body.text
    });
    regist.save()
        .then(function () { return logger_1.logger.info('Created reg'); })
        .catch(function (error) {
        logger_1.logger.error(error.name + " - " + error.message);
        res.status(500).send('Error saving regist');
    });
    res.status(200).send('Created register');
});
router.get('/all', function (_, res) {
    regist_1.Regist.find({}, function (error, found) {
        if (!error) {
            res.json(found);
            return;
        }
        logger_1.logger.error(error);
        res.status(500).send('An error occured');
    });
});
router.get('/filter/:filterType/:filterValue', function (req, res) {
    var RegistProperties = regist_1.Regist.schema.paths;
    if (!(req.params.filterType in RegistProperties)) {
        logger_1.logger.warn('Wrong filtertype \'' + req.params.filterType + '\'');
        res.status(400).send('Wrong filtertype');
        return;
    }
    var queryParam = {};
    queryParam[req.params.filterType] = req.params.filterValue;
    regist_1.Regist.find(queryParam, function (error, found) {
        if (!error) {
            res.json(found);
            return;
        }
        logger_1.logger.error(error);
        res.status(500).send('An error occured');
    });
});
//# sourceMappingURL=api.js.map