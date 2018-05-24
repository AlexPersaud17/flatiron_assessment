// create Comment class here
class Comment{
  constructor(comment, imageId){
    this.commentContent = comment
    this.imageObj = this.findImage(imageId)
    this.id = this.all().length
    this.commentEl()
    debugger
  }

  all(){
    return this.imageObj.comments
  }

  findImage(imageId){
    this.imageObj = Image.all.find(function(image){
      return image.id === imageId
    })
    this.imageObj.comments.push(this)
    return this.imageObj
  }

  commentEl(){
    return `<li id="image-${this.imageObj.id}-comment-${this.id}>${this.commentContent}</li>`
  }

}