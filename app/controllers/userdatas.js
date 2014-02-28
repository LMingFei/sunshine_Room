/**
 * ExerciseController
 */
var mongoose = require('mongoose');
var Userdata = mongoose.model('Userdata');

exports.read = function (req, res) {
    if (!req.user) return res.send(401);
    var username = req.user.username
        , appId = req.app.id
        , entityId = req.params.entityId;

    Userdata.findOne({
        userId: username,
        appId: appId,
        entityId: entityId
    }).exec(function (err, userdata) {
            if (err) {
                return res.send(500, err);
            }
            res.json(200, (userdata) ? userdata.data : {});
        })
};

exports.write = function (req, res) {
    if (!req.user) return res.send(401);

    var username = req.user.username
        , appId = req.app.id
        , entityId = req.params.entityId
        , data = req.body;

    Userdata.findOne({
        userId: username,
        appId: appId,
        entityId: entityId
    }).exec(function (err, userdata) {
            if (err) return res.send(500, err);
            if (userdata) {
                userdata.data = data;
            } else {
                userdata = new Userdata({
                    userId: username,
                    appId: appId,
                    entityId: entityId,
                    data: data
                });
            }
            userdata.save(function (err) {
                if (err) return res.send(500, err);
                res.json(200, userdata.data);
            });

        });

};
