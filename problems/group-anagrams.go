package main

import "sort"

func sortString(s string) string {
	runes := []rune(s)
	sort.Slice(runes, func(i, j int) bool {
		return runes[i] < runes[j]
	})
	return string(runes)
}

func groupAnagrams(strs []string) [][]string {
	anagramGroups := make(map[string][]string)

	for _, str := range strs {
		sortedStr := sortString(str)
		anagramGroups[sortedStr] = append(anagramGroups[sortedStr], str)
	}

	var result [][]string
	for _, group := range anagramGroups {
		result = append(result, group)
	}

	return result
}
