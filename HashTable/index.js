console.log("HashTable");

//Hash Table uses a fixed sized array to store key,value pir

class HashTable1 {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i} : ${this.table[i]}`);
      }
    }
  }
}

const table1 = new HashTable1(50);

table1.set("name", "Bruce");
table1.set("age", 25);

table1.display();

console.log(table1.get("name"));

table1.set("mane", "clerk"); // collission with name

table1.remove("age");
table1.display();

// structure should be
// [ hashkeyIndex:bucket[ [key,value],[key,value] ] , hashIndex:[[key,value]] ](fixed size)
console.log("");
console.log("new corrected hashTbale");
console.log("");
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    //instead of directly  insert the value we will insert an array of key,value pair as a bucket
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameKeyType = bucket.find((item) => item[0] === key);
      if (sameKeyType) {
        sameKeyType[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      let sameKeyType = bucket.find((item) => item[0] === key);
      if (sameKeyType) {
        return sameKeyType[1];
      }
    } else {
      return undefined;
    }
  }

  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      console.log(sameKeyItem);
      if (sameKeyItem) {
        console.log(bucket.indexOf(sameKeyItem));
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i} : ${this.table[i]}`);
      }
    }
  }
}

const table = new HashTable(10);

table.set("name", "Bruce");
table.set("age", 25);
table.display();
console.log(table.get("name"));
table.set("mane", "Clark");
table.set("name", "Diana");
table.display();
console.log(table.get("mane"));
table.remove("name");
table.display();
