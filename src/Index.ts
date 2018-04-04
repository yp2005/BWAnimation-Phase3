// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏，
let gameName = "watermelon"; 

if(gameName == "watermelon") {
    //气球爆炸消失游戏
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        words: ["good","apple","bike","computer"], // 单词
        fruitsPic: { // 水果图片
            left: {
                cuted1: "watermelon-left-cuted1.png",
                cuted2: "watermelon-left-cuted2.png",
                notCuted: "watermelon-left.png"
            },
            right:{
                cuted1: "watermelon-right-cuted1.png",
                cuted2: "watermelon-right-cuted2.png",
                notCuted: "watermelon-right.png"
            }
        }
    };
    new CutWatermelon(config);
}