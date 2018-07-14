import {fname,lname} from './moduleB.js';
console.log(fname+" "+lname);//Jame Rodigez

//or: Case add thêm biến.
import {fname2,lname2} from './moduleB.js';
console.log(`${fname2}`);//Jame
console.log(`${lname2}`);//Rodigez

// or: alias
import {fname as f,lname as l} from './moduleB.js';
console.log(`${f} ${l}`);// Jame Rodigez

// Tại module A này, Không thể chỉnh sửa giá trị biến:
// f = "Cop Huynh";

// Case chỉnh sửa được: Chỉnh sửa được thuộc tính của đối tượng.
import {fname3 as f3,lname3 as l3,obj} from './moduleB.js';
console.log(f3+" "+l3);
obj.name = "Changed name";
console.log(obj.name);//Changed name



