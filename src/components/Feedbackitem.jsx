import PropType from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  return (
    // <Card reverse={true}>
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propType = {
  item: PropType.object.isRequired,
};

export default FeedbackItem;
