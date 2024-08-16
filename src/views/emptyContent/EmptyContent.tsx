import "./EmptyContent.scss";

interface Props {
  emptyContentTitle: string;
  emptyContentSpan: string;
}

const EmptyContent: React.FC<Props> = (props) => {
  return (
    <div className="empty-content">
      <img className="emoji" src="/src/assets/thinking.gif" />
      <h1>{props.emptyContentTitle} </h1>
      <span>{props.emptyContentSpan}</span>
    </div>
  );
};

export default EmptyContent;
