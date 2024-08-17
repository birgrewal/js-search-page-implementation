var titles = document.getElementsByTagName('h5')
const input = document.getElementById('search-input')

input.addEventListener('keyup', () => {
    filter = input.value.toUpperCase()

    for (i in titles) {
        if (titles[i].innerText != undefined) {
            txtValue = titles[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                titles[i].closest('.card').style.display = "";
            } else {
                titles[i].closest('.card').style.display = "none";
            }
        }

    }
})

// for(i in titles){
//     txtValue = titles[i].innerText;
//     console.log(txtValue)
// }
