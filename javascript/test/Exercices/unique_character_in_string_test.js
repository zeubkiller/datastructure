import * as assert from "assert";

import {search_unique_character_in_string} from "../../lib/Exercices/unique_character_in_string"

function equals_true(value) {
    return assert.equal(value, true);
}

function equals_false(value) {
    return assert.equal(value, false);
}

describe("Search unique character in a string", function() {
    context("With unique character", function() {
        specify("Should return true", function(){
            //Init
            let s = "abezxt";

            //Act and test
            equals_true(search_unique_character_in_string(s));
        });
    });

    context("Without unique character", function() {
        context("Same characters follow each other", function() {
            context("at the head", function() {
                specify("Should return false", function(){
                    //Init
                    const s = "aaezxt";

                    //Act and test
                    equals_false(search_unique_character_in_string(s));
                });
            });
            context("at the middle", function() {
                specify("Should return false", function(){
                    //Init
                    const s = "ezaaxt";

                    //Act and test
                    equals_false(search_unique_character_in_string(s));
                });
            });
            context("at the tail", function() {
                specify("Should return false", function(){
                    //Init
                    const s = "ezxtaa";

                    //Act and test
                    equals_false(search_unique_character_in_string(s));
                });
            });
        });


        context("Same characters don't follow each other", function() {
            context("big space between them", function() {
                specify("Should return false", function(){
                    //Init
                    const s = "aezxta";

                    //Act and test
                    equals_false(search_unique_character_in_string(s));
                });
            });
            context("small space between them", function() {
                specify("Should return false", function(){
                    //Init
                    const s = "ezaxat";

                    //Act and test
                    equals_false(search_unique_character_in_string(s));
                });
            });
        });
    });
});