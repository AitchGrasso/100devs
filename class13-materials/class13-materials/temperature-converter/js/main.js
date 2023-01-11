//Write your pseduo code first! 
document.querySelector('#get').addEventListener('click', convert)

//ask for input
//receive input
//event listener 
//fundction that takes an input and then and then miltiplies the amount, retun result 
function convert() {
    //get value out of the input
    let temp = document.querySelector('#cel').value
    //
    temp = temp *1.8 + 32

    document.querySelector('#bam').innerHTML = temp
}
//query on result
