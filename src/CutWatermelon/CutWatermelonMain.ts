// 游戏主界面
class CutWatermelonMain extends ui.CutWatermelonUI {
    private configView: CWConfigView; // 配置页
    private words: string[]; // 单词
    private watermelon: Watermelon; // 西瓜
    private watermelonPosition: any[] = [{x: 7,y: 35}];
    constructor() {
        super(); 
        this.configView = new CWConfigView(this.configBox);
        this.tip.visible = false;
        this.watermelon = new Watermelon(); 
        this.addChild(this.watermelon);
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(CutWatermelon.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
    }

    //显示提示
    public showTip(text: string) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    }

    private hideTip() {
        this.tip.visible = false;
    }

    // 显示游戏配置页面 
    private showConfigView(e: laya.events.Event) {
        e.stopPropagation();
        this.configView.show();
    }

    设置设置按钮是否显示
    public showSetting(state: boolean) {
        if(!CutWatermelon.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    // 给西瓜生成一个随机的位置
    private getAPositon(watermelon: Watermelon) {
        watermelon.x = Math.floor(Math.random() * (1024 - 300));
        watermelon.y = Math.floor(Math.random() * (768 - 360));
        if(watermelon.x > 30 && watermelon.y < 170) { // 如果生成的位置挡住了标题，重新生成
            this.getAPositon(watermelon);
        }
    }

    // 显示西瓜
    private showWaterMelon() {
        this.watermelon.start.visible = false;
        if(this.watermelon.cuted) { // 西瓜被切开了换下一个西瓜
            // 随机一个单词
            if(this.words.length > 0) {
                let index: number = Math.floor(Math.random() * this.words.length);
                let word = this.words[index];
                this.words.splice(index, 1);
                this.watermelon.word.text = word;
                this.watermelon.word.width = 30 * word.length + 20;
                this.watermelon.word.pivotX = this.watermelon.word.width / 2;
                this.watermelon.word.pivotY = 33;
                
                this.watermelon.word.x = this.watermelon.width / 2;
                this.watermelon.word.y = 190;
            }
            else { // 没有单词了结束游戏
                this.replayBtn.skin = "common/replay-abled.png";
                this.off(Laya.Event.CLICK, this, this.showWaterMelon);
                this.watermelon.x = (1024 - this.watermelon.width) / 2;
                this.watermelon.y = (768 - this.watermelon.height) / 2;
                this.watermelon.picture.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.notCuted;
                this.watermelon.pictureCuted1.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.cuted1;
                this.watermelon.pictureCuted2.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.cuted2;
                this.watermelon.state = "left";
                this.watermelon.word.rotation = -30;
                let word = "Well Done";
                this.watermelon.word.text = word;
                this.watermelon.word.width = 30 * word.length + 20;
                this.watermelon.word.pivotX = this.watermelon.word.width / 2;
                this.watermelon.word.pivotY = 33;
                this.watermelon.word.x = this.watermelon.width / 2;
                this.watermelon.word.y = 190;
                return;
            }
            // 随机一个位置
            this.getAPositon(this.watermelon);
            // 相邻两次西瓜不同
            if(this.watermelon.state == "left") {
                this.watermelon.picture.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.right.notCuted;
                this.watermelon.pictureCuted1.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.right.cuted1;
                this.watermelon.pictureCuted2.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.right.cuted2;
                this.watermelon.state = "right";
            }
            else {
                this.watermelon.picture.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.notCuted;
                this.watermelon.pictureCuted1.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.cuted1;
                this.watermelon.pictureCuted2.skin = "CutWatermelon/" + CutWatermelon.gameConfig.fruitsPic.left.cuted2;
                this.watermelon.state = "left";
            }
            this.watermelon.word.visible = false;
            this.watermelon.picture.visible = true;
            this.watermelon.pictureCuted1.visible = false;
            this.watermelon.pictureCuted2.visible = false;
            this.watermelon.cuted = false;
        }
        else { // 切开西瓜
            this.off(Laya.Event.CLICK, this, this.showWaterMelon);
            this.watermelon.knife.visible = true;
            if(this.watermelon.state == "left") {
                this.watermelon.knife.rotation = 0;
                this.watermelon.knife.x = -83 - 400;
                this.watermelon.knife.y = 56 + this.watermelon.knife.height / this.watermelon.knife.width * 400;
                Laya.Tween.to(this.watermelon.knife, {x: -83 + 400, y: 56 - this.watermelon.knife.height / this.watermelon.knife.width * 400}, 300, null, Laya.Handler.create(this, function() {
                    this.watermelon.picture.visible = false;
                    this.watermelon.pictureCuted1.visible = true;
                    this.watermelon.cuted = true;
                    this.watermelon.word.rotation = -30;
                    this.watermelon.word.visible = true;
                    this.watermelon.knife.visible = false;
                    Laya.timer.once(150, this, function() {
                        this.watermelon.pictureCuted1.visible = false;
                        this.watermelon.pictureCuted2.visible = true;
                        this.on(Laya.Event.CLICK, this, this.showWaterMelon);
                    });
                }));
            }
            else {       
                this.watermelon.knife.rotation = -Math.asin(this.watermelon.knife.width / Math.sqrt(this.watermelon.knife.height * this.watermelon.knife.height + this.watermelon.knife.width * this.watermelon.knife.width)) * 180 / Math.PI * 2;
                this.watermelon.knife.x = -83 + this.watermelon.knife.width + 200;
                this.watermelon.knife.y = 56 + this.watermelon.knife.height * 2 + this.watermelon.knife.height / this.watermelon.knife.width * 200;
                Laya.Tween.to(this.watermelon.knife, {x: this.watermelon.knife.x - 800, y: this.watermelon.knife.y - this.watermelon.knife.height / this.watermelon.knife.width * 800}, 300, null, Laya.Handler.create(this, function() {
                    this.watermelon.picture.visible = false;
                    this.watermelon.pictureCuted1.visible = true;
                    this.watermelon.cuted = true;
                    this.watermelon.word.rotation = 30;
                    this.watermelon.word.visible = true;
                    this.watermelon.knife.visible = false;
                    Laya.timer.once(150, this, function() {
                        this.watermelon.pictureCuted1.visible = false;
                        this.watermelon.pictureCuted2.visible = true;
                        this.on(Laya.Event.CLICK, this, this.showWaterMelon);
                    });
                }));
            }
        }
    }

    // 初始化
    public init() {
       this.words = JSON.parse(JSON.stringify(CutWatermelon.gameConfig.words));
       this.on(Laya.Event.CLICK, this, this.showWaterMelon);
    }  
}