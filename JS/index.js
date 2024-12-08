var input1 = document.getElementById("bookmarkName");
var input2 = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var modal = document.getElementById("modal");
var overlayModal = document.getElementById("overlaymodal");
var modalMessage = document.getElementById("modalmessage");
var closeMessag = document.getElementById("closeMessag");
var tableContent = document.getElementById("tableContent");
console.log("dddd")
// var addBooksName=[]
var idCounter = 1;



// function showModal(Message) {
//     modalMessage.textContent = Message;
//     modal.style.display = "block";
//     overlayModal.style.display = "block";
// }


function validatinput() {

    var text1 = input1.value.trim();
    var text2 = input2.value.trim();

   var text1Regex = /^.{3,50}$/;
    
    var text2Regex = /^https?:\/\/.+$/;

    if (!text1Regex.test(text1)) {
        console.log("no")
      return false;
    }
    if (!text2Regex.test(text2)) {
        console.log("noxx")
        return false;
    }
    console.log("ikdk")
    return true;
}

submitBtn.addEventListener("click",
    (event) => {
        event.preventDefault();
        addData()
    }
);


function addData() {
    if (!validatinput()) {
        
        return;
    }

    var text1 = input1.value.trim();
    var text2 = input2.value.trim();

   
    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${idCounter}</td>
        <td>${text1}</td>
        <td>
            <button class="btn btn-primary" onclick="window.open('${text2}', '_blank')">Visit</button>
        </td>
        <td>
            <button class="btn btn-danger" onclick="this.parentElement.parentElement.remove()">Delete</button>
        </td>
    `;

    tableContent.appendChild(row);

saveToLocalStorage({id:idCounter, name:text1, url:text2});



    idCounter++;

    input1.value = "";
    input2.value = "";
}

function deleteRow(id){
var rows =document.querySelectorAll("tr");
rows.forEach(row => {
    if (row.firstChild.textContent ==id){
        row.remove();
    }

})
deleteFromLocalStorage(id);

};
// function saveToLocalStorage(bookmark){
//     var bookmarks = 
//     JSON.parse(localStorage.getItem("bookmarks")) || [];
//     bookmarks.push(bookmark);
//     localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
// }
// // ========================
// function rilowdData(bookmark){
//     var bookmarks = 
//     JSON.parse(localStorage.getItem("bookmarks")) || [];
//     bookmarks.forEach(bookmarks)<={
//         bookmarks.forEach((bookmark) => {
//             addRowToTable(bookmark.id, bookmark.name, bookmark.url);
//         });
//         if (bookmarks.lengeth){

//         }
//     }
// }

// function loadData(){
//     var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//     bookmarks.forEach(bookmark=>
//     {
//         var row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${bookmark.id}</td>
//             <td>${bookmark.name}</td>
//             <td>
//                 <button class="btn btn-primary" onclick="window.open('${bookmark.url}', '_blank')">Visit</button>
//             </td>
//             <td>
//                 <button class="btn btn-danger" onclick="deleteRow(${bookmark.id})">Delete</button>
//             </td>
//         `;
    
//         tableContent.appendChild(row)
//         idCounter=bookmark.id
//     })
// }









