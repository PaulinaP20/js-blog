'use strict';

const titleClickHandler = function(event){
    //console.log('link was clisked');
    const clickedElement=this;
    console.log('clickedElement: ' + clickedElement);


  /* [DONE] remove class 'active' from all article links  */

  const activeLinks=document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /*[IN PROGRESS] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles=document.querySelectorAll('.post.active');

  for (let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [IN PROGRESS] get 'href' attribute from the clicked link */

  /* [IN PROGRESS] find the correct article using the selector (value of 'href' attribute) */

  /* [IN PROGRESS] add class 'active' to the correct article */
}
const links=document.querySelectorAll('.titles a');

for (let link of links){
    link.addEventListener('click', titleClickHandler);
}