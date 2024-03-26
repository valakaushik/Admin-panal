const arr = [];

// perform insert operation
const addData = () => {
    let allData = JSON.parse(localStorage.getItem("catInfo"));
    let len = allData === null ? arr.length : allData.length;
    const name = document.catfrm.catname.value;
    const catData = {
        id: len + 1,
        name: name
    }
    arr.push(catData);
    localStorage.setItem("catInfo", JSON.stringify(arr));
    document.catfrm.catname.value = '';
    dispCat();
}

// Display all catagory
const dispCat = () => {
    let tr = '';
    let allData = JSON.parse(localStorage.getItem("catInfo"));
    if (allData != null) {
        allData.map((i) => {
            tr += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td><a href="#" class="btn btn-danger" onclick="delData(${i.id})">Delete</a></td>
            </tr>`
        })
        document.getElementById("allCatData").innerHTML = tr;
    }
}


// // dalate

const delData =(id)=>{
    let allData = JSON.parse(localStorage.getItem("catInfo"));
    allData.splice(id-1,1)
    j=1;
    allData.map((i)=>{
        i.id =j++;
    })
    localStorage.setItem("catInfo",JSON.stringify(allData));
    dispCat();
}
dispCat();
