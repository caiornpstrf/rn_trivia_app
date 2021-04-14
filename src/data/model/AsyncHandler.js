class AsyncHandler {
  /**
   * Parse params to a string and joins to the URL
   * @param {string} url Request URL
   * @param {object} params Request parameters
   * @returns A new URL with params
   */
  static addParamsToUrl = (url, params) => {
    if (!params) {
      return url;
    }
    const paramsString = Object.keys(params)
      .map(k => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
      })
      .join('&');

    return `${url}?${paramsString}`;
  };

  static fetchData = async ({
    url = '',
    requestInfo = {},
    params = {},
    onError = () => {},
  }) => {
    try {
      const response = await fetch(
        AsyncHandler.addParamsToUrl(url, params),
        requestInfo,
      );
      return response.json();
    } catch (error) {
      onError();
    }
  };
}

export default AsyncHandler;
