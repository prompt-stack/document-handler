interface inputProps {
  label?: string;
  type?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  className?: string;
};

const ReusableInput = ({label, type, value, placeholder, disabled, onChange, className} : inputProps) => {

  return (
    <>
    <div className={`flex flex-col mb-4 ${className}`}>
      <label className='block text-gray-700 font-bold mb-2'>
      {label}
      </label>
      <input
      type={type}
      className='border rounded w-full py-2 px-3 mb-2 text-gray-700'
      placeholder={placeholder}
      required
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      />
    </div>
    </>
  )
}

export default ReusableInput
