package main

import "fmt"

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	str := fmt.Sprintf("%d", x)

	for i := 0; i < len(str)/2; i++ {
		if str[i] != str[len(str)-i-1] {
			return false
		}
	}

	return true
}
