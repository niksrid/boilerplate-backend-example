/**
 * @constant STATUS_CODES -> List of status codes
 * 
 * CODE GUIDELINES
 * ---------------
 * Success - 200
 * Internal Errors - 50x
 * App Specific Responses - 70x
 * 
 * 
 *? For Example, INVALID_OTP could be 701
 */

const STATUS_CODES = {
	'SUCCESS':200,
	'INTERNAL_FAILURE':500,
}

module.exports = STATUS_CODES



