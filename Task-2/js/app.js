let css = prompt("Enter css display property(block, flex, grid, inline or none)");

switch(css){
    case 'block':
        alert("Set 'display: block;'");
        break;
    case 'flex':
        alert("Set 'display: flex;'");
        break;
    case 'grid':
        alert("Set 'display: grid;'");
        break;
    case 'inline':
        alert("Set 'display: inline;'");
        break;
    case 'none':
        alert("Set 'display: none;'");
        break;
    default:
        alert("Set 'display: inline-block;'");
}