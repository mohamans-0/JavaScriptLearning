let massMark = 78  , heightMark = 1.69 , massJohn = 92 , heightJohn = 1.95, BMIMark , BMIJohn , markHigherBMI ;


BMIMark = massMark / ( heightMark * heightMark ) ;
BMIJohn = massJohn / (massJohn    * massJohn) ;

console.log(BMIMark ,BMIJohn );

markHigherBMI  = BMIMark > BMIJohn ;
console.log(markHigherBMI);
