class Solution {
    public int romanToInt(String s) {
        //high ke baad low aaya toh subtract hoga in reverse string
        int total=0;
        int prev=0;
        int a=s.length();
        for(int i=a-1; i>(-1); i--){
            int value=0;
            if(s.charAt(i)=='V'){
                value=5;
            }
            else if(s.charAt(i)=='I'){
                value=1;
            }
            else if(s.charAt(i)=='X'){
                value=10;
            }
            else if(s.charAt(i)=='L'){
                value=50;
            }
            else if(s.charAt(i)=='C'){
                value=100;
            }
            else if(s.charAt(i)=='D'){
                value=500;
            }
            else if(s.charAt(i)=='M'){
                value=1000;
            }
            else{
                continue;
            }


            if(value<prev){
                total=total-value;
            }
            else {total=total+value;}
            //System.out.println(total);

            prev=value;
        }
        return total;
    }
}
