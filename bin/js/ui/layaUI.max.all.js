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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var CutWatermelonUI = /** @class */ (function (_super) {
        __extends(CutWatermelonUI, _super);
        function CutWatermelonUI() {
            return _super.call(this) || this;
        }
        CutWatermelonUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.CutWatermelonUI.uiView);
        };
        CutWatermelonUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "CutWatermelon/mainBG.png" } }, { "type": "Box", "props": { "y": 120, "x": 576, "width": 985, "var": "configBox", "pivotY": 100, "pivotX": 554, "height": 347 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 496, "width": 489, "skin": "common/configBG.png", "sizeGrid": "7,0,20,0", "height": 341, "alpha": 1 } }, { "type": "Label", "props": { "y": 185, "x": 558, "text": "单词：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 177, "x": 626, "width": 315, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 182, "x": 641, "width": 286, "name": "words", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Button", "props": { "y": 262, "x": 645, "width": 86, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "submitBtn", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 3, "x": 947, "width": 40, "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "name": "closeBtn", "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }, { "type": "Text", "props": { "y": 224, "x": 634, "text": "示例：\bgood,apple,name", "fontSize": 17, "font": "FF", "color": "#666666" } }, { "type": "Label", "props": { "y": 76, "x": 537, "text": "水果图：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 68, "x": 627, "width": 315, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 73, "x": 642, "width": 286, "name": "fruitsPic", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Text", "props": { "y": 110, "x": 637, "wordWrap": true, "width": 326, "text": "示例：xxx-left.png,xxx-left-cuted1.png,xxx-left-cuted2.png;xxx-right.png,xxx-right-cuted1.png,xxx-right-cuted2.png", "height": 54, "fontSize": 17, "font": "FF", "color": "#666666" } }] }, { "type": "Text", "props": { "y": 131, "x": 136, "width": 300, "var": "tip", "text": "操作不正确！", "pivotY": 2, "pivotX": 8, "height": 30, "fontSize": 30, "font": "FF", "color": "#4b1a81", "align": "center" } }, { "type": "Image", "props": { "y": 22, "x": 20, "width": 30, "var": "setting", "skin": "common/setting.png", "height": 30 } }, { "type": "Image", "props": { "y": 681, "x": 832, "var": "replayBtn", "skin": "common/replay-disabled.png" } }, { "type": "Text", "props": { "y": 698, "x": 835, "width": 168, "valign": "top", "text": "Replay", "strokeColor": "#000000", "stroke": 5, "height": 44, "fontSize": 27, "font": "FF", "color": "#ffffff", "align": "center" } }] };
        return CutWatermelonUI;
    }(View));
    ui.CutWatermelonUI = CutWatermelonUI;
})(ui || (ui = {}));
(function (ui) {
    var watermelonUI = /** @class */ (function (_super) {
        __extends(watermelonUI, _super);
        function watermelonUI() {
            return _super.call(this) || this;
        }
        watermelonUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.watermelonUI.uiView);
        };
        watermelonUI.uiView = { "type": "View", "props": { "width": 327, "height": 381 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "pictureCuted1", "skin": "CutWatermelon/watermelon-left-cuted1.png" } }, { "type": "Image", "props": { "y": -19, "x": -22, "var": "pictureCuted2", "skin": "CutWatermelon/watermelon-left-cuted2.png" } }, { "type": "Image", "props": { "y": 41, "x": 17, "var": "picture", "skin": "CutWatermelon/watermelon-left.png" } }, { "type": "Image", "props": { "y": 152, "x": 89, "var": "start", "skin": "CutWatermelon/start.png" } }, { "type": "Image", "props": { "y": 56, "x": -83, "width": 492, "var": "knife", "skin": "CutWatermelon/knife.png", "height": 269 } }, { "type": "Text", "props": { "y": 205, "x": 156, "width": 170, "var": "word", "text": "Start", "rotation": 30, "pivotY": 33, "pivotX": 78, "height": 66, "fontSize": 60, "font": "ff", "color": "#000000", "bold": true, "align": "center" } }] };
        return watermelonUI;
    }(View));
    ui.watermelonUI = watermelonUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map