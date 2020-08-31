const input = document.getElementById('form');

async function NavBar (n){
  let i = 0;
  
  do {
    const item = document.createElement('input')
    input.appendChild(item)
    i++
  } while (i < n);
}

export default NavBar;