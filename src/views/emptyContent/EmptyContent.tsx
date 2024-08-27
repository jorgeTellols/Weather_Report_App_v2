import './empty_content.scss';

// Interface to define props
interface Props {
  emptyContentTitle: string;
  emptyContentSpan: string;
}

// Destructuring and hook initialization
function EmptyContent({
  emptyContentTitle,
  emptyContentSpan,
} : Props) {
  // Main return
  return (
    <div className="empty-content">
      <img className="emoji" src="../public/assets/thinking.gif" alt="emoji" />
      <h1>
        {emptyContentTitle}
      </h1>
      <span>{emptyContentSpan}</span>
    </div>
  );
}

export default EmptyContent;
