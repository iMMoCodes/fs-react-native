import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getByText, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const forks = getAllByTestId('forks');
      const [firstForks, secondForks] = forks;
      const stars = getAllByTestId('stars');
      const [firstStars, secondStars] = stars;
      const ratings = getAllByTestId('ratings');
      const [firstRatings, secondRatings] = ratings;
      const reviews = getAllByTestId('reviews');
      const [firstReviews, secondReviews] = reviews;

      expect(getByText('jaredpalmer/formik')).toBeDefined();
      expect(
        getByText('Build forms in React, without the tears')
      ).toBeDefined();
      expect(getByText('TypeScript')).toBeDefined();
      expect(firstForks.children).toContain('1.6k');
      expect(firstStars.children).toContain('21.9k');
      expect(firstRatings.children).toContain('88');
      expect(firstReviews.children).toContain('3');

      expect(getByText('async-library/react-async')).toBeDefined();
      expect(
        getByText('Flexible promise-based React data loader')
      ).toBeDefined();
      expect(getByText('JavaScript')).toBeDefined();
      expect(secondForks.children).toContain('69');
      expect(secondStars.children).toContain('1.8k');
      expect(secondRatings.children).toContain('72');
      expect(secondReviews.children).toContain('3');
    });
  });
});

// name,
// description,
// language,
// forks count,
// stargazers count,
// rating average,
// and review count
