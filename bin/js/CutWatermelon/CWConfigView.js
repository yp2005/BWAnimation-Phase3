// 配置界面
var CWConfigView = /** @class */ (function () {
    function CWConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.backgroundPic = configBox.getChildByName("backgroundPic");
        this.startPic = configBox.getChildByName("startPic");
        this.fruitsPic = configBox.getChildByName("fruitsPic");
        this.words = configBox.getChildByName("words");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
        this.configBox.on(Laya.Event.CLICK, this, function (e) {
            e.stopPropagation();
        });
    }
    // 显示配置
    CWConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        CutWatermelon.cutWatermelonMain.addChild(this.configBox);
    };
    // 隐藏配置
    CWConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 初始化
    CWConfigView.prototype.init = function () {
        this.backgroundPic.text = CutWatermelon.gameConfig.backgroundPic;
        this.startPic.text = CutWatermelon.gameConfig.startPic;
        this.fruitsPic.text = CutWatermelon.gameConfig.fruitsPic.left.notCuted + "," + CutWatermelon.gameConfig.fruitsPic.left.cuted + ";" +
            CutWatermelon.gameConfig.fruitsPic.right.notCuted + "," + CutWatermelon.gameConfig.fruitsPic.right.cuted;
        var text = "";
        for (var _i = 0, _a = CutWatermelon.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            if (text == "") {
                text = word;
            }
            else {
                text += "," + word;
            }
        }
        this.words.text = text;
    };
    // 提交配置
    CWConfigView.prototype.submit = function () {
        if (!this.words.text || !this.fruitsPic.text || !this.backgroundPic.text || !this.startPic.text) {
            CutWatermelon.cutWatermelonMain.showTip("请完成所有配置项的配置！");
            return;
        }
        var texts = this.words.text.split(",");
        var words = [];
        for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
            var word = texts_1[_i];
            words.push(word);
        }
        var fruitsPic = {
            left: {},
            right: {}
        };
        var fps = this.fruitsPic.text.split(";");
        for (var _a = 0, fps_1 = fps; _a < fps_1.length; _a++) {
            var fp = fps_1[_a];
            var fs = fp.split(",");
            for (var _b = 0, fs_1 = fs; _b < fs_1.length; _b++) {
                var f = fs_1[_b];
                if (f.indexOf("left") != -1) {
                    if (f.indexOf("cuted") != -1) {
                        fruitsPic.left.cuted = f;
                    }
                    else {
                        fruitsPic.left.notCuted = f;
                    }
                }
                else if (f.indexOf("right") != -1) {
                    if (f.indexOf("cuted") != -1) {
                        fruitsPic.right.cuted = f;
                    }
                    else {
                        fruitsPic.right.notCuted = f;
                    }
                }
            }
        }
        CutWatermelon.gameConfig = {
            backgroundPic: this.backgroundPic.text,
            startPic: this.startPic.text,
            gameModel: false,
            words: words,
            fruitsPic: fruitsPic
        };
        CutWatermelon.cutWatermelonMain.showTip("提交成功！");
        CutWatermelon.cutWatermelonMain.bg.skin = "CutWatermelon/" + this.backgroundPic.text;
        this.hide();
    };
    return CWConfigView;
}());
//# sourceMappingURL=CWConfigView.js.map