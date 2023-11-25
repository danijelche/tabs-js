const tabBtns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const container = document.querySelector(".container");

container.addEventListener("click", (e)=> {
	const id = e.target.dataset.id;
	if(id){
		//remove active from all btns
		tabBtns.forEach((btn)=> {
			btn.classList.remove("active");
			e.target.classList.add("active");
		});
		// hide other articles
		articles.forEach((article)=> {
			article.classList.remove("active");
		});
		const element = document.getElementById(id);
		element.classList.add("active");
	}
});