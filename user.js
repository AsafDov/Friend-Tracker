// Whenever a new user is created, he gets a csv file which holds all
// of his friends in the following format
// id,name,last

class user {

    static id = 1;

    constructor(name, last) {
        this.name = name;
        this.last = last;
        this.userid = user.id;
        this.friends = [];
        user.id++;
 
        console.log("New user - " + this.name + " " + this.last);
    }

    add_friend(name, last, last) {
        let new_friend = new friend(name, last, meeting);
        this.friends.appened(new_friend);
    }
    elapesd_days(friend) {
       return friend.days_since_last_meeting();
    }

    last_meeting(friend) {
        return friend.get_last_meeting();
    }

    meet_friend(friend, date, time, location) {
        friend.add_meeting(date, time, location);
    }

}
