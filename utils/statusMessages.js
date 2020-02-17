
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
	'INVALID_BODY':'Please check your request parameters',
	'THIRD_PARTY_FAILED':'sampleThirdParty Failed',
	'ACTION_FAILED':'xyz has failed. Please try again.',
	'ACTION_SAVED':'xyz has been saved',

}
module.exports = STATUS_MESSAGES



