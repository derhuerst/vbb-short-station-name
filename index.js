'use strict'

const strasse = /(stra(ss|ß)e)[^\w]/i
const bahnhof = /,\s+bahnhof(?=[^\w])/i
const hauptbahnhof = /,\s+hauptbahnhof(?=[^\w])/i
const bhf     = /[^\w]bhf(?=[^\w])/i
const berlin  = /[^\w]\(berlin\)/i

const shorten = (n) => {
	n = ` ${n} ` // regexes work now
	.replace(bhf, '')
	.replace(bahnhof, ', Bhf')
	.replace(hauptbahnhof, ', Hbf')
	.replace(berlin, '')

	// …strasse -> …str.
	let m = strasse.exec(n)
	if (m) n =
		  n.substr(0, m.index) + m[1].substr(0, 3) + '.'
		+ n.substr(m.index + m[1].length)
	return n.trim()
}

module.exports = shorten
