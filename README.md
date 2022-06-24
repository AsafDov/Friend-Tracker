# Friend-Tracker
When is the last time you saw your friends? Use the friend tracker to track the dates and statistics for your next argument with your partner

Features:
1. User credentials.
2. Add a friend [ Name Last meeting date, Where].
3. Update [Meeting date, where].
4. Counter for the days since last.


--------------
###**Objects:**


1. user -
    Fields:
      1. name
      2. last_name
      3. friends<list of friends>

    Functions:
      1. add_friend(friend)
      2. last_meeting(friend)
      3. meet_friend(friend, meeting)
      4. elapesd_days(friend)

2. friend - 
    Fields:
      1. name
      2. last_name
      3. timeline(<list of meetings>)
      4. id

    Functions:
      1. add_meeting(meeting)
      2. remove_meeting(id)
      3. get_elapsed_days()
      4. get_last_meeting()
  
3. meeting - 
    Fields:
      1. location
      2. time
      3. date
      4. id
      5. notes <list of strings>

    Functions:
      1. add_note(note)
  
  
  
