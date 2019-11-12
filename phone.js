const text = `Suasa Suria Auto Sdn Bhd (Suasa Suria) - Seri Kembangan, Selangor Darul Ehsan    [View Details]
No 13 Jalan SR 4/19, Serdang Raya, 43300 Seri Kembangan,  43300 Seri Kembangan,  Selangor Darul Ehsan,  Malaysia.
03-89450801, 03-89450802, , - none specified -`;
const get_number = (text) => {
    const replaced = text.replace(/(\d{3,4}) (\d{3,4})/g, '$1$2').replace(/-/g, '');
    const contacts = replaced.match(/\d{9,11}/g);

    return contacts;
};

console.log(get_number(text));