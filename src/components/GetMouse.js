function GetMouse() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const h1 = document.createElement('h1');

    btn.innerHTML = 'Click me!'
    btn.onclick = (e)=> h1.innerHTML = `X: ${e.offsetX} Y: ${e.offsetY}`

    element.appendChild(btn);
    element.appendChild(h1);

    return element;
  }

export default GetMouse