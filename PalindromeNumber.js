class Solution {
    public boolean isPalindrome(int x) {
        int result=0;
        int original=x;
        String answer;
        while(x!=0){
            
            int a= x%10;
            x=x/10;
            result=(result*10)+a;
            
        }
        System.out.println(result);
        if(result<0){
            return false;
        }
        else if (result==original){
            return true;
        }
        else{
            return false;
        }
    }
}
