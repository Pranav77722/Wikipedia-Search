let searchInputEle = document.getElementById("searchInput");
let searchResultEle = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    //1 div container
    let resultItemEle = document.createElement("div");
    resultItemEle.classList.add("result-item");
    searchResultEle.appendChild(resultItemEle);

    //2 Anchor title --- result-title
    let titlElement = document.createElement("a");
    titlElement.href = link;
    titlElement.target = "_blank";
    titlElement.textContent = title;
    titlElement.classList.add("resul-title");
    resultItemEle.appendChild(titlElement);

    //3 title break
    let titleBreakEle = document.createElement("br");
    resultItemEle.appendChild(titleBreakEle);

    //4 Anchor url --- result-url
    let urlEle = document.createElement("a");
    urlEle.classList.add("result-url");
    urlEle.href = link;
    urlEle.target = "_blanck";
    urlEle.textContent = link;
    resultItemEle.appendChild(urlEle);
    //5 line break 
    let lineBreak = document.createElement("br");
    resultItemEle.appendChild(lineBreak);

    //6 pagraph description -- line-description
    let paragraphElement = document.createElement("p");
    paragraphElement.classList.add("line-description");
    paragraphElement.textContent = description;
    resultItemEle.appendChild(paragraphElement);
}

function displayResults(search_results) {
    spinner.classList.toggle("d-none");
    for (let result of search_results) {
        createAndAppendSearchResult(result);
    }


}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        searchResultEle.textContent = "";
        let searchInputValue = searchInputEle.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + encodeURIComponent(searchInputValue);
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}
searchInputEle.addEventListener("keydown", searchWikipedia);