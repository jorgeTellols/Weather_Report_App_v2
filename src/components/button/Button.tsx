/* eslint-disable react/require-default-props */
import './Button.scss';

interface Props {
  highlightedButton?: string;
  styleButton?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  textContent: string;
}

function Button({
  highlightedButton = '',
  styleButton = '',
  handleClick,
  textContent,
}: Props) {
  return (
    <button
      className={`${highlightedButton} ${styleButton}`}
      onClick={handleClick}
      type="button"
    >
      <span>{textContent}</span>
    </button>
  );
}

export default Button;
