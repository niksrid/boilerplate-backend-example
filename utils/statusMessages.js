
/**
 * @constant STATUS_MESSAGES -> List of status messages
 *
 * MESSAGE GUIDELINES
 * ---------------
 * Use this constant to reduce redundancy in code and add messages to API responses.
 * This comes in handy if the same message is being displayed on the front-end side, especially in the case of failures / invalid actions being performed.
 *
 *
 *? For Example, INVALID_OTP could be "Incorrect OTP entered. Please try again"
 */

const STATUS_MESSAGES = {
  'SUCCESS': 'Success',
  'INVALID_BODY': 'Please check your request parameters',
  'THIRD_PARTY_FAILED': 'sampleThirdParty Failed',
  'USER_DOES_NOT_EXIST': 'You are not authorized to access JARVIS',
  'NOT_LOGGED_IN': 'You are not authorized to access JARVIS',
  'ACTION_SAVED': 'xyz has been saved',

};
module.exports = STATUS_MESSAGES;


