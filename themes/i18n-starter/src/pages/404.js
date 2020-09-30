import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';
import {withI18next} from '@wapps/gatsby-plugin-i18next';
import Layout from '../components/layout';

const NotFoundPage = ({ t }) => (
  <Layout>
    <h1>{t('NOT FOUND')}</h1>
    <p>{t('You just hit a route that doesn\'t exist... the sadness.')}</p>
  </Layout>
);

export default withI18next()(withTranslation()(NotFoundPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;