/*
    Cordova WeChat Plugin
    https://github.com/meishao/cordova-plugin-wechat

    by MEISHAO
    https://github.com/meishao

    MIT License
*/

exports.share = function (message, scene, onfulfilled, onrejected) {
    var text = null;

    if (typeof message == 'string') {
        text = message;
        message = null;
    }

    cordova
        .exec(function () {
            onfulfilled();
        }, function (err) {
            onrejected(err);
        }, 'WeChat', 'share', [
            {
                message: message,
                text: text,
                scene: scene
            }
        ]);
};

exports.Scene = {
    chosenByUser: 0,
    session: 1,
    timeline: 2
};

exports.ShareType = {
    app: 1,
    emotion: 2,
    file: 3,
    image: 4,
    music: 5,
    video: 6,
    webpage: 7
};

exports.isInstalled = function (onfulfilled, onrejected) {
    cordova
        .exec(function (isInstalled) {
            onfulfilled(isInstalled);
        }, function (err) {
            onrejected(err);
        }, 'WeChat', 'isInstalled', []);
};

exports.sendPaymentRequest = function (params, onfulfilled, onrejected) {
    cordova
        .exec(function (sendPaymentRequest) {
            onfulfilled(sendPaymentRequest);
        }, function (err) {
            onrejected(err);
        }, 'WeChat', 'sendPaymentRequest', [params]);
};
