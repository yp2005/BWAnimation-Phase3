// 配置界面
class CWConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private words: Laya.TextInput; // 单词输入框
    private fruitsPic: Laya.TextInput; // 水果图片输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.fruitsPic = configBox.getChildByName("fruitsPic") as Laya.TextInput;
        this.words = configBox.getChildByName("words") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
        this.configBox.on(Laya.Event.CLICK, this, function(e: laya.events.Event) {
            e.stopPropagation();
        });
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        CutWatermelon.cutWatermelonMain.addChild(this.configBox);
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 初始化
    private init() {
        this.fruitsPic.text = CutWatermelon.gameConfig.fruitsPic.left.notCuted + "," + CutWatermelon.gameConfig.fruitsPic.left.cuted1 + "," + CutWatermelon.gameConfig.fruitsPic.left.cuted2 + ";" +
                                CutWatermelon.gameConfig.fruitsPic.right.notCuted + "," + CutWatermelon.gameConfig.fruitsPic.right.cuted1 + "," + CutWatermelon.gameConfig.fruitsPic.right.cuted2;
        let text = "";
        for(let word of CutWatermelon.gameConfig.words) {
            if(text == "") {
                text = word;
            }
            else {
                text += "," + word;
            }
        }
        this.words.text = text;
    }

    // 提交配置
    private submit() {
        if(!this.words.text || !this.fruitsPic.text) {
            CutWatermelon.cutWatermelonMain.showTip("请完成所有配置项的配置！");
            return;
        }
        let texts = this.words.text.split(",");
        let words: string[] = [];
        for(let word of texts) {
            words.push(word);
        }
        let fruitsPic: any = {
            left: {},
            right: {}
        };
        let fps = this.fruitsPic.text.split(";");
        for(let fp of fps) {
            let fs = fp.split(",");
            for(let f of fs) {
                if(f.indexOf("left") != -1) {
                    if(f.indexOf("cuted1") != -1) {
                        fruitsPic.left.cuted1 = f;
                    }
                    else if(f.indexOf("cuted2") != -1) {
                        fruitsPic.left.cuted2 = f;
                    }
                    else {
                        fruitsPic.left.notCuted = f;
                    }
                }
                else if(f.indexOf("right") != -1) {
                    if(f.indexOf("cuted1") != -1) {
                        fruitsPic.right.cuted1 = f;
                    }
                    else if(f.indexOf("cuted2") != -1) {
                        fruitsPic.right.cuted2 = f;
                    }
                    else {
                        fruitsPic.right.notCuted = f;
                    }
                }
            }
        }
        CutWatermelon.gameConfig = {
            gameModel: false,
            words: words,
            fruitsPic: fruitsPic
        }
        CutWatermelon.cutWatermelonMain.showTip("提交成功！");
        this.hide();
    }
}