import React from 'react';
import CommentEntry from './commententry';

// most natural to define a commentThread so that it has
// {CommentThread}
//   {Comment}
// {CommentThread}

export default class CommentThread extends React.Component {
  render() {
    return (
      <ul className="media-list">
        {React.Children.map(this.props.children, function(child) {
          return (
            <li className="media">
              {child}
            </li>
          )
        })}
        <li className="media">
          <CommentEntry />
        </li>
      </ul>
    );
  }
}
