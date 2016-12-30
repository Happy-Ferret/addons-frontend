import { mapStateToProps } from 'amo/containers/CategoryList';
import { API_THEME_TYPE } from 'core/constants';


describe('<CategoryList />', () => {
  it('maps state to props', () => {
    const props = mapStateToProps({
      api: { clientApp: 'android', lang: 'pt' },
      categories: {
        categories: {
          android: {
            [API_THEME_TYPE]: {
              nature: {
                name: 'Nature',
                slug: 'nature',
              },
            },
          },
          firefox: {},
        },
        error: false,
        loading: true,
      },
    }, {
      params: { pluralAddonType: 'themes' },
    });

    assert.deepEqual(props, {
      addonType: API_THEME_TYPE,
      categories: {
        nature: {
          name: 'Nature',
          slug: 'nature',
        },
      },
      error: false,
      loading: true,
    });
  });
});
