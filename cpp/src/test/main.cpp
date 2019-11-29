#include <iostream>

#include "algorithm.h"

void test_1() {
    //Config
    int array[10];

    for(int i = 0; i < 10 ; ++i)
        array[i] = i;

    //Act
    const bool returned_value = Algorithm::linear_search(array, 10, 8);

    //Test
    if(returned_value != true)
        std::cout << "Test is not passing";
    else
        std::cout << "Test is passing";
}

int main(int argc, char** argv){
    
    test_1();
    
    return 0;
}