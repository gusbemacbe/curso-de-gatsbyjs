import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

// let languages = ["English", "Português"];
// for (let language of languages) { document.write(language);}

const SelectLanguage = (props) => 
{
  const links = props.langs.map(lang =>
    <li selected={lang.selected}>
      <Link to={lang.link} key={lang.langKey}>
        {lang.langKey}
      </Link>
    </li>
  );

  return (

    <li>
      <input id="check01" type="checkbox" name="menu" />
      <label for="check01"><FormattedMessage id="selectLanguage" /></label>
      <ul class="submenu">
        {links}
      </ul>
    </li>
  );
};

SelectLanguage.propTypes = 
{
  langs: PropTypes.array
};

export default SelectLanguage;
