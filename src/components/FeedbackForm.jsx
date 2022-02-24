import { useState } from 'react';

import Card from './shared/Card';
import Button from './Button';

function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How you Rate our services ? </h2>
        {/* todo */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit">send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;