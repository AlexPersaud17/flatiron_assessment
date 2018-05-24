// create Comment class here
class Comment{
  constructor(comment, imageId){
    this.commentContent = comment
    this.imageObj = this.findImage(imageId)
    this.id = this.all().length
    
  }

  all(){
    return []
  }

  findImage(imageId){
    this.imageObj = Image.all.find(function(image){
      return image.id === imageId
    })
    debugger
  }

  commentEl(){

  }

}