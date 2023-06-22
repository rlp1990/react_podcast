import podcastApi from '../services/podcastApi';

describe('PodcastApi', () => {
  let originalFetch: any;

  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  /**
   * Check API works calling fetchPodcasts method returning the mocked list of podcasts
   */
  it('fetchPodcasts should return the list of podcasts', async () => {
    const mockPodcasts = [{ id: 1, title: 'Podcast 1' }, { id: 2, title: 'Podcast 2' }];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPodcasts),
    });

    const result = await podcastApi.fetchPodcasts();

    expect(result).toEqual(mockPodcasts);
  });

  /**
   * Check API works calling fetchPodcastDetails method returning the mocked podcast details
   */
  it('fetchPodcastDetails should return the podcast details', async () => {
    const mockPodcastDetails = { id: 1, title: 'Podcast 1', description: 'Description' };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPodcastDetails),
    });

    const result = await podcastApi.fetchPodcastDetails('1');

    expect(result).toEqual(mockPodcastDetails);
  });
});
