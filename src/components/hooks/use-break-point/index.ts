import { useState, useEffect } from 'react'
import { breakPointSizes, BreakPoint } from '../../utils/breakpoints'

// These are basically javascript versions of css media queries.
// They let us attach listeners to them so we can respond whenever
// one of the queries change (window resizing).
// https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
let mdQuery: MediaQueryList
let lgQuery: MediaQueryList
let xlQuery: MediaQueryList

if (typeof window !== 'undefined') {
	mdQuery = window.matchMedia(`(min-width: ${breakPointSizes.desktop}px)`)
	lgQuery = window.matchMedia(`(min-width: ${breakPointSizes.tablet}px)`)
	xlQuery = window.matchMedia(`(min-width: ${breakPointSizes.laptop}px)`)

	// Register handler with all of the media queries.
	mdQuery.addListener(queryChangeHandler)
	lgQuery.addListener(queryChangeHandler)
	xlQuery.addListener(queryChangeHandler)
}

// Store break point value as a global singleton for easy and efficient access.
let breakPoint: BreakPoint = 'mobile'

function updateBreakPoint() {
	if (!xlQuery || !lgQuery || !mdQuery) return
	if (xlQuery.matches) breakPoint = 'desktop'
	else if (lgQuery.matches) breakPoint = 'laptop'
	else if (mdQuery.matches) breakPoint = 'tablet'
	else breakPoint = 'mobile'
}

updateBreakPoint()

// Store all active setStates in a Set so that we can call them when
// breakPoint changes, and efficiently add and remove setters.
const stateSetters = new Set<(a: BreakPoint) => void>()

// Handler for break point changes on window resizing.
// Updates breakPoint value and calls registered setters with new value.
function queryChangeHandler() {
	updateBreakPoint()
	stateSetters.forEach((setter) => setter(breakPoint))
}

/**
 * Returns a string with the browser's current break point
 * value ('mobile', 'tablet', 'laptop', or 'desktop') and triggers a rerender when it changes.
 **/
export const useBreakPoint = (): BreakPoint => {
	const setBreakPoint = useState(breakPoint)[1]
	useEffect(() => {
		stateSetters.add(setBreakPoint)
		return () => {
			stateSetters.delete(setBreakPoint)
		}
	}, [setBreakPoint])

	return breakPoint
}
