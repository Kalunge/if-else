var hour =11;
if(hour>=10 && hour<12)
    console.log('good morning');
else if (hour>12 && hour<16)
    console.log('good afternoon');
else if (hour>16 && hour<18)
    console.log('good evening');
else
    console.log('goodnight');

    //swicth and case
    switch (hour){
        case hour>=10 && hour<12:
            donsole.log('good morning');
            break;
    case hour<=12 && hour<16:
        console.log('good afternoon');
        break;
    default:
        console.log('goodnight');
        }

        //loops
        console.log('goodmorning');
        console.log('goodmorning');
        console.log('goodmorning');
        console.log('goodmorning');
        console.log('goodmorning');
for (var i=10; i>=1; i--){
  if (i % 2 === 0) console.log('i am even', i);
}