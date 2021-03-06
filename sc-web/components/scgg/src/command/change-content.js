SCggCommandChangeContent = function (object, newContent, newType) {
    this.object = object;
    this.oldContent = object.content;
    this.newContent = newContent;
    this.oldType = object.contentType;
    this.newType = newType;
};

SCggCommandChangeContent.prototype = {

    constructor: SCggCommandChangeContent,

    undo: function() {
        this.object.setContent(this.oldContent, this.oldType);
    },

    execute: function() {
        this.object.setContent(this.newContent, this.newType);
    }

};
