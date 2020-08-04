import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alert extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    const { error, alert, message } = this.props;
    console.log(error, alert);
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.msg) alert.error(`Message: ${error.msg.message.join()}`);
    }
    if (message !== prevProps.message) {
      if (message.leadDeleted) alert.success(message.leadDeleted);
      if (message.addLead) alert.success(message.addLead);
    }
    // this.props.alert.show("it works");
  }
  componentDidMount() {
    console.log(1, this.props);
  }
  render() {
    return <Fragment />;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  error: state.errors;
  message: state.messages;
};
export default connect(mapStateToProps)(withAlert()(Alert));
