/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Store all student list elements in a variable "list" and the number of students on a page in a variable "pageSize"

let list = document.querySelectorAll(".student-list li");
let pageSize = 10;

// Create the "showPage" function that shows only student elements in the given page range
// (i.e. with the index higher than startIndex and less than endIndex)

const showPage = (list, page) => {
   let startIndex = (page * pageSize) - pageSize;
   let endIndex = (page * pageSize);

   for (var i = 0; i < list.length; i ++) {
      
      if(i < startIndex) {
         list[i].style.display = "none";
      }
      else if (i >= endIndex) {
         list[i].style.display = "none";
      }
      else {
         list[i].style.display = "block";
      }
   };
   
}

// Create the "appendPageLinks" function to generate pagination button structure and append it to HTML page using DOM
// This function also creates the event listeners that perform the pagination actions.

const appendPageLinks = (list) => {

   let pageDiv = document.getElementsByClassName("page")[0];
   let paginationContainer = document.createElement('div');
   let paginationList = document.createElement("ul");
   let numberPages = Math.ceil(list.length / pageSize);

   paginationContainer.className='pagination';
   pageDiv.appendChild(paginationContainer);
   paginationContainer.appendChild(paginationList);  

   for (let i=1; i < numberPages + 1; i ++) {
      let listEl = document.createElement("li");
      let buttonEl = document.createElement("a");
      
      buttonEl.innerHTML = i; 
      
      if (i == 1) {
         buttonEl.className = "active";
      }
      
      buttonEl.addEventListener("click", () => {
         let buttons = paginationContainer.getElementsByTagName("a");
         for (let j = 0; j < buttons.length; j++) {
            buttons[j].className = "";
         }
         event.target.className = "active";

         showPage(list, event.target.innerHTML);
      });

      listEl.appendChild(buttonEl);
      paginationList.appendChild(listEl);
   }

}

// Call "appendPageLinks" and "showPage" functions when the page first loads, in order to default to the first page of students
appendPageLinks(list);
showPage(list, 1);