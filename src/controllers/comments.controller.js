class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    var thisController = this
    this.$addCommentForm.each(function(i){
      $(this).submit(function(e){
        e.preventDefault()
        var $form = $(this)
        var comment = $form.children(".user-text").val()
        var imageId = parseInt($form.parent().attr('data-id'))
        var newComment = new Comment(comment, imageId)
        thisController.render(newComment)
        $form.trigger("reset")
      })
    })
  }

  render(commentObj){
    $(`#comments-${commentObj.imageObj.id}`).append(commentObj.commentEl())
  }
}
