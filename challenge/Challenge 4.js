function time_convert(num)
{
	var hours = math.floor(num /60);
	var minutes = num % 60;
	return hours + ":" + minutes;
}

console.log(time_convert(98));