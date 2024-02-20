import "./ReminderList.scss";
import Reminder from "./Reminder/Reminder";

export default function ReminderList(reminderArr, addReminder, darkmode) {
  
  const reminderItems = reminderArr.map((reminder, key) =>
    <Reminder reminder={reminder} key={key} />
  );
  
  return (
    <div>
      {reminderItems}
    </div>
  );
}