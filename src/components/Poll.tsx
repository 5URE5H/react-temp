import React = require('react');

export const Poll = ({ user, data, setData }) => {
  const getUpdatedOptions = (options, prevVotedOption, prevVoted, id) => {
    // remove from options
    options.filter()
  };

  const updateVote = (id) => {
    setData((prev) => {
      let prevVoted = false;
      let preVotedOption;
      for (let option of prev.options) {
        for (let vote of option.votes) {
          if (vote.id === user.id) {
            prevVoted = true;
            preVotedOption = option;
          }
        }
      }

      const updatedState = {
        ...prev,
        options: getUpdatedOptions(prev.options, preVotedOption, prevVoted, id),
      };
    });
  };

  return (
    <div>
      <div>{data.question}</div>
      <div>
        {data.options.map((option) => {
          return (
            <div key={option.id} onClick={() => updateVote(option.id)}>
              <div>{option.label}</div>
              <div>{option.votes.length}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
