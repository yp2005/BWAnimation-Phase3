// 砸蛋游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class CutWatermelon {
    public static cutWatermelonMain: CutWatermelonMain; // 主界面
    public static gameConfig: any; // 游戏配置
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
                backgroundPic: "mainBG.png", // 背景图
                startPic: "start.png", // 开始图片
                words: ["good","apple","bike","computer"], // 单词
                fruitsPic: { // 水果图片
                    left: {
                        cuted: "watermelon-left-cuted.png",
                        notCuted: "watermelon-left.png"
                    },
                    right:{
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
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/CutWatermelon.atlas", type: Laya.Loader.ATLAS},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        let text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function() {
            CutWatermelon.cutWatermelonMain = new CutWatermelonMain();
            CutWatermelon.cutWatermelonMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(CutWatermelon.cutWatermelonMain);
            CutWatermelon.cutWatermelonMain.init(); 
        });
    }

    // 游戏开始
    private restart() {
        if(CutWatermelon.cutWatermelonMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        CutWatermelon.cutWatermelonMain.replayBtn.skin = "common/replay-disabled.png";     
        CutWatermelon.cutWatermelonMain.init(); 
    }
}
