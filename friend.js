
class friend {
    
    static id = 1;
    constructor(name, last_name, last_meeting) {
        this.friendid = friend.id;
        friend.id++;
        this.name = name;
        this.last_name = last_name;
        this.meetings = [];
    }

    // Add the meeting to the meetings list 
    //add_meeting(date, time, location);

    // Return the days the passed since the last meeting
    //days_since_last_meeting();

    // Return meeting timeline like this string.
    // for example: meeting1 -> meeting2 -> meeting3.....
    //get_timeline();

}