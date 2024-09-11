package main

func twoSum(nums []int, target int) []int {
	complementMap := make(map[int]int)

	for i, num := range nums {
		diff := target - num

		if idx, exists := complementMap[num]; exists {
			return []int{idx, i}
		}

		complementMap[diff] = i
	}

	return []int{}
}
