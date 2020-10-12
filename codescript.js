var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "No man is an island, Entire of itself, "
words[2] = "Whose woods these are I think I know."
words[3] = "But still, like dust, I’ll rise."
words[4] = "Shall I compare thee to a summer’s day?"
words[5] = "There will come soft rain and the smell of the ground,"
words[6] = "if I look at the crystal moon, at the red branch "
words[7] = "O Captain! my Captain! our fearful trip is done; "
words[8] = "Some say the world will end in fire, Some say in ice."
words[9] = "Two roads diverged in a yellow wood,"
words[10] = "if dreams die Life is a broken-winged bird That cannot fly."
words[11] = "I think that I shall never see A poem lovely as a tree."
words[12] = "The lone and level sands stretch far away."
words[13] = "The time will come when, with elation you will greet "
words[14] = "If you can — dream and not make dreams your master;"
words[15] = "Remember me when I am gone away,"
words[16] = "I must go seek some dewdrops here,"
words[17] = "Do not stand at my grave and weep I am not there."
words[18] = "Maybe January light will consume My heart with its cruel"
words[19] = "Your hair is winter fire, January embers, My heart burns there too."
words[20] = "Is all that we see or seem But a dream within a dream?"
words[21] = "My soul can reach, when feeling out of sight"
words[22] = "I am the master of my fate: I am the captain of my soul."
words[23] = "Gonna throw the sun Way across the land - Cause I’m tired,"
words[24] = "When suddenly I am old, and start to wear purple"
words[25] = "What a noisy place to belong is the Ning Nang Ning Nang Nong!!"
words[26] = "Do not go gentle into that good night, Old age should burn and rave at close of day;"
words[27] = "‘Hope’ is the thing with feathers — That perches in the soul —"
words[28] = "In the morning glad I see My foe outstretched beneath the tree."
words[29] = "I wandered lonely as a cloud That floats on high o’er vales and hills,"
words[30] = "I’se still climbin’, And life for me ain’t been no crystal stair."
words[31] = "And I shall forever be ascending I choose the mountain"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}