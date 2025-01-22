const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showNextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
  }
}

// Automatically show the first page
pages[0].classList.add('active');

// Automatically go to the next page every 5 seconds
setInterval(showNextPage, 5000);