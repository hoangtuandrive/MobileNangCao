document.body.onload = addElement;

function addElement() {
    const a = document.createElement('input');
    a.setAttribute('placeholder', 'input a'); 
    document.body.appendChild(a);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));

    const b = document.createElement('input');
    b.setAttribute('placeholder', 'input b');
    document.body.appendChild(b);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));

    const button = document.createElement('button');
    button.innerHTML = 'Sum'
    document.body.appendChild(button);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));

    const result = document.createElement('input');
    result.setAttribute('placheholder','result');
    document.body.appendChild(result);

    button.onclick = function() {
        const avalue = parseInt(a.value);
        const bvalue = parseInt(b.value);
        console.log(avalue,bvalue,avalue+bvalue);
        result.setAttribute('value', avalue + bvalue);
    }
}