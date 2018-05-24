function Comment(comment, imageId){
  this.commentContent = comment
  this.imageObj = this.findImage(imageId)
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  debugger
}

Comment.all = []

Comment.prototype.findImage = function(imageId){
  this.imageObj = Image.all.find(function(image){
    return image.id === imageId
  })
  this.imageObj.comments.push(this)
  return this.imageObj

}

Comment.prototype.commentEl = function(){
  return `<li id="image-${this.imageObj.id}-comment-${this.id}">${this.commentContent}</li>`
}