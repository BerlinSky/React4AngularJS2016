var ForumAnswer = React.createClass({

	propTypes: {
		answer: React.PropTypes.object.isRequired,
		onMarkCorrect: React.PropTypes.func.isRequired
	},

	_markCorrect: function() {
		this.props.onMarkCorrect(this.props.id);
	},

	render: function() {
		var answer = this.props.answer;

		var markAnswer;

		if (!answer.correct)  {
			markAnswer = <div className="pull-right">
				<small><a href="#" onClick={ this._markCorrect  }>Mark as correct </a></small>
			</div>
		}

		var className = "panel-body";

		if (answer.correct) { 
			className += " bg-success";
		}

		return (
			<div className="panel panel-default">
				<div className={ className }>
					{ answer.body }
					{ markAnswer }
				</div>
			</div>
		)
	}

});