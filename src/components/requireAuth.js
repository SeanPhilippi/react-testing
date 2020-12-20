import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export default Component => {
  class ComponentWithAuth extends PureComponent {
    returnHome = () => {
      if (this.props.auth) {
        this.props.history.push('/');
      }
    }

    componentDidMount() {
      this.returnHome();
    }

    componentDidUpdate() {
      this.returnHome();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  })

  return connect(mapStateToProps)(ComponentWithAuth);
}

// const Component = props => {
//   const ComponentWithAuth = Component => {
//     const returnHome = () => {
//       if (this.props.auth) {
//         this.props.history.push('/');
//       }
//     };
//     // componentDidMount
//     useEffect(() => {
//       returnHome();
//     }, []);

//     // componentDidUpdate
//     useEffect(() => {
//       returnHome();
//     }, [this.props.auth]);

//     return <Component {...props} />
//   }
// }

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(Component);