const handleSwipe = (el, leftCb, rightCb) => {
  const threshold = 100;
  // maximum time allowed to travel that distance
  const allowedTime = 300;
  let swipedir;
  let startX;
  let distX;
  let elapsedTime;
  let startTime;

  el.addEventListener('touchstart', (e) => {
    const touchobj = e.changedTouches[0];
    swipedir = 'none';
    startX = touchobj.pageX;
    // record time when finger first makes contact with surface
    startTime = new Date().getTime();
    // e.preventDefault();
  }, true);

  el.addEventListener('touchmove', (e) => {
    // prevent scrolling when inside DIV
    // e.preventDefault()
  }, true);

  el.addEventListener('touchend', (e) => {
    const touchobj = e.changedTouches[0];
    // get horizontal dist traveled by finger while in contact with surface
    distX = touchobj.pageX - startX;

    // get time elapsed
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold) {
        // if dist traveled is negative, it indicates left swipe
        swipedir = (distX < 0) ? 'left' : 'right';
      }
    }
    if (swipedir === 'left') {
      rightCb();
    } else if (swipedir === 'right') {
      leftCb()
    }
    // e.preventDefault();
  }, true);

}

export default handleSwipe;