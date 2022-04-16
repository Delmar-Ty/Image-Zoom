let img = document.querySelector('.img');
img.addEventListener('mousemove', (e) => {
    // console.log(e);
    // console.log(img.offsetLeft);
    let x = e.x;
    let y = e.y;
    let elX = img.offsetLeft;
    let elY = img.offsetTop;
    console.log(x, y);
    // console.log(elX, elY);
    let imgPosX = x - elX;
    let imgPosY = y - elY;
    console.log(imgPosX, imgPosY);
    document.querySelector('.magnify').style.backgroundPosition = `${imgPosX - 225}px ${imgPosY - 225}px`;
});