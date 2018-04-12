// 程序入口，本工程仅用于切换各个动画进行测试
// 游戏名称，修改这个变量值来切换不同游戏，
var gameName = "watermelon";
if (gameName == "watermelon") {
    //气球爆炸消失游戏
    var config = {
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
    new CutWatermelon(config);
}
//# sourceMappingURL=Index.js.map