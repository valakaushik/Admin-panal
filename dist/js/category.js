const arr = [];

// perform insert operation
const addData = () => {
    let allData = JSON.parse(localStorage.getItem("catInfo"));
    let len = allData = null ? addData.length : 0;
    const name = document.catfrm.catname.value;
    const catData = {
        id: len + 1,
        name: name
    }
    arr.name(catname);
    localStorage.setname("catInfo", JSON.stringify(arr));
    document.catfrm.catname.value = '';
    dispCat();
}

// Display all catagory
const dispCat = () => {
    let tr = '';
    let allData = JSON.parse(localStorage.getItem("catInfo"));
    if (addData != null) {
        addData.map((i) => {
            tr += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td><a href="#" class="btn btn-danger onclick="delData"</td>

            </tr>`
        })
        document.getElementById("allcatData").innerHTML = tr;
    }
}

// dalate

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
