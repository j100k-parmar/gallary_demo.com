function birds(imgdata) {

    document.querySelector('#img_start').src = imgdata.src;
    document.querySelector('#gallery').classList.add("display");

}

function next() {
    let a = document.images;
    let imgpath = document.querySelector('#img_start');

    for (let index = 1; index < a.length; index++) {

        if (imgpath.src == a[index].src) {

            if (index <= a.length) {
                imgpath.src = a[++index].src;
                break;
            }


        }

    }

}

function previous() {
    let a = document.images;
    let imgpath = document.querySelector('#img_start');

    for (let index = 1; index < a.length; index++) {

        if (imgpath.src === a[index].src) {

            if (index >= 1) {
                imgpath.src = a[--index].src;
                break;

                s
            }


        }

    }

}

function popupwindow() {
    document.querySelector('#popup').classList.remove('display');
}