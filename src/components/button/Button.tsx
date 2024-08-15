import "./Button.scss";

interface props {
  isSelected: string;
  styleButton: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  textContent: string;
  buttonType: HTMLButtonElement["type"];
}

const Button: React.FC<props> = (props) => {
  return (
    <button
      className={`${props.isSelected} ${props.styleButton}`}
      onClick={props.handleClick}
      type={props.buttonType}
    >
      {props.textContent}
    </button>
  );
};

export default Button;
