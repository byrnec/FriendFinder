var files = ["ashers_first_birthday.mov",
"robert_asleep_at_the_computer.jpg",
"ricky_fights_a_polar_bear.mp4",
"alex_road_rage.avi",
"sasha_skydiving.jpeg",
"zia_getting_his_black_belt.png",
"dan_winning_underground_street_race.mov",
"its_hard_to_come_up_with_file_names.gif",
"seriously_this_is_taking_too_long.mpg",
"i_wonder_how_many_of_these_i_should_have.png",
"probably_a_few_more.avi",
"nutmeg_is_clawing_my_sneakers_again.mp4",
"cat_i_will_destroy_you.gif",
"i_wish_we_had_a_dog.jpeg",
"stop_looking_at_me_like_that_nutmeg.mpeg",
"aww_i_cant_hate_you.png",
"omg_my_sneakers.avi",
"cat_you_are_the_worst.mp4"
];

//assign empty arrays to variables
var images = [];
var videos = []

// look at each item in the files array
//for loop
for (var i=0; i < files.length; i++) {

// split at the period
    var arr = files[i].split(".");
    var extension = arr.pop();
// push value to image array
if (extension === 'jpg' || extension === 'gif' || extension === 'jpeg' || extension === 'png') {
    images.push(files[i]);
} else {
videos.push(files[i]);
}
}

console.log(images)
console.log(videos)

