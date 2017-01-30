var letters = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
length = 8;
var randomstring = Math.random().toString(36).slice(-8);

for (var i = 0; i < length; i++) {
    var randomletter = Math.floor(Math.random()*letters.length);
    randomstring += letters[randomletter];
}

for (var i = 0; i < length; i++) {
    var randomnumber = Math.floor(Math.random()*numbers.length);
    randomstring += numbers[randomnumber];
}

alert(randomstring);
