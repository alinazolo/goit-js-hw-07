const categories = document.querySelectorAll('#categories .item');
console.log("Number of categories:", categories.length);
categories.forEach((item) => {
  const categoryItem = item.querySelector('h2').textContent;
  const lenghtItems = item.querySelectorAll('li').length
  console.log (`Category: ${categoryItem}`);
  console.log (`Elements: ${lenghtItems}`);
})



