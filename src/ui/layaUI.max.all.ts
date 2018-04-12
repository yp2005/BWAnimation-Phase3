
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class CutWatermelonUI extends View {
		public bg:Laya.Image;
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public replayBtn:Laya.Image;
		public start:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"CutWatermelon/mainBG.png"}},{"type":"Box","props":{"y":120,"x":576,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":347},"child":[{"type":"Image","props":{"y":9,"x":496,"width":489,"skin":"common/configBG.png","sizeGrid":"7,7,20,7","height":413,"alpha":1}},{"type":"Label","props":{"y":278,"x":558,"text":"单词：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":269,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":272,"x":641,"width":286,"name":"words","height":31,"fontSize":18,"font":"FF","color":"#3b3232"}},{"type":"Button","props":{"y":354,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":316,"x":634,"text":"示例：\bgood,apple,name","fontSize":17,"font":"FF","color":"#666666"}},{"type":"Label","props":{"y":185,"x":537,"text":"水果图：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":176,"x":627,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":180,"x":642,"width":286,"name":"fruitsPic","height":31,"fontSize":18,"font":"FF","color":"#3b3232"}},{"type":"Text","props":{"y":221,"x":637,"wordWrap":true,"width":326,"text":"示例：xxx-left.png,xxx-left-cuted.png;xxx-right.png,xxx-right-cuted.png","height":40,"fontSize":17,"font":"FF","color":"#666666"}},{"type":"Label","props":{"y":67,"x":537,"text":"背景图：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":58,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":61,"x":641,"width":286,"name":"backgroundPic","height":31,"fontSize":18,"font":"FF","color":"#3b3232"}},{"type":"Label","props":{"y":126,"x":537,"text":"开始图：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":117,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":120,"x":641,"width":286,"name":"startPic","height":31,"fontSize":18,"font":"FF","color":"#3b3232"}}]},{"type":"Text","props":{"y":131,"x":136,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"font":"FF","color":"#4b1a81","align":"center"}},{"type":"Image","props":{"y":22,"x":20,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Image","props":{"y":681,"x":832,"var":"replayBtn","skin":"common/replay-disabled.png"}},{"type":"Text","props":{"y":698,"x":835,"width":168,"valign":"top","text":"Replay","strokeColor":"#000000","stroke":5,"height":44,"fontSize":27,"font":"FF","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":220,"x":339,"var":"start","skin":"CutWatermelon/start.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.CutWatermelonUI.uiView);

        }

    }
}

module ui {
    export class watermelonUI extends View {
		public pictureCuted:Laya.Image;
		public picture:Laya.Image;
		public knife:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":327,"height":381},"child":[{"type":"Image","props":{"y":49,"x":20,"var":"pictureCuted","skin":"CutWatermelon/watermelon-left-cuted.png"}},{"type":"Image","props":{"y":92,"x":65,"var":"picture","skin":"CutWatermelon/watermelon-left.png"}},{"type":"Image","props":{"y":68,"x":30,"width":266,"var":"knife","skin":"CutWatermelon/knife.png","height":245}},{"type":"Text","props":{"y":186,"x":156,"width":170,"var":"word","valign":"top","text":"Start","rotation":-40,"pivotY":33,"pivotX":78,"height":66,"fontSize":60,"font":"ff","color":"#000000","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.watermelonUI.uiView);

        }

    }
}
