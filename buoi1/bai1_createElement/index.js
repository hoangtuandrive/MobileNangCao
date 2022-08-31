document.body.onload = addElement;

function addElement() {
    const a = document.createElement('input');
    a.setAttribute('placeholder', 'input a');
    document.body.appendChild(a);

    const b = document.createElement('input');
    b.setAttribute('placeholder', 'input b');
    document.body.appendChild(b);

    const button = document.createElement('button');
    button.innerHTML = 'Sum'
    document.body.appendChild(button);

    button.onclick = function() {
        const a = parseInt(a.value);
        const b = parseInt(b.value);
    }
}