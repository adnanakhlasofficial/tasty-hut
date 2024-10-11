const fetchData = async (status = false) => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  // const categories = data.categories;
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  // if (status) {
  //   const categories = data.categories;
  // } else {
  //   const categories = data.categories.slice(0, 6);
  //   console.log(categories);
  // }

  const categories = status ? data.categories : data.categories.slice(0, 6);

  console.log(categories);

  categories.forEach((dish) => {
    const card = document.createElement("div");
    const { strCategory, strCategoryDescription, strCategoryThumb } = dish;
    card.className =
      "flex gap-6 items-center border rounded-lg max-w-[34.875rem] h-auto";

    card.innerHTML = `

						<div class="h-full w-1/2">
							<img
								class="rounded-lg h-full w-full object-cover object-center"
								src="${strCategoryThumb}"
								alt=""
							/>
						</div>
						<!-- Content -->
						<div class="space-y-6 w-1/2 py-[3.19rem]">
							<div class="space-y-4 w-5/6">
								<h3 class="card-title">${strCategory}</h3>
								<p class="card-desc text-ellipsis">${limitWord(strCategoryDescription)}...</p>
							</div>
							<div>
								<button class="card-btn">View Details</button>
							</div>
						</div>
		`;

    cardsContainer.append(card);
  });
};

function limitWord(str, word = 10) {
  const stringArray = str.split(" ");
  let outputStr = "";
  for (let i = 0; i <= word; i++) {
    outputStr += stringArray[i] + " ";
  }
  return outputStr;
}

fetchData();
