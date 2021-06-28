function convertToWord(bool){
    if(bool){
        return "Yes"
    }
    else{
        return "No"
    }
}

function convertToWord2(bool){
    return(bool ? "Yes" : "No")
}


let convertToWord3 = bool => bool? "Yes" : "No";