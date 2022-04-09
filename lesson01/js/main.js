'use strict';
{
// remove ads
  document.querySelector('.ads').remove();

  // move item_4 to its place
  const course4 = document.querySelector('.item_four');
  const course3 = document.querySelector('.item_three');
  course3.after(course4);

  // from 6 to 2
  const allTwos = document.querySelectorAll('.props__item_two');
  allTwos[7].after(allTwos[8], allTwos[9]);

  // 2 to 4
  const allFours = document.querySelectorAll('.props__item_four');
  allFours[3].after(allFours[0]);

  // change 3 to 5 and vice versa
  const list3 = document.querySelector('.item_three')
      .querySelector('.props__list');
  const list5 = document.querySelector('.item_five')
      .querySelector('.props__list');
  const list5elements = document.querySelectorAll('.props__item_five');
  const list3elements = document.querySelectorAll('.props__item_three');
  list5.replaceChildren(...list5elements);
  list3.replaceChildren(...list3elements);
}
