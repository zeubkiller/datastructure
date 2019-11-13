
def insertion_sort(array):

    #Traverse the array
    sorted_array = []
    for value in array:
        #Insert the value in the sorted array
        is_inserted = False
        for i in range(len(sorted_array)) :
            if value < sorted_array[i]:
                sorted_array.insert(i, value)
                is_inserted = True
                break
        
        #Insert at the end if it was not inserted
        if not is_inserted:
            sorted_array.append(value)
    
    return sorted_array