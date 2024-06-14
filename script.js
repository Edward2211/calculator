(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Add event listener to all buttons
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            console.log("Button clicked: " + value); // Debugging line
            screen.value += value;
        });
    });

    // Add event listener to equal button
    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = 'please enter';
        } else {
            try {
                // Remove any non-numeric characters at the ends
                let expression = screen.value.replace(/[^0-9.]$/, '');
                console.log('Evaluating:', expression); // Debugging line
                let answer = Function('"use strict"; return (' + expression + ')')();
                console.log('Result:', answer); // Debugging line
                screen.value = answer;
            } catch (err) {
                console.error('Error evaluating expression:', err); // Debugging line
                screen.value = 'Error';
            }
        }
    });

    // Add event listener to clear button
    clear.addEventListener('click', function(e) {
        screen.value = '';
    });

})();
