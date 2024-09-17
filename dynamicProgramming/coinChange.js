const coins = [1, 2, 5, 8, 10]
const a = (sum) => {
    const res = []
    const dp = Array.from({length: sum + 1}).fill(Infinity)
    
    dp[0] = 0
      
    for(let num = 1; num <= sum; num++) {
        for(let coin of coins) {
            if(coin <= num) {
                if(dp[num - coin] + 1 < dp[num]) res[num] = coin
                dp[num] = Math.min(dp[num], dp[num - coin] + 1) 
            }
        }
    }

    let k = sum
    const ans = []

    while(k) {
        ans.push(res[k])
        k = k - res[k]
    }

  return ans
}

a(13)
