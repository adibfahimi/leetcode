package main

func topKFrequent(nums []int, k int) []int {
	frequencyMap := make(map[int]int)

	for _, i := range nums {
		frequencyMap[i]++
	}

	var result []int
	for i := 0; i < k; i++ {
		maxFrequency := 0
		frequentElement := 0

		for num, frequency := range frequencyMap {
			if frequency > maxFrequency {
				maxFrequency = frequency
				frequentElement = num
			}
		}
		result = append(result, frequentElement)
		delete(frequencyMap, frequentElement)
	}

	return result
}
