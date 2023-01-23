var a={"name":"Deepika","age":24,"gender":"Female"};
var b={"age":24,"gender":"Female","name":"Deepika"}

console.log("Comparison of below two JSON without order using JSON.stringfy");
console.log(a);
console.log(b);
let res=(JSON.stringify(a)===JSON.stringify(b));
res===true?res="EQUAL":res="NOT EQUAL"
console.log("Comparison of above two JSON without order is: "+res);

console.log("Comparison of below two JSON without order using deep compare method which works for primitive data types");
console.log(a);
console.log(b);
if(Object.keys(a).length==Object.keys(b).length)
{
    var count=0;
    for(i=0;i<Object.keys(a).length;i++)
    {
        for(j=0;j<Object.keys(a).length;j++)
        {
           if(Object.keys(a)[i]==Object.keys(b)[j] && Object.values(a)[i]==Object.values(b)[j] )
           {
               count++;
           }
        }
    }
    console.log(count===Object.keys(a).length?"Comparison of above two JSON without order is EQUAL":"Comparison of above two JSON without order is NOT EQUAL");
}
else
{
    console.log("Not Equal");
}