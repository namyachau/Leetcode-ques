class Solution {
    public int[] getConcatenation(int[] nums) {
        int lengthOfArray=2*(nums.length);
        int[] endResult=new int[lengthOfArray];
        for (int i=0; i<nums.length;i++){
            endResult[i]=nums[i];
        }
        int a=nums.length;
        for(int j=0; j<a;j++){
            endResult[a+j]=nums[j];
        }
        return endResult;
    }
}
