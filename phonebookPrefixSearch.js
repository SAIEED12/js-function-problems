/* Function name: searchByPrefix(phonebook, prefix)
Statement:
 Return an array of names that start with the given prefix.
Test case 1
Input:
phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
prefix = "ra";

Output:
["rahim", "rafi"]

Test case 2
Input:
phonebook = { mina: "013", mim: "014", rina: "015" };
prefix = "mi";

Output:
["mina", "mim"]
 */





// let phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
// let prefix = "ra";

phonebook = { mina: "013", mim: "014", rina: "015" };
prefix = "mi";

function searchByPrefix(phonebook, prefix){
    let result = [];
    for(const i in phonebook){
        if(i.startsWith(prefix)){
            result.push(i);
        }
    }
    return result;
}

console.log(searchByPrefix(phonebook, prefix));