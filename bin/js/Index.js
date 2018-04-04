// 程序入口，本工程仅用于切换各个动画进行测试
// 游戏名称，修改这个变量值来切换不同游戏，
var gameName = "watermelon";
if (gameName == "watermelon") {
    //气球爆炸消失游戏
    var config = {
        gameModel: false,
        words: ["good", "apple", "bike", "computer"],
        fruitsPic: {
            left: {
                cuted1: "watermelon-left-cuted1.png",
                cuted2: "watermelon-left-cuted2.png",
                notCuted: "watermelon-left.png"
            },
            right: {
                cuted1: "watermelon-right-cuted1.png",
                cuted2: "watermelon-right-cuted2.png",
                notCuted: "watermelon-right.png"
            }
        }
    };
    new CutWatermelon(config);
}
//# sourceMappingURL=Index.js.map