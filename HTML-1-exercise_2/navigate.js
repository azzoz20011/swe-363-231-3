let count = 0
document.addEventListener('keydown', function(event) {
    const tabKeyCode = 9
    const enterKeyCode = 13
    const shiftKeyCode = 16
    count = count + 1
    let message = ''
    //counter to make sure it appear one time.
    if(count === 1){
        //to show the massages
        if (event.keyCode === tabKeyCode) {
            message = 'To navigate the website using only keyboard do the following: 1- press "tab" to move through the buttons. 2- press "shift+tab"  to move through the buttons on the opposite direction. 3-press enter to make left-click effect.'
        } else if (event.keyCode === enterKeyCode) {
            message = 'To navigate the website using only keyboard do the following: 1- press "tab" to move through the buttons. 2- press "shift+tab"  to move through the buttons on the opposite direction. 3-press enter to make left-click effect.'
        } else if (event.keyCode === shiftKeyCode) {
            message = 'To navigate the website using only keyboard do the following: 1- press "tab" to move through the buttons. 2- press "shift+tab"  to move through the buttons on the opposite direction. 3-press enter to make left-click effect.'
        }

        if (message !== '') {
            alert(message)
        }
    }
});


