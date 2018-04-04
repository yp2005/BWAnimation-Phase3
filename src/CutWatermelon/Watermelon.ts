// 西瓜类
class Watermelon extends ui.watermelonUI {
    public cuted: boolean = true;
    public state: string = "left";

    constructor() {
        super();
        this.knife.visible = false;
        this.picture.visible = false;
        this.pictureCuted2.visible = false;
        this.word.visible = false;
        this.x = (1024 - this.width) / 2;
        this.y = (768 - this.height) / 2;
        this.picture.centerX = 0;
        this.picture.centerY = 0;
        this.pictureCuted1.centerX = 0;
        this.pictureCuted1.centerY = 0;
        this.pictureCuted2.centerX = 0;
        this.pictureCuted2.centerY = 0;
    }
}