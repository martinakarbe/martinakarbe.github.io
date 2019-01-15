class ContentBox {
  constructor() {
    this.toggleClass();
  }

  toggleClass() {
    $('.content-box').hover(function() {
      $(this).find('.description-box').toggleClass('visible');
      $(this).find('.default-content').toggleClass('hidden');
    });
  }
}

window.contentBox = new ContentBox();
