package main

import (
	"math"
)

func mySqrt(x int) int {
	left := 0
	right := x
	result := 0

	for left <= right {
		middle := int(math.Floor(float64(left+right) / 2))
		squared := middle * middle

		if squared > x {
			right = middle - 1
		} else if squared < x {
			left = middle + 1
			result = middle
		} else {
			return middle
		}
	}

	return result
}
