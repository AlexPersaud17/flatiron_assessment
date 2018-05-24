class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here
    this.$addCommentForm.each(function(i){
      $(this).submit(function(e){
        e.preventDefault()
        var $form = $(this)
        var comment = $form.children(".user-text").val()
        var imageId = $form.parent().attr('data-id')
        var newComment = new Comment(comment, imageId)

      })
    })
  }
}
