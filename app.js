//Modal items
const modal = document.getElementById('email-modal');
const contactBtn = document.querySelector('.contact-btn');
const aboutMeBtn = document.querySelector('.aboutMe');
const closeBtn = document.querySelector('.close-container');

//Click events
contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

aboutMeBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})


// //Form Validation
// const form = document.getElementById('form');
// const username = document.getElementById('name');
// const email = document.getElementById('email');
// const errorText = document.getElementsByClassName('errorText');

// //Show error message
// function showError(input, message) {
//     const formValidation = input.parentElement;
//     formValidation.className = 'form-validation error';

//     const errorMessage = formValidation.querySelector('p');
//     errorMessage.innerText = message;
//     errorText.style.display = 'block';
// }

// //Show Valid Message
// function showValid(input) {
//     const formValidation = input.parentElement;
//     formValidation.className = 'form-validation valid';
// }

// //Check Required fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input) {
//         if (input.value.trim() === '')
//         {
//             showError(input, `${getFieldName(input)} is required`);
//         } else {
//             showValid(input);
//         }
//     })
// }

// //Get Field Name
// function getFieldName(input) {
//     return input.name.charAt(0).toUpperCase() + input.name.slice(1);
// }

// //Event Listeners
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkRequired([username, email]);
// })

//Select city
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

//Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})