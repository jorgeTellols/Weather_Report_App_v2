import './Button.scss';

interface Props {
  highlightedButton?: boolean;
  styleButton?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  textContent: string;
}

function Button({
  highlightedButton,
  styleButton,
  handleClick,
  textContent,
}: Props) {
  return (
    <button
      className={`${
        highlightedButton ? 'highlighted-button' : ''
      } ${styleButton}`}
      onClick={handleClick}
      type="button"
    >
      {textContent}
    </button>
  );
}

// Default props in case they are unused
Button.defaultProps = {
  highlightedButton: false,
  styleButton: '',
};

export default Button;
