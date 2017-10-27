'use strict'

const test = require('tape')
const s = require('./index.js')



test('removes "Bhf", but not ", Bhf"', (t) => {
	t.plan(2)
	t.strictEqual(s('S+U Foobar Bhf'), 'S+U Foobar')
	t.strictEqual(s('Foo, Bhf'), 'Foo, Bhf')
})

test('shortens ", Bahnhof"', (t) => {
	t.plan(1)
	t.strictEqual(s('Rehfelde, Bahnhof'), 'Rehfelde, Bhf')
})

test('shortens ", Hauptbahnhof"', (t) => {
	t.plan(1)
	t.strictEqual(s('Schwerin, Hauptbahnhof'), 'Schwerin, Hbf')
})

test('shortens "U-Bhf." & "S-Bhf."', (t) => {
	t.plan(2)
	t.strictEqual(s('U-Bhf. Mehringdamm'), 'U Mehringdamm')
	t.strictEqual(s('S-Bhf. Bellevue'), 'S Bellevue')
})

test('shortens "U-Bf." & "S-Bf."', (t) => {
	t.plan(2)
	t.strictEqual(s('U-Bf. Mehringdamm'), 'U Mehringdamm')
	t.strictEqual(s('S-Bf. Bellevue'), 'S Bellevue')
})

test('removes "(Berlin)"', (t) => {
	t.plan(1)
	t.strictEqual(s('S+U Foo Bar (Berlin)'), 'S+U Foo Bar')
})

test('removes "(Bln)"', (t) => {
	t.plan(1)
	t.strictEqual(s('U Oskar-Helene-Heim (Bln) [Foo]'), 'U Oskar-Helene-Heim [Foo]')
})

test('shortens "…strasse" to "…str."', (t) => {
	t.plan(8)
	t.strictEqual(s('Strasse Foo'),   'Str. Foo')
	t.strictEqual(s('S Foostrasse'),  'S Foostr.')
	t.strictEqual(s('S Foo Strasse'), 'S Foo Str.')
	t.strictEqual(s('S Foo-Strasse'), 'S Foo-Str.')
	t.strictEqual(s('Straße Foo'),    'Str. Foo')
	t.strictEqual(s('S Foostraße'),   'S Foostr.')
	t.strictEqual(s('S Foo Straße'),  'S Foo Str.')
	t.strictEqual(s('S Foo-Straße'),  'S Foo-Str.')
})

test('keeps everything else', (t) => {
	t.plan(1)
	t.strictEqual(s('S+U Foo Bar'), 'S+U Foo Bar')
})
