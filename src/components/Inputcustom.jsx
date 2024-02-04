export default function Inputcustom({ value, onChange }) {
  return (
    <input
      type='number'
      value={value}
      className='rounded-md shadow-md w-36 p-2'
      onChange={onChange}
    />
  )
}

