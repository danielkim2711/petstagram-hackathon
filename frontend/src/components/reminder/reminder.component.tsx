type Props = {
  reminderText: string;
};

const Reminder = ({ reminderText }: Props) => {
  return (
    <div className='form-control'>
      <label className='label cursor-pointer'>
        <span className='label-text'>{reminderText}</span>
        <input type='checkbox' readOnly className='checkbox' />
      </label>
    </div>
  );
};

export default Reminder;
