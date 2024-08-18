import './EmptyContent.scss';

interface Props {
  emptyContentTitle: string;
  emptyContentSpan: string;
}

function EmptyContent({
  emptyContentTitle,
  emptyContentSpan,
} : Props) {
  return (
    <div className="empty-content">
      <img className="emoji" src="/src/assets/thinking.gif" alt="emoji" />
      <h1>
        {emptyContentTitle}
      </h1>
      <span>{emptyContentSpan}</span>
    </div>
  );
}

export default EmptyContent;
