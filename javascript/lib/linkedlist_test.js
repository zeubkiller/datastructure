import {assert_true, assert_false, assert_equals, assert_not_equals} from "./assert"
import {LinkedList, Node} from "./linkedlist"


function test_push(){
    console.log(`***** Push - basic`);
    //Init
    const linkedList = new LinkedList();

    //Act
    assert_true(linkedList.push("Test"));
    assert_true(linkedList.push("Test2"));

    //Test
    assert_equals(["Test", "Test2"], linkedList.display());
}

function test_push_null(){
    console.log(`***** Push - push null`);
    //Init
    const linkedList = new LinkedList();

    //Act
    assert_false(linkedList.push(null));

    //Test
    assert_equals([], linkedList.display());
}

function test_push_undefined(){
    console.log(`***** Push - push null`);
    //Init
    const linkedList = new LinkedList();

    //Act
    assert_false(linkedList.push(undefined));

    //Test
    assert_equals([], linkedList.display());
}

function test_pop(){
    console.log(`***** Pop - Basic`);
    //Init
    const linkedList = new LinkedList();
    linkedList.push("Test");
    linkedList.push("Test2");

    //Act
    assert_true(linkedList.pop());

    //Test
    assert_equals(["Test"], linkedList.display());
}

function test_pop_oneElement(){
    console.log(`***** Pop - OneElement`);
    //Init
    const linkedList = new LinkedList();
    linkedList.push("Test");

    //Act
    assert_true(linkedList.pop());

    //Test
    assert_equals([], linkedList.display());
}

function test_pop_emptyList(){
    console.log(`***** Pop - Empty List`);
    //Init
    const linkedList = new LinkedList();

    //Act
    assert_false(linkedList.pop());

    //Test
    assert_equals([], linkedList.display());
}


function test_display(){
    console.log(`***** Display - Basic`);
    //Init
    const linkedList = new LinkedList();
    const arrayValue = ["test1", "test2", "test3"];
    arrayValue.forEach((value)=> linkedList.push(value));

    //Act & Test
    assert_equals(arrayValue, linkedList.display());
}

function test_display_listEmpty(){
    console.log(`***** Display - List empty`);
    //Init
    const linkedList = new LinkedList();

    //Act & Test
    assert_equals([], linkedList.display());
}

function test_search(){
    console.log(`***** Search - basic`);
    //Init
    const linkedList = new LinkedList();
    const arrayValue = ["test1", "test2", "test3"];
    arrayValue.forEach((value)=> linkedList.push(value));

    //Act & Test
    assert_true(linkedList.search("test1"));
}

function test_search_notFound(){
    console.log(`***** Search - NotFound`);
    //Init
    const linkedList = new LinkedList();
    const arrayValue = ["test1", "test2", "test3"];
    arrayValue.forEach((value)=> linkedList.push(value));

    //Act & Test
    assert_false(linkedList.search("NotFound"));
}

function test_search_listEmpty(){
    console.log(`***** Search - List empty`);
    //Init
    const linkedList = new LinkedList();
    
    //Act & Test
    assert_false(linkedList.search("test1"));
}


function test_delete_head(){
    console.log(`***** Delete - delete head`);
    //Init
    const linkedList = new LinkedList();
    const arrayValue = ["head", "middle", "tail"];
    arrayValue.forEach((value)=> linkedList.push(value));

    //Act
    assert_true(linkedList.delete("head"));

    //Test
    assert_equals(["middle", "tail"], linkedList.display())
}

function test_delete_middle(){
    console.log(`***** Delete - delete middle`);
    //Init
    const linkedList = new LinkedList();
    const arrayValue = ["head", "middle", "tail"];
    arrayValue.forEach((value)=> linkedList.push(value));

    //Act
    assert_true(linkedList.delete("middle"));

    //Test
    assert_equals(["head", "tail"], linkedList.display())
}

function test_delete_tail(){
    console.log(`***** Delete - delete tail`);
    //Init
    const linkedList = new LinkedList();
    const arrayValue = ["head", "middle", "tail"];
    arrayValue.forEach((value)=> linkedList.push(value));

    //Act
    assert_true(linkedList.delete("tail"));

    //Test
    assert_equals(["head", "middle"], linkedList.display())
}

function test_delete_listEmpty(){
    console.log(`***** Delete - list empty`);
    //Init
    const linkedList = new LinkedList();
 
    //Act
    assert_false(linkedList.delete("tail"));

    //Test
    assert_equals([], linkedList.display())
}

function test_delete_notFound(){
    console.log(`***** Delete - notFound`);
    //Init
    const linkedList = new LinkedList();
    const arrayValue = ["head", "middle", "tail"];
    arrayValue.forEach((value)=> linkedList.push(value));
 
    //Act
    assert_false(linkedList.delete("NotFound"));

    //Test
    assert_equals(["head", "middle", "tail"], linkedList.display())
}

export function run_test() {
    test_push();
    test_push_null();
    test_push_undefined();

    test_pop();
    test_pop_emptyList();

    test_display();
    test_display_listEmpty();

    test_search();
    test_search_notFound();
    test_search_listEmpty();

    test_delete_head();
    test_delete_middle();
    test_delete_tail();
    test_delete_listEmpty();
    test_delete_notFound();
}