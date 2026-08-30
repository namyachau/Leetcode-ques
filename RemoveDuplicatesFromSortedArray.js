class Solution {
    public int removeDuplicates(int[] nums) {
        int k=0;
            for(int j = 0; j<nums.length; j++){  
                if(nums[k] != nums[j]){
                    k++;
                    nums[k]=nums[j];
                }
            }
        return k+1;//this code only works because input array is sorted 
    }
}
