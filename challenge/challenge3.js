function largestNum (num1,num2,num3)
{
	if (num1 > num2 && num1 > num3)
{
		return num1;
	}
	else if (num2 > num1 && num2 > num3)
	{
		return num2;
}
	else 
{
return num3;
}
  }  
console.log(largestNum(45,2,70));
console.log(largestNum(4555,2,70));
console.log(largestNum(45,255,70));