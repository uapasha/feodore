import { connect } from 'react-redux'
import { changeLang } from '../../../data/store'
import Navigation from '../components/navigation';

const mapStateToProps = ({lang}) => {
  return { lang }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLanguageChange: (lang) => {
      dispatch(changeLang(lang))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
//
// export default ({ language }) => (
//   <Navigation language={language} />
// );
