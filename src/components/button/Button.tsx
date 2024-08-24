/* eslint-disable react/require-default-props */

// Interface to define props
interface Props {
  highlightedButton?: boolean;
  styleButton?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  textContent: string;
}

// Destructuring and hook initialization
function Button({
  highlightedButton = false,
  styleButton = '',
  handleClick,
  textContent,
}: Props) {
  // Main return
  return (
    <button
      className={`${highlightedButton ? 'highlighted-button' : ''} ${styleButton}`}
      onClick={handleClick}
      type="button"
    >
      <span>{textContent}</span>
    </button>
  );
}

export default Button;
