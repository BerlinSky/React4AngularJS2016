var ForumHeader = React.createClass({

	render: function() {
		console.log(this.props.allAnswers);

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
            React Forum
					</a>
				</div>
			</nav>
		);
	}

});