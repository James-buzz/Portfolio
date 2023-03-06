/**
 * This function determines if the browser is running on a mobile device.
 * It checks the user agent string for the "Mobi" string.
 * @returns A boolean value of true if the browser is running on a mobile device, and false otherwise.
 */
function isMobileBrowser(): boolean {
  const userAgent = navigator.userAgent;
  return /Mobi/i.test(userAgent);
}

export default isMobileBrowser;
