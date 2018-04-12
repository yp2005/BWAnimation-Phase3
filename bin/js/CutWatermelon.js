// 砸蛋游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var CutWatermelon = /** @class */ (function () {
    function CutWatermelon(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                backgroundPic: "mainBG.png",
                startPic: "start.png",
                words: ["good", "apple", "bike", "computer"],
                fruitsPic: {
                    left: {
                        cuted: "watermelon-left-cuted.png",
                        notCuted: "watermelon-left.png"
                    },
                    right: {
                        cuted: "watermelon-right-cuted.png",
                        notCuted: "watermelon-right.png"
                    }
                }
            };
        }
        CutWatermelon.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#000000";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/CutWatermelon.atlas", type: Laya.Loader.ATLAS },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    CutWatermelon.prototype.onload = function () {
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            CutWatermelon.cutWatermelonMain = new CutWatermelonMain();
            CutWatermelon.cutWatermelonMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(CutWatermelon.cutWatermelonMain);
            CutWatermelon.cutWatermelonMain.init();
        });
    };
    // 游戏开始
    CutWatermelon.prototype.restart = function () {
        if (CutWatermelon.cutWatermelonMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        CutWatermelon.cutWatermelonMain.replayBtn.skin = "common/replay-disabled.png";
        CutWatermelon.cutWatermelonMain.init();
    };
    return CutWatermelon;
}());
//# sourceMappingURL=CutWatermelon.js.map