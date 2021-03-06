var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/tgwood06/tgwood06.github.oi/master/assignments/Final/json.json/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}


function showData(jsonObj) {
  
    var town = jsonObj['towns'];
    for (var i = 0; i < town.length; i++) {
        if (town[i].name == "San Diego" || town[i].name == "San Antonio" || town[i].name == "Salt Lake" || town[i].name == "Cedar City") {
            var myArticle = document.createElement('article');
            myArticle.className = "townData";
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            myH2.textContent = town[i].name;
            myPara1.textContent = 'Closure Schedule: ' + town[i].ClosureSchedule;
        


            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            section.appendChild(myArticle);
        }
    }
}