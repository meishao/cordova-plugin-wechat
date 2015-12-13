/*
    Cordova WeChat Plugin
    https://github.com/meishao/cordova-plugin-wechat

    by MEISHAO
    https://github.com/meishao

    MIT License
*/

#import <Cordova/CDV.h>
#import "WXApi.h"

enum CDVWeChatShareType {
    CDVWeChatShareTypeApp = 1,
    CDVWeChatShareTypeEmotion,
    CDVWeChatShareTypeFile,
    CDVWeChatShareTypeImage,
    CDVWeChatShareTypeMusic,
    CDVWeChatShareTypeVideo,
    CDVWeChatShareTypeWebpage
};

@interface CDVWeChat: CDVPlugin <WXApiDelegate>

@property (nonatomic, strong) NSString *currentCallbackId;
@property (nonatomic, strong) NSString *wechatAppId;

- (void)share:(CDVInvokedUrlCommand *)command;
- (void)isInstalled:(CDVInvokedUrlCommand *)command;
- (void)sendAuthRequest:(CDVInvokedUrlCommand *)command;
- (void)sendPaymentRequest:(CDVInvokedUrlCommand *)command;

@end
