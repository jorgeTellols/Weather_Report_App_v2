import "./Button.scss";

interface Props {
  highLightedButton: boolean;
  styleButton: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  textContent: string;
  buttonType: HTMLButtonElement["type"];
}

const Button: React.FC<Props> = ({ highLightedButton, styleButton, handleClick, textContent, buttonType }) => {
  return (
    <button
      className={`${highLightedButton ? 'highlighted-button' : ''} ${styleButton}`}
      onClick={handleClick}
      type={buttonType}
    >
      {textContent}
    </button>
  );
};

export default Button;
