import Reminder from '../reminder/reminder.component';

const Reminders = () => {
  return (
    <div>
      <h1 className='text-center text-2xl tracking-widest mb-4'>Reminders</h1>
      <Reminder reminderText='Vaccination Appointment in 1 day' />
      <Reminder reminderText='Meetup at park' />
      <Reminder reminderText='Dog competition in 1 week' />
      <Reminder reminderText='Go picnic with Guinea pig' />
    </div>
  );
};

export default Reminders;
