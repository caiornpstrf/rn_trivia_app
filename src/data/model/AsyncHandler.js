/**
 * @summary Handles request calls
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:49:09
 * Last modified  : 2021-04-16 03:49:27
 */

class AsyncHandler {
  /**
   * Parse params to a string and joins to the URL
   * @param {string} url Request URL
   * @param {object} params Request parameters
   * @returns A new URL with params
   */
  static parseParams = params => {
    if (!params) {
      return undefined;
    }
    const body = Object.keys(params)
      .map(k => {
        if (params[k]) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
        }
      })
      .join('&');

    return body;
  };

  static fetchData = async ({
    url = '',
    requestInfo = {},
    params = {},
    onError = () => {},
  }) => {
    try {
      const body = AsyncHandler.parseParams(params);
      const response = await fetch(`${url}?${body}`, {...requestInfo});
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default AsyncHandler;
