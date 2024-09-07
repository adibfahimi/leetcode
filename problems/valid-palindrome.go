package main

import (
	"strings"
	"unicode"
)

func isAlphanumeric(c byte) bool {
	return unicode.IsLetter(rune(c)) || unicode.IsNumber(rune(c))
}

func isPalindrome(s string) bool {
	s = strings.ToLower(s)
	left, right := 0, len(s)-1

	for left < right {
		if !isAlphanumeric(s[left]) {
			left++
			continue
		}

		if !isAlphanumeric(s[right]) {
			right--
			continue
		}

		if s[left] != s[right] {
			return false
		}

		left++
		right--
	}

	return true
}
