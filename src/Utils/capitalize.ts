
function capitalize (str: string) {
    let str2 = "";
    const arr = str.split(" ");


    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    str2 = arr.join(" ");
    
    return str2;
}
export default capitalize;

export {
    capitalize
};