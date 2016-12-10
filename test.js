'use strict'

const test = require('tape')
const s = require('./index.js')



test('removes "Bhf"', (t) => {
	t.plan(1)
	t.strictEqual(s('S+U Foobar Bhf'), 'S+U Foobar')
})

test('shortens ", Bahnhof"', (t) => {
	t.plan(1)
	t.strictEqual(s('Rehfelde, Bahnhof'), 'Rehfelde, Bhf')
})

test('shortens ", Hauptbahnhof"', (t) => {
	t.plan(1)
	t.strictEqual(s('Schwerin, Hauptbahnhof'), 'Schwerin, Hbf')
})

test('removes "(Berlin)"', (t) => {
	t.plan(1)
	t.strictEqual(s('S+U Foo Bar (Berlin)'), 'S+U Foo Bar')
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
