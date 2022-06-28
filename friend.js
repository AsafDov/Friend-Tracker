
class friend {
    
    static id = 1;
    constructor(name, last, date, location) {
        this.friendid = friend.id;
        friend.id++;
        this.name = name;
        this.last_name = last;
        this.meetings = [];
        this.add_meeting(date ,location);
    }

    // Add the meeting to the meetings list 
    add_meeting(date, location){
        let new_meeting = { 'date' : date  ,'location' : location};
        this.meetings.push(new_meeting);
        console.log("New meetings was added");
    }
    // Return the days the passed since the last meeting
    //days_since_last_meeting();

    // Return meeting timeline like this string.
    // for example: meeting1 -> meeting2 -> meeting3.....
    //get_timeline();

    /*
    var today  = new Date();
    console.log(today.toLocaleDateString("he-IL"));
    */
}