def quick_sort(nums):
    if not len(nums):
        return nums

    pivot = nums[0]
    lt_part = []
    eq_part = [pivot]
    gt_part = []
    for n in nums[1:]:
        if n < pivot:
            lt_part.append(n)
        elif n == pivot:
            eq_part.append(n)
        else:
            gt_part.append(n)

    lt_part = quick_sort(lt_part)
    gt_part = quick_sort(gt_part)
    return lt_part + eq_part + gt_part

print(quick_sort([]))
print(quick_sort([20, 3, 14, 1, 5]))
print(quick_sort([83, 4, 24, 2]))
print(quick_sort([4, 42, 16, 23, 15, 8]))
print(quick_sort([87, 11, 23, 18, 18, 23, 11, 56, 87, 56]))