import './Input.scss';

interface Props {
  labelClass?: string;
  labelContent: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClass?: string;
  inputType: string;
}

function Input({
  labelClass,
  labelContent,
  handleChange,
  inputClass,
  inputType,
}: Props) {
  return (
    <div className="input-style">
      <label htmlFor={labelContent} className={labelClass}>
        {labelContent}
        <input id={labelContent} onChange={handleChange} className={inputClass} type={inputType} />
      </label>
    </div>
  );
}

Input.defaultProps = {
  labelClass: '',
  inputClass: '',
};

export default Input;
