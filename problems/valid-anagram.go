package main

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	charCountMap := make(map[byte]int)

	for i := range s {
		charCountMap[s[i]]++
		charCountMap[t[i]]--
	}

	for _, count := range charCountMap {
		if count != 0 {
			return false
		}
	}

	return true
}
