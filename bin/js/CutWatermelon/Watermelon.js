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
// 西瓜类
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon() {
        var _this = _super.call(this) || this;
        _this.cuted = true;
        _this.state = "left";
        _this.knife.visible = false;
        _this.picture.visible = false;
        _this.pictureCuted2.visible = false;
        _this.word.visible = false;
        _this.x = (1024 - _this.width) / 2;
        _this.y = (768 - _this.height) / 2;
        _this.picture.centerX = 0;
        _this.picture.centerY = 0;
        _this.pictureCuted1.centerX = 0;
        _this.pictureCuted1.centerY = 0;
        _this.pictureCuted2.centerX = 0;
        _this.pictureCuted2.centerY = 0;
        return _this;
    }
    return Watermelon;
}(ui.watermelonUI));
//# sourceMappingURL=Watermelon.js.map