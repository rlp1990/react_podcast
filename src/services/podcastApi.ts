const baseUrl = process.env.REACT_APP_API_BASE_URL;

/**
 * Asynchronously fetches podcasts from an API.
 *
 * @template T The type of data being fetched.
 * @return {Promise<T>} A promise that resolves to the fetched data.
 */
const PodcastApi = {
  /**
   * Fetches podcasts from the specified base url.
   *
   * @template T the type of data to return
   * @return {Promise<T>} a Promise that resolves with the fetched data
   */
  async fetchPodcasts<T>(): Promise<T> {
    const response = await fetch(`${baseUrl}/podcasts`);
    const data = await response.json();
    return data;
  },

  /**
   * Asynchronously fetches details of a podcast using its ID.
   *
   * @param {string} podcastId - The unique identifier of the podcast.
   * @return {Promise<T>} Returns a promise that resolves with the fetched podcast details.
   */
  async fetchPodcastDetails<T>(podcastId: string): Promise<T> {
    const response = await fetch(`${baseUrl}/podcasts/${podcastId}`);
    const data = await response.json();
    return data;
  },
};

export default PodcastApi;
