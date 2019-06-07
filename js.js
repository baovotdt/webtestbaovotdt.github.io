// var ImageArray = [{
//         id: 1,
//         anh: "images/image1.jpg",
//         ten: "anh 1",
//         noidung: "pretty girl",
//     },
//     {
//         id: 2,
//         anh: "images/image2.jpg",
//         ten: "anh 2",
//         noidung: "pretty girl",
//     },
//     {
//         id: 3,
//         anh: "images/image3.jpg",
//         ten: "anh 3",
//         noidung: "pretty girl",
//     },
//     {
//         id: 4,
//         anh: "images/image4.jpg",
//         ten: "anh 4",
//         noidung: "pretty girl",
//     },
//     {
//         id: 5,
//         anh: "images/image5.jpg",
//         ten: "anh 5",
//         noidung: "pretty girl",
//     },
//     {
//         id: 6,
//         anh: "images/image6.jpg",
//         ten: "anh 6",
//         noidung: "pretty girl",
//     }
// ];

// for (var i = 0; i < ImageArray.length; i++) {
//     var noidungkhoi = "<div class='kcm' id='kcm-${ImageArray[i].id}'> <img src='${ImageArray[i].id}' class='float-xs-left pr-1'> <b>${ImageArray[i].ten}</b> <span>${ImageArray[i].noidung}</span></div>";
//     console.log(noidungkhoi);

// }


// var x1 = document.getElementsByTagName('h1');
// console.log(x1); 


// var x2 = document.getElementsByTagName('h2');
// console.log(x2[0].innerHTML); 

// x2[0].innerHTML = "<button class='btn btn-info btn-block'> OK</button>";



function Run() {
    function CheckDuplicaseNumber(number, list) {
        for (var value of list) {
            if (value == number) {
                return true;
                break;
            }
        }
        return false;
    }

    function CreatedLine(number, isWithoutNumber, ListWithoutNumbers) {
        var ListNumber1 = [0, 1, 2, 3, 4, 5, 6, 7];
        var ListNumber2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        var ListNumberInLine = [];
        var line = "";
        var i = 0;
        while (i < number) {
            var iNumber1 = Math.floor(Math.random() * 3);
            var iNumber2 = Math.floor(Math.random() * 10);
            var iRandNumber = "";
            var isSkip = false;
            if (iNumber1 == 7) {
                iNumber2 = 0;
            }
            if (iNumber1 == 0 && iNumber2 == 0) {
                continue;
            }
            iRandNumber = iNumber1 + "" + iNumber2;
            if(isWithoutNumber){
            	for (var value of ListWithoutNumbers) {
            		if(iRandNumber == value){
            			isSkip = true; 
						break;
            		}
            	}
            	if (isSkip) {
            		continue;
            	}
            }
            if (!CheckDuplicaseNumber(iRandNumber, ListNumberInLine)) {
                ListNumberInLine[i] = iRandNumber;
                i++;
            }
        }
        return ListNumberInLine;
    }

    function CreatedLottoList(lengthOfline, lines, isDistinguish, isWithoutNumber, ListWithoutNumbers) {
        var ArrayList = [];
        var line;
        for (var i = 0; i < lines;) {
            line = CreatedLine(lengthOfline, isWithoutNumber, ListWithoutNumbers);
            if (CheckDuplicaseLine(ArrayList, line, isDistinguish)) {
                continue;
            } else {
                ArrayList[i] = line;
                i++;
            }
        }
        return ArrayList;
    }

    function CheckDuplicaseLine(line1, line2, isDistinguish) {
        var iCountDuplicaseElement = 0;
        var iCountElement = 0;

        var isDuplicase = false;
        for (var i = 0; i < line1.length; i++) {
            for (var j = 0; j < line1.length; j++) {
                if (line1[i] == line2[j]) {
                    iCountElement++;
                }
            }
            if (line1[i] == line2[i]) {
                iCountDuplicaseElement++;
            }
        }
        if (iCountElement == line2.length && isDistinguish == false) {
            isDuplicase = true;
        }
        if (iCountDuplicaseElement == line2.length) {
            isDuplicase = true;
        }
        return isDuplicase;
    }

    function CheckDuplicaseLineInlist(list, line, isDistinguish) {
        var hasDuplicase = false;
        for (var i = 0; i < list.length; i++) {
            if (CheckDuplicaseLine(list[i], line, isDistinguish)) {
                hasDuplicase = true;
            }
        }
        return hasDuplicase;
    }

    function ShowLotto(list) {
        var lines = "";
        let index = 0;
        for (var value of ListLottoNumber) {
            for (var i = 0; i < value.length; i++) {
                lines += value[i] + ",";
            }
            lines = lines.substring(lines.lastIndexOf(","), 0);
            lines += "\n";
        }
        return lines;
    }


	var iNumLines = Number(document.getElementById('txtInput1').value);
    var iLengthOfLine = Number(document.getElementById('txtInput2').value);
    var isDistinguish = Number(document.getElementById('txtInput3').value);
    var isWithoutNumber = String(document.getElementById('txtInput4').value);
    var ListWithoutNumbers = String(document.getElementById('txtInput5').value);

	if(isDistinguish == 1){
    	isDistinguish = true;
    }
    if(isDistinguish == 0){
    	isDistinguish = false;
	}
    if(isWithoutNumber == "yes"){
    	isWithoutNumber = true;
    }
    if(isWithoutNumber == "no"){
    	isWithoutNumber = false;
	}

 	var TempListWithoutNumbers = "";
 	TempListWithoutNumbers = ListWithoutNumbers.split(",");
 	console.log(TempListWithoutNumbers); 

    var ListLottoNumber = "";
    ListLottoNumber = CreatedLottoList(iLengthOfLine, iNumLines, isDistinguish, isWithoutNumber, TempListWithoutNumbers);
    var result ="";
	result = ShowLotto(ListLottoNumber);
    console.log(ShowLotto(ListLottoNumber));
    document.getElementById("demo").innerText = result;
}

 	