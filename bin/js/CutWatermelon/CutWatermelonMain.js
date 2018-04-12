var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 游戏主界面
var CutWatermelonMain = /** @class */ (function (_super) {
    __extends(CutWatermelonMain, _super);
    function CutWatermelonMain() {
        var _this = _super.call(this) || this;
        _this.watermelonPosition = [{ x: 7, y: 35 }];
        _this.configView = new CWConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.watermelon = new Watermelon();
        _this.addChild(_this.watermelon);
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (CutWatermelon.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        _this.bg.skin = "CutWatermelon/" + CutWatermelon.gameConfig.backgroundPic;
        _this.start.skin = "CutWatermelon/" + CutWatermelon.gameConfig.startPic;
        _this.start.centerX = 0;
        _this.start.centerY = 0;
        return _this;
    }
    //显示提示
    CutWatermelonMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    CutWatermelonMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    CutWatermelonMain.prototype.showConfigView = function (e) {
        e.stopPropagation();
        this.configView.show();
    };
    CutWatermelonMain.prototype.showSetting = function (state) {
        if (!CutWatermelon.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 给西瓜生成一个随机的位置
    CutWatermelonMain.prototype.getAPositon = function (watermelon) {
        watermelon.x = Math.floor(Math.random() * (1024 - 300));
        watermelon.y = Math.floor(Math.random() * (768 - 360));
        if (watermelon.x > 30 && watermelon.y < 170) {
            this.getAPositon(watermelon);
        }
    };
    // 显示西瓜
    CutWatermelonMain.prototype.showWaterMelon = function () {
        this.start.visible = false;
        if (this.watermelon.cuted) {
            // 随机一个单词
            if (this.words.length > 0) {
                var index = Math.floor(Math.random() * this.words.length);
                var word = this.words[index];
                this.words.splice(index, 1);
                this.watermelon.word.text = word;
                this.watermelon.word.width = 30 * word.length + 20;
                this.watermelon.word.pivotX = this.watermelon.word.width / 2;
                this.watermelon.word.pivotY = 33;
                this.watermelon.word.x = this.watermelon.width / 2;
                this.watermelon.word.y = 190;
            }
            else {
                this.replayBtn.skin = "common/replay-abled.png";
                this.off(Laya.Event.CLICK, this, this.showWaterMelon);
                this.watermelon.x = (1024 - this.watermelon.width) / 2;
                this.watermelon.y = (768 - this.watermelon.height) / 2;
                this.watermelon.picture.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.notCuted;
                this.watermelon.pictureCuted.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.cuted;
                this.watermelon.state = "left";
                this.watermelon.word.rotation = -40;
                var word = "Well Done";
                this.watermelon.word.text = word;
                this.watermelon.word.width = 30 * word.length + 20;
                this.watermelon.word.pivotX = this.watermelon.word.width / 2;
                this.watermelon.word.pivotY = 33;
                this.watermelon.word.x = this.watermelon.width / 2;
                this.watermelon.word.y = 186;
                return;
            }
            // 随机一个位置
            this.getAPositon(this.watermelon);
            // 相邻两次西瓜不同
            if (this.watermelon.state == "left") {
                this.watermelon.picture.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.right.notCuted;
                this.watermelon.pictureCuted.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.right.cuted;
                this.watermelon.state = "right";
            }
            else {
                this.watermelon.picture.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.notCuted;
                this.watermelon.pictureCuted.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.cuted;
                this.watermelon.state = "left";
            }
            this.watermelon.word.visible = false;
            this.watermelon.picture.visible = true;
            this.watermelon.pictureCuted.visible = false;
            this.watermelon.cuted = false;
        }
        else {
            this.off(Laya.Event.CLICK, this, this.showWaterMelon);
            this.watermelon.knife.visible = true;
            if (this.watermelon.state == "left") {
                this.watermelon.knife.rotation = 0;
                this.watermelon.knife.x = 30 - 400;
                this.watermelon.knife.y = 68 + this.watermelon.knife.height / this.watermelon.knife.width * 400;
                Laya.SoundManager.playSound("res/audio/cut-watermelon.mp3", 1);
                Laya.Tween.to(this.watermelon.knife, { x: 30 + 400, y: 68 - this.watermelon.knife.height / this.watermelon.knife.width * 400 }, 300, null, Laya.Handler.create(this, function () {
                    this.watermelon.picture.visible = false;
                    this.watermelon.pictureCuted.visible = true;
                    this.watermelon.cuted = true;
                    this.watermelon.word.rotation = -40;
                    this.watermelon.word.visible = true;
                    this.watermelon.knife.visible = false;
                    this.on(Laya.Event.CLICK, this, this.showWaterMelon);
                }));
            }
            else {
                this.watermelon.knife.rotation = -Math.asin(this.watermelon.knife.width / Math.sqrt(this.watermelon.knife.height * this.watermelon.knife.height + this.watermelon.knife.width * this.watermelon.knife.width)) * 180 / Math.PI * 2;
                this.watermelon.knife.x = 30 + this.watermelon.knife.width + 200;
                this.watermelon.knife.y = 68 + this.watermelon.knife.height * 2 + this.watermelon.knife.height / this.watermelon.knife.width * 200;
                Laya.SoundManager.playSound("res/audio/cut-watermelon.mp3", 1);
                Laya.Tween.to(this.watermelon.knife, { x: this.watermelon.knife.x - 800, y: this.watermelon.knife.y - this.watermelon.knife.height / this.watermelon.knife.width * 800 }, 300, null, Laya.Handler.create(this, function () {
                    this.watermelon.picture.visible = false;
                    this.watermelon.pictureCuted.visible = true;
                    this.watermelon.cuted = true;
                    this.watermelon.word.rotation = 40;
                    this.watermelon.word.visible = true;
                    this.watermelon.knife.visible = false;
                    this.on(Laya.Event.CLICK, this, this.showWaterMelon);
                }));
            }
        }
    };
    // 初始化
    CutWatermelonMain.prototype.init = function () {
        this.words = JSON.parse(JSON.stringify(CutWatermelon.gameConfig.words));
        this.on(Laya.Event.CLICK, this, this.showWaterMelon);
    };
    return CutWatermelonMain;
}(ui.CutWatermelonUI));
//# sourceMappingURL=CutWatermelonMain.js.map