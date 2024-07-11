package main

func productExceptSelf(nums []int) []int {
	n := len(nums)
	result := make([]int, n)

	for i := 0; i < n; i++ {
		productExceptI := 1
		for j := 0; j < n; j++ {
			if i != j {
				productExceptI *= nums[j]
			}
		}
		result[i] = productExceptI
	}

	return result
}
