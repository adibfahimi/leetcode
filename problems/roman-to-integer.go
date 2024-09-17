package main

func romanToInt(s string) int {
	romanMap := map[string]int{
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}

	result := 0

	for i := 0; i < len(s); i++ {
		current := string(s[i])
		if i+1 < len(s) && romanMap[current] < romanMap[string(s[i+1])] {
			result -= romanMap[current]
		} else {
			result += romanMap[current]
		}
	}

	return result
}
