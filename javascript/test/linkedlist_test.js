import * as assert from "assert"

import {LinkedList, Node} from "../lib/linkedlist"

function equals_true(value) {
    return assert.equal(value, true);
}

function equals_false(value) {
    return assert.equal(value, false);
}

describe("Push", function (){

    context("With multiple item", function (){
        specify("Should return true when pushed and new item is in the list", function(){
            //Init
            const linkedList = new LinkedList();

            //Act
            equals_true(linkedList.push("Test"));
            equals_true(linkedList.push("Test2"));

            //Test
            assert.deepStrictEqual(["Test", "Test2"], linkedList.display());
        })
    });

    context("With null item", function() {
        const tests = [
            {arg:null, expected:[]},
            {arg:undefined, expected:[]}
        ];

        tests.forEach(function (test){
            specify(`input ${test.arg} Should return false when pushed and list is empty`, function(){
                //Init
                const linkedList = new LinkedList();
    
                //Act
                equals_false(linkedList.push(test.arg));
    
                //Test
                assert.deepStrictEqual(test.expected, linkedList.display());
            });
        })
    });
});

describe("Pop", function (){

    context("With multiple item", function (){
        specify("Should return the last input when pushed and item is not in the list anymore", function(){
            //Init
            const linkedList = new LinkedList();
            linkedList.push("Test");
            linkedList.push("Test2");

            //Act
            const nodeFinal = new Node("Test2", null);
            assert.deepStrictEqual(linkedList.pop(), nodeFinal);

            //Test
            assert.deepStrictEqual(["Test"], linkedList.display());
        });
    });

    context("With one item", function (){
        specify("Should return the last input when pushed and list is empty", function(){
            //Init
            const linkedList = new LinkedList();
            linkedList.push("Test");

            //Act
            const nodeFinal = new Node("Test", null);
            assert.deepStrictEqual(linkedList.pop(), nodeFinal);

            //Test
            assert.deepStrictEqual([], linkedList.display());
        });
    });

    context("With no item", function (){
        specify("Should not do anything and list is empty", function(){
            //Init
            const linkedList = new LinkedList();
        
            //Act
            assert.deepStrictEqual(linkedList.pop(), null);
        
            //Test
            assert.deepStrictEqual([], linkedList.display());
        });
    });
});

describe("Display", function (){

    context("With multiple item", function (){
        specify("Should display all item in an array of string", function(){
            //Init
            const linkedList = new LinkedList();
            const arrayValue = ["test1", "test2", "test3"];
            arrayValue.forEach((value)=> linkedList.push(value));

            //Act & Test
            assert.deepStrictEqual(arrayValue, linkedList.display());
        });
    });

    context("With list empty", function (){
        specify("Should display nothing", function(){
            //Init
            const linkedList = new LinkedList();

            //Act & Test
            assert.deepStrictEqual([], linkedList.display());
        });
    });
});

describe("Search", function (){

    const tests = [
        {args:"head"},
        {args:"middle"},
        {args:"tail"},
    ];

    tests.forEach(function(test){
        specify(`With item ${test.args} should find the item`, function(){
            //Init
            const linkedList = new LinkedList();
            const arrayValue = ["head", "middle", "tail"];
            arrayValue.forEach((value)=> linkedList.push(value));
        
            //Act & Test
            equals_true(linkedList.search(test.args));
        });
    });

    context(`With item not existing`, function(){
        specify(`Should not find any item`, function(){
            //Init
            const linkedList = new LinkedList();
            const arrayValue = ["head", "middle", "tail"];
            arrayValue.forEach((value)=> linkedList.push(value));
        
            //Act & Test
            equals_false(linkedList.search("NotFound"));
        });
    });

    context(`With empty list`, function(){
        specify(`With empty list`, function(){
            //Init
            const linkedList = new LinkedList();
            
            //Act & Test
            equals_false(linkedList.search("test1"));
        }); 
    }); 
});

describe("Delete", function (){
    const tests = [
        {args:"head", expected:["middle", "tail"]},
        {args:"middle", expected:["head", "tail"]},
        {args:"tail", expected:["head", "middle"]},
    ];

    tests.forEach(function(test){
        context(`With item ${test.args}`, function(){
            specify(`Item should not be in the list anymore`, function(){
                //Init
                const linkedList = new LinkedList();
                const arrayValue = ["head", "middle", "tail"];
                arrayValue.forEach((value)=> linkedList.push(value));

                //Act
                equals_true(linkedList.delete(test.args));

                //Test
                assert.deepStrictEqual(test.expected, linkedList.display())
            });
        });
    });

    context(`With list empty`, function(){
        specify(`Nothing should happen list still empty`, function(){
            //Init
            const linkedList = new LinkedList();

            //Act
            equals_false(linkedList.delete("Item"));

            //Test
            assert.deepStrictEqual([], linkedList.display())
        });
    });

    context(`With item not found`, function(){
        specify(`List should not changed no item is deleted`, function(){
            //Init
            const linkedList = new LinkedList();
            const arrayValue = ["head", "middle", "tail"];
            arrayValue.forEach((value)=> linkedList.push(value));

            //Act
            equals_false(linkedList.delete("NotExisting"));

            //Test
            assert.deepStrictEqual(["head", "middle", "tail"], linkedList.display())
        });
    });
});
