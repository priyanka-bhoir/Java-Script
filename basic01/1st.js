let func = function(x,y)
	let ans = 0
	while (x>0)
	{
		if (x & 1)
			ans=ans+1
		x=x>>1
		y=y<<1
	return ans
	}
func(4,8)
func(4,ans)