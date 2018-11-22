const menus = ['One', 'Two', 'Three', 'Four', 'One', 'Four']

const uniqueMenus = menus.filter((ele, pos, menus) => menus.indexOf(ele) == pos)
console.log(uniqueMenus)