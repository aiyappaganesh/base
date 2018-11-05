const moment = require('moment')

function getDateForDB(dateStr=null) {
	const dateObj = dateStr ? moment(dateStr) : moment()
	return dateObj.format('YYYY-MM-DD HH:mm:ss')
}

function getFormattedServiceOrderId(orderId) {
	const idxIntStr = String(parseInt(orderId))
  	return idxIntStr.length > 5 ? idxIntStr : orderId.slice(-5)
}

function getNotificationUrl(orderId, host) {
	return `http://${host}/load_notification?reqId=${orderId}`
}

function getPasswordResetUrl(email, host) {
	return `http://${host}/load_password_reset?email=${email}`
}

function isAuthorized(req, functionsList) {
  return req.user.functions.split(';').some(x => functionsList.split(';').includes(x))
}

function isAuthenticated(req, res, next) {
  if(!req.isAuthenticated()) res.sendStatus(403)
  else next()
}

function isPermitted(functionsList) {
  return isPermitted[functionsList] || (isPermitted[functionsList] = function(req, res, next) {
    if (!isAuthorized(req, functionsList)) res.sendStatus(403)
    else next()
  })
}

module.exports = {
	getDateForDB,
	getFormattedServiceOrderId,
	getNotificationUrl,
	getPasswordResetUrl,
	isAuthenticated,
	isPermitted
}