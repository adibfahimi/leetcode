package main

func containsDuplicate(nums []int) bool {
	numFrequency := make(map[int]int)

	for _, num := range nums {
		a, ok := numFrequency[num]
		if ok {
			return true
		}

		numFrequency[num] = a + 1
	}

	return false
}
