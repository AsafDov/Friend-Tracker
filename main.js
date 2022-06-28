

let elad_user = new user("Elad", "Fru");
let asaf_user = new user("Asaf", "Dov");

asaf_user.add_friend("elad", "dov", "28.06.2022", "yo mamas");
asaf_user.friends[0].add_meeting("28.06.2022","yo mamas");
console.log(asaf_user.friends[0]);
console.log(elad_user.userid);
console.log(asaf_user.userid);