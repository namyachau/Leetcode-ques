class Solution {
    public int numberOfSteps(int num) {
        int n = num;
        int sum=0;
        while(num!=0){
            
           num=num/2;
            sum++;
            if((num%2) != 0){
                sum++;
                num--;
            }
            
        } 
        if((n%2)!=0){
            return (sum+1);
        }
        return sum;

    }
}
