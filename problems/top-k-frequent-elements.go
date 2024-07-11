package main

func topKFrequent(nums []int, k int) []int {
	frequencyMap := make(map[int]int)
	for _, num := range nums {
		frequencyMap[num]++
	}

	result := make([]int, 0, k)

	for len(result) < k {
		maxFrequency := 0
		maxNum := 0

		for num, frequency := range frequencyMap {
			if frequency > maxFrequency {
				maxFrequency = frequency
				maxNum = num
			}
		}

		result = append(result, maxNum)

		delete(frequencyMap, maxNum)
	}

	return result
}
