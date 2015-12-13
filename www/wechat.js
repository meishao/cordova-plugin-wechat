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

exports.auth = function (scope, state, onfulfilled, onrejected) {
        if (typeof scope == "function") {
            // Wechat.auth(function () { alert("Success"); });
            // Wechat.auth(function () { alert("Success"); }, function (error) { alert(error); });
            cordova
                .exec(scope, state, "Wechat", "sendAuthRequest");
        }

        if (typeof state == "function") {
            // Wechat.auth("snsapi_userinfo", function () { alert("Success"); });
            // Wechat.auth("snsapi_userinfo", function () { alert("Success"); }, function (error) { alert(error); });
            cordova
                .exec(state, onfulfilled, "Wechat", "sendAuthRequest", [scope]);
        }
            cordova
                .exec(onfulfilled, onrejected, "Wechat", "sendAuthRequest", [scope, state]);
    },

exports.sendPaymentRequest = function (params, onfulfilled, onrejected) {
    cordova
        .exec(onfulfilled, onrejected, 'WeChat', 'sendPaymentRequest', [params]);
};
