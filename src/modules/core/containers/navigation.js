import { connect } from 'react-redux';
import { changeLang } from '../../../data/store';
import Navigation from '../components/navigation';

import content from '../../../content';

const { navigation: navigationContent, languages } = content;

const mapStateToProps = ({ lang }) => (
  { currentLanguage: lang, navigationContent, languages }
);

const mapDispatchToProps = dispatch => ({
  onLanguageChange: (lang) => {
    dispatch(changeLang(lang));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
//
// export default ({ language }) => (
//   <Navigation language={language} />
// );
