class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
  }

  addCommentFormListener() {
    // create comment form listener code here
    this.$addCommentForm.each(function(i){
      $(this).submit(function(e){
        e.preventDefault()
      })
    })
  }
}
